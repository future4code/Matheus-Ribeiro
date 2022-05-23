import { v4 as generateId } from "uuid"
import { connection } from "../data/connection"

export default async function createProducts(
    name: string,
    price: number,
    imageUrl: string
): Promise<void> {
    const id = generateId()

    await connection("labecommerce_products").insert({
        id,
        name,
        price,
        image_url: imageUrl,
    })
}
