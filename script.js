document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function(e) {
        // Prevent default form submission if needed
        e.preventDefault();

        // Assuming you're sending some data with the request
        // If not, you can omit the FormData part and send an empty body or {}.
        var formData = new FormData(); // Or construct FormData with form reference if needed

        fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
            method: 'POST',
            body: formData // or JSON.stringify({}) for empty POST request
        })
        .then(response => response.json()) // Parses the JSON response
        .then(data => {
            if(data.url) {
                window.location.href = data.url; // Redirect
            } else {
                console.error('URL not found in response');
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    });
});