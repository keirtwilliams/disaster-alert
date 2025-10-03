
 //disaster Alert
fetch("data/alerts.json")
.then(response => response.json())
.then(alerts => {
    const tbody = document.querySelector('#alerts-table tbody');
    alerts.forEach(alert => {
        const row = document.createElement('tr');
        row.innerHTML = 
               `<td>${alert.type} </td> 
               <td>${alert.date} </td>
               <td>${alert.location} </td>
               <td>${alert.severity} </td>
               <td>${alert.description} </td>
               `;
               tbody.appendChild(row);
    });
});


   //evacuation Center
fetch("data/centers.json")
.then(res => res.json())
.then(centers => {
    const list =  document.getElementById('centers-list');
    centers.forEach(center => {
        const li = document.createElement('li');
        li.textContent = `${center.name} - ${center.address} (Hotline: ${center.hotline})`;
        list.appendChild(li);
    });
});

  //hotlines    
  fetch("data/hotlines.json")
  .then(resp => resp.json())
  .then(hotlines => {
    const list = document.getElementById('hotlines-list');
      hotlines.forEach(hotline => {
        const li = document.createElement('li');
        li.textContent = `${hotline.service}: ${hotline.contact}`;
        list.appendChild(li);
      });
  });

  //searchbar
   document.querySelector('#search-bar').addEventListener("input", (event) => {
    const typedValue = event.target.value.toLowerCase();
        const rows = document.querySelectorAll("#alerts-table tbody tr");
       rows.forEach(row => {
         const rowText = row.innerText.toLowerCase();
        if(rowText.includes(typedValue)){
             row.style.display = "";
        } else if(typedValue === ""){
          row.style.display = "none";
        }     
      });
   });
