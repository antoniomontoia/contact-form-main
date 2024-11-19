document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.textContent = '');
    
    const inputs = [
        { id: 'first-name', errorMessage: 'This field is required', isValid: false },
        { id: 'last-name', errorMessage: 'This field is required', isValid: false },
        { id: 'email', errorMessage: 'Please enter a valid email address', isValid: false },
        { id: 'message', errorMessage: 'This field is required', isValid: false },
        { id: 'consent', errorMessage: 'To submit this form, please consent to being contacted', isValid: false }
    ];

    let queryTypeSelected = document.querySelector('input[name="query-type"]:checked');
    if (!queryTypeSelected) {
        inputs.push({ id: 'query-type', errorMessage: 'Please select a query type', isValid: false });
    }

    let formIsValid = true;

    inputs.forEach(input => {
        const field = document.getElementById(input.id);
        if (input.id === 'consent') {
            if (!field.checked) {
                field.nextElementSibling.nextElementSibling.textContent = input.errorMessage; // Display error message for consent
                field.nextElementSibling.nextElementSibling.style.display = 'block';
                field.nextElementSibling.nextElementSibling.style.color = 'red';
                field.parentElement.style.borderColor = 'red'; // Change border color to red
                formIsValid = false;
            } else {
                field.parentElement.style.borderColor = ''; // Reset border color
            }
        } else if (input.id === 'query-type') {
            if (!queryTypeSelected) {
                const errorMessage = document.querySelector('.error-message3');
                errorMessage.textContent = input.errorMessage; // Display error message for query type
                errorMessage.style.display = 'block';
                errorMessage.style.color = 'red';
                formIsValid = false;
            }
        } else {
            if (!field.value.trim()) {
                field.nextElementSibling.textContent = input.errorMessage; // Display error message for other fields
                field.nextElementSibling.style.display = 'block';
                field.nextElementSibling.style.color = 'red';
                field.style.borderColor = 'red'; // Change border color to red
                formIsValid = false;
            } else {
                field.style.borderColor = ''; // Reset border color
            }
        }
    });

    if (formIsValid) {
        // If the form is valid, you can submit it or perform other actions here
        alert("Form submitted successfully!"); // For demonstration purposes
    }
});