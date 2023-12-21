export const getProperQueryString = (query: any) => {
	return new URLSearchParams(query)?.toString()
}

