import { useState } from "react"
import Nav from "../components/Nav"
import Form from "../components/Form"
import inputs from "../data/inputs"

function Light() {
    const [activateDoppler, setActivateDoppler] = useState<boolean>(false)

    const handleClick = () => {
        setActivateDoppler(!activateDoppler)
    }

    return (
        <div>
            <Nav sound={false} state={activateDoppler} handleClick={handleClick}/>
            <Form inputs={inputs} handleChange={() => ("")} handleClick={() => ("")} response="0" cal="0"/>
        </div>
    )
}

export default Light