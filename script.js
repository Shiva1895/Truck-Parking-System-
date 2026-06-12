const API_URL = "http://localhost:5000";

const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

const data = {

name:
document.getElementById("name").value,

truckNumber:
document.getElementById("truckNumber").value,

email:
document.getElementById("email").value,

password:
document.getElementById("password").value

};

const response = await fetch(
API_URL+"/register",
{
method:"POST",
headers:{
"Content-Type":
"application/json"
},
body:JSON.stringify(data)
}
);

const result =
await response.json();

alert(result.message);

window.location="login.html";

});
}

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

const data={

email:
document.getElementById("email").value,

password:
document.getElementById("password").value

};

const response =
await fetch(
API_URL+"/login",
{
method:"POST",
headers:{
"Content-Type":
"application/json"
},
body:JSON.stringify(data)
}
);

const result =
await response.json();

if(result.success){

localStorage.setItem(
"user",
JSON.stringify(result.user)
);

window.location=
"dashboard.html";

}else{

alert(result.message);

}

});
}

function logout(){

localStorage.clear();

window.location=
"login.html";

}
function bookSlot(){

alert(
"Parking Slot Booked Successfully"
);

}

function sosAlert(){

alert(
"Emergency Alert Sent Successfully!"
);

}

function openMap(){

window.open(
"https://maps.google.com"
);

}