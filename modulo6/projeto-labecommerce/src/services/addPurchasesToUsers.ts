import { User } from "../types"
import selectPurchasesByUser from "./selectPurchasesByUser"

export default async function (users: User[]): Promise<any> {
    for (let user of users) {
        user.purchases = await selectPurchasesByUser(user.id)
    }

    return users
}
