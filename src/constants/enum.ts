export enum API_METHOD {
	GET = "get",
	POST = "post",
	PUT = "put",
	DELETE = "delete"
}

export interface Category {
	id: string
	name: string
}

export interface PostInterface {
	id?: string
	title: string
	description: string
	image: string
	file: any
	category: string

}

export interface RegisterInterface {
	firstName: string
	lastName: string
	email: string
	password: string
	confirmPassword: string
	image: any
}
