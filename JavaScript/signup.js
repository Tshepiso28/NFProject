const form = document.getElementById('signupForm');
const username = document.getElementById('txtUserName');
const email = document.getElementById('txtEmail');
const phone = document.getElementById('txtNumber');
const password = document.getElementById('txtPass');
const confirmPassword = document.getElementById('txtCPass');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const togglePass = document.getElementById('togglePass');
const toggleCPass = document.getElementById('toggleCPass');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;


    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required.';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Enter a valid email.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }


    const phoneRegex = /^\(\d{3}\) \d{3} \d{4}$/;
    if (!phoneRegex.test(phone.value.trim())) {
        phoneError.textContent = 'Enter a valid phone number (e.g., (123) 456 7890).';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }


    if (password.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }


    if (confirmPassword.value.trim() !== password.value.trim()) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    if (isValid) {

        const userData = {
            username: username.value.trim(),
            email: email.value.trim(),
            phone: phone.value.trim(),
            password: password.value.trim(),
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Sign-up successful! Your account has been created.');
        window.location.href = '../HTML/signup.html'; 
    }
});


const toggleVisibility = (input, button) => {
    button.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text';
            button.textContent = 'Hide';
        } else {
            input.type = 'password';
            button.textContent = 'Show';
        }
    });
};

toggleVisibility(password, togglePass);
toggleVisibility(confirmPassword, toggleCPass);
