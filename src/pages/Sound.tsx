import { SetStateAction, useEffect, useState } from "react"
import { useFrequency } from "react-frequency";
import Form from "../components/Form"
import Nav from "../components/Nav"
import inputs from "../data/inputs"

import { calcEmittedFrecuency, calcObservedFrecuency, calReceiverSpeed, calcEmitterSpeed } from "../utils"

function Sound() {
    const [cal, setCal] = useState("")
    const [activateDoppler, setActivateDoppler] = useState<boolean>(false)
    const [response, setResponse] = useState("")
    const [frequency, setFrequency] = useState(440)
    const [cInputs, setcInputs] = useState({
        f0: 440,
        f1: 350,
        v0: 72.2,
        v1: 0
    })

    const { start, stop } = useFrequency({
        hz: frequency,
        type: "center",
        gain: 100 / 100,
        oscillator: "sine",
    })

    let interval: number | undefined;

    useEffect(() => {
        if (activateDoppler) {
            start()
            intervalFrecuency()
        } else {
            stop()
            clearInterval(interval)          
        }
    }, [activateDoppler])

    const intervalFrecuency = () => {
        // increases or decreases the observed frequency every half second until it reaches the emitted frequency
        interval = setInterval(() => {
            console.log("hola")

            if (frequency === cInputs.f1) {
                clearInterval(interval)
                return
            }

            if (frequency > cInputs.f1) {
                setFrequency(frequency - 10)
            } else {
                setFrequency(frequency + 10)
            }
        }, 500)
    }

    const activateDopplerFun = () => {
        setActivateDoppler(!activateDoppler)
    }

    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
        setResponse("")
        setCal(e.target.value)
    }

    const inputHandleChange = (e: any) => {
        setResponse("")
        setcInputs({
            ...cInputs,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if (cal === "") {
            alert("Selecciona una opción")
        }

        const { f0, f1, v0, v1 } = cInputs

        if (f0 <= 0 || f1 <= 0) {
            alert("Los valores deben ser mayores a 0")
            return
        }

        switch (cal) {
            case "f0":
                let response = calcObservedFrecuency(f1, v0, v1)
                setResponse(response.toString())
                setcInputs({
                    ...cInputs,
                    f0: response
                })
                break;
            case "f1":
                response = calcEmittedFrecuency(f0, v0, v1)
                setResponse(response.toString())
                setcInputs({
                    ...cInputs,
                    f1: response
                })
                break;
            case "v0":
                response = calcEmitterSpeed(f0, f1, v1)
                setResponse(response.toString())
                setcInputs({
                    ...cInputs,
                    v0: response
                })
                break;
            case "v1":
                response = calReceiverSpeed(f0, f1, v0)
                setResponse(response.toString())
                setcInputs({
                    ...cInputs,
                    v1: response
                })
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <Nav sound={true} state={activateDoppler} handleClick={activateDopplerFun} />
            <div className="center-container">
                <div className="center-container_center">
                    <div className="container-select">
                        <select name="cal" id="calc" onChange={handleChange} className="select">
                            <option value="">¿Qué quieres calcular?</option>
                            {
                                inputs.map((input) => {
                                    return input.content.map((content, i) => <option value={content.id} key={i}>{content.placeholder}</option>)
                                }
                                )
                            }
                        </select>
                    </div>
                    <Form inputs={inputs} handleChange={inputHandleChange} handleClick={handleClick} response={response} cal={cal} />
                </div>
            </div>
        </div>
    )
}

export default Sound