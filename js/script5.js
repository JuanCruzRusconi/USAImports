
Swal.fire({
    title: 'Bienvenido al sitio web de USAImports!',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })

// ------- Constructora de objetos ------- //

class Producto{
    constructor(id, nombre, color, precio, cantidad, stock, img){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.cantidad = cantidad;
        this.stock = stock;
        this.img = img
    }
}

// ------- Objetos de productos ------- //

const producto0 = new Producto (0,"Termos", "Verde", 25000, 1, 20, "https://stanleypm.vtexassets.com/arquivos/ids/156828-1200-auto?v=638242729928870000&width=1200&height=auto&aspect=true");
const producto1 = new Producto (1,"Botellas", "Blanco", 20000, 1, 20, "https://stanleypm.vtexassets.com/arquivos/ids/157716-1200-auto?v=638530305164530000&width=1200&height=auto&aspect=true");
const producto2 = new Producto (2,"Vasos", "Negro", 15000, 1, 15, "https://stanleypm.vtexassets.com/arquivos/ids/157513-1200-auto?v=638491310742700000&width=1200&height=auto&aspect=true");

const productosStanley = [producto0, producto1, producto2];

const producto10 = new Producto (10,"Iphone 14 Pro", "Gris espacial", 418000, 1, 20);
const producto11 = new Producto (11,"Iphone 14 Pro Max", "Blanco", 456000, 1, 20);
const producto12 = new Producto (12,"Iphone 14", "Amarillo", 342000, 1, 20);
const producto13 = new Producto (13,"Iphone 14 Plus", "Amarillo", 380000, 1, 20);
const producto14 = new Producto (14,"Airpods", "Blanco", 76000, 1, 20);
const producto15 = new Producto (15,"Airpods Pro", "Blanco", 115000, 1, 20);
const producto16 = new Producto (16,"AppleWatch SE", "Rojo", 105000, 1, 15);
const producto17 = new Producto (17,"AppleWatch 8", "Azul", 190000, 1, 15);
const producto18 = new Producto (18,"AppleWatch Ultra", "Negro", 342000, 1, 15);
const producto20 = new Producto (20,"MacBook Air", "Midnight", 400000, 1, 10);
const producto21 = new Producto (21,"MacBook Pro 13", "Gris", 520000, 1, 10);
const producto22 = new Producto (22,"MacBook Pro 14", "Gris espacial", 800000, 1, 10);
const producto23 = new Producto (23,"MacBook Pro 16", "Gris espacial", 1000000, 1, 10);

// ------- Arrays de objetos de productos ------- //

const productosApple = [producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto20, producto21, producto22, producto23];

const productosAppleIphone = productosApple.slice(0,4);

const productosAppleAirpods = productosApple.slice(4,6);

const productosAppleAppleWatch = productosApple.slice(6,9);

const productosAppleMac = productosApple.slice(9,13);

const productosTodos = productosStanley.concat(productosApple);


// ------- Creadores de las cards de cada array de grupo de productos ------- //

const contenedorProductosStanley = document.getElementById("contenedorProductosStanley");
productosStanley.forEach(Producto => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 18rem;">
                          <img src="${Producto.img}" width="100%" height="280" alt="${Producto.nombre}">
                          <div class="card-body">
                              <h5 class="card-title">${Producto.nombre}</h5>
                              <p class="card-text">Disponible actualmente en color ${Producto.color}.</p>
                              <h5 class="card-title">$${Producto.precio}</h5>
                              <p class="card-text">Cantidad ${Producto.cantidad}</p>
                              <input type="button" onclick="agregarCarrito(${Producto.id})" class="btn btn-primary" value="Agregar al carrito">
                          </div>
                       </div>`;
                      contenedorProductosStanley.appendChild(div);
})

const contenedorProductosAppleIphone = document.getElementById("contenedorProductosAppleIphone");
productosAppleIphone.forEach(Producto => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 18rem;">
                          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                          <div class="card-body">
                              <h5 class="card-title">${Producto.nombre}</h5>
                              <p class="card-text">Disponible actualmente en color ${Producto.color}.</p>
                              <h5 class="card-title">$${Producto.precio}</h5>
                              <p class="card-text">Cantidad ${Producto.cantidad}</p>
                              <input type="button" onclick="agregarCarrito(${Producto.id})" class="btn btn-primary" value="Agregar al carrito">
                          </div>
                       </div>`;
                      contenedorProductosAppleIphone.appendChild(div);
})

const contenedorProductosAppleAirpods = document.getElementById("contenedorProductosAppleAirpods");
productosAppleAirpods.forEach(Producto => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 18rem;">
                          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                          <div class="card-body">
                              <h5 class="card-title">${Producto.nombre}</h5>
                              <p class="card-text">Disponible actualmente en color ${Producto.color}.</p>
                              <h5 class="card-title">$${Producto.precio}</h5>
                              <p class="card-text">Cantidad ${Producto.cantidad}</p>
                              <input type="button" onclick="agregarCarrito(${Producto.id})" class="btn btn-primary" value="Agregar al carrito">
                          </div>
                       </div>`;
                      contenedorProductosAppleAirpods.appendChild(div);
})

const contenedorProductosAppleAppleWatch = document.getElementById("contenedorProductosAppleAppleWatch");
productosAppleAppleWatch.forEach(Producto => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 18rem;">
                          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                          <div class="card-body">
                              <h5 class="card-title">${Producto.nombre}</h5>
                              <p class="card-text">Disponible actualmente en color ${Producto.color}.</p>
                              <h5 class="card-title">$${Producto.precio}</h5>
                              <p class="card-text">Cantidad ${Producto.cantidad}</p>
                              <input type="button" onclick="agregarCarrito(${Producto.id})" class="btn btn-primary" value="Agregar al carrito">
                          </div>
                       </div>`;
                      contenedorProductosAppleAppleWatch.appendChild(div);
})

