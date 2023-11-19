import { SetStateAction, useState } from "react"
import Form from "../components/Form"
import Nav from "../components/Nav"
import inputs from "../data/inputs"

import { calcEmittedFrecuency, calcObservedFrecuency, calcReceiverSpeed, calcEmitterSpeed } from "../utils"

function Light() {
    const [cal, setCal] = useState("")
    const [activateDoppler, setActivateDoppler] = useState<boolean>(false)
    const [response, setResponse] = useState("")
    const [cInputs, setcInputs] = useState({
        f0: 0,
        f1: 0,
        v0: 0,
        v1: 0
    })

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
        if(cal === "") {
            alert("Selecciona una opción")
        }

        const { f0, f1, v0, v1 } = cInputs

        if (f0 <= 0 || f1 <= 0) {
            alert("Los valores deben ser mayores a 0")
            return
        }

        switch (cal) {
            case "f0":
                setResponse(calcObservedFrecuency(f1, v0, v1).toString())
                break;
            case "f1":
                setResponse(calcEmittedFrecuency(f0, v0, v1).toString())
                break;
            case "v0":
                setResponse(calcEmitterSpeed(f0, f1, v1).toString())
                break;
            case "v1":
                setResponse(calcReceiverSpeed(f0, f1, v0).toString())
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <Nav sound={false} state={activateDoppler} handleClick={activateDopplerFun} />
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
            <Form inputs={inputs} handleChange={inputHandleChange} handleClick={handleClick} response={response} cal={cal} />
        </div>
    )
}

export default Light