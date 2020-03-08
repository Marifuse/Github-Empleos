// Función para buscar trabajos
let form = document.getElementById("formulario");
form.addEventListener("submit",function(event){
  event.preventDefault();
  let localizacion = document.querySelector("#localizacion").value; 
  let search = document.querySelector("#job-desc").value;
  buscarTrabajos(localizacion, search); 
})

// Función del botón para volver al index (no funciona)
// let button = document.getElementById("back");
// button.addEventListener("click",function(event){
//     window.location.href = "/index"
// });

// Función para que aparezcan los trabajos o el aviso que no hay
async function buscarTrabajos(localizacion, search) { //Async función asincrona
  let url = 'https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json?' 
  + "location=" + localizacion + "&description=" + search;
  let resp = await axios.get(url); //await para que espere la tarea //axio es una libreria basada en promesas
  console.log(resp);
  try {
    let jobs = resp.data;
      if (jobs.length === 0) {
       let noJobs = document.createTextNode('No hay Trabajos en este momento. Intenta más tarde');
         document.getElementById("lista").append(noJobs);
         console.log(noJobs);
        //  Falta sacar este texto cuando se hace una nueva busqueda "noJobs.removeChild(noJobs);??"
     } else {
        jobs.forEach(job => {
        let d = document.createElement("div");
        d.className += "job-description";

        d.innerHTML = "Nombre de la Compañía:" + "<br>" + job.company + "<br>" + "<br>" + "Titulo:" + "<br>" 
        + job.title + "<br>" + "<br>" + "Lugar del Empleo:" + "<br>" + job.location;
        
        document.getElementById("jobsElements").append(d);
        // Lo mismo que arriba "jobs.removeChild(noJobs);"
     });
    }
  } catch (e) {
    console.error(e);
  } 
}