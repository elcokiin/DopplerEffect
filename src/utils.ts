
// method scientific notation for latex format, with units and accept negative numbers
export const scientificNotation = (number: string, unit: string) => {
    const numberString = number.toString();
    const numberArray = numberString.split('e');
    const numberScientific = numberArray[0];
    const numberExponent = numberArray[1];
    if (numberExponent && numberExponent !== "+0" && numberExponent !== "-0") {
        return `$$${numberScientific} \\times 10^{${numberExponent}}$$ ${unit}`;
    } else {
        return `${numberScientific} ${unit}`;
    }
}

const soundSpeed = 343

export const calcObservedFrecuency = (f1: number, v0: number, v1: number) => {
    const f_observed = f1 * ((soundSpeed + v1) / (soundSpeed - v0))
    return f_observed
}

export const calcEmittedFrecuency = (f0: number, v0: number, v1: number) => {
    console.log(f0, v0, v1)
    const f_emitted = f0 * ((soundSpeed - v0) / (soundSpeed + v1))
    return f_emitted
}

export const calcEmitterSpeed = (f0: number, f1:number, v1: number) => {
    const v_emitted = (f0/f1)*(soundSpeed - v1) - soundSpeed
    return v_emitted
}

export const calReceiverSpeed = (f0: number, f1:number, v0: number) => {
    const v_emitted = f0 * ((soundSpeed - v0) / f1) - soundSpeed
    return v_emitted
}