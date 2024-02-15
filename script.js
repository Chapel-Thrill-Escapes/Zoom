document.addEventListener('DOMContentLoaded', function() {
    // Ensure the DOM is fully loaded before trying to find the form
    var form = document.querySelector('form'); // If your form has an ID, use document.getElementById('myForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        var formData = new FormData(form);
        
        // Send the form data to the Google Apps Script
        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(html => {
            // Process the response here
            console.log(html); // For debugging purposes, log the HTML response
            // Additional code to handle the response, such as redirecting based on the response
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
    });
});