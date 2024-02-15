document.addEventListener('DOMContentLoaded', function(event) { // 'event' here is the DOMContentLoaded event, not commonly used in this context
    document.getElementById('submitBtn').addEventListener('click', function(e) { // 'e' is the click event object
        e.preventDefault(); // Correctly using the 'e' object to prevent the default action
        window.location.href = 'https://github.com/rmharp/Zoom/blob/main/media/zoom/zoom_Part17.pdf'; // Hardcoded URL for testingggg
    });
});