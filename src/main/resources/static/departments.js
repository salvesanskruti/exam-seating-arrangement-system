document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#departments-table tbody");
    const modal = document.getElementById("department-modal");
    const modalTitle = document.getElementById("department-modal-title");
    const form = document.getElementById("department-form");
    const closeModal = document.querySelector(".close");

    const addBtn = document.getElementById("add-department-btn");
    const editModeField = document.getElementById("department-edit-mode");
    const idField = document.getElementById("department-id");
    const nameField = document.getElementById("department-name");
    const codeField = document.getElementById("department-code");

    // Load departments on page load
    fetchDepartments();

    function fetchDepartments() {
        fetch("/api/departments")
            .then(res => res.json())
            .then(data => {
                tableBody.innerHTML = "";
                data.forEach(dept => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${dept.id}</td>
                        <td>${dept.name}</td>
                        <td>${dept.code}</td>
                        <td>
                            <button onclick="editDepartment(${dept.id}, '${dept.name}', '${dept.code}')">Edit</button>
                            <button onclick="deleteDepartment(${dept.id})">Delete</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            });
    }

    window.editDepartment = function(id, name, code) {
        modalTitle.textContent = "Edit Department";
        editModeField.value = "edit";
        idField.value = id;
        nameField.value = name;
        codeField.value = code;
        modal.style.display = "block";
    };

    window.deleteDepartment = function(id) {
        if (confirm("Are you sure you want to delete this department?")) {
            fetch(`/api/departments/${id}`, {
                method: "DELETE"
            })
            .then(() => fetchDepartments());
        }
    };

    addBtn.onclick = () => {
        modalTitle.textContent = "Add Department";
        editModeField.value = "add";
        idField.value = "";
        nameField.value = "";
        codeField.value = "";
        modal.style.display = "block";
    };

    closeModal.onclick = () => {
        modal.style.display = "none";
    };

    form.onsubmit = (e) => {
        e.preventDefault();
        const mode = editModeField.value;
        const id = idField.value;
        const name = nameField.value;
        const code = codeField.value;

        const department = { name, code };

        let url = "/api/departments";
        let method = "POST";

        if (mode === "edit") {
            url = `/api/departments/${id}`;
            method = "PUT";
        }

        fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(department)
        })
        .then(() => {
            modal.style.display = "none";
            fetchDepartments();
        });
    };
});
