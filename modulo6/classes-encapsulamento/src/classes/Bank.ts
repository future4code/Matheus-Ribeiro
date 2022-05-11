import { UserAccount } from "./UserAccout"

export class Bank {
    private accounts: UserAccount[] = []

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }

    public getAccounts = (): UserAccount[] => this.accounts
}
