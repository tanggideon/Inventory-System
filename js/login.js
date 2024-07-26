const login_div = document.querySelector(".login");
const register_div = document.querySelector(".register");
const sign_up = document.getElementById("sign-up");

function register(login, registration) {
    login.style.transform = "translateY(400px)";
    registration.style.transform = "translateY(0)";
    registration.style.transition = "1s ease-in-out";
    login.style.transition = "1s ease-in-out";
    login.style.display = "none";
}
function login(login, registration) {

    login.style.transform = "translateY(0)";
    login.style.transition = "1s ease-in-out";
    login.style.display = "block";
    registration.style.transform = "translateY(450px)";
    registration.style.transition = "1s ease-in-out";
}

sign_up.addEventListener("click", () => {
    if (sign_up.innerHTML === "Sign-Up") {
        register(login_div, register_div);
        sign_up.innerHTML = "Login";
    } else {
        login(login_div, register_div);
        sign_up.innerHTML = "Sign-Up";
    }
});
