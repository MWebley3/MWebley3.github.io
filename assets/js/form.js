document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    var phoneRegex = /^\d{3}-\d{3}-\d{4}$/; // Regular expression for phone number format

    if (!name || !email || !phone || !subject || !message) {
        alert('Please fill out all required fields.');
        event.preventDefault();
    } else if (!phone.match(phoneRegex)) {
        alert('Please enter a valid phone number in the format "213-587-9143".');
        event.preventDefault();
    } else {
        // Form is valid, can submit
    }
});
