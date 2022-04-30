import { connection } from "../data/connection"

export default async function selectAllProducts(order?: string, search?: string): Promise<any> {
    const result = await connection("labecommerce_products")
        .orderBy("labecommerce_products.price", order)
        .where("labecommerce_products.name", "like", `%${search}%`)
        .orWhere("labecommerce_products.price", "like", `%${search}%`)
        .orWhere("labecommerce_products.id", "like", `%${search}%`)
        .orWhere("labecommerce_products.image_url", "like", `%${search}%`)

    return result
}
