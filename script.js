function showPage(page){

document.getElementById("home").classList.add("hidden")
document.getElementById("dashboard").classList.add("hidden")
document.getElementById("addPatient").classList.add("hidden")

document.getElementById(page).classList.remove("hidden")

if(page=="dashboard"){
updateCount()
loadPatients()
}

}
function login(){

let u = document.getElementById("user").value
let p = document.getElementById("pass").value

if(u=="KALP" && p=="Prmrus@4"){

document.getElementById("login").style.display="none"
document.getElementById("navMenu").classList.remove("hidden")

showPage("home")

}else{
alert("Wrong Login")
}

}

function logout(){
location.reload()
}

function savePatient(){

let patient = {
id:"P"+Date.now(),
name: document.getElementById("name").value,
age: document.getElementById("age").value,
gender: document.getElementById("gender").value,
mobile: document.getElementById("mobile").value,
address: document.getElementById("address").value
}

let data = JSON.parse(localStorage.getItem("patients")) || []

data.push(patient)

localStorage.setItem("patients",JSON.stringify(data))

alert("Patient Saved")

document.getElementById("name").value=""
document.getElementById("age").value=""
document.getElementById("gender").value=""
document.getElementById("mobile").value=""
document.getElementById("address").value=""
}

function updateCount(){

let data = JSON.parse(localStorage.getItem("patients")) || []

document.getElementById("count").innerText = data.length

}
function loadPatients(){

let data = JSON.parse(localStorage.getItem("patients")) || []

let table = document.getElementById("patientTable")

table.innerHTML = `
<tr>
<th>ID</th>
<th>Name</th>
<th>Age</th>
<th>Gender</th>
<th>Mobile</th>
<th>Address</th>
</tr>
`

data.forEach((p)=>{

table.innerHTML += `
<tr>
<td>${p.id}</td>
<td>${p.name}</td>
<td>${p.age}</td>
<td>${p.gender}</td>
<td>${p.mobile}</td>
<td>${p.address}</td>
</tr>
`

})

}