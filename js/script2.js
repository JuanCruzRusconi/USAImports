let nameUser = prompt("Éste sera el sitio web de USAImports, por favor díganos su nombre:");
let welcomeUser = `Bienvenido ${nameUser} a USAImports`;

alert(welcomeUser);

const lineaProducto0 = "Linea Stanley";
const lineaProducto1 = "Linea Apple";

class Producto{
    constructor(id, nombre, color, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.stock = stock
    }
}

const producto0 = new Producto (0,"Termos", "Verde", 25000, 20);
const producto1 = new Producto (1,"Botellas", "Blanco", 20000, 20);
const producto2 = new Producto (2,"Vasos", "Negro", 15000, 15);

const productosStanley = [producto0, producto1, producto2];

const producto00 = new Producto (00,"Iphone", "Gris espacial", 1200, 20);
const producto11 = new Producto (11,"Airpods", "Blanco", 300, 20);
const producto22 = new Producto (22,"AppleWatch", "Negro", 500, 15);
const producto33 = new Producto (33,"Mac", "Gris espacial", 3000, 10);

const productosApple = [producto00, producto11, producto22, producto33];

alert(`Actualmente tenemos stock de las siguientes secciones de productos:\n 1: ${lineaProducto0}.(SOLO FUNCIONA ESTE)\n 2: ${lineaProducto1}.\n Por favor, escriba el numero correspondiente al producto que desea ver.`);

let productUser = parseInt(prompt("Que línea de productos está interesado en ver?"));
let productUserInfo 

// ---- Caso de linea de producto elegido + info con FOR + IF + forEach ---- //

for (i = 0; i <= 3; i++) {
    if (productUser === 1) {
        productUserInfo = prompt(`Actualmente contamos con ${producto0.nombre}, ${producto1.nombre} y ${producto2.nombre}. Desea ver la info de estos productos? Escriba si, de lo contrario, enter para continuar.`);
        if (productUserInfo === "si") {
            productosStanley.forEach(Producto => {
                alert(`Producto: ${Producto.nombre}.\nColor: ${Producto.color}.\nPrecio: $${Producto.precio}.`);
            });
            break;
        } else {
            break;
        }
    } else if (productUser === 2) {
        productUserInfo2 = prompt(`Actualmente contamos con ${producto00.nombre}, ${producto11.nombre}, ${producto22.nombre} y ${producto33.nombre}. Desea ver la info de estos productos? Escriba si, de lo contrario, enter para continuar.`);
        if (productUserInfo2 === "si") {
            productosApple.forEach(Producto => {
                alert(`Producto: ${Producto.nombre}.\nColor: ${Producto.color}.\nPrecio: U$D${Producto.precio}.`);
            });
            break;
        } else {
            break;
        }
    } else {
        productUser = parseInt(prompt("Por favor, ingrese un caracter valido como el 1 o el 2."));
    }
}

let typeProductUser
let segundoProducto 
let typeProductUser2 

let productUserCantidad
let productUserCantidad2
let precioLineaStanley = 20000;
let totalProductosStanley
let resultadoSumarProductos
let totalProductoStanley

// ---- Proceso de compra productos linea Stanley ---- //

