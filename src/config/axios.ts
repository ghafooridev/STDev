import axios from "axios"
const BASE_URL = "https://rn-api.codebnb.me/api/"

const token = JSON.parse(localStorage.getItem("token")!)?.access
const http = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Authorization': `JWT ${token}`
	}
})

export { http }
