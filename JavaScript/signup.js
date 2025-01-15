function validateSignupForm(event) {
    event.preventDefault();

    const username = document.getElementById("txtUserName").value.trim();
    const email = document.getElementById("txtEmail").value.trim();
    const password = document.getElementById("txtPass").value;
    const confirmPassword = document.getElementById("txtCPass").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!username) {
        alert("Username is required.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Save user details to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup successful! Please sign in.");
    window.location.href = "../index.html"; // Redirect to Sign-In page
    return true;
}