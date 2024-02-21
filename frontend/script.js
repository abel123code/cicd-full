const form = document.querySelector("#signupForm")
const passwordInput = document.querySelector("#passwordInput")
const usernameInput = document.querySelector("#usernameInput")
const serverMessage = document.querySelector("#serverMessage")

form.addEventListener("submit", async event => {
  event.preventDefault()

  const password = passwordInput.value
  const username = usernameInput.value

  const result = await fetch('http://ec2-3-26-255-7.ap-southeast-2.compute.amazonaws.com:3000/users', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }).then(response => response.json())
  
  if (result.message) {
    serverMessage.innerText = result.message
    serverMessage.classList.replace("error", "success")
  }
  if (result.error) {
    serverMessage.innerText = result.error
    serverMessage.classList.replace("success", "error")
  }
  console.log(result)
})