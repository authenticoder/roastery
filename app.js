// Select the form element
const form = document.getElementById('contact-form');

// Listen for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the form data using EmailJS
    emailjs.sendForm('service_10yzfw2', 'template_yf9m2e3', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message Sent! Thank You For Contacting Us!');
            form.reset(); // Clear the form after successful submission
        }, function(error) {
            console.log('FAILED...', error);
            alert('Message failed to send. Please try again.');
        });
});
