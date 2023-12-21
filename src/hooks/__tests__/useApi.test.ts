import { renderHook } from "@testing-library/react-hooks"
import { rest } from "msw"
import { setupServer } from "msw/node"
import * as ReactQuery from "@tanstack/react-query"
import * as useApi from "../useApi"

const mockData = {
	name: "John",
	sureName: "Doe"
}
const server = setupServer(
	rest.get("/test", (req, res, ctx) => {
		return res(ctx.json(mockData))
	})
)

beforeAll(() => {
	server.listen()
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it("fetches data using useQuery", async () => {
	jest.spyOn(ReactQuery, "useQuery").mockImplementation(
		() =>
			({
				isLoading: false,
				isFetching: false,
				error: {},
				data: mockData
			} as ReactQuery.UseQueryResult)
	)

	const { result, waitFor } = renderHook(() => useApi.useQueryApi("/test", {}))

	expect(result.current.isFetching).toBe(false)
	await waitFor(() => !result.current.isFetching)
	expect(result.current.data).toEqual(mockData)
})
