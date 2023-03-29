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
                               <p class="card-text">Disponible actualmente en color ${Producto.color}.</p>
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
//      console.table(arrayCarrito)
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
                               <p class="card-text">Disponible actualmente en color ${datosProductos.color}.</p>
                               <h5 class="card-title">$${datosProductos.precio}</h5>
                               <p class="card-text"> Te llevas ${item.cantidad}</p>
                             </div>
                          </div>`
                          document.body.append(card)
    }
}


// ------- Boton para visualizar el carrito de compras ------- //

let botonVerCarrito = document.getElementById("verCarrito");
botonVerCarrito.addEventListener("click", botonRespuesta);

function botonRespuesta(){
    verCarrito()
    alert("Está siendo redirigido al carrito de compras")
    console.log("Función de visualizar carrito ejecutada correctamente")
}


// ------- Guardar en el Storage el carrito de compras del usuario ------- //

localStorage.setItem("Carrito de usuario", arrayCarrito);

let visualizarCarrito = localStorage.getItem("Carrito de usuario")
console.log(visualizarCarrito)


// ------- Almacenar en Storage el obejto "producto0" pasandolo a string meidante JSON ------- //

const producto0JSON = JSON.stringify(producto0);
console.log(producto0JSON);

localStorage.setItem("producto0", "producto0JSON");


// ------- Recuperar un JSON del localStorage y convertirlo a objeto nuevamente ------- //
 
const objetoJSON = localStorage.getItem("producto0");
const objeto = JSON.parse(objetoJSON);
console.log(objeto);
