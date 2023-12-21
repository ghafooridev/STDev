import * as utils from "../utils"

describe("utils", () => {
	it("should getProperQueryString return proper string", () => {
		expect(utils.getProperQueryString({ name: "ali", family: "ghafoori" })).toBe("name=ali&family=ghafoori")
	})

})
