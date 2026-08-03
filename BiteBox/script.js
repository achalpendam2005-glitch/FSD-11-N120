function login() {
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");
  let


function togglePassword() {
  let passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}