const contenedorProductosAppleMac = document.getElementById("contenedorProductosAppleMac");
productosAppleMac.forEach(Producto => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 18rem;">
                          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                          <div class="card-body">
                              <h5 class="card-title">${Producto.nombre}</h5>
                              <p class="card-text">Disponible actualmente en color ${Producto.color}.</p>
                              <h5 class="card-title">$${Producto.precio}</h5>
                              <p class="card-text">Cantidad ${Producto.cantidad}</p>
                              <input type="button" onclick="agregarCarrito(${Producto.id})" class="btn btn-primary" value="Agregar al carrito">
                          </div>
                       </div>`;
                      contenedorProductosAppleMac.appendChild(div);
})

// ------- Array contenedor de los productos añadidos por el usuario ------- //

let arrayCarrito = [];

// ------- Leer el Storage al cargar la app para verificar si hay productos agregados anteriormente en el carrito y visualizarlos ------- //

document.addEventListener("DOMContentLoaded", () => {
    arrayCarrito = JSON.parse(localStorage.getItem("carrito del usuario")) || [];
    mostrarCarrito()
})

const carritoContenedor = document.querySelector("#carritoContenedor");

const precioTotal = document.querySelector("#precioTotal");

// ------- Funcion para agregar prodcutos al carrito deribada del input button onclick de cada card ------- //

function agregarCarrito(idProducto){

    Swal.fire(
        `Agregaste el producto al carrito. `,
        '',
        'success'
    )

    const existeCarrito = arrayCarrito.some(Producto => Producto.id === idProducto);
    if(existeCarrito){
        const productoCarrito = arrayCarrito.map(Producto => {
            if(Producto.id === idProducto){
                Producto.cantidad++
            }
        })
    } else {
        const item = productosTodos.find((Producto) => Producto.id === idProducto)
        arrayCarrito.push(item);
    }
    mostrarCarrito()

}

// ------- Funcion que muestra unicamente los productos añadidos al carrito mediante el modal------- // 

const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body')

    modalBody.innerHTML = ``
    if(arrayCarrito.length != 0){
    arrayCarrito.forEach((Producto) => {
        const {id, nombre, precio, cantidad} = Producto;
        modalBody.innerHTML += `<div class="modal-contenedor"
                                   <div>
                                       <p>ID Producto: ${id}</p>
                                       <p>Nombre: ${nombre}</p>
                                       <p>Precio: $${precio}</p>
                                       <p>Cantidad: ${cantidad}</p>
                                       <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar producto</button>
                                   </div>
                                </div>`
    })
    } else {
        modalBody.innerHTML = `<p class="text-center text-primary parrafo">Aún no agregaste ningun producto al carrito!</p>`
    }

    precioTotal.innerText = arrayCarrito.reduce((acc, Producto) => acc + Producto.cantidad * Producto.precio, 0);
    carritoContenedor.textContent = arrayCarrito.length;
    
    guardarLocalStorage()
}

// ------- Funcion para eliminar el producto del carrito mediante el boton del modal ------- //

function eliminarProducto(id){
    const productoId = id;
    arrayCarrito = arrayCarrito.filter((Producto) => Producto.id !== productoId);
    console.log(arrayCarrito);
    mostrarCarrito()
}

// ------- Evento para vaciar el carrito mediante el .addEventListener del boton del modal ------- //

const vaciarCarrito = document.querySelector("#vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    arrayCarrito.length = [];
    mostrarCarrito()
})

// ------- Guardar en el Storage el carrito de compras del usuario (arrayCarrito) pasandolo primeramente a string mediante JSON ------- //

function guardarLocalStorage(){
    localStorage.setItem("carrito del usuario", JSON.stringify(arrayCarrito));
}

// ------- Fetch para visualizar el valor del dolar y saber el tipo de cambio para comprar en dolares ------- //

const apiDivisas = "https://criptoya.com/api/dolar";
const contenedorDivisas = document.getElementById("contenedorDivisas");
setInterval(() => {
    fetch(apiDivisas)
    .then (response => response.json())
    .then( data => {
        contenedorDivisas.innerHTML= `
            <p>Dolar Oficial: $${data.oficial.price}.</p>
            <p>Dolar Ahorro: $${data.ahorro.ask}.</p>
            <p>Dolar Tarjeta: $${data.tarjeta.price}.</p>
            <p>Dolar Blue: $${data.blue.ask}.</p>
            <p>Fuente: https://criptoya.com/api/dolar
        `;   
    })
    .catch(error => console.error (error))    
}, 3000);
