// // Show signup section initially
// document.getElementById("signup-section").classList.remove("hidden");

// function signup() {
//   const name = document.getElementById("signup-name").value.trim();
//   const email = document.getElementById("signup-email").value.trim();
//   const password = document.getElementById("signup-password").value.trim();

//   if (name && email && password) {
//     // Save user data in localStorage
//     localStorage.setItem("user", JSON.stringify({ name, email, password }));
//     Swal.fire("Signup Successful!", "Redirecting to Login Page...", "success").then(() => {
//       document.getElementById("signup-section").classList.add("hidden");
//       document.getElementById("login-section").classList.remove("hidden");
//     });
//   } else {
//     Swal.fire("Error", "All fields are required!", "error");
//   }
// }

// function login() {
//   const email = document.getElementById("login-email").value.trim();
//   const password = document.getElementById("login-password").value.trim();
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (user && user.email === email && user.password === password) {
//     Swal.fire("Login Successful!", `Welcome back, ${user.name}!`, "success").then(() => {
//       // Redirect to home page (you can replace with actual URL)
//       window.location.href = "home.html";
//     });
//   } else {
//     Swal.fire("Error", "Invalid email or password!", "error");
//   }
// }


function signup() {
    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();
  
    if (name && email && password) {
      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      Swal.fire("Signup Successful!", "Redirecting to Login Page...", "success").then(() => {
        document.getElementById("signup-section").classList.add("hidden");
        document.getElementById("login-section").classList.remove("hidden");
      });
    } else {
      Swal.fire("Error", "All fields are required!", "error");
    }
  }
  
  function login() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.email === email && user.password === password) {
      Swal.fire("Login Successful!", `Welcome back, ${user.name}!`, "success").then(() => {
        window.location.href = "home.html";
      });
    } else {
      Swal.fire("Error", "Invalid email or password!", "error");
    }
  }
  