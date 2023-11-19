export type colorType = {
    range: number[]
    name: string
    hex: string
}

const colors: colorType[] = [
    {
        range: [0, 1],
        name: 'Rayos Gamma',
        hex: ''
    },
    {
        range: [1, 100],
        name: 'Rayos X',
        hex: ''
    },
    {
        range: [100, 280],
        name: 'Ultravioleta (UVC)',
        hex: ''
    },
    {
        range: [280, 320],
        name: 'Ultravioleta (UVB)',
        hex: ''
    },
    {
        range: [320, 380],
        name: 'Ultravioleta (UVA)',
        hex: ''
    },
    {
        // range in wavelength (nm) of the color
        range: [ 380, 400 ],
        // color name
        name: 'Luz Visible',
        // color hex code
        hex: '#8B00FF'
    },
    {
        range: [ 400, 450 ],
        name: 'Luz Visible',
        hex: '#0000FF'
    },
    {
        range: [ 450, 495 ],
        name: 'Luz Visible',
        hex: '#00BFFF'
    },
    {
        range: [495, 520],
        name: 'Luz Visible',
        hex: '#00FFFF'
    },
    {
        range: [ 520, 570 ],
        name: 'Luz Visible',
        hex: '#00FF00'
    },
    {
        range: [ 570, 590 ],
        name: 'Luz Visible',
        hex: '#FFFF00'
    },
    {
        range: [ 590, 620 ],
        name: 'Luz Visible',
        hex: '#FFA500'
    },
    {
        range: [ 620, 750 ],
        name: 'Luz Visible',
        hex: '#FF0000'
    },
    {
        range: [ 750, 1000 ],
        name: 'Infrarrojo',
        hex: ''
    },
    {
        range: [ 1000, 100000 ],
        name: 'Microondas',
        hex: ''
    },
    {
        range: [ 100000, 1000000000 ],
        name: 'Radio',
        hex: ''
    }
]

export default colors;