function login(event) {
  event.preventDefault() // Prevent form refresh

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  // Retrieve users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || []

  // Find user by email and password
  const user = users.find(
    (user) => user.email === email && user.password === password
  )

  if (user) {
    // Store current user in sessionStorage
    sessionStorage.setItem("currentUser", JSON.stringify(user))

    alert("Login successful!")
    window.location.href = "index.html" // Redirect to home
  } else {
    alert("Invalid email or password. Please try again.")
  }
}

function register(event) {
  event.preventDefault() // Prevent form submission reload

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const confirmPassword = document.getElementById("confirm-password").value

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!")
    return
  }

  // Retrieve existing users or initialize empty array
  let users = JSON.parse(localStorage.getItem("users")) || []

  // Check if email is already registered
  if (users.some((user) => user.email === email)) {
    alert("Email is already registered. Please use a different email.")
    return
  }

  // Create new user object
  const newUser = { name, email, password }

  // Store new user in localStorage
  users.push(newUser)
  localStorage.setItem("users", JSON.stringify(users))

  alert("Registration successful! You can now log in.")
  window.location.href = "login.html" // Redirect to login page
}
