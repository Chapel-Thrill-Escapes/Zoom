document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default action
        
        // Optionally, collect and send any additional data with the request
        var formData = new FormData(); // Adjust based on your needs

        // Replace 'YOUR_SCRIPT_ID' with the actual ID of your Google Apps Script
        fetch('https://script.google.com/macros/s/AKfycbyuGbm6fFtzdbhauomcvwxkBRvg_w2IeybO4UJ8baEGnZD7lP6SDRjc5zwwSayWCKBgHA/exec', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            if(data.url) {
                window.location.href = data.url; // Redirect to the URL from the response
            } else {
                console.error('URL not found in response');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});