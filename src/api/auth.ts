import { useMutateApi } from "@/hooks/useApi"
import { API_METHOD, RegisterInterface } from "@/constants/enum"

export const useRegister = (data: any) => {
    return useMutateApi({ url: "/user/sign-up/", data, method: API_METHOD.POST })
}

export const useLogin = (data: Pick<RegisterInterface, "email" | "password">) => {
    return useMutateApi({ url: "/user/sign-in/", data, method: API_METHOD.POST })
}

export const useLogot = (data: "string") => {
    return useMutateApi({ url: "/user/logout/", data, method: API_METHOD.POST })
}