document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_10yzfw2', 'template_kfx8xtq', this)
      .then(function() {
        alert('Message Sent! Thank You For Contacting Us!');
      }, function(error) {
        alert('Failed to send message: ' + error);
      });
  });
  