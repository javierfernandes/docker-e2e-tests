exports.config = {
  "tests": "test/**/*_test.js",
  "timeout": 10000,
  "output": "./output",
  "helpers": {
    "Nightmare": {
      "url": process.env.CODECEPT_URL || "http://localhost:3000",
      "show": true
    }
  },
  "include": {},
  "bootstrap": false,
  "mocha": {},
  "name": "e2e-tests"
}