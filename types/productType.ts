export interface productType {
    name: string
    image: string
    category: string
    price: number
    description: string
    shortDescription: string
    params: Params
}

export interface Params {
    specification: Specification[]
    packingAndWeight: PackingAndWeight[]
    packingList: PackingList[]
    features: Feature[]
}

export interface Specification {
    label: string
    value: string
}

export interface PackingAndWeight {
    label: string
    value: string
}

export interface PackingList {
    label: string
    value: string
}

export interface Feature {
    label: string
    value: string
}

export default productType