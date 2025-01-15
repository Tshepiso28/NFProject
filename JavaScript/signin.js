const signinForm = document.getElementById('signinForm');
const signinUsername = document.getElementById('txtUserName');
const signinPassword = document.getElementById('txtPass');

const signinUsernameError = document.getElementById('usernameError');
const signinPasswordError = document.getElementById('passwordError');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;

    const userData = JSON.parse(localStorage.getItem('userData')) || {};


    if (signinUsername.value.trim() === '') {
        signinUsernameError.textContent = 'Username is required.';
        isValid = false;
    } else if (signinUsername.value.trim() !== userData.username) {
        signinUsernameError.textContent = 'Username not found.';
        isValid = false;
    } else {
        signinUsernameError.textContent = '';
    }


    if (signinPassword.value.trim() === '') {
        signinPasswordError.textContent = 'Password is required.';
        isValid = false;
    } else if (signinPassword.value.trim() !== userData.password) {
        signinPasswordError.textContent = 'Incorrect password.';
        isValid = false;
    } else {
        signinPasswordError.textContent = '';
    }

    if (isValid) {
        alert('Sign-in successful!');
        sessionStorage.setItem('isLoggedIn', true);
        window.location.href = '/HTML/notFacebook.html';
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

toggleVisibility(signinPassword, document.getElementById('togglePass'));
