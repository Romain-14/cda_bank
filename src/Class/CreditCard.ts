import RandomGenNumber from "./RandomGenNumber";
class CreditCard {
	public cardNumber: string;
	public cvv: number;
	public expirationDate: string;

	constructor() {
		this.cardNumber = this.createCardNumber();
		this.cvv = this.createCVV();
		this.expirationDate = this.createExpirationDate();
	}

	createCardNumber() {
		let id = "";
		for (let i = 0; i < 16; i++) {
			if (i === 4 || i === 8 || i === 12) id += " ";
			id += RandomGenNumber.randomInteger(0, 9).toString();
		}
		return id;
	}
	createCVV() {
		let id = "";
		for (let i = 0; i < 3; i++) {
			id += RandomGenNumber.randomInteger(0, 9).toString();
		}
		return parseInt(id);
	}

	createExpirationDate(): string {
		const creationCard = new Date();
		const expirationDate = new Date(
			creationCard.setFullYear(
				creationCard.getFullYear() + 5,
				creationCard.getMonth(),
				creationCard.getDate()
			)
		).toLocaleDateString();

		return expirationDate;
	}
}
export default CreditCard;
