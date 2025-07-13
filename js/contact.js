document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send data to a server
        console.log('Form submitted:', {
            name: name,
            email: email,
            message: message
        });
        
        // Show success message
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Reset the form
        contactForm.reset();
    });
});