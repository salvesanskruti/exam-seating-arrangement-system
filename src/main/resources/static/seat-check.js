function checkSeat() {
    const regNumber = document.getElementById("regNumber").value;

    fetch(`http://localhost:8080/api/seats/${regNumber}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Seat details not found");
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched Data:", data);

            if (data.registrationNumber) {
                // Store seat details in localStorage
                localStorage.setItem("regNumber", data.registrationNumber);
                localStorage.setItem("seatNumber", data.seatNumber);
                localStorage.setItem("roomNumber", data.roomNumber);
                localStorage.setItem("location", data.location);

                // Redirect to result page
                window.location.href = "seat-result.html";
            } else {
                alert("Seat details not found!");
            }
        })
        .catch(error => {
            console.error("Error fetching seat data:", error);
            alert("Error fetching seat data. Please try again.");
        });
}


