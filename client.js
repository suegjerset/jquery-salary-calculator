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

function displayEmployee() {
    console.log( 'in displayEmployee');
} // end displayEmployee

function readyNow() {
    console.log( 'JQ loaded!' );
    // click listener
    $('#addEmployeeButton').on('click', addEmployee);
} // end readyNow
