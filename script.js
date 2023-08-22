/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Ovejero Aleman",
        imagen: "https://cuantoviven.net/wp-content/uploads/2022/04/pastor-aleman-esperanza-de-vida.webp",
        descripcion: "",
    },
    {
        id: 2,
        nombre: "doberman",
        imagen: "https://wowmascota.com/wp-content/uploads/2020/08/D7pF92DXkAAUac-.jpg",
        descripcion: "",
    },
    {
        id: 3,
        nombre: "Dogo argentino",
        imagen: "https://i.pinimg.com/236x/7a/c4/dd/7ac4ddf27668e068c06f8dd716b3a09c.jpg",
        descripcion: "",
    },
    {
        id: 4,
        nombre: "akita americano",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d2/American-akita.jpg",
        descripcion: "",
    },
    {
        id: 5,
        nombre: "siberiano",
        imagen: "https://gatosyperros.org/wp-content/uploads/2020/04/dog-mammal-vertebrate-dog-breed-sled-dog-siberian-husky-78413-pxhere.com_-scaled.jpg",
        descripcion: "",
    },
    

]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")

//funcion que recorre el listado de las cartas
/* Función que recorre el listado de las cartas */
function recorrerListado() {
    contenedorCartas.innerHTML = ""
    listadoCartas.forEach(
        (carta) => contenedorCartas.innerHTML += ` <article class="card">
        <img src=${carta.imagen} alt="Imagen del proyecto">
        <div class="info">
            <h2>${carta.nombre}</h2>
            <p>${carta.descripcion}</p>
        </div>
    </article>`
    )
}
recorrerListado()

function crearCarta() {
    const nombre = prompt("Nombre del perro")
    const imagen = prompt("Imagen del perro")
    const descripcion = prompt("Identifica a tu perro con 3 palabras")

    //crear un objeto con los datos del usuario
    const carta = {nombre, imagen, descripcion}

    //añadir la carta al listado de cartas
    listadoCartas.push(carta)

    recorrerListado()
}

