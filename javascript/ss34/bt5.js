const employeeNameInput = document.getElementById('employeeName');
        const employeePositionInput = document.getElementById('employeePosition');
        const addEmployeeBtn = document.getElementById('addEmployeeBtn');
        const employeeTableBody = document.getElementById('employeeTableBody');
        const errorMessage = document.getElementById('errorMessage');
        
        let employees = [];
        function loadEmployees() {
            const storedEmployees = localStorage.getItem('employees');
            if (storedEmployees) {
                employees = JSON.parse(storedEmployees);
            } else {
                employees = [
                    { name: 'Nguyễn Văn A', position: 'Developer' },
                    { name: 'Trần Thị B', position: 'Designer' },
                    { name: 'Phạm Văn C', position: 'Project Manager' }
                ];
                saveEmployees();
            }
        }
        
        function saveEmployees() {
            localStorage.setItem('employees', JSON.stringify(employees));
        }

        function renderEmployees() {
            employeeTableBody.innerHTML = '';

            employees.forEach((employee, index) => {
                const row = document.createElement('tr');

                const sttCell = document.createElement('td');
                sttCell.textContent = index + 1;
                row.appendChild(sttCell);
                
                const nameCell = document.createElement('td');
                nameCell.textContent = employee.name;
                row.appendChild(nameCell);
                
                const positionCell = document.createElement('td');
                positionCell.textContent = employee.position;
                row.appendChild(positionCell);
                employeeTableBody.appendChild(row);
            });
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