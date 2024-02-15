document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default button action

        // Optional: Collect data to send
        var formData = new FormData();
        // Populate formData as needed, e.g., formData.append('key', 'value');

        fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) // Expecting JSON response
        .then(data => {
            // Assuming the script returns a URL in JSON format
            if(data.url) {
                window.location.href = data.url; // Redirect the user
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});