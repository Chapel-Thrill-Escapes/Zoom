document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.onsubmit = function(e) {
        e.preventDefault(); // Stop the form from submitting normally
        var formData = new FormData(form);
        
        fetch(form.action, {
            method: 'POST',
            body: formData
        }).then(response => response.text())
          .then(html => {
              var parser = new DOMParser();
              var doc = parser.parseFromString(html, 'text/html');
              var link = doc.querySelector('a');
              if (link) {
                  window.location.href = link.href; // Redirect to the link provided by doPost
              } else {
                  // Handle case where no link is provided in the response
                  console.error('No link found in response');
              }
          }).catch(error => {
              console.error('Error:', error);
          });
    };
});