import { SetStateAction, useEffect, useState } from "react"
import { useFrequency } from "react-frequency";
import Form from "../components/Form"
import Nav from "../components/Nav"
import { inputsSound } from "../data/inputs"

import { calcEmittedFrecuency, calcObservedFrecuency, calcReceiverSpeed, calcEmitterSpeed } from "../utils"

function Sound() {
    const [cal, setCal] = useState("")
    const [activateDoppler, setActivateDoppler] = useState<boolean>(false)
    const [response, setResponse] = useState("")
    const [frequency, setFrequency] = useState(440)
    const [cInputs, setcInputs] = useState({
        f0: 440,
        f1: 350,
        v0: 70.159090,
        v1: 0
    })

    const { start, stop } = useFrequency({
        hz: frequency,
        type: "center",
        gain: 100 / 100,
        oscillator: "sawtooth",
    })

    useEffect(() => {
        console.log(frequency)
    }, [frequency])

    useEffect(() => {
        if (activateDoppler) {
            start()
            const t = 100 / cInputs.v0
            const id = setInterval(() => setFrequency(handleFrequency), t)

            return () => {
                clearInterval(id)
                setActivateDoppler(false)
                setFrequency(cInputs.f0)
            }
        } else {
            stop()
        }
    }, [activateDoppler])

    const handleFrequency = (prevFrequency: number) => {
        if (prevFrequency > Math.floor(cInputs.f1)) {
            return prevFrequency - 1
        } else if (prevFrequency < Math.floor(cInputs.f1)) {
            return prevFrequency + 1
        }
        else {
            setActivateDoppler(false)
            return cInputs.f0
        }
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
        if (e.target.name === "f0") setFrequency(Number(e.target.value))
        setcInputs({
            ...cInputs,
            [e.target.name]: Number(e.target.value)
        })
    }

    const handleClick = () => {
        if (cal === "") {
            alert("Selecciona la opción que quieres calcular.")
            return
        }

        const { f0, f1, v0, v1 } = cInputs

        if (f0 <= 0 || f1 <= 0) {
            alert("Las frecuencias deben ser mayores a 0")
            return
        }

        switch (cal) {
            case "f0":
                setResponse(calcObservedFrecuency(f1, v0, v1).toString())
                setFrequency(calcObservedFrecuency(f1, v0, v1))
                setcInputs({
                    ...cInputs,
                    f0: calcObservedFrecuency(f1, v0, v1)
                })
                break;
            case "f1":
                setResponse(calcEmittedFrecuency(f0, v0, v1).toString())
                setcInputs({
                    ...cInputs,
                    f1: calcEmittedFrecuency(f0, v0, v1)
                })
                break;
            case "v0":
                setResponse(calcEmitterSpeed(f0, f1, v1).toString())
                setcInputs({
                    ...cInputs,
                    v0: calcEmitterSpeed(f0, f1, v1)
                })
                break;
            case "v1":
                setResponse(calcReceiverSpeed(f0, f1, v0).toString())
                setcInputs({
                    ...cInputs,
                    v1: calcReceiverSpeed(f0, f1, v0)
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
                                inputsSound.map((input) => {
                                    return input.content.map((content, i) => <option value={content.id} key={i}>{content.placeholder}</option>)
                                }
                                )
                            }
                        </select>
                    </div>
                    <Form inputs={inputsSound} handleChange={inputHandleChange} handleClick={handleClick} response={response} cal={cal} />
                </div>
            </div>
        </div>
    )
}

export default Sound