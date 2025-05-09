function convertCmToKm(cm: number): number {
    return cm / 100000 ;
}

function convertKmToCm(km : number): number {
    return km * 100000;
}

export default { convertCmToKm, convertKmToCm };