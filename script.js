let articulo
let cantidadComprada
let precioUnitario
let precioTotalPorArticulo
const IVA = 1.21
let precioDelArticuloConsultado
let busqueda
let continua

class Producto {
    constructor(nombre, color, talle, precio) {
        this.nombre = nombre.toLowerCase()
        this.color = color
        this.talle = talle
        this.precio = parseFloat(precio)
    }
    esVisto(nombre){
        return this.nombre == nombre.toLowerCase();
    }
}
const producto1 = new Producto("Judogi", "Blanco", "S", 30)
const producto2 = new Producto("Cinturon", "Amarillo", "Unico", 8)
const producto3 = new Producto("Guante", "Rojo", "12/14 oz", 35)
const producto4 = new Producto("Tibial", "Blanco", "Unico", 30)
const producto5 = new Producto("Venda", "Rojo", "Unico", 7)
const producto6 = new Producto("Remera", "Blanco", "M/L", 12)

let productos = [producto1, producto2, producto3, producto4, producto5, producto6]

console.log("La cantidad de productos cargados es " + productos.length)

//Actualizacion de precios
productos.forEach(producto => { producto.precio += (producto.precio * 0.05) })
console.log(productos)
const precios = productos.map((el) => el.precio) //array de precios
console.log(precios)

//funcion de busqueda por nombre del producto
function buscarProducto(productos, productoBuscado){
    return productos.find(objeto => objeto.nombre === productoBuscado.toLowerCase())
}

continua = "si"
while (continua == "si"){
    busqueda = buscarProducto (productos, prompt('Ingresar nombre del producto buscado en singular'))
    if (busqueda != undefined) {
        alert('Producto: '+ busqueda.nombre +' - Color: '+ busqueda.color +' - Talle: '+ busqueda.talle + ' - Precio U$D: '+ busqueda.precio)
    } else{
        alert('No existe el producto con ese nombre')
    }
    continua = prompt("Desea seguir? si/no").toLowerCase()
}

//Seleccion de un producto
continua = true
while (continua){
    let productoSeleccionado = parseInt(prompt("Ingrese el número correspondiente al producto seleccionado: 1-judogi 2-cinturon 3-guantes 4-tibiales 5-vendas 6-remera"))
    if (productoSeleccionado <= productos.length && productoSeleccionado > 0){
        continua = false
        articulo = productoSeleccionado
    }else{
        alert("Ingrese una opción válida")
    }
}
console.log("Seleccionó el artículo " + articulo)

//Funcion para mostrar precio de un producto
function mostrarPrecio(numero){
    return (precios[numero-1])
}

precioDelArticuloConsultado = mostrarPrecio(articulo)
console.log("El precio del articulo "+ articulo + " es " + precioDelArticuloConsultado + "U$D")

//Funcion para calcular el precio X cantidad con IVA de un producto
function precioFinal (precio, cantidad){
    return precio*cantidad*IVA
}

//Ingreso de cantidad a comprar
continua = true
while(continua){
    let cantidadRequerida = parseInt(prompt("Ingrese el número de unidades a comprar. Máximo por cliente 10 unidades por producto"))
    if (cantidadRequerida<11 && cantidadRequerida>0){
        continua = false
        cantidadComprada = cantidadRequerida
    }else{
        alert("Por favor ingrese un número válido. Hasta 10 unidades")
    }
}
console.log("Cantidad "+ cantidadComprada)

precioTotalPorArticulo = precioFinal (precioDelArticuloConsultado, cantidadComprada)
console.log("El precio total con IVA es " + precioTotalPorArticulo + "U$D")

//filtro por precio
const precioMenorADiez = productos.filter(producto => producto.precio < 11)
console.log("Los productos que salen menos de 10U$D son: ")
console.log(precioMenorADiez)