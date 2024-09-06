document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const fullName = form.fullName.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        // Boolean to keep track of validation status
        let isValid = true;

        // Clear previous error messages
        clearErrors();

        // Validate Full Name
        if (fullName === '') {
            showError('fullName', 'Full Name is required.');
            isValid = false;
        }

        // Validate Email
        if (email === '') {
            showError('email', 'E-mail is required.');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('email', 'Please enter a valid E-mail address.');
            isValid = false;
        }

        // Validate Phone Number
        if (phone === '') {
            showError('phone', 'Phone Number is required.');
            isValid = false;
        } else if (!/^[0-9]{10}$/.test(phone)) {
            showError('phone', 'Please enter a valid phone number (10 digits).');
            isValid = false;
        }

        // Validate Subject
        if (subject === '') {
            showError('subject', 'Subject is required.');
            isValid = false;
        }

        // Validate Message
        if (message === '') {
            showError('message', 'Message is required.');
            isValid = false;
        }

        // If form is valid, you can proceed with submission
        if (isValid) {
            form.submit(); // You can replace this with your own form submission logic
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(fieldName, message) {
        const field = form.querySelector([name=${fieldName}]);
        const error = document.createElement('span');
        error.className = 'error-message';
        error.textContent = message;
        field.parentElement.appendChild(error);
    }

    function clearErrors() {
        const errors = form.querySelectorAll('.error-message');
        errors.forEach(error => error.remove());
    }
});