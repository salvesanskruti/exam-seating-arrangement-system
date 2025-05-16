const apiUrl = "/api/students"; // Adjust if your base path is different

document.addEventListener("DOMContentLoaded", () => {
    const studentTableBody = document.querySelector("tbody");
    const searchInput = document.querySelector("input[type='text']");
    const addButton = document.querySelector("#addStudentBtn");

    let students = [];

    // Fetch all students from the backend
    async function fetchStudents() {
        try {
            const res = await fetch(apiUrl);
            students = await res.json();
            renderTable(students);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    }

    // Render table
    function renderTable(data) {
        studentTableBody.innerHTML = "";
        data.forEach((student) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${student.regNo}</td>
                <td>${student.name}</td>
                <td>${student.department}</td>
                <td>${student.seatNo}</td>
                <td>
                    <button onclick="editStudent('${student.regNo}')">✏️</button>
                    <button onclick="deleteStudent('${student.regNo}')">🗑️</button>
                </td>
            `;
            studentTableBody.appendChild(row);
        });
    }

    // Add student
    window.addStudent = async function () {
        const regNo = prompt("Enter Reg No:");
        const name = prompt("Enter Name:");
        const department = prompt("Enter Department:");
        const seatNo = prompt("Enter Seat No:");

        if (regNo && name && department && seatNo) {
            try {
                const res = await fetch(apiUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ regNo, name, department, seatNo }),
                });

                if (res.ok) {
                    fetchStudents();
                } else {
                    alert("Failed to add student.");
                }
            } catch (error) {
                console.error("Error adding student:", error);
                alert("Error occurred while adding student.");
            }
        }
    };

    // Delete student
    window.deleteStudent = async function (regNo) {
        if (confirm("Are you sure you want to delete this student?")) {
            try {
                const res = await fetch(`${apiUrl}/${regNo}`, {
                    method: "DELETE",
                });

                if (res.ok) {
                    fetchStudents();
                } else {
                    alert("Delete failed. Check server response.");
                }
            } catch (error) {
                console.error("Error deleting student:", error);
                alert("Error occurred while deleting.");
            }
        }
    };

    // Edit student
    window.editStudent = async function (regNo) {
        const student = students.find(s => s.regNo === regNo);
        if (!student) return;

        const name = prompt("Edit Name:", student.name);
        const department = prompt("Edit Department:", student.department);
        const seatNo = prompt("Edit Seat No:", student.seatNo);

        if (name && department && seatNo) {
            try {
                const res = await fetch(`${apiUrl}/${regNo}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ regNo, name, department, seatNo }),
                });

                if (res.ok) {
                    fetchStudents();
                } else {
                    alert("Failed to update student.");
                }
            } catch (error) {
                console.error("Error updating student:", error);
                alert("Update failed.");
            }
        }
    };

    // Search filter
    searchInput.addEventListener("input", () => {
        const keyword = searchInput.value.toLowerCase();
        const filtered = students.filter(s =>
            s.regNo.toLowerCase().includes(keyword) ||
            s.name.toLowerCase().includes(keyword) ||
            s.department.toLowerCase().includes(keyword) ||
            s.seatNo.toLowerCase().includes(keyword)
        );
        renderTable(filtered);
    });

    // Add button listener
    addButton.addEventListener("click", addStudent);

    // Initial load
    fetchStudents();
});
