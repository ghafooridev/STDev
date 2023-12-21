import { useMutation, useQuery } from "@tanstack/react-query"
import { AxiosRequestConfig } from "axios"
import { http } from "@/config/axios"

const fetchFromApi = async (params: AxiosRequestConfig) => {
	const res = await http.request(params)
	return res
}

const useQueryApi = (key: string, params: AxiosRequestConfig, enabled = true) => {
	return useQuery({ queryKey: [params.url, key], queryFn: () => fetchFromApi(params), enabled, cacheTime: 10, staleTime: 60000, })
}

const useMutateApi = (params: AxiosRequestConfig) => {
	return useMutation(() => fetchFromApi(params), {

	})
}
export { useQueryApi, useMutateApi }
