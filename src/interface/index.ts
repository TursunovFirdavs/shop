export interface ProductTypes {
    id: number
    title: string
    description: string
    price: number
    category: string
    quantity: number
    image: string
    rating: { rate: number; count: number}
}