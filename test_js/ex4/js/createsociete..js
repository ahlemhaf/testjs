function createsociete(){
    var nom = document.getElementById('nom')
    var address = document.getElementById('address')
    var email = document.getElementById('email')
    var employee = document.getElementById('employee')
    var has_error = false;
    if (nom.value != '') {
        nom.classList.add('is-valid');
        nom.classList.remove('is-invalid')
        nom_valid.innerText = ''
    } else {
        nom.classList.remove('is-valid')
        nom.classList.add('is-invalid');
        nom_valid.innerText = 'ce champ est obligatoire';
        has_error = true;

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
if (employee.value != '') {
    employee.classList.add('is-valid');
    employee.classList.remove('is-invalid')
    employee_valid.innerText = ''
} else {
    employee.classList.remove('is-valid')
    employee.classList.add('is-invalid');
    employee_valid.innerText = 'ce champ est obligatoire';
    has_error = true;

}
if(has_error==false){

    var societes = JSON.parse(localStorage.getItem('societes')) || [];
    var societe = {
        nom: nom.value,
        address: address.value,
        email:email.value,
        employee:employee.value,
    }
    societes.push(societe)
    localStorage.setItem('societes', JSON.stringify(societes))
    
    location.href ='info societe.html'
}


}

var ajouter = document.getElementById('ajouter');
ajouter.addEventListener('click', () => {
    createsociete()
})
