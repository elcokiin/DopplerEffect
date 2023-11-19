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

export const inputsSound: inputsType[] = [
    {
        title: 'Frecuencias ( Hz )',
        unit: 'Hz',
        content: [
            {
                id: 'f0',
                placeholder: 'Frecuencia Observada (Inicial*)',
                defaultValue: '440'
            },
            {
                id: 'f1',
                placeholder: 'Frecuencia Emitida (Final*)',
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
                placeholder: 'Velocidad del emisor (Velocidad*)',
                defaultValue: '70.15909090'
            },
            {
                id: 'v1',
                placeholder: 'Velocidad del receptor',
                defaultValue: '0'
            }
        ]
    }
]

export const inputsLight: inputsType[] = [
    {
        title: 'Longitudes de onda ( nm )',
        unit: 'nm',
        content: [
            {
                id: 'l0',
                placeholder: 'Longitud de onda observada (Inicial*)',
                defaultValue: '0.2'
            },
            {
                id: 'l1',
                placeholder: 'Longitud de onda emitida (Final*)',
                defaultValue: '800'
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
                defaultValue: '70'
            },
            {
                id: 'v1',
                placeholder: 'Velocidad del receptor',
                defaultValue: '0'
            }
        ]
    }
]