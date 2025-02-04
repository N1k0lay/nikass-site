export interface ProductType {
    name: string
    description: string
    shortDescription: string
    category: string
    image: string
    model: string
    price: number
    battery: Battery
    inverter?: Inverter
    outputs: Outputs
    discharge: Discharge
    charging: Charging
    packaging: Packaging
    includes: Include[]
    warranty: string
}

export interface Battery {
    capacity: string    //Емкость
    energy: string
    type: string
}

export interface Inverter {
    power: string
    outputVoltage: string
    frequency: string
}

export interface Outputs {
    DC: string
    USB: string
}

export interface Discharge {
    load: string
    time: string
}

export interface Charging {
    solarInput: string
    ACInput: string
    current: string
}

export interface Packaging {
    giftBoxSize: string
    unitWeight: string
    outerBoxSize: string
    outerBoxWeight: string
}

export interface Include {
    item: string
    spec: string
    quantity: number
}
