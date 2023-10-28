function crearColaborador({img, titulo, descripcion}){
    return `
    <div class="contenedor-principal">
    <div class="img-user">
        <img  class="user" src=${img.toString()} alt="imagen usuario">
    </div>
    <h3>${titulo}</h3>
    <p>${descripcion}</p>  
</div>
    `;
}

const data = [
    {img: "Imagenes/Trabajador1.jpg", titulo:"Andres Fuentes - Mesero", descripcion: `Se encarga de los pedidos de los clientes, sirven alimentos y bebidas, y se aseguran de que los clientes estén cómodos`},
    {img: "Imagenes/TRabajador2.jpg",titulo:"Marcela Suarez - Cajero/a", descripcion:`Es la responsable de registrar las órdenes de los clientes, manejan las transacciones de pago y brindan recibos.` },
    {img: "Imagenes/TRabajador3.jpg",titulo:"Willinton Bedoya - Barista", descripcion:`Es el responsables de Preparar y servir café, espresso, cappuccinos y otras bebidas de café.` }
];
const contenedor2 = document.querySelector('.contenedor-empleados');
function mostrarColaboradores(){
    for(let colaborador of data){
        const{nombre} = colaborador;
        console.log(nombre);
        const servicioHtml = crearColaborador(colaborador);
        // contenedor.appendChild(servicioHtml);
        contenedor2.insertAdjacentHTML('beforeend',servicioHtml );
    }
}

export{mostrarColaboradores};