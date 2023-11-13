
// method scientific notation for latex format, with units and accept negative numbers
export const scientificNotation = (number: string, unit: string) => {
    const numberString = number.toString();
    const numberArray = numberString.split('e');
    const numberScientific = numberArray[0];
    const numberExponent = numberArray[1];
    if (numberExponent && numberExponent !== "+0" && numberExponent !== "-0") {
        return `${numberScientific} \\times 10^{${numberExponent}} ${unit}`;
    } else {
        return `${numberScientific} ${unit}`;
    }
}