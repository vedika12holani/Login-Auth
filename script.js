const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const message = document.getElementById("message");

const users = [];

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  users.push({ username, password });

  showMessage("Registration successful. You can now log in.", "success");
  registerForm.reset();
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    showMessage("Login successful!!", "success");
    setTimeout(() => {
      window.location.href = "page.html";
    }, 2000);
  } else {
    showMessage("Login failed!!", "error");
    loginForm.reset();
  }
});

function showMessage(text, type) {
  message.textContent = text;
  message.classList.add(type);
  setTimeout(() => {
    message.textContent = "";
    message.classList.remove(type);
  }, 3000);
}
