export interface IProduct {
    id: number;
    name: string;
    description: string
    price: number;
    discount: number;
    stock_quantity: number
    category_id: number
    created_at: Date
    cover_image_url: string
}