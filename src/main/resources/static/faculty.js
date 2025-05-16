// Faculty data
const facultyData = {
    jp: {
        name: "Dr. kulkarni Prashant",
        department: "Computer Science Department",
        initials: "JP",
        allocations: [
            {
                id: 1,
                course: "CS301: Data Structures - Final Exam",
                date: "Apr 25, 2025",
                time: "10:00 AM - 1:00 PM",
                center: "Main Hall, Block A",
                students: 45,
                role: "Invigilator"
            },
            {
                id: 2,
                course: "CS405: Machine Learning - Final Exam",
                date: "Apr 26, 2025",
                time: "2:00 PM - 5:00 PM",
                center: "Computer Lab 2, Block C",
                students: 32,
                role: "Examiner"
            },
            {
                id: 3,
                course: "CS202: Algorithms - Final Exam",
                date: "Apr 28, 2025",
                time: "9:00 AM - 12:00 PM",
                center: "Lecture Hall 5, Block B",
                students: 38,
                role: "Invigilator"
            }
        ]
    },
    sj: {
        name: "Prof. Sarah Johnson",
        department: "Computer Science Department",
        initials: "SJ",
        allocations: [
            {
                id: 4,
                course: "CS101: Introduction to Programming - Final Exam",
                date: "Apr 27, 2025",
                time: "1:00 PM - 3:00 PM",
                center: "Main Hall, Block A",
                students: 50,
                role: "Chief Invigilator"
            },
            {
                id: 5,
                course: "CS301: Data Structures - Final Exam",
                date: "Apr 25, 2025",
                time: "10:00 AM - 1:00 PM",
                center: "Main Hall, Block A",
                students: 45,
                role: "Chief Invigilator"
            }
        ]
    },
    rl: {
        name: "Dr. Meheta",
        department: "Chemical Department",
        initials: "RL",
        allocations: [
            {
                id: 6,
                course: "MATH201: Calculus II - Final Exam",
                date: "Apr 26, 2025",
                time: "9:00 AM - 12:00 PM",
                center: "CH-2",
                students: 40,
                role: "Examiner"
            },
            {
                id: 7,
                course: "CS301:OOP in Java - Final Exam",
                date: "Apr 25, 2025",
                time: "10:00 AM - 1:00 PM",
                center: "CH-1",
                students: 45,
                role: "Invigilator"
            }
        ]
    },
    am: {
        name: "Dr. Amey Mehta",
        department: "EXTC Department",
        initials: "AM",
        allocations: [
            {
                id: 8,
                course: "PHYS101: Microprocessor and interfacing - Final Exam",
                date: "Apr 29, 2025",
                time: "03:00 AM - 05:00 PM",
                center: "EN1",
                students: 35,
                role: "Examiner"
            }
        ]
    },
    db: {
        name: "Prof. deshmukh B",
        department: "IT Department",
        initials: "DB",
        allocations: [
            {
                id: 9,
                course: "ENG301: Data Structure - Final Exam",
                date: "May 2, 2025",
                time: "2:00 PM - 5:00 PM",
                center: "it Lab 2",
                students: 25,
                role: "Examiner"
            },
            {
                id: 10,
                course: "ENG205:Mathematics - Final Exam",
                date: "Apr 30, 2025",
                time: "9:00 AM - 12:00 PM",
                center: "IT2",
                students: 30,
                role: "Invigilator"
            }
        ]
    }
};

