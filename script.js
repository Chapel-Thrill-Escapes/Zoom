
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.onsubmit = function(e) {
        e.preventDefault(); // Prevent the default form submission
        var formData = new FormData(form);
        
        // Send the form data to the Google Apps Script
        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(html => {
            // Extract the URL from the response
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, 'text/html');
            var link = doc.querySelector('a');
            if (link && link.href) {
                window.location.href = link.href; // Redirect the user
            } else {
                console.error('No link found in the response');
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
    };
});