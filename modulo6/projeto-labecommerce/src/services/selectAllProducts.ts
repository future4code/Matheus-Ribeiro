import { connection } from "../data/connection"

export default async function selectAllProducts(): Promise<any> {
    const result = await connection("labecommerce_products")

    return result
}
