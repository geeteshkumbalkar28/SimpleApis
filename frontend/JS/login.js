function handleLoginFormSubmission(event) {
    event.preventDefault();

    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;

    // Construct the URL with the login parameters
    var loginUrl = 'https://simpleapis-production.up.railway.app/login?' +
                   'userName=' + encodeURIComponent(userName) +
                   '&password=' + encodeURIComponent(password);

    // Make a GET request to the login URL
    fetch(loginUrl)
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);

        // Check if the status is 200 and the response is 'Ok'
        if (data.status === '200' && data.response === 'Ok') {
            // Redirect to home.html
            window.location.href = 'Home.html';
        } else {
            // Handle unsuccessful login here, e.g., display an error message
            console.log('Login failed. Please check your credentials.');
            alert("Login failed. Please check your credentials.")
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle the error here, e.g., display an error message to the user
    });
}
