type contentType = {
    id: string
    placeholder: string
    defaultValue: string
}

export type inputsType = {
    title: string
    unit?: string
    content: contentType[]
}

const inputs: inputsType[] = [
    {
        title: 'Frecuencias ( Hz )',
        unit: 'Hz',
        content: [
            {
                id: 'f0',
                placeholder: 'Frecuencia Observada',
                defaultValue: '440'
            },
            {
                id: 'f1',
                placeholder: 'Frecuencia Emitida',
                defaultValue: '350'
            }
        ]
    },
    {
        title: 'Velocidades ( m/s )',
        unit: 'm/s',
        content: [
            {
                id: 'v0',
                placeholder: 'Velocidad del emisor',
                defaultValue: '72.5'
            },
            {
                id: 'v1',
                placeholder: 'Velocidad del receptor',
                defaultValue: '0'
            }
        ]
    }
]

export default inputs