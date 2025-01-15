function validateSignInForm(event) {
    event.preventDefault();

    const usernameOrEmail = document.getElementById("txtUserName").value.trim();
    const password = document.getElementById("txtPass").value;

    // Retrieve user details from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (!usernameOrEmail || !password) {
        alert("All fields are required.");
        return false;
    }

    // Check if username/email and password match the stored values
    if (
        (usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) &&
        password === storedPassword
    ) {
        alert("Sign-in successful!");
        window.location.href = "/HTML/notFacebook.html"; // Redirect to the main page
    } else {
        alert("Invalid username/email or password.");
    }
}