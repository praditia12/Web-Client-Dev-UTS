function convertCmToKm(cm) {
    return cm / 100000 + " km";
}

function convertKmToCm(km) {
    return km * 100000 + " cm";
}

export default { convertCmToKm, convertKmToCm };