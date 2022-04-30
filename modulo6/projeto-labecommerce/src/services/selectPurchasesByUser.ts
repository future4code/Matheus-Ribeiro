import { connection } from "../data/connection"

export default async function selectPurchasesByUser(userId: string) {
    const response = await connection("labecommerce_purchases")
        .select(
            "labecommerce_users.name AS userName",
            "labecommerce_products.name AS productName",
            "price",
            "quantity",
            "total_price as totalPrice"
        )
        .join("labecommerce_users", "labecommerce_purchases.user_id", "labecommerce_users.id")
        .join(
            "labecommerce_products",
            "labecommerce_purchases.product_id",
            "labecommerce_products.id"
        )
        .where("user_id", userId)

    const purchases = response.map((purchase) => {
        return {
            productName: purchase.productName,
            price: purchase.price,
            quantity: purchase.quantity,
            totalPrice: purchase.totalPrice,
        }
    })

    return purchases
}
