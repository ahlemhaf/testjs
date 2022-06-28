function updateEmployee() {
    var firstname = document.getElementById('firstname')
    var lastname = document.getElementById('lastname')
    var email = document.getElementById('email')
    var address = document.getElementById('address')
    var has_error = false;
    if (firstname.value != '') {
        firstname.classList.add('is-valid');
        firstname.classList.remove('is-invalid')
        firstname_valid.innerText = ''
    } else {
        firstname.classList.remove('is-valid')
        firstname.classList.add('is-invalid');
        firstname_valid.innerText = 'ce champ est obligatoire';
        has_error = true;
    }

    if (lastname.value != '') {
        lastname.classList.add('is-valid');
        lastname.classList.remove('is-invalid')
        lastname_valid.innerText = ''
    } else {
        lastname.classList.remove('is-valid')
        lastname.classList.add('is-invalid');
        lastname_valid.innerText = 'ce champ est obligatoire';
        has_error = true;

    }

    if (email.value != '') {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid')
        email_valid.innerText = ''
    } else {
        email.classList.remove('is-valid')
        email.classList.add('is-invalid');
        email_valid.innerText = 'ce champ est obligatoire';
        email_error = true;
    }
    if (address.value != '') {
        address.classList.add('is-valid');
        address.classList.remove('is-invalid')
        address_valid.innerText = ''
    } else {
        address.classList.remove('is-valid')
        address.classList.add('is-invalid');
        address_valid.innerText = 'ce champ est obligatoire';
        has_error = true;
    }

    if(has_error==false){

        var employees = JSON.parse(localStorage.getItem('employees')) || [];
        var index = localStorage.getItem('updateIndex') || '';
        var employee = {
            firstname: firstname.value,
            lastname: lastname.value,
            email:email.value,
            address:address.value,
        }
        
        employees.splice(index, 1, employee)
        localStorage.setItem(`employees`, JSON.stringify(employees))
        location.href="info employee.html"
    
        
    
    }
}

var update = document.getElementById('update');
update.addEventListener('click', () => {
    updateEmployee()
})

function showData() {
    var employees = JSON.parse(localStorage.getItem(`employees`)) || [];
    var index = localStorage.getItem('updateIndex') || '';
    var employee = employees[index];

    var firstname = document.getElementById('firstname')
    firstname.value = employee.firstname
    var lastname = document.getElementById('lastname')
    lastname.value = employee.lastname
    var email = document.getElementById('email')
    email.value = employee.email
    var address = document.getElementById('address')
    address.value = employee.address

}