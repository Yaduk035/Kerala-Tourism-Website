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

function validatePassword(){
    
    let password = document.getElementById('password')
    let password_error = document.getElementById('password-error')

    console.log(password.value)
    if (password.value.trim() ==''){
        password_error.innerHTML = "Password cannot be lsft blank"
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
    if (!validateName() || !validatePassword() ) {
        return false
    }
    else{
        return true
    }



}