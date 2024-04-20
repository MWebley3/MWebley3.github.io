    document.getElementById('contactForm').addEventListener('submit', function(event) {
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var subject = document.getElementById('subject').value.trim();
        var message = document.getElementById('message').value.trim();

        if (!name || !email || !phone || !subject || !message) {
            alert('Please fill out all required fields.');
            event.preventDefault();
        } else {
            // Form is valid, can submit
        }
    });
