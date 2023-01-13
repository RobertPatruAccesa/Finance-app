export interface Transaction {
	id: string,
	userId: string,
	amount: number,
	type: "payment" | "addition",
	date: Date | string,
	description: string,
	category: string
}