const lineaProducto0 = "Linea Stanley";
const lineaProducto1 = "Linea Apple";

class Producto{
    constructor(id, nombre, color, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
        this.imagen = this.imagen
    }
}

const producto0 = new Producto (0,"Termos", "Verde", 25000, 20, 'stanley.jpeg');
const producto1 = new Producto (1,"Botellas", "Blanco", 20000, 20, 'stanley.jpeg');
const producto2 = new Producto (2,"Vasos", "Negro", 15000, 15, 'stanley.jpeg');

const productosStanley = [producto0, producto1, producto2];

const producto00 = new Producto (00,"Iphone", "Gris espacial", 1200, 20);
const producto11 = new Producto (11,"Airpods", "Blanco", 300, 20);
const producto22 = new Producto (22,"AppleWatch", "Negro", 500, 15);
const producto33 = new Producto (33,"Mac", "Gris espacial", 3000, 10);

const productosApple = [producto00, producto11, producto22, producto33];

const contenedorProductosStanley2 = (productosStanley) => {
    for(Producto of productosStanley){
        const card = document.createElement("div")
        card.innerHTML = `<div class="card" style="width: 18rem;">
                             <img class="card-img-top" src="./images/${Producto.imagen}" alt="Card image cap">
                             <div class="card-body">
                               <h3 class="card-title">${Producto.nombre}</h3>
                               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               <h5 class="card-title">$${Producto.precio}</h5>
                               <input type="button" onclick="agregarCarrito(${Producto.id})" class="btn btn-primary" value="Agregar al carrito">
                             </div>
                          </div>`
                          document.body.append(card);
    }
}
contenedorProductosStanley2(productosStanley);

const arrayCarrito = [];

class objetosCarrito{
    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad
    }
    sumaCarrito(){
        this.cantidad = this.cantidad + 1
    }
}

function agregarCarrito(producto){
    const existeCarrito = arrayCarrito.find(e => e.producto == producto)
    if(existeCarrito != undefined){
        let posicion = arrayCarrito.findIndex(elem => elem.producto == existeCarrito.producto)
        arrayCarrito[posicion].sumaCarrito()
    } else{
        const alCarrito = new objetosCarrito(producto, 1)
        arrayCarrito.push(alCarrito)
//        console.table(arrayCarrito)
    }
}

function verCarrito(){
    document.body.innerHTML = ``
    for(item of arrayCarrito){
        let card = document.createElement("div")
        let datosProductos = productosStanley.find(elem => elem.id == item.producto)  

        card.innerHTML = `<div class="card" style="width: 18rem;">
                             <img class="card-img-top" src="./images/${Producto.imagen}" alt="Card image cap">
                             <div class="card-body">
                               <h3 class="card-title">${datosProductos.nombre}</h3>
                               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               <h5 class="card-title">$${datosProductos.precio}</h5>
                               <p class="card-text"> Te llevas ${item.cantidad}</p>
                             </div>
                          </div>`
                          document.body.append(card)
    }
}

const verCarrito2 = document.getElementById("verCarrito2");
    const div = document.createElement("div");
    div.innerHTML = `<input type= "button" id="botonAgregarCarrito" value="Agregar al carrito>`;
                     contenedorProductosStanley.appendChild(div);


const verCarrito4 = document.createElement('button'); 
button.type = 'button'; 
button.innerText = 'Haz Click'; 
document.body.appendChild(button); 


let botonMostrar = document.createElement("button");

function mostrarDatos(){
  console.log("Ejecutado")
}

botonMostrar.type = "button";
botonMostrar.style.marginLeft = "15px";
botonMostrar.innerHTML = "Mostrar datos";
botonMostrar.onclick = mostrarDatos
body.appendChild(botonMostrar);


alert("gtd")