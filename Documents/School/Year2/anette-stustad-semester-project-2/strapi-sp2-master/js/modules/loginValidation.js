import { saveToken, saveUser } from "../utils/storage.js";

const submit = document.querySelector("#loginBtn");
const username = document.querySelector("#email");
const password = document.querySelector("#password");

import {baseUrl} from "../utils/variables.js";

submit.addEventListener("click", validate);

export function validate(event) {
    
    event.preventDefault();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    console.log("Username: " + usernameValue + " password: " + passwordValue);

    if (usernameValue.length === 0 || passwordValue.length === 0 ) {
        // Insert error message "Cannot proceed login"
        console.log("nothing to validate");
    }

    doLogin(usernameValue, passwordValue);
}

async function doLogin(username, password) {

    const url = baseUrl+"auth/local"
    console.log (url);
    
    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if(json.user) {
            console.log("Login success");
            location.href = "cart.html";

            saveToken(json.jwt);
            saveUser(json.user);
        }
        
        if(json.error) {
            console.log("Login failed");
            // Create login error display!
        }

    } catch(error) {
        console.log("there was en error, please retry login")
    }

}