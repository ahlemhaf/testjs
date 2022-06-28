function showSociete() {
  var societes = JSON.parse(localStorage.getItem('societes')) || [];
  const societeList = document.getElementById('societeList')
  var list = ''
  for (let i = 0; i < societes.length; i++) {
    list += `
          <tr>
            <td>${societes[i].nom}</td>
            <td>${societes[i].address}</td>
            <td>${societes[i].email}</td>
            <td>${societes[i].employee}</td>
            <td>
               <button class="btn btn-info" style="font-size: large;" onclick="saveIndex(${i})">Modifier</button>
               <button class="btn btn-danger" style="font-size: large;" onclick="supprimer(${i})">Supprimer</button>
             </td>  
         </tr>`

  }
  societeList.innerHTML = list
}
function saveIndex(i) {
  localStorage.setItem('modifierIndex',i)
location.href="updatesociete.html"

}


function supprimer(i){
  var societes = JSON.parse(localStorage.getItem(`societes`)) || [];
  societes.splice(i, 1)
  localStorage.setItem(`societes`, JSON.stringify(societes))
  window.location.reload()
}