if (productUser === 1) {
    typeProductUser = prompt("Mencione que producto desea comprar:");
    for (i = 0; i <= 2; i++) {
        if (typeProductUser === producto0.nombre.toLowerCase()) {
            alert(`Usted ha seleccionado ${producto0.nombre}, el precio de estos productos es de ${producto0.precio} c/u.`);
            break;
        } else if (typeProductUser === producto1.nombre.toLowerCase()) {
            alert(`Usted ha seleccionado ${producto1.nombre}, el precio de estos productos es de ${producto1.precio} c/u.`);
            break;
        } else if (typeProductUser === producto2.nombre.toLowerCase()) {
            alert(`Usted ha seleccionado ${producto2.nombre}, el precio de estos productos es de ${producto2.precio} c/u.`);
            break;
        } else {
            typeProductUser = prompt("Por favor, ingrese un producto de los mencionados anteriormente.");
        }
    }

    segundoProducto = prompt("Desea comprar otro producto? Responda si, de lo contrario apriete enter:")
    
    if (segundoProducto === "si") {
        typeProductUser2 = prompt(" Mencione que otro producto desea comprar:");
        for (i = 0; i <= 2; i++) {
            if (typeProductUser2 === producto0.nombre.toLowerCase()) {
                alert(`Usted ha seleccionado ${producto0.nombre}, el precio de estos productos es de ${producto0.precio} c/u.`);
                break;
            } else if (typeProductUser2 === producto1.nombre.toLowerCase()) {
                alert(`Usted ha seleccionado ${typeProductUser2}, el precio de estos productos es de ${producto1.precio} c/u.`);
                break;
            } else if (typeProductUser2 === producto2.nombre.toLowerCase()) {
                alert(`Usted ha seleccionado ${typeProductUser2}, el precio de estos productos es de ${producto2.precio} c/u.`);
                break;
            } else {
                typeProductUser2 = prompt("Por favor, ingrese un producto de los mencionados anteriormente.");
            }
        }    
        
        productUserCantidad = parseInt(prompt(`Cuantos productos esta ineresado en comprar de ${typeProductUser} ?`));
        productUserCantidad2 = parseInt(prompt(`Cuantos productos esta ineresado en comprar de ${typeProductUser2} ?`));

        function sumarProductos(_productUserCantidad, _productUserCantidad2) {
            return productUserCantidad + productUserCantidad2;
        }
        resultadoSumarProductos = sumarProductos(productUserCantidad, productUserCantidad2);
        alert(`Usted ha elegido: ${resultadoSumarProductos} productos; ${productUserCantidad} ${typeProductUser} y ${productUserCantidad2} ${typeProductUser2}.`);

        function multiplicarProductos(_resultadoSumarProductos, _precioLineaStanley) {
            return resultadoSumarProductos * precioLineaStanley;
        }
        totalProductosStanley = multiplicarProductos(resultadoSumarProductos, precioLineaStanley);
        alert(`El total es de ${totalProductosStanley} pesos.`);
    } else {
        productUserCantidad = parseInt(prompt(`Cuantos productos esta ineresado en comprar de ${typeProductUser}?`));
        
        alert(`Usted ha elegido: ${productUserCantidad} ${typeProductUser}.`);

        function multiplicarProducto(_productUserCantidad, _precioLineaStanley) {
            return productUserCantidad * precioLineaStanley;
        }
        totalProductoStanley = multiplicarProducto(productUserCantidad, precioLineaStanley);
        alert(`El total es de ${totalProductoStanley} pesos.`)
    }    
}

const productosApplePesos = productosApple.map((producto)=> {
    return {
        nombre: producto.nombre,
        precio: (producto.precio * 380)
    }
})
console.log(productosApplePesos);
let verProdApplePesos = prompt("Desea ver los productos de Apple en pesos? Escriba si, de lo contrario enter para salir.")
if (verProdApplePesos === "si") {
    productosApplePesos.forEach(Producto => {
        alert(`Producto: ${Producto.nombre}.\nPrecio: ${Producto.precio}.`)
    });
} else {}

// ---- Calculo de Stock en consola ---- //

function restarStock(valorA, valorB){
    return valorA - valorB;
}

if (typeProductUser === producto0.nombre.toLowerCase()) {
    console.log("Nuevo stock de Termos: ",restarStock(producto0.stock, productUserCantidad));
} else if (typeProductUser === producto1.nombre.toLowerCase()) {
    console.log("Nuevo stock de Botellas: ",restarStock(producto1.stock, productUserCantidad));
} else if (typeProductUser === producto2.nombre.toLowerCase()) {
    console.log("Nuevo stock de Vasos: ",restarStock(producto2.stock, productUserCantidad));
}
if (segundoProducto === "si") {
    if (typeProductUser2 === producto0.nombre.toLowerCase()) {
        console.log("Nuevo stock de Termos: ",restarStock(producto0.stock, productUserCantidad2));
    } else if (typeProductUser2 === producto1.nombre.toLowerCase()) {
        console.log("Nuevo stock de Botellas: ",restarStock(producto1.stock, productUserCantidad2));
    } else if (typeProductUser2 === producto2.nombre.toLowerCase()) {
        console.log("Nuevo stock de Vasos: ",restarStock(producto2.stock, productUserCantidad2));
    }
}