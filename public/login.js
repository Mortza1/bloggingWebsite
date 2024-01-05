document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    // Prepare data object
    const data = {
        email: email,
        password: password
    };

    // Send POST request to backend API
    fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle response from backend
        console.log('Response from server:', data);
        // Perform actions based on response
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });
});


let loginSelector = document.getElementById("loginSelector");
let signupSelector = document.getElementById("signupSelector");
let loginBox = document.querySelector(".login-box");
let signUpBox = document.querySelector(".signup-box");

loginSelector.addEventListener("click", function(){
    signUpBox.classList.remove("active");
    loginBox.classList.add("active");
});

signupSelector.addEventListener("click", function(){
    loginBox.classList.remove("active");
    signUpBox.classList.add("active");
});


document.getElementById("registerButton").addEventListener('click', function() {
    const username = document.getElementById("usernameInput").value;
    const email = document.getElementById("reg-emailInput").value;
    const password = document.getElementById("reg-passwordInput").value;
    const confirmPassword = document.getElementById("reg-passwordInputConfirm").value;

    if(password === confirmPassword){
        const data = {
            username: username,
            email: email,
            password: password
        };

        fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok){
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then(data => {
            console.log('Response from server:', data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        })
    }
})