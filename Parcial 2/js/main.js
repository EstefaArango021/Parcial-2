import { mostrarServicios } from "./servicios.js";
import { mostrarColaboradores } from "./colaboradores.js";
const verMas = document.querySelector("[Vermas]")


mostrarColaboradores();
mostrarServicios();


verMas.addEventListener('click' , () => {
    let cambio = document.getElementById('more');
    if(cambio.innerHTML =='Ver_menos'){
        cambio.innerHTML = 'Ver_más'
        document.querySelector(".navbar2").style.display="none"; 
        document.querySelector("#seccion-dos").style.display="none"; 
        document.querySelector("#seccion-tres").style.display="none"; 
    }
    else{cambio.innerHTML ='Ver_menos'
    document.querySelector(".navbar2").style.display="flex"; 
    document.querySelector("#seccion-dos").style.display="flex"; 
    document.querySelector("#seccion-tres").style.display="flex"; 
}
   
});

function crearModal(){
    return `
    <div class= "contenedor-modal">
       <div class="modal">
           <h2>Bienvenidos</h2>
           <button id= "botton-cerrar">Cerrar</button>
       </div>

    </div>
    `;

}

document.body.insertAdjacentHTML("beforeend",crearModal());
const botonCerrar = document.getElementById("botton-cerrar");
const modal =document.querySelector(".contenedor-modal");
botonCerrar.addEventListener('click',() =>modal.remove());

