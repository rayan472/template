


const form = document.getElementById('form');
const password1El = document.getElementById('Password1');
const password2El = document.getElementById('Password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('Message');

let isValid = false;


function validateForm() {
    // API
  isValid = form.checkValidity();
//   Stlye main for an erro
  if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
//   Check to see if password match
if(password1El.value===password2El.value){
    passwordMatch =true;
    password1El.style.borderColor='green';
    password2El.style.borderColor='green';   
}else{
    passwordMatch= false;
    message.textContent='Make sure passwords match.';
    message.style.color='red';
    password1El.style.borderColor='red';
    password2El.style.borderColor='red';
    return; 
    
}
// if from is valid and passwords match 
 if(isValid && passwordMatch){
    message.textContent='Successfully Registered!';
    message.style.color='green';
    messageContainer.style.borderColor='green ';
 }
}
  function storeFormData(){
    const user ={
     name:form.name.value,
     phone:form.phone.value,
      email:form.email.value,
      website:form.website.value,
      password:form.password.value 
    };
    // Do somthing with user data 
    console.log(user);
  }

function processFormData(e) {
  e.preventDefault();
//   validate  form 
  validateForm();
//   submit data if valid 
if (isValid && passwordsMatch){
    storeFormData();
}
}

form.addEventListener('submit', processFormData);
