import CreditCard from "./CreditCard";
import Customer from "./Customer.class";
import RandomGenNumber from "./RandomGenNumber";

class Account {
	public accountID: number;
	public balance: number = 0;
	public creditCard: CreditCard;

	constructor() {
		this.accountID = this.createID();		
		this.creditCard = new CreditCard();
	}

	createID(): number {
		let id = "";
		for (let i = 0; i < 7; i++) {
			id += RandomGenNumber.randomInteger(0, 9).toString();
		}
		return parseInt(id);
	}
}

export default Account;
