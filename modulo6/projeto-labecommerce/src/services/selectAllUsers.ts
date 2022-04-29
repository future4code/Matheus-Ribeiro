import { connection } from "../data/connection"

export default async function selectAllUsers(): Promise<void> {
    const result = await connection("labecommerce_users")
}
