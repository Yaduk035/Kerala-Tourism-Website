// function to validate email format
function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("email-error");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.innerText = "Email is required";
    return false;
  } else if (!emailRegex.test(email)) {
    emailError.innerText = "Invalid email format";
    return false;
  } else {
    emailError.innerText = "";
    return true;
  }
}

// function to validate phone number format
function validatePhone() {
  const phone = document.getElementById("phonenumber").value.trim();
  const phoneError = document.getElementById("phone-error");
  const phoneRegex = /^(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/;

  if (phone === "") {
    phoneError.innerText = "Phone number is required";
    return false;
  } else if (!/^\d{10}$/.test(phone) && !phoneRegex.test(phone)) {
    phoneError.innerText = "Invalid phone number format";
    return false;
  } else {
    phoneError.innerText = "";
    return true;
  }
}

// function to validate password format and strength
function validatePassword() {
  const password = document.getElementById("password").value.trim();
  const password2 = document.getElementById("password2").value.trim();
  const passwordError = document.getElementById("password-error");
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+=[\]{}|\\';:/?.>,<^-]).{8,}$/;

  if (password === "") {
    passwordError.innerText = "Password is required";
    return false;
  } else if (!passwordRegex.test(password)) {
    passwordError.innerText = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    return false;
  } else if (password !== password2) {
    passwordError.innerText = "Passwords do not match";
    return false;
  } else {
    // determine password strength
    let strength = "";
    if (passwordRegex.test(password)) {
      strength = "strong";
      passwordError.style.color = "green";
    } else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*()_+=[\]{}|\\';:/?.>,<^-]{8,}$/.test(password)) {
      strength = "medium";
      passwordError.style.color = "orange";
    } else {
      strength = "poor";
      passwordError.style.color = "red";
    }
    passwordError.innerText = `Password strength: ${strength}  Passwords match!`;
    return true;
  }
}

// function to validate the entire form
function validateForm() {
  if (!validateEmail() || !validatePhone() || !validatePassword()) {
    return false;
  } else {
    return true;
  }
}

// // function to validate username (if required)
// function validateName() {
//   const name = document.getElementById("username").value.trim();
//   const nameError = document.getElementById("name-error");

//   // validation criteria for username can be added here

//   nameError.innerText = "";
//   return true;
// }

// // add event listeners to the input fields
// document.getElementById("email").addEventListener("keyup", validateEmail);
// document.getElementById("phonenumber").addEventListener("keyup", validatePhone);
// document.getElementById("password").addEventListener("keyup", validatePassword);
// document.getElementById("password2").addEventListener("keyup", validatePassword);
// document.getElementById("username").addEventListener("keyup", validateName);

