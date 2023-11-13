import { useState } from "react"
import Form from "../components/Form"
import Nav from "../components/Nav"
import inputs from "../data/inputs"

function Sound() {
    const [activateDoppler, setActivateDoppler] = useState<boolean>(false)

    const handleClick = () => {
        setActivateDoppler(!activateDoppler)
    }

    return (
        <div>
            <Nav sound={true} state={activateDoppler} handleClick={handleClick}/>
            <Form inputs={inputs} handleChange={() => ("")} handleClick={() => ("")} response="0" cal="0"/>
        </div>
    )
}

export default Sound