document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.textContent = '');

    const successMessage = document.querySelector('.success-message');
    
    const inputs = [
        { id: 'first-name', errorMessage: 'This field is required', isValid: false },
        { id: 'last-name', errorMessage: 'This field is required', isValid: false },
        { id: 'email', errorMessage: 'Please enter a valid email address', isValid: false },
        { id: 'message', errorMessage: 'This field is required', isValid: false },
        { id: 'consent', errorMessage: 'To submit this form, please consent to being contacted', isValid: false },
        { id: 'query-type', errorMessage: 'Please select a query type', isValid: false }
    ];

    let formIsValid = true;
    let queryTypeSelected = document.querySelector('input[name="query-type"]:checked'); // Check if any radio button is selected

    // Validate inputs
    inputs.forEach(input => {
        const field = document.getElementById(input.id);
        if (input.id === 'consent') {
            if (!field.checked) {
                const errorMessage = document.querySelector('.consent .error-message'); // Target the error message for consent
                errorMessage.textContent = input.errorMessage; // Display error message for consent
                errorMessage.style.display = 'block';
                errorMessage.style.color = 'red';
                field.parentElement.style.borderColor = 'red'; // Change border color to red
                formIsValid = false;
            } else {
                field.parentElement.style.borderColor = ''; // Reset border color
            }

        } else if (input.id === 'query-type') {
            if (!queryTypeSelected) {
                const errorMessage = document.querySelector('#query-type .error-message'); // Target the error message for query type
                errorMessage.textContent = input.errorMessage; // Display error message for query type
                errorMessage.style.display = 'block';
                errorMessage.style.color = 'red';
                formIsValid = false;
            }

        } else if (input.id === 'email') {
            // Check if email is valid
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field.value)) { // This checks if the email is valid
                field.nextElementSibling.textContent = input.errorMessage; // Custom error message for email
                field.nextElementSibling.style.display = 'block';
                field.nextElementSibling.style.color = 'red';
                field.style.borderColor = 'red'; // Change border color to red
                formIsValid = false; // Mark the form as invalid
            } else {
                field.style.borderColor = ''; // Reset border color if email is valid
            }

        } else if (input.id === 'first-name' || input.id === 'last-name') {
            // Check if input is not empty
            if (!/^[a-zA-Z]+$/.test(field.value)) {
                field.nextElementSibling.textContent = input.errorMessage; // Custom error message for first name and last name
                field.nextElementSibling.style.display = 'block';
                field.nextElementSibling.style.color = 'red';
                field.style.borderColor = 'red'; // Change border color to red
                formIsValid = false; // Mark the form as invalid
            } else {
                field.style.borderColor = ''; // Reset border color if input is valid
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

    // If the form is valid, you can submit it or perform other actions here
    if (formIsValid) {
        successMessage.style.display = 'flex'; // Show the success message
        // You can also handle form submission logic here if needed
    }
});

// Add event listeners to radio buttons for changing background color of the specific toggle
const queryTypeRadios = document.querySelectorAll('input[name="query-type"]');

queryTypeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        // Reset the background color of both toggles
        queryTypeRadios.forEach(r => {
            const toggleDiv = r.parentElement; // Get the parent div of the radio button
            toggleDiv.style.backgroundColor = ''; // Reset background color
        });

        // Change the background color of the selected toggle
        const selectedToggleDiv = this.parentElement; // Get the parent div of the selected radio button
        selectedToggleDiv.style.backgroundColor = '#E0F1E7'; // Change to your desired color
    });
});