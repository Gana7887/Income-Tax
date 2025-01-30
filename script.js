// script.js

document.getElementById('employeeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let formData = new FormData(this);

    // Convert form data to an object
    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Google Sheets Integration
    sendDataToGoogleSheets(data);
});

function sendDataToGoogleSheets(data) {
    // This function sends the data to Google Sheets
    const scriptURL = 'AKfycbzo4vtlsaZpJpzX-_Jdjm8thGyB0vFcTgBJBxiBBjpr'; // Google Sheets URL or Web App URL
    
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data), // Send data as JSON
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(result => {
        alert("Form submitted successfully!");
        // Optionally clear the form or redirect user
        document.getElementById('employeeForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error submitting the form.");
    });
}
