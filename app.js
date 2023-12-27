// Define variables to hold references to DOM elements
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Add an event listener to the sign up button. When clicked, it will add the "sign-up-mode" class to the container.
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode")
});

// Add an event listener to the sign in button. When clicked, it will remove the "sign-up-mode" class from the container.
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode")
});