import Account from "./Account.class";

class Customer {
	public account: Account;
	constructor(
		public id: number,
		public firstname: string,
		public lastname: string,
		public pay: number,
		public town: string
	) {}

	addAccount(account: Account) {
		this.account = account;
	}

	addCash(money : number) {
        this.account.balance += money
    }

	cashWithdrawal() {}
}

export default Customer;
