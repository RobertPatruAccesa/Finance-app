export interface Transaction {
	userId: string,
	transactionId: string,
	amount: number,
	type: "payment" | "addition",
	date: Date,
	description: string,
	category: string
}