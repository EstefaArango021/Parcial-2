function crearServicio({imgurl, titulo, descripcion}){
    return `
       <div class="card">
       <img class="" src=${imgurl.toString()} alt="imagen producto"
       <div class= "card-body"
       <h5 class="card-title">
       ${titulo}
     </h5>
     <p class="card-text">${descripcion}</p>
   </div>
 </div>
   `;
}

const dataServicios = [
    {imgurl: "Imagenes/cafe.jpeg", titulo:"Café", descripcion: `Una amplia variedad de café, que incluye opciones como espresso, café americano, cappuccino, latte, macchiato, entre otros.`
    },
    {imgurl: "Imagenes/Te.jpeg",titulo:"Té", descripcion:`Una selección de tés, tanto calientes como fríos, incluyendo té negro, té verde, té de hierbas y más.`
   },
    {imgurl: "Imagenes/Jugos.jpeg",titulo:"Jugos", descripcion:`Es una sustancia líquida extraída de las frutas, generalmente al exprimirlas por presión, sin embargo, puede incluir un conjunto de procesos intermedios como la: cocción, molienda o centrifugación del producto original`
    },
    {imgurl: "Imagenes/frappe.jpg",titulo:"Frappé", descripcion:`Es es una bebida fría, espesa y refrescante que combina café fuerte con hielo y otros ingredientes para lograr una mezcla cremosa y sabrosa`
   },
    {imgurl: "Imagenes/postrefresa.jpg", titulo:"Postres", descripcion:`Las tartas de fresa estilo tart, por otro lado, tienen una masa de hojaldre dulce que se asemeja a una galleta de mantequilla fina y tardan más en hacerse, con una capa de crema pastelera que necesita enfriarse.` 
    },
    {imgurl: "Imagenes/Servicios_4.jpeg",titulo:"Té", descripcion:`Podemos decir que se trata de un té a medio camino entre el té verde y el té rojo, debido su proceso de semi-fermentación.` 
   }

];
const contenedor = document.querySelector('.contenedor-servicios');
function mostrarServicios(){
    for(let servicio of dataServicios){
        const{descripcion} = servicio;
        const servicioHtml = crearServicio(servicio);
        // contenedor.appendChild(servicioHtml);
        contenedor.insertAdjacentHTML('beforeend', servicioHtml); 
    
    }
}
export{mostrarServicios}

