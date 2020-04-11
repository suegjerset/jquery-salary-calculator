$(document).ready(readyNow);

let employees = [];

function addEmployee() {
    console.log( 'in addEmployee' );
    // check that all input boxes have values
    if ($('#firstNameInput').val() === '' || 
        $('#lastNameInput').val() === '' ||
        $('#idInput').val() === '' ||
        $('#titleInput').val() === '' || 
        $('#annualSalaryInput').val() === '') {
        alert('all fields are required')
    } // end check input boxes
    else {
        // get user inputs & place into an object
        let employeeToAdd = {
            first: $('#firstNameInput').val(),
            last: $('#lastNameInput').val(),
            id: $('#idInput').val(),
            title: $('#titleInput').val(),
            salary: $('#annualSalaryInput').val(),
        } // end employeeToAdd
        console.log('employeeToAdd:', employeeToAdd);
        // push object into employee array
        employees.push(employeeToAdd);
        // empty input
        $('#firstNameInput').val('');
        $('#lastNameInput').val('');
        $('#idInput').val('');
        $('#titleInput').val('');
        $('#annualSalaryInput').val('');
        displayEmployee();
    } // end user inputs
} // end addEmployee

function calculateMonthlyCost() {
    console.log( 'in calculateMonthlyCost' );
    // loop through employees array
    let totalSalaries = 0;
    for ( employee of employees ) {
        // for each employee, add up all annual salaries
        totalSalaries += Number(employee.salary);
    } // end for loop
    console.log( 'totalSalaries: $', totalSalaries );
    // divide totalSalaries by 12 to get monthly cost
    let monthlyCost = totalSalaries / 12;
    // display monthlyCost
    // target element by id
    let el = $( '#totalCostOutput' );
    // empty it
    el.empty();
    // append to DOM
    el.append( monthlyCost );
} // end calculateMonthlyCost

function displayEmployee() {
    console.log( 'in displayEmployee');
    // target output ul by ID
    let el = $('#employeeOutput');
    // empty ul
    el.empty();
    // loop through employees array
    for ( employee of employees ) {
        // append each item to ul
        el.append(`<li>
        ${ employee.first }
        ${ employee.last }
        ${ employee.id }
        ${ employee.title }
        ${ employee.salary }
        </li>`)
    } // end for
    // calculate total monthly cost
    calculateMonthlyCost();
} // end displayEmployee

function readyNow() {
    console.log( 'JQ loaded!' );
    // click listener
    $('#addEmployeeButton').on('click', addEmployee);
} // end readyNow
