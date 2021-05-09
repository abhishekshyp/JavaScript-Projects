const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_2 = document.getElementById('password_2');

// Show Errors
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show Success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Validate Emaill
function validateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid')
    }
}

// Check Required
function checkRequired(input) {
    input.forEach(function(item) {
        if (item.value === "") {
            showError(item, `${getFieldName(item)} is required`);
        } else {
            showSuccess(item);
        }
    });
}

// Get Field Name
function getFieldName(input) {
    if (input.id === 'password_2') {
        return 'Password';
    }
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check Input Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check passwords
function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password do not match');
    } else {
        showSuccess(input2);
    }
}

// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password_2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    validateEmail(email);
    checkPassword(password, password_2);
});