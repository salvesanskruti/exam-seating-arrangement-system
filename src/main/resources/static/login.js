function loginUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageElement = document.getElementById("loginMessage");
    const role = document.getElementById("role").value;

    if (!email || !password|| !role) {
        messageElement.innerHTML = ""; // Clear previous messages
        messageElement.innerHTML = "<p style='color: red;'>All fields are required.</p>";
        return;
    }

    fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password ,role})
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const role = data.role?.toUpperCase(); // Get role from backend response (ensure backend sends it!)

            messageElement.innerHTML = "<p style='color: green;'>Login successful! Redirecting...</p>";

            setTimeout(() => {
                // Redirect based on role
                if (role === "ADMIN") {
                    window.location.href = "admin.html";
                } else if (role === "FACULTY") {
                    window.location.href = "faculty.html";
                } else {
                    window.location.href = "visual.html"; // default
                }
            }, 1500);

        } else {
            messageElement.innerHTML = "<p style='color: red;'>Invalid credentials. Try again.</p>";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        messageElement.innerHTML = "<p style='color: red;'>Error processing request.</p>";
    });
}