// Student data (mock)
const studentData = {
    // CS301 students
    1: [
        { id: "2023BCS001", name: "ram", seat: "A12", program: "B.Sc Computer Science", status: "present" },
        { id: "2023BCS002", name: "sam", seat: "A13", program: "B.Sc Computer Science", status: "present" },
        { id: "2023BCS003", name: "dam", seat: "A14", program: "B.Sc Computer Science", status: "absent"},
        { id: "2023BCS004", name: "kam", seat: "A15", program: "B.Sc Computer Science", status: "present"},
        { id: "2023BCS005", name: "wan", seat: "A16", program: "B.Sc Computer Engineering", status: "present" }
    ],
    // CS405 students
    2: [
        { id: "2023BCS010", name: "anaya", seat: "B01", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS011", name: "Alia", seat: "B02", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS012", name: "Khushi", seat: "B03", program: "B.Sc Data Science", status: "absent",  },
        { id: "2023BCS013", name: "Tiger", seat: "B04", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS014", name: "rajkumar", seat: "B05", program: "B.Sc Computer Engineering", status: "present",  }
    ],

    3 : [
        { id: "2023BCS001", name: "ram", seat: "A12", program: "B.Sc Computer Science", status: "present" },
        { id: "2023BCS002", name: "sam", seat: "A13", program: "B.Sc Computer Science", status: "present" },
        { id: "2023BCS003", name: "dam", seat: "A14", program: "B.Sc Computer Science", status: "absent"},
        { id: "2023BCS004", name: "kam", seat: "A15", program: "B.Sc Computer Science", status: "present"},
        { id: "2023BCS005", name: "wan", seat: "A16", program: "B.Sc Computer Engineering", status: "present" }
    ],
    // CS405 students
    4: [
        { id: "2023BCS010", name: "anaya", seat: "B01", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS011", name: "Alia", seat: "B02", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS012", name: "Khushi", seat: "B03", program: "B.Sc Data Science", status: "absent",  },
        { id: "2023BCS013", name: "Tiger", seat: "B04", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS014", name: "rajkumar", seat: "B05", program: "B.Sc Computer Engineering", status: "present",  }
    ],
    5: [
        { id: "2023BCS001", name: "ram", seat: "A12", program: "B.Sc Computer Science", status: "present" },
        { id: "2023BCS002", name: "sam", seat: "A13", program: "B.Sc Computer Science", status: "present" },
        { id: "2023BCS003", name: "dam", seat: "A14", program: "B.Sc Computer Science", status: "absent"},
        { id: "2023BCS004", name: "kam", seat: "A15", program: "B.Sc Computer Science", status: "present"},
        { id: "2023BCS005", name: "wan", seat: "A16", program: "B.Sc Computer Engineering", status: "present" }
    ],
    // CS405 students
    6: [
        { id: "2023BCS010", name: "anaya", seat: "B01", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS011", name: "Alia", seat: "B02", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS012", name: "Khushi", seat: "B03", program: "B.Sc Data Science", status: "absent",  },
        { id: "2023BCS013", name: "Tiger", seat: "B04", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS014", name: "rajkumar", seat: "B05", program: "B.Sc Computer Engineering", status: "present",  }
    ],
    7 : [
        { id: "2023BCS001", name: "ram", seat: "A12", program: "B.Sc Computer Science", status: "present" },
        { id: "2023BCS002", name: "sam", seat: "A13", program: "B.Sc Computer Science", status: "present" },
        { id: "2023BCS003", name: "dam", seat: "A14", program: "B.Sc Computer Science", status: "absent"},
        { id: "2023BCS004", name: "kam", seat: "A15", program: "B.Sc Computer Science", status: "present"},
        { id: "2023BCS005", name: "wan", seat: "A16", program: "B.Sc Computer Engineering", status: "present" }
    ],
    // CS405 students
    8: [
        { id: "2023BCS010", name: "anaya", seat: "B01", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS011", name: "Alia", seat: "B02", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS012", name: "Khushi", seat: "B03", program: "B.Sc Data Science", status: "absent",  },
        { id: "2023BCS013", name: "Tiger", seat: "B04", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS014", name: "rajkumar", seat: "B05", program: "B.Sc Computer Engineering", status: "present",  }
    ],
    9 : [
        { id: "2023BCS001", name: "ram", seat: "A12", program: "B.Sc Computer Science", status: "present" },
        { id: "2023BCS002", name: "sam", seat: "A13", program: "B.Sc Computer Science", status: "present" },
        { id: "2023BCS003", name: "dam", seat: "A14", program: "B.Sc Computer Science", status: "absent"},
        { id: "2023BCS004", name: "kam", seat: "A15", program: "B.Sc Computer Science", status: "present"},
        { id: "2023BCS005", name: "wan", seat: "A16", program: "B.Sc Computer Engineering", status: "present" }
    ],
    // CS405 students
    10: [
        { id: "2023BCS010", name: "anaya", seat: "B01", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS011", name: "Alia", seat: "B02", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS012", name: "Khushi", seat: "B03", program: "B.Sc Data Science", status: "absent",  },
        { id: "2023BCS013", name: "Tiger", seat: "B04", program: "B.Sc Computer Science", status: "present",  },
        { id: "2023BCS014", name: "rajkumar", seat: "B05", program: "B.Sc Computer Engineering", status: "present",  }
    ]
};

// DOM elements
const facultySelect = document.getElementById('facultySelect');
const roomAllocationsDiv = document.getElementById('roomAllocations');
const studentListContent = document.getElementById('studentListContent');
const attendanceContent = document.getElementById('attendanceContent');
const userName = document.getElementById('userName');
const userDepartment = document.getElementById('userDepartment');
const userInitials = document.getElementById('userInitials');

// Modal elements
const studentListModal = document.getElementById('studentListModal');
const attendanceModal = document.getElementById('attendanceModal');
const addFacultyModal = document.getElementById('addFacultyModal');

// Buttons
const addFacultyBtn = document.getElementById('addFacultyBtn');
const markAttendanceBtn = document.getElementById('markAttendanceBtn');
const saveAttendanceBtn = document.getElementById('saveAttendanceBtn');
const addFacultySubmitBtn = document.getElementById('addFacultySubmitBtn');

// Close buttons
const closeStudentListModal = document.getElementById('closeStudentListModal');
const closeStudentListBtn = document.getElementById('closeStudentListBtn');
const closeAttendanceModal = document.getElementById('closeAttendanceModal');
const closeAttendanceBtn = document.getElementById('closeAttendanceBtn');
const closeAddFacultyModal = document.getElementById('closeAddFacultyModal');
const cancelAddFacultyBtn = document.getElementById('cancelAddFacultyBtn');

// Download buttons
const downloadAttendanceBtn = document.getElementById('downloadAttendanceBtn');
const downloadAttendanceBtn2 = document.getElementById('downloadAttendanceBtn2');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadFacultyData('jp');
    setupEventListeners();
});

// Set up event listeners
function setupEventListeners() {
    // Faculty selector
    facultySelect.addEventListener('change', function() {
        loadFacultyData(this.value);
    });
    
    // Add faculty button
    addFacultyBtn.addEventListener('click', showAddFacultyModal);
    
    // Modal close buttons
    closeStudentListModal.addEventListener('click', () => closeModal(studentListModal));
    closeStudentListBtn.addEventListener('click', () => closeModal(studentListModal));
    closeAttendanceModal.addEventListener('click', () => closeModal(attendanceModal));
    closeAttendanceBtn.addEventListener('click', () => closeModal(attendanceModal));
    closeAddFacultyModal.addEventListener('click', () => closeModal(addFacultyModal));
    cancelAddFacultyBtn.addEventListener('click', () => closeModal(addFacultyModal));
    
    // Action buttons
    markAttendanceBtn.addEventListener('click', markAttendance);
    saveAttendanceBtn.addEventListener('click', saveAttendance);
    addFacultySubmitBtn.addEventListener('click', addNewFaculty);
    
    // Download buttons
    downloadAttendanceBtn.addEventListener('click', downloadAttendanceSheet);
    downloadAttendanceBtn2.addEventListener('click', downloadAttendanceSheet);
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === studentListModal) {
            closeModal(studentListModal);
        }
        if (event.target === attendanceModal) {
            closeModal(attendanceModal);
        }
        if (event.target === addFacultyModal) {
            closeModal(addFacultyModal);
        }
    });
}

