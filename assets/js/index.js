const username = document.getElementById("username");
const email = document.getElementById("email");
const message =document.getElementById("message");
const email_error = document.getElementById("email_error");
const submitForm = document.getElementById("form-div");
const timer = document.getElementById("time-shower");
const pop_up =document.getElementById("pop-up");
let startTime;
const toggleBtn = document.getElementById('toggleBtn');
const navbar = document.getElementById('navbarSubdiv');
toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('show');
});
submitForm.addEventListener("input",(e)=>{
    startTime =Date.now();
})
submitForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(!username.checkValidity()){
        e.preventDefault();
        name_error.textContent="Please enter a valid email Adress"
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailPattern.test(email)){
        e.preventDefault();
        email_error.style.display ="block";
    }
    const timeSpent = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
    timer.textContent = `you spend ${timeSpent} seconds to fill the form`
    sessionStorage.setItem("username",username);
    pop_up.style.display="block";
    setTimeout(()=>{
        window.location.reload();
    },2000)
})

