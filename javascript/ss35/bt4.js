const employeeNameInput = document.getElementById('employeeName');
const employeePositionInput = document.getElementById('employeePosition');
const addEmployeeBtn = document.getElementById('addEmployeeBtn');
const employeeTableBody = document.getElementById('employeeTableBody');
const errorMessage = document.getElementById('errorMessage');
const paginationContainer = document.getElementById('pagination');
const employeesPerPage = 3;
let currentPage = 1;
let employees = [];
function loadEmployees() {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
        employees = JSON.parse(storedEmployees);
    } else {
        employees = [
            { name: 'Nguyễn Văn A', position: 'Developer' },
            { name: 'Trần Thị B', position: 'Designer' },
            { name: 'Phạm Văn C', position: 'Project Manager' },
            { name: 'Lê Thị D', position: 'QA Engineer' },
            { name: 'Vũ Văn E', position: 'DevOps' },
            { name: 'Hoàng Thị F', position: 'HR Manager' },
            { name: 'Đỗ Văn G', position: 'Frontend Developer' },
            { name: 'Ngô Thị H', position: 'Backend Developer' },
            { name: 'Đinh Văn I', position: 'Mobile Developer' },
            { name: 'Bùi Thị K', position: 'UI/UX Designer' }
        ];
        saveEmployees();
    }
}
function saveEmployees() {
    localStorage.setItem('employees', JSON.stringify(employees));
}
function renderEmployees() {
    employeeTableBody.innerHTML = '';
    const startIndex = (currentPage - 1) * employeesPerPage;
    const endIndex = Math.min(startIndex + employeesPerPage, employees.length);
    const currentEmployees = employees.slice(startIndex, endIndex);
    currentEmployees.forEach((employee, index) => {
        const row = document.createElement('tr');
        const sttCell = document.createElement('td');
        sttCell.textContent = startIndex + index + 1;
        row.appendChild(sttCell);
        const nameCell = document.createElement('td');
        nameCell.textContent = employee.name;
        row.appendChild(nameCell);
        const positionCell = document.createElement('td');
        positionCell.textContent = employee.position;
        row.appendChild(positionCell);
        employeeTableBody.appendChild(row);
    });
    
    renderPagination();
}
function renderPagination() {
    paginationContainer.innerHTML = '';
    
    // Calculate total pages
    const totalPages = Math.ceil(employees.length / employeesPerPage);
    
    // Create Previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderEmployees();
        }
    });
    paginationContainer.appendChild(prevButton);
    
    // Create page number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.toggle('active', i === currentPage);
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderEmployees();
        });
        paginationContainer.appendChild(pageButton);
    }
    
    // Create Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderEmployees();
        }
    });
    paginationContainer.appendChild(nextButton);
}

function addEmployee() {
    const name = employeeNameInput.value.trim();
    const position = employeePositionInput.value.trim();
    if (!name || !position) {
        errorMessage.textContent = 'Vui lòng nhập đầy đủ thông tin nhân viên!';
        return;
    }
    errorMessage.textContent = '';
    employees.push({ name, position });
    saveEmployees();

    const totalPages = Math.ceil(employees.length / employeesPerPage);
    currentPage = totalPages;
    renderEmployees();

    employeeNameInput.value = '';
    employeePositionInput.value = '';
}
addEmployeeBtn.addEventListener('click', addEmployee);
employeeNameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        employeePositionInput.focus();
    }
});

employeePositionInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addEmployee();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    loadEmployees();
    renderEmployees();
});