// Load faculty data
function loadFacultyData(facultyId) {
    const faculty = facultyData[facultyId];
    
    // Update header
    userName.textContent = faculty.name;
    userDepartment.textContent = faculty.department;
    userInitials.textContent = faculty.initials;
    
    // Clear existing room allocations
    roomAllocationsDiv.innerHTML = '';
    
    // Add room allocations
    faculty.allocations.forEach(allocation => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let tomorrow = '';
        if (allocation.date === 'Apr 25, 2025') {
            tomorrow = ' <span style="background-color: #fff3cd; color: #856404; padding: 3px 8px; border-radius: 20px; font-size: 12px; font-weight: 500;">Tomorrow</span>';
        }
        
        card.innerHTML = `
            <div class="card-title">${allocation.course}${tomorrow}</div>
            <div style="margin-bottom: 10px;">
                <div><strong>Date:</strong> ${allocation.date}</div>
                <div><strong>Time:</strong> ${allocation.time}</div>
                <div><strong>Center:</strong> ${allocation.center}</div>
                <div><strong>Students:</strong> ${allocation.students}</div>
                <div><strong>Role:</strong> ${allocation.role}</div>
            </div>
            <div>
                <button class="button view-student-list" data-exam-id="${allocation.id}">View Student List</button>
            </div>
        `;
        
        roomAllocationsDiv.appendChild(card);
    });
    
    // Add event listeners to view student list buttons
    document.querySelectorAll('.view-student-list').forEach(button => {
        button.addEventListener('click', function() {
            viewStudentList(parseInt(this.dataset.examId));
        });
    });
}

