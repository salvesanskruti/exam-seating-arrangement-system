// DOM Elements
const departmentSelect = document.getElementById('layout-department');
const roomSelect = document.getElementById('layout-room');
const viewLayoutBtn = document.getElementById('view-layout');
const roomLayout = document.getElementById('room-layout');

// Sample data (replace with actual API calls)
const departments = [
  { id: 1, name: 'CSE' },
  { id: 2, name: 'IT' },
  { id: 3, name: 'EXTC' },
  { id: 4, name: 'CIVIL' },
  { id: 5, name: 'MECH' },
  { id: 6, name: 'ELECTRICAL' },
  { id: 7, name: 'INTRUMENTATION' },
  { id: 8, name: 'PRODUCTION' },
  { id: 9, name: 'CHEMICAL' },
  { id: 10, name: 'ADMIN' }
];

const rooms = [
  { id: 1, name: 'CS1', departmentId: 1 },
  { id: 2, name: 'CS2', departmentId: 1 },
  { id: 3, name: 'IT1', departmentId: 2 },
  { id: 4, name: 'IT2', departmentId: 2 },
  { id: 5, name: 'EX1', departmentId: 3 },
  { id: 6, name: 'EX2', departmentId: 3 },
  { id: 7, name: 'CE1', departmentId: 4 },
  { id: 8, name: 'CE2', departmentId: 4 },
  { id: 9, name: 'ME1', departmentId: 5 },
  { id: 10, name: 'ME2', departmentId: 5 },
  { id: 11, name: 'EE1', departmentId: 6 },
  { id: 12, name: 'EE2', departmentId: 6 },
  { id: 13, name: 'IN1', departmentId: 7 },
  { id: 14, name: 'IN2', departmentId: 7 },
  { id: 15, name: 'PR1', departmentId: 8 },
  { id: 16, name: 'PR2', departmentId: 8 },
  { id: 17, name: 'CH1', departmentId: 9 },
  { id: 18, name: 'CH2', departmentId: 9 },
  { id: 19, name: 'AB1', departmentId: 10 },
  { id: 20, name: 'AB2', departmentId: 10 },
  { id: 21, name: 'AB3', departmentId: 10 },
  { id: 22, name: 'AB4', departmentId: 10 },
  ];

// Sample seating layouts
const seatingLayouts = {
  1: generateGridSeating(5, 6),
  2: generateOpenSpaceSeating(20),
  3: generateConferenceSeating(12),
  4: generateRoundTableSeating(8),
  5: generateGridSeating(5, 6),
  6: generateGridSeating(5, 6),
    7: generateGridSeating(5, 6),
    8: generateGridSeating(5, 6),
    9: generateGridSeating(5, 6),
    10: generateGridSeating(5, 6),
    11: generateGridSeating(5, 6),
    12: generateGridSeating(5, 6),
    13: generateGridSeating(5, 6),
    14: generateGridSeating(5, 6),
    15: generateGridSeating(5, 6),
    16: generateGridSeating(5, 6),
    17: generateGridSeating(5, 6),
    18: generateGridSeating(5, 6),
    19: generateGridSeating(5, 6),
    20: generateGridSeating(5, 6),
    21: generateGridSeating(5, 6),
    22: generateGridSeating(5, 6),

};

// Initialize the page
function init() {
  populateDepartments();
  setupEventListeners();
}

// Populate department dropdown
function populateDepartments() {
  departments.forEach(dept => {
    const option = document.createElement('option');
    option.value = dept.id;
    option.textContent = dept.name;
    departmentSelect.appendChild(option);
  });
}

// Setup event listeners
function setupEventListeners() {
  departmentSelect.addEventListener('change', handleDepartmentChange);
  viewLayoutBtn.addEventListener('click', displaySeatingLayout);
}

// Handle department selection change
function handleDepartmentChange() {
  const selectedDeptId = parseInt(departmentSelect.value);
  
  // Clear current room options
  roomSelect.innerHTML = '<option value="">Select Room</option>';
  
  if (!selectedDeptId) return;
  
  // Filter and add room options for selected department
  const departmentRooms = rooms.filter(room => room.departmentId === selectedDeptId);
  departmentRooms.forEach(room => {
    const option = document.createElement('option');
    option.value = room.id;
    option.textContent = room.name;
    roomSelect.appendChild(option);
  });
}

// Display seating layout
function displaySeatingLayout() {
  const selectedDeptId = parseInt(departmentSelect.value);
  const selectedRoomId = parseInt(roomSelect.value);
  
  if (!selectedDeptId || !selectedRoomId) {
    roomLayout.innerHTML = '<p class="empty-state">Please select both department and room</p>';
    return;
  }
  
  const selectedDept = departments.find(dept => dept.id === selectedDeptId);
  const selectedRoom = rooms.find(room => room.id === selectedRoomId);
  
  if (!selectedDept || !selectedRoom) {
    roomLayout.innerHTML = '<p class="empty-state">Invalid selection</p>';
    return;
  }
  
  const layout = seatingLayouts[selectedRoomId];
  
  // Display the seating layout with header info
  roomLayout.innerHTML = `
    <div class="layout-header">
      <h4>${selectedRoom.name}</h4>
      <p>Department: ${selectedDept.name}</p>
    </div>
    <div class="layout-grid">
      ${layout}
    </div>
  `;
}

// Helper function to generate grid-style seating layout
function generateGridSeating(rows, cols) {
  let html = '<div class="seating-grid">';
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const seatId = `seat-${i}-${j}`;
      html += `
        <div class="seat" id="${seatId}">
          <div class="desk"></div>
          <div class="chair"></div>
          <span class="seat-label">Desk ${i*cols + j + 1}</span>
        </div>
      `;
    }
  }
  
  html += '</div>';
  return html;
}

// Helper function to generate open space seating
function generateOpenSpaceSeating(count) {
  let html = '<div class="open-space-seating">';
  
  for (let i = 0; i < count; i++) {
    html += `
      <div class="seat open-space" id="open-seat-${i+1}">
        <div class="desk"></div>
        <div class="chair"></div>
        <span class="seat-label">Desk ${i+1}</span>
      </div>
    `;
  }
  
  html += '</div>';
  return html;
}

// Helper function to generate conference room seating
function generateConferenceSeating(seats) {
  let html = '<div class="conference-seating">';
  html += '<div class="conference-table"></div>';
  
  for (let i = 0; i < seats; i++) {
    const angle = (i / seats) * 2 * Math.PI;
    const left = 50 + 35 * Math.cos(angle);
    const top = 50 + 35 * Math.sin(angle);
    
    html += `
      <div class="chair conference" id="conf-seat-${i+1}" style="left: ${left}%; top: ${top}%">
        <span class="seat-label">Seat ${i+1}</span>
      </div>
    `;
  }
  
  html += '</div>';
  return html;
}

// Helper function to generate round table seating
function generateRoundTableSeating(seats) {
  let html = '<div class="round-table-seating">';
  html += '<div class="round-table"></div>';
  
  for (let i = 0; i < seats; i++) {
    const angle = (i / seats) * 2 * Math.PI;
    const left = 50 + 40 * Math.cos(angle);
    const top = 50 + 40 * Math.sin(angle);
    
    html += `
      <div class="chair round-table" id="rt-seat-${i+1}" style="left: ${left}%; top: ${top}%">
        <span class="seat-label">Seat ${i+1}</span>
      </div>
    `;
  }
  
  html += '</div>';
  return html;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);