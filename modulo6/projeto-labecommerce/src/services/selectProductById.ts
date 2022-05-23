import { connection } from "../data/connection"

export default async function (productId: string): Promise<any> {
    const result = await connection("labecommerce_products").where("id", productId)

    return result
}
