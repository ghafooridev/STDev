import axios from "axios"
const mockAxios = jest.genMockFromModule<typeof axios>("axios")

// this is the key to fix the axios.create() undefined error!
mockAxios.create = jest.fn(() => mockAxios)

export default mockAxios
