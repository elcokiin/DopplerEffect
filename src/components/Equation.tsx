import Latex from 'react-latex'

const Equation = ({equationText}: { equationText: string }) => {
    equationText = `${equationText}`
    return (
        <div className="italic">
            <Latex>
                {equationText}
            </Latex>
        </div>
    );
}

export default Equation