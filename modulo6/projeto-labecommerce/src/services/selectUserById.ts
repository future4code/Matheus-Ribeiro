import { connection } from "../data/connection"

export default async function (userId: string): Promise<any> {
    const user = await connection("labecommerce_users").where("id", userId)

    return user
}
