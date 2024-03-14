    // Wait for the DOM to be ready
    document.addEventListener('DOMContentLoaded', function () {
        // Get all elements with the "downButton" class
        var downButtons = document.querySelectorAll('.downButton');
        
        // Add an event listener to each element
        downButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                // Log a message when a button is clicked
                console.log('Button clicked. Redirecting to page-1.html.');

                // Redirect to "page-1.html"
                window.location.href = 'page-1.html';
            });
        });
    });