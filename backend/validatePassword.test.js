const validatePassword = require('./validatePassword')


test("return false given that it returns empty string", () => {
  expect(validatePassword("")).toBe(false)
})

test("return true given a password 8 characters or longer, has number(s) and letter(s)", () => {
  expect(validatePassword("12345678a")).toBe(true)
  expect(validatePassword("12345678A")).toBe(true)
  expect(validatePassword("12345678Ab")).toBe(true)
})

test("return false given that password is 8 characters long, but no letters", () => {
  expect(validatePassword("12345678")).toBe(false)
})

test("return false given that password is 8 characters long, but no numbers", () => {
  expect(validatePassword("abcdefgh")).toBe(false)
})

test("return false given that password is 8 uppercase characters long, but no numbers", () => {
  expect(validatePassword("ABCDEFGH")).toBe(false)
})

test("return false given that password is less than 8 characters long, but has letters and numbers", () => {
  expect(validatePassword("abc123")).toBe(false)
})