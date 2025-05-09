function circleFormulaTS(radius: number) : { diameter: number; circumference: number; area: number }{
    const pi = 3.14;
    const diameter = 2 * radius;
    const circumference = 2 * pi * radius;
    const area = pi * radius * radius;

    return { diameter, circumference, area };
}

console.log(circleFormulaTS(5));
