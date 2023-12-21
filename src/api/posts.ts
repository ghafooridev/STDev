import { useQueryApi, useMutateApi } from "@/hooks/useApi"
import { API_METHOD } from "@/constants/enum"
import { getProperQueryString } from "@/helpers/utils"

interface QueryParams {
	limit?: number,
	offset?: number
}

export const useGetPosts = (params: QueryParams) => {
	return useQueryApi("posts", { url: `/post/crud/?${getProperQueryString(params)}`, method: API_METHOD.GET }, false)
}

export const useGetPost = (id: string | undefined) => {
	return useQueryApi("postsDetail", { url: `/post/crud/${id}/`, method: API_METHOD.GET }, false)
}

export const useEditPost = (id: string | undefined, data: any) => {
	return useMutateApi({ url: `/post/crud/${id}/`, data, method: API_METHOD.PUT })
}

export const useDeletePost = (id: string | undefined) => {
	return useMutateApi({ url: `/post/crud/${id}/`, method: API_METHOD.DELETE })
}

export const useAddPost = (data: any) => {
	return useMutateApi({ url: "/post/crud/", data, method: API_METHOD.POST })
}
