import { scientificNotation } from '../utils'
import Equation from './Equation'
import { inputsType } from '../data/inputs'
import '../styles/form.css'

type propFormType = {
    inputs: inputsType[],
    handleChange: (e: any) => void,
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    response: string,
    cal: string
}

const Form = ({ inputs, handleChange, handleClick, response, cal }: propFormType) => {

    response = Number(response).toExponential(2)

    return (
        <form className='form'>
            <div className='form_container'>
                {inputs.map((input, i) => {
                    return <div className="container-input" key={i}>
                        <h6 className="container-input_title">
                            {input.title}
                        </h6>
                        <div className="container-input_content">
                            {input.content.map((content) => {
                                return <div className="container-input_input" key={content.id}>
                                    <div className="input-group">
                                        <label className="input-group__label" htmlFor={content.id}>
                                            {content.placeholder}
                                        </label>
                                        {
                                            content.id === cal ? <span className="container-input_span">Resultado: <Equation equationText={scientificNotation(response, input.unit || "")} /> </span>
                                                : <input type='number' onChange={handleChange} name={content.id} id={content.id} className="input-group__input" defaultValue={content.defaultValue} />
                                        }
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                })}
            </div>
            <button className="form-button" onClick={handleClick} type='button'>
                Calcular
            </button>
        </form>
    )
}

export default Form