import Latex from 'react-latex'

const Equation = ({equationText}: { equationText: string }) => {
    const equation = `$$${equationText}$$`

    return (
        <div className="inline">
            <Latex>
                {equation}
            </Latex>
        </div>
    );
}

export default Equation