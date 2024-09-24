import Account from "./Account.class";
import Customer from "./Customer.class";

class Bank {
	constructor(public name: string, public _customersList: Customer[] = []) {}

	addCustomerToList(newCustomer: Customer) {
		const newAccount = new Account();
		newCustomer.addAccount(newAccount);
		this._customersList.push(newCustomer);
	}

	get customersList() {
		return this._customersList;
	}
}

export default Bank;
