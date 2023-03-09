// BLoque de definicion de cojetos o plantillas

// esta es una clase que representa un carrito de compras y permite hacer varias cosas
class CarritoDeCompras {

    constructor () {
        this.canasta = [];
    }

    static shared() {
        return new CarritoDeCompras()
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
        this.canasta = [];
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
/*
interface ConsultorDeEmpresas {
    obtenerEmpresas()
}

interface ConsultorDeEmpresasRelacionadas {
    obtenerEmpresasRelacionadas(sector)
}

class ConsultorDeEmpresasImplementacion extends ConsultorDeEmpresas {
    obtenerEmpresas() {
        // hace logica de verdad
    }
}

class ConsultorDeEmpresasRelacionadasImplementacion extends ConsultorDeEmpresasRelacionadas {
    obtenerEmpresasRelacionadas() {
        // hace logica de verdad
    }
}

class FakeConsultorDeEmpresas {
    obtenerEmpresas() {
        // hace logica de verdad
    }
}
*/
class Verdura extends Producto {
    constructor() {
        super();
        this.vencimiento = new Date() ;
        this.precio = 0.5
    }
}

class Electronico extends Producto {
    constructor() {
        super();
        this.consumo = 4
    }
}



/// bloque de construcción de instancia
var carrito = CarritoDeCompras.shared()

var leche = new Producto()
leche.nombre = "leche"
leche.precio = 17.0

var calabaza = new Verdura() 
calabaza.nombre = "Calabaza"
calabaza.vencimiento = new Date("2023-03-12 GMT-0600")

carrito.agregarProducto(leche);
carrito.agregarProducto(calabaza);
console.log(carrito);

/*
S- Single Responsibility Principle
O- Open Close Principle
L- Liskov Substitution Principle
I- Interface Segregation Principle
D- Dependency Inversion Principle
*/

/*
capa 1 : Presentación
    contruye la lista


capa 2 : Dominio 
    lista de empresas licitando
    Lista<Empresa>
        Empresa
            Nombre
            Razon Social


capa 3 : Datos o infraestructa 
    EXEL
        Empresas en como fueron en el excel
            Descripción
            Fecha de creación
            no.
    ServicioWebInegi
        Empresas en formato inegi

*/

        
