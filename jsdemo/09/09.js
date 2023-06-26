let form = document.querySelector('form');
let fName = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let cpassword = document.querySelector('#cpassword');
let submitBtn = document.querySelector('#submit');
let succesMsg = "Succesfully registered!"

function nameErrCall(){
    let nameField = fName.value;
    let emailF = email.value;
    if(nameField == ""){
        alert('Name should not be empty and should contain only letters.');
    }if(emailF == ""){
        alert('Email should be a valid email address');     
    }if(password.value.length < 8){
        alert('Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit');    
    }if(password.value !== cpassword.value){
        alert('Confirm Password should match the Password field.');
    }
}