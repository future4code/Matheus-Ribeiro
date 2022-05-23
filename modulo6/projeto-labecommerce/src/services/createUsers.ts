import { v4 as generateId } from "uuid"
import { connection } from "../data/connection"

export default async function createUsers(
    name: string,
    email: string,
    password: string
): Promise<void> {
    const id = generateId()

    await connection("labecommerce_users").insert({
        id,
        name,
        email,
        password,
    })
}
