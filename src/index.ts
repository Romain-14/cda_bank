import Bank from "./Class/Bank.class";
import Customer from "./Class/Customer.class";

const newCustomer_A = new Customer(1, "La Frite", "Roger", 1269.59, "Jardiland");
const newCustomer_B = new Customer(2, "Le Potager", "Jako", 876.78, "Pelouse-Ville");
const newCustomer_C = new Customer(3, "Palla", "Sandrine", 1869.16, "Pelouse-Ville");
const newCustomer_D = new Customer(4, "Palla", "Bob", 3246.78, "Pelouse-Ville");
const newCustomer_E = new Customer(5, "Joel", "Billy", 1648.55, "Jardiland");

const bank_A = new Bank("BigBank");
const bank_B = new Bank("The Green Bank");

bank_A.addCustomerToList(newCustomer_A);
bank_A.addCustomerToList(newCustomer_B);

bank_B.addCustomerToList(newCustomer_C);
bank_B.addCustomerToList(newCustomer_D);
bank_B.addCustomerToList(newCustomer_E);


console.log(newCustomer_A); // Account.balance 0
newCustomer_A.addCash(459);
console.log(newCustomer_A); // Account.balance 459