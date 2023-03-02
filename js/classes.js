// BLoque de definicion de cojetos o plantillas

// esta es una clase que representa un carrito de compras y permite hacer varias cosas
class CarritoDeCompras {

    constructor () {
        this.canasta = [];
    }
    
    // Este método agrega productos al carrito
    agregarProducto(producto) {
        this.canasta.push(producto)
    }

    // este elemento intanta buscar un producto y removerlo
    quitarProducto(producto) {
        var posicionProducto = this.canasta.indexOf(producto)
        if(posicionProducto != -1) {
            this.canasta.splice(posicionProducto,1)
        } else {
            console.log("no encontró el producto "+producto)
        }
    }

    dameProductoPorNombre(nombreProductoABuscar) {
        var productoEncontrado = null;
        this.canasta.forEach((producto, posicion, arreglo)=>{
            if(producto.nombre == nombreProductoABuscar){
                productoEncontrado = producto
            }
        })
        return productoEncontrado
    }

    vaciarCarrito() {
        
    }
}

class Producto {
    constructor (){
        this.nombre = "";
        this.cantidad = 1;
        this.precio = 0.1;
    }
    agregarOtro (cuantos){
        this.cantidad = this.cantidad + cuantos
     }
    quitarProducto (cuantos){
        this.cantidad = this.cantidad - cuantos
    } 
}


/// bloque de construcción de instancia

var carrito = new CarritoDeCompras()
var manzana = new Producto()
manzana.nombre = "manzana"
manzana.precio = 5.5

var platano = new Producto()
platano.nombre = "platanin"
platano.precio = 3.5

manzana2 = new Producto()
manzana2.nombre = manzana.nombre
manzana2.precio = manzana.precio
manzana2.cantidad = manzana.cantidad

carrito.agregarProducto(manzana)
carrito.agregarProducto(platano)

console.log(carrito)
var referenciadeManzana = carrito.dameProductoPorNombre("manzana")
referenciadeManzana.agregarOtro(4)
console.log("producto encontrado por nombre")
console.log(referenciadeManzana)
