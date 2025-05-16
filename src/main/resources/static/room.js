document.addEventListener("DOMContentLoaded", () => {
    const dept = [
        { id: 1, name: 'CSE' },
        { id: 2, name: 'IT' },
        { id: 3, name: 'EXTC' },
        { id: 4, name: 'CIVIL' },
        { id: 5, name: 'MECH' },
        { id: 6, name: 'ELECTRICAL' },
        { id: 7, name: 'INSTRUMENTATION' },
        { id: 8, name: 'PRODUCTION' },
        { id: 9, name: 'CHEMICAL' },
        { id: 10, name: 'ADMIN' }
    ];

    loadRooms();
    loadDepartments();

    function loadDepartments() {
        const select = document.getElementById("room-department");
        select.innerHTML = dept.map(d =>
            `<option value="${d.id}">${d.name}</option>`
        ).join('');
        console.log("Loading departments from static list:", dept);
    }

    const roomForm = document.getElementById("room-form");
    const modal = document.getElementById("room-modal");
    const closeModal = modal.querySelector(".close");

    document.getElementById("add-room-btn").addEventListener("click", () => {
        openRoomModal("add");
    });

    closeModal.onclick = () => modal.style.display = "none";

    roomForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = document.getElementById("room-id").value;
        const method = document.getElementById("room-edit-mode").value === "edit" ? "PUT" : "POST";
        const endpoint = method === "POST" ? "/api/rooms" : `/api/rooms/${id}`;

        const departmentId = document.getElementById("room-department").value;

        const roomData = {
            roomNumber: document.getElementById("room-number").value,
            building: document.getElementById("room-building").value,
            capacity: parseInt(document.getElementById("room-capacity").value),
            department: { id: departmentId }
        };

        await fetch(endpoint, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(roomData)
        });

        modal.style.display = "none";
        loadRooms();
    });
});

async function loadRooms() {
    const res = await fetch("/api/rooms" , );
    const rooms = await res.json();
    const tbody = document.querySelector("#rooms-table tbody");
    tbody.innerHTML = "";

    rooms.forEach(room => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${room.id}</td>
            <td>${room.roomNumber}</td>
            <td>${room.building}</td>
            <td>${room.department ? room.department.name : ''}</td>
            <td>${room.capacity}</td>
            <td>
                <button onclick="editRoom(${room.id})">Edit</button>
                <button onclick="deleteRoom(${room.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

async function editRoom(id) {
    const res = await fetch(`/api/rooms`);
    const rooms = await res.json();
    const room = rooms.find(r => r.id === id);
    if (!room) return;

    document.getElementById("room-edit-mode").value = "edit";
    document.getElementById("room-id").value = room.id;
    document.getElementById("room-number").value = room.roomNumber;
    document.getElementById("room-building").value = room.building;
    document.getElementById("room-capacity").value = room.capacity;
    document.getElementById("room-department").value = room.department.id;
    document.getElementById("room-modal").style.display = "block";
}

async function deleteRoom(id) {
    if (confirm("Are you sure to delete this room?")) {
        await fetch(`/api/rooms/${id}`, { method: "DELETE" });
        loadRooms();
    }
}

function openRoomModal(mode) {
    document.getElementById("room-form").reset();
    document.getElementById("room-edit-mode").value = mode;
    document.getElementById("room-modal-title").innerText = "Add Room";
    document.getElementById("room-modal").style.display = "block";
}
