import { SetStateAction, useEffect, useState } from "react"
import Form from "../components/Form"
import Nav from "../components/Nav"
import { inputsLight } from "../data/inputs"
import colors, { colorType } from "../data/colors"

import { scientificNotation, calcEmittedFrecuency, calcObservedFrecuency, calcReceiverSpeed, calcEmitterSpeed, convertHzToWavelenght, convertWavelenghtToHz } from "../utils"
import Equation from "../components/Equation"

function Light() {
    const [cal, setCal] = useState("")
    const [activateDoppler, setActivateDoppler] = useState<boolean>(false)
    const [response, setResponse] = useState("")
    const [wavelenght, setWavelenght] = useState(0.2)
    const [colorHex, setColorHex] = useState<colorType>(colors[0])
    const [cInputs, setcInputs] = useState({
        l0: 0.2,
        l1: 800,
        v0: 70,
        v1: 0
    })

    const activateDopplerFun = () => {
        setActivateDoppler(!activateDoppler)
    }

    useEffect(() => {
        console.log(wavelenght)
    }, [wavelenght])

    useEffect(() => {
        if (activateDoppler) {
            setWavelenght(cInputs.l0)
            const id = setInterval(() => (setWavelenght(handleWavelenght)), 50)

            return () => {
                clearInterval(id)
                setActivateDoppler(false)
                setWavelenght(cInputs.l1)
                changeColor(cInputs.l1)
            }
        }
    }, [activateDoppler])

    const handleWavelenght = (prevWavelenght: number) => {
        if (prevWavelenght > Math.floor(cInputs.l1)) {
            changeColor( prevWavelenght - 1 )
            return prevWavelenght - 1
        } else if (prevWavelenght < Math.floor(cInputs.l1)) {
            changeColor( prevWavelenght + 1 )
            return prevWavelenght + 1
        }
        else {
            setActivateDoppler(false)
            return cInputs.l0
        }
    }

    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
        setResponse("")
        setCal(e.target.value)
    }

    const inputHandleChange = (e: any) => {
        setResponse("")
        if (e.target.name === 'l0') {
            changeColor(Number(e.target.value))
            setWavelenght(Number(e.target.value))
        }
        setcInputs({
            ...cInputs,
            [e.target.name]: Number(e.target.value)
        })
    }

    const changeColor = (waveLenght: number) => {
        const color = colors.find(color => color.range[0] <= waveLenght && color.range[1] >= waveLenght)
        if (color) {
            setColorHex(color)
        }
    }

    const handleClick = () => {
        if (cal === "") {
            alert("Selecciona la opción que quieres calcular.")
            return
        }

        const { l0, l1, v0, v1 } = cInputs

        if (l0 <= 0 || l1 <= 0) {
            alert("Las frecuencias deben ser mayores a 0")
            return
        }

        const f0 = convertWavelenghtToHz(l0)
        const f1 = convertWavelenghtToHz(l1)

        switch (cal) {
            case "l0":
                changeColor(l0)
                setWavelenght(convertHzToWavelenght(calcObservedFrecuency(f1, v0, v1)))
                setResponse(convertHzToWavelenght(calcObservedFrecuency(f1, v0, v1)).toString())
                setcInputs({
                    ...cInputs,
                    l0: convertHzToWavelenght(calcObservedFrecuency(f1, v0, v1))
                })
                break;
            case "l1":
                setResponse(convertHzToWavelenght(calcEmittedFrecuency(f0, v0, v1)).toString())
                setcInputs({
                    ...cInputs,
                    l1: convertHzToWavelenght(calcEmittedFrecuency(f0, v0, v1))
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
            <Nav sound={false} state={activateDoppler} handleClick={activateDopplerFun} />
            <div className="center-container">
                <div className="center-container_center">
                    <div className="container-select">

                        {
                            <div className="frequency-color" style={colorHex?.hex ? { backgroundColor: colorHex.hex } : { backgroundColor: "#fff" }}>
                                <div className="frequency-color_text">
                                    <span>{colorHex.name}</span> 
                                    <Equation equationText={`${scientificNotation(wavelenght, "nm")}`}/>
                                </div>
                            </div>
                        }

                        <select name="cal" id="calc" onChange={handleChange} className="select">
                            <option value="">¿Qué quieres calcular?</option>
                            {
                                inputsLight.map((input) => {
                                    return input.content.map((content, i) => <option value={content.id} key={i}>{content.placeholder}</option>)
                                }
                                )
                            }
                        </select>
                    </div>
                    <Form inputs={inputsLight} handleChange={inputHandleChange} handleClick={handleClick} response={response} cal={cal} />
                </div>
            </div>
        </div>
    )
}

export default Light