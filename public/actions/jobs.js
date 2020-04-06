// Función para buscar trabajos
let form = document.getElementById("formulario");
form.addEventListener("submit",function(event){
  event.preventDefault();
  // Para poder borrar los contenidos de la lista, se debe colocar el vacio el la función de busqueda
  document.getElementById("lista").innerHTML = "";
  let localizacion = document.querySelector("#localizacion").value; 
  let search = document.querySelector("#job-desc").value;
  buscarTrabajos(localizacion, search); 
})

// Función del botón para volver al index
let button = document.getElementById("back");
button.addEventListener("click",function(event){
    window.location.href = "/" //No se pone index porque el archivo en sí mismo que es el index, se pone con /
});

// Función para que aparezcan los trabajos o el aviso que no hay
async function buscarTrabajos(localizacion, search) { //Async función asincrona
  // Estas líneas permitieron limpiar las busquedas y no se entorpeciera el asunto(JQuery)
  $('.no-jobs').html('')
  $('#jobsElements').html('')
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
     } else {
        jobs.forEach(job => {
        let d = document.createElement("div");
        d.className += "job-description";

        d.innerHTML = "Nombre de la Compañía:" + "<br>" + job.company + "<br>" + "<br>" + "Titulo:" + "<br>" 
        + job.title + "<br>" + "<br>" + "Lugar del Empleo:" + "<br>" + job.location;
        
        document.getElementById("jobsElements").append(d);
     });
    }
  } catch (e) {
    console.error(e);
  } 
}