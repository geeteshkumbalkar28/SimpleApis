function handleFormSubmission(event) {
    event.preventDefault();

    var userName = document.getElementById("userName").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;

    // Create an object representing the data to be sent in the request
    var formData = {
        userName: userName,
        adress: address, // Note: This should match the property name in your JSON data (use "address" instead of "adress")
        password: password
    };
    console.error(formData);


    // Make a POST request using the fetch API
    fetch('https://simpleapis-production.up.railway.app/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle the success response here, if needed
    })
    .catch(error => {
        console.error('Error:', error);
        console.error('Error:', "ok");
        
        // Handle the error here
    });
}
