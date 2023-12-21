import type { JestConfigWithTsJest } from "ts-jest"

const jestConfig: JestConfigWithTsJest = {
	extensionsToTreatAsEsm: [".ts"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1"
	},

	roots: ["<rootDir>/src"],
	testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
	transform: {
		"^.+\\.(ts|tsx)$": [
			"ts-jest",
			{
				useESM: true
			}
		]
	},
	globals: {
		"ts-jest": {
			diagnostics: {
				exclude: ["**"]
			}
		}
	},
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
}

export default jestConfig
