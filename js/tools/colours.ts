export const colours: string[] = Array.from(new Set([
    'lightblue',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightpink',
    'lightsalmon',
    'lightsteelblue',
    'lavenderblush',
    'lightcoral',
    'lightsteelblue',

]));

export const availableColours = [...colours]

export function randomColour() {
    const index = Math.floor(Math.random() * availableColours.length)
    const colour = availableColours[index]
    if (availableColours) availableColours.splice(index, 1)
    if (availableColours.length === 0) availableColours.push(...colours)
    return colour
}
