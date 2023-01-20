let frm = document.querySelector("form");
let inputEmail = document.getElementById("email");
let answer = document.getElementById("answer")
let body = document.querySelector("body")
let iconError = document.querySelector("span")
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    user = inputEmail.value.substring(0, inputEmail.value.indexOf("@"));
    domain = inputEmail.value.substring(inputEmail.value.indexOf("@") + 1, inputEmail.value.length);

    if ((user.length >= 1) && (domain.length >= 3) && (user.search("@") == -1) && (domain.search("@") == -1) && (user.search(" ") == -1) && (domain.search(" ") == -1) && (domain.search(".") != -1) && (domain.indexOf(".") >= 1) && (domain.lastIndexOf(".") < domain.length - 1)) {
        answer.style.color = "green"
        answer.innerText = "Valid email"
        inputEmail.style.borderColor = "green"
    } else if (user.length == 0 && domain.length == 0){
        answer.style.color = ""
        answer.innerText = "This field can't be empty"
        inputEmail.style.borderColor = "hsl(0, 93%, 68%)"
        iconError.innerHTML = `<i class="fa-sharp fa-solid fa-circle-exclamation"></i>`
    }
    else {
        answer.style.color = ""
        answer.innerText = "Please provide a valid email"
        inputEmail.style.borderColor = "hsl(0, 93%, 68%)"
        iconError.innerHTML = `<i class="fa-sharp fa-solid fa-circle-exclamation"></i>`
    }
})

body.addEventListener("click", () => {
        answer.style.color = ""
        answer.innerText = ""
        inputEmail.style.borderColor = ""
        iconError.innerHTML = ""
});