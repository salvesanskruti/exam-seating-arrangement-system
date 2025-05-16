function signupUser() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const role = document.getElementById("role").value;
    const messageElement = document.getElementById("registerMessage");

    messageElement.innerHTML = ""; // Clear previous messages

    // Validate Inputs
    if (!username || !email || !password || !confirmPassword || !role) {
        messageElement.innerHTML = "<p style='color: red;'>All fields are required.</p>";
        return;
    }

    if (password !== confirmPassword) {
        messageElement.innerHTML = "<p style='color: red;'>Passwords do not match!</p>";
        return;
    }

    const userData = { username, email, password, role }; // ✅ Include role here!

    fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.message || "Signup failed.");
            });
        }
        return response.json();
    })
    .then(data => {
        messageElement.innerHTML = "<p style='color: green;'>Registration successful! Redirecting...</p>";
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    })
    .catch(error => {
        console.error("Error:", error);
        messageElement.innerHTML = `<p style='color: red;'>${error.message}</p>`;
    });
}
