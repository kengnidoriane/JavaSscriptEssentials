const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Java' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'JavaScript' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'ReactJs' },
    { id: 4, name: 'Emily Davis', age: 32, department: 'Marketing', salary: 55000, specialization: 'NodeJs' },
    { id: 5, name: 'Michael Brown', age: 40, department: 'IT', salary: 70000, specialization: 'Python' },
    { id: 6, name: 'Sarah Wilson', age: 29, department: 'HR', salary: 48000, specialization: 'JavaScript' },
    { id: 7, name: 'David Miller', age: 45, department: 'Finance', salary: 75000, specialization: 'Kotlin' },
    { id: 8, name: 'Sophia Taylor', age: 27, department: 'Marketing', salary: 52000, specialization: 'Swift' },
    { id: 9, name: 'James Anderson', age: 38, department: 'IT', salary: 62000, specialization: 'JavaScript' },
    { id: 10, name: 'Olivia Thomas', age: 31, department: 'Sales', salary: 53000, specialization: 'Go' },
    //... D'autres enregistrements d'employés peuvent être ajoutés ici
];



function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}


function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if(foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'aucun employe n\'a ete trouve avec cet ID';
    }
}

function findEmployeeBySpecialization(EmployeeSpecialization) {
    const foundEmployeeJs = employees.find(employee => employee.specialization === EmployeeSpecialization);
    console.log(foundEmployeeJs);
    if(foundEmployeeJs) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployeeJs.id}: ${foundEmployeeJs.name}: ${foundEmployeeJs.name} - ${foundEmployeeJs.department} - $${foundEmployeeJs.salary} - ${foundEmployeeJs.specialization}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'aucun employe n\'a ete trouve avec cet ID';
    }
}