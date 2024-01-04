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