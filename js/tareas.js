function agregarTarea(){
    let tarea = document.getElementById("miInput").value;

    if(tarea===""){
        alert("Por favor ingrese una tarea 📓");
        return;
    }

    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tarea + " ";

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "🗑️";
    botonEliminar.onclick = function(){nuevaTarea.remove();}

    nuevaTarea.appendChild(botonEliminar);
    document.getElementById("listaTareas").appendChild(nuevaTarea).value = "";
    

   
}