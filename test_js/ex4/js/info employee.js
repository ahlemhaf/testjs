function showEmployee() {
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employeeList = document.getElementById('employeeList')
    var list = ''
    for (let i = 0; i < employees.length; i++) {
      list += `
            <tr>
              <td>${employees[i].firstname}</td>
              <td>${employees[i].lastname}</td>
              <td>${employees[i].email}</td>
              <td>${employees[i].address}</td>
              <td>
                 <button class="btn btn-info" style="font-size: large;" onclick="saveIndex(${i})">Modifier</button>
                 <button class="btn btn-danger" style="font-size: large;" onclick="supprimer(${i})">Supprimer</button>
               </td>  
           </tr>`
  
    }
    employeeList.innerHTML = list
  }
  function saveIndex(i) {
    localStorage.setItem('modifierIndex',i)
  location.href="updateemployee.html"
  
  }
  
  
  function supprimer(i){
    var employees = JSON.parse(localStorage.getItem(`employees`)) || [];
    employees.splice(i, 1)
    localStorage.setItem(`employees`, JSON.stringify(employees))
    window.location.reload()
  }