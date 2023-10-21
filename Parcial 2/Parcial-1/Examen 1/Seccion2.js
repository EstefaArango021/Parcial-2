function crearservicio(titulo,descripcion){
    return `
    <div class ="servicio">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    </div>
    `
}

function crearServicioConObjetos(titulo,descripcion){
    const contenedorServicio = document.createElement('div');
    const parrafo =document.createElement('p');
    parrafo.innerText = descripcion;
    const heading = document.createElement('h3');
    heading.innerText = titulo;
    contenedorServicio.appendChild(heading);
    contenedorServicio.appendChild(parrafo);
    contenedorServicio.classList.add("servicio")
    return contenedorServicio;
}

const data =[
    {titulo: "Café", descripcion: "Una amplia variedad de café, que incluye opciones como espresso, café americano, cappuccino, latte, macchiato, entre otros." },
    {titulo: "Té", descripcion: "Una selección de tés, tanto calientes como fríos, incluyendo té negro, té verde, té de hierbas y más." },
    {titulo: "Frappé", descripcion: "Es es una bebida fría, espesa y refrescante que combina café fuerte con hielo y otros ingredientes para lograr una mezcla cremosa y sabrosa" },
    {titulo: "Sección Cuatro", descripcion: "Descripción de la sección Cuatro" },
    {titulo: "Sección Cinco", descripcion: "Descripción de la sección Cinco" },
    {titulo: "Sección Seis", descripcion: "Descripción de la sección Seis" },
]

const contenedor = document.querySelector('.contenedor-servicios')

for(servicio of data){
    const {descripcion} = servicio
    console.log(descripcion)
    const servicioHtml = crearServicioConObjetos(servicio.titulo, servicio.descripcion);
    //contenedor.insertAdjacentHTML('beforeend',servicioHtml)
    contenedor.appendChild(servicioHtml);
    console.log(servicioHtml);

}
console.log(contenedor)

