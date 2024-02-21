function validatePassword(password) {
  const validLength = password.length >= 8 
  const containsLetter = /[a-zA-z]/.test(password)
  const containsNumber = /[0-9]/.test(password)
  

  return validLength && containsLetter && containsNumber
}


module.exports = validatePassword