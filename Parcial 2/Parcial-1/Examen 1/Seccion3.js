function crearempleado(titulo,descripcion){
    return `
    <div class ="empleados">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    </div>
    `
}

function crearEmpleadoConObjetos(titulo,descripcion){
    const contenedorEmpleado = document.createElement('div');
    const parrafo =document.createElement('p');
    parrafo.innerText = descripcion;
    const heading = document.createElement('h3');
    heading.innerText = titulo;
    contenedorEmpleado.appendChild(heading);
    contenedorEmpleado.appendChild(parrafo);
    contenedorEmpleado.classList.add("empleados")
    return contenedorEmpleado;
}

const data =[
    {titulo: "Café", descripcion: "Una amplia variedad de café, que incluye opciones como espresso, café americano, cappuccino, latte, macchiato, entre otros." },
    {titulo: "Té", descripcion: "Una selección de tés, tanto calientes como fríos, incluyendo té negro, té verde, té de hierbas y más." },
    {titulo: "Frappé", descripcion: "Es es una bebida fría, espesa y refrescante que combina café fuerte con hielo y otros ingredientes para lograr una mezcla cremosa y sabrosa" },
]

const contenedor = document.querySelector('.contenedor-empleados')

for(empleados of data){
    const {descripcion} = empleados
    console.log(descripcion)
    const empleadosHtml = crearEmpleadoConObjetos(empleados.titulo, empleados.descripcion);
    //contenedor.insertAdjacentHTML('beforeend',servicioHtml)
    contenedor.appendChild(empleadosHtml);
    console.log(empleadosHtml);

}
console.log(contenedor)

