const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const gender = document.querySelector(".gender");
const submit_button = document.querySelector("button");
const form = document.querySelector("form");


const user = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    phone: phone.value,
    gender: gender.value,
    };
 const onchange = (e) => {
     user[e.target.name] = e.target.value
 };
 const onsubmit = (e)=> {
     e.preventDefault();
     console.log(user);
 };

firstname.addEventListener("keyup", onchange);
lastname.addEventListener("keyup", onchange);
email.addEventListener("keyup", onchange);
phone.addEventListener("keyup", onchange);
gender.addEventListener("keyup", onchange);
form.addEventListener("submit", onsubmit);
// const _submit= (e)=>{e.preventDefault(); console.log("user"); console.log(user)}
//const _submit= (e)=>console.log(user)
//submit_button.addEventListener(onclick, _submit)
// const saveValue = (e)=>user[e.target.name}+=e.tar bget.value


// const options = {
//     method: 'POST',
//     body:JSON.stringify(user),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }

// fetch('https://reqres.in/api/users', options)
// .then(res => res.json())
// .then(res => {
//     console.log(res);
// });
