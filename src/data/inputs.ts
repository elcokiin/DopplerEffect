type contentType = {
    id: string
    placeholder: string
    defaultValue: string
}

export type inputsType = {
    title: string
    content: contentType[]
}

const inputs: inputsType[] = [
    {
        title: 'Frecuencias ( Hz )',
        content: [
            {
                id: 'f0',
                placeholder: 'Frecuencia Observada',
                defaultValue: '0'
            },
            {
                id: 'f1',
                placeholder: 'Frecuencia Emitida',
                defaultValue: '0'
            }
        ]
    },
    {
        title: 'Velocidades ( m/s )',
        content: [
            {
                id: 'v0',
                placeholder: 'Velocidad del emisor',
                defaultValue: '0'
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