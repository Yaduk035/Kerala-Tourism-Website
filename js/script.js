function validateName(){

    let username = document.getElementById('username')
    let name_error = document.getElementById('name-error')
    
    console.log(username.value)
    if (username.value.trim() ==''){
        name_error.innerHTML = "Username cannot be blank"
        return false
    }
    
    else if (username.value.length<3){
        name_error.innerHTML = "Username must contain atleast 3 characters"
        return false
    }

    else if (username.value.length>20){
        name_error.innerHTML = "Username should not exceed 20 characters"
        return false
    }

    else {
        name_error.innerHTML = "✔"
        return true
    }
}


function validateEmail() {

    let regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    let email = document.getElementById('email')
    let email_error = document.getElementById('email-error')
    
    if (email.value.trim() ==''){
        email_error.innerHTML = "E-mail cannot be blank"
        return false
    }
    
    else if (!email.value.match(regExEmail)) {
        email_error.innerHTML = "E-mail format error"
        return false
    }


    else {
        email_error.innerHTML = "✔"
        return true
    }
}


function validatePhn() {

    let regExPhn = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/g

    let phn = document.getElementById('phn')
    let phn_error = document.getElementById('phn-error')
    
    if (!phn.value.trim() ==''){
        phn_error.innerHTML = "Phone no. cannot "
        return false
    }
    
    else if (!phn.value.match(regExEmail)) {
        phn_error.innerHTML = "Phone no. format error"
        return false
    }


    else {
        phn_error.innerHTML = "✔"
        return true
    }
}




function validatePassword(){
    
    let password = document.getElementById('password')
    let password_error = document.getElementById('password-error')

    console.log(password.value)
    if (password.value.trim() ==''){
        password_error.innerHTML = "Password cannot be left blank"
        return false
    }

    else if (password.value.length<8){
        password_error.innerHTML = "Password must contain atleast 8 characters"
        return false
    }

    else if (password.value.length>20){
        password_error.innerHTML = "Password should not exceed 20 characters"
        return false
    }

    else {
        password_error.innerHTML = "✔"
        return true
    }

}

function validateForm(){
    if (!validateName() || !validatePassword() || !validateEmail() ) {
        return false
    }
    else{
        return true
    }



}