// View student list
function viewStudentList(examId) {
    // Get students for this exam
    const students = studentData[examId] || [];
    
    // Find allocation details
    let allocation;
    for (const faculty in facultyData) {
        const found = facultyData[faculty].allocations.find(a => a.id === examId);
        if (found) {
            allocation = found;
            break;
        }
    }
    
    if (!allocation) return;
    
    // Populate student list modal
    let html = `
        <div style="margin-bottom: 15px;">
            <h3>${allocation.course}</h3>
            <p>Date: ${allocation.date} | Time: ${allocation.time} | Center: ${allocation.center}</p>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Seat Number</th>
                    <th>Program</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    students.forEach(student => {
        html += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.seat}</td>
                <td>${student.program}</td>
            </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
    `;
    
    studentListContent.innerHTML = html;
    studentListContent.dataset.examId = examId;
    
    // Show modal
    openModal(studentListModal);
}

// Mark attendance
function markAttendance() {
    const examId = studentListContent.dataset.examId;
    const students = studentData[examId] || [];
    
    // Find allocation details
    let allocation;
    for (const faculty in facultyData) {
        const found = facultyData[faculty].allocations.find(a => a.id === parseInt(examId));
        if (found) {
            allocation = found;
            break;
        }
    }
    
    if (!allocation) return;
    
    // Populate attendance modal
    let html = `
        <div style="margin-bottom: 15px;">
            <h3>${allocation.course}</h3>
            <p>Date: ${allocation.date} | Time: ${allocation.time} | Center: ${allocation.center}</p>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Seat</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    students.forEach((student, index) => {
        html += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.seat}</td>
                <td>
                    <select id="status-${student.id}" data-index="${index}">
                        <option value="present" ${student.status === 'present' ? 'selected' : ''}>Present</option>
                        <option value="absent" ${student.status === 'absent' ? 'selected' : ''}>Absent</option>
                    </select>
                </td>
            </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
    `;
    
    attendanceContent.innerHTML = html;
    attendanceContent.dataset.examId = examId;
    
    // Close student list modal and open attendance modal
    closeModal(studentListModal);
    openModal(attendanceModal);
}

// Save attendance
function saveAttendance() {
    const examId = attendanceContent.dataset.examId;
    const students = studentData[examId] || [];
    
    // Update status based on selections
    students.forEach((student, index) => {
        const select = document.getElementById(`status-${student.id}`);
        student.status = select.value;
        
        if (student.status === 'present' && student.checkin === '-') {
            // If student marked present and had no check-in time, add current time
            const now = new Date();
            const hours = now.getHours() % 12 || 12;
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
            student.checkin = `${hours}:${minutes} ${ampm}`;
        }
        
        if (student.status === 'absent') {
            student.checkin = '-';
        }
    });
    
    alert("Attendance saved successfully!");
    closeModal(attendanceModal);
}

// Download attendance sheet as PDF
function downloadAttendanceSheet() {
    const examId = studentListContent.dataset.examId || 
                  attendanceContent.dataset.examId;
    
    const students = studentData[examId] || [];
    
    // Find allocation details
    let allocation;
    for (const faculty in facultyData) {
        const found = facultyData[faculty].allocations.find(a => a.id === parseInt(examId));
        if (found) {
            allocation = found;
            break;
        }
    }
    
    // In a real application, this would generate a PDF
    // For demo purposes, we'll show an alert
    alert(`Attendance sheet for ${allocation.course} on ${allocation.date} downloaded as PDF. (${students.length} students)`);
}

// Add new faculty
function showAddFacultyModal() {
    openModal(addFacultyModal);
}

function addNewFaculty() {
    const title = document.getElementById('newFacultyTitle').value;
    const name = document.getElementById('newFacultyName').value;
    const dept = document.getElementById('newFacultyDept').value;
    const email = document.getElementById('newFacultyEmail').value;
    
    if (!name || !dept) {
        alert("Please fill in all required fields");
        return;
    }
    
    // Generate initials from name
    const nameParts = name.split(' ');
    let initials = '';
    if (nameParts.length >= 2) {
        initials = (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
    } else {
        initials = name.substring(0, 2).toUpperCase();
    }
    
    // In a real application, this would save to a database
    // For demo purposes, we'll show a success message
    alert(`Faculty ${title} ${name} added successfully!`);
    closeModal(addFacultyModal);
    
    // Reset form
    document.getElementById('newFacultyName').value = '';
    document.getElementById('newFacultyDept').value = '';
    document.getElementById('newFacultyEmail').value = '';
}

// Modal functionality
function openModal(modal) {
    modal.style.display = 'flex';
}

function closeModal(modal) {
    modal.style.display = 'none';
}

document.getElementById('logoutBtn').addEventListener('click', function () {
    // Clear session storage/localStorage (if used)
    localStorage.clear();

    // Redirect to login page
    window.location.href = 'index.html'; // Adjust as per your setup
});
