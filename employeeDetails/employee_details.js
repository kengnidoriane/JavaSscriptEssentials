const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Emily Davis', age: 32, department: 'Marketing', salary: 55000 },
    { id: 5, name: 'Michael Brown', age: 40, department: 'IT', salary: 70000 },
    { id: 6, name: 'Sarah Wilson', age: 29, department: 'HR', salary: 48000 },
    { id: 7, name: 'David Miller', age: 45, department: 'Finance', salary: 75000 },
    { id: 8, name: 'Sophia Taylor', age: 27, department: 'Marketing', salary: 52000 },
    { id: 9, name: 'James Anderson', age: 38, department: 'IT', salary: 62000 },
    { id: 10, name: 'Olivia Thomas', age: 31, department: 'Sales', salary: 53000 },
    //... D'autres enregistrements d'employés peuvent être ajoutés ici
];



function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}


function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if(foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'aucun employe n\'a ete trouve avec cet ID';
    }
}