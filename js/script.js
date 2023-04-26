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
  function validatePassword() {
    var password = document.getElementById("password").value;
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+=[\]{}|\\';:/?.>,<^-]).{8,}$/;
    var passwordError = document.getElementById("password-error");
    
    if (regex.test(password)) {
      return true;
    } else {
      passwordError.innerText = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
      return false;
    }
  }  
  
  function validateForm() {
    if (!validateEmail() || !validatePhone() || !validatePassword()) {
      return false;
    } else {
      return true;
    }
  }
    