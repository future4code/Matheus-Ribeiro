import { connection } from "../data/connection"

export default async function selectPurchasesByUser(userId: string) {
    const response = await connection("labecommerce_purchases")
        .select(
            "price",
            "quantity",
            "total_price AS totalPrice",
            "labecommerce_purchases.id",
        )
        .join(
            "labecommerce_products",
            "labecommerce_purchases.product_id",
            "labecommerce_products.id"
        )
        .where("user_id", userId)

    const purchases = response.map((purchase) => {
        return {
            id: purchase.id,
            productName: purchase.productName,
            price: purchase.price,
            quantity: purchase.quantity,
            totalPrice: purchase.totalPrice,
        }
    })

    return purchases
}
