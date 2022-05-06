import { connection } from "../data/connection"
import { v4 as generateId } from "uuid"
import { Product } from "../types";
import selectProductById from "./selectProductById";

export default async function registerPurchases(
    userId: string,
    productId: string,
    quantity: number
): Promise<void> {
    const id = generateId()
    const product: Product = await selectProductById(productId)
    
    const totalPrice = product.map((product: Product) => {
        return product.price * quantity
    })

    await connection("labecommerce_purchases").insert({
        "id": id,
        "user_id": userId,
        "product_id": productId,
        "quantity": quantity,
        "total_price": totalPrice
    })
}
