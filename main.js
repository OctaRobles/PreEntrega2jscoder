class Producto {
    constructor(nombre,precio,stock,descripcion){
        this.nombre - nombre
        this.precio - precio
        this.stock - stock
        this.descripcion - descripcion
    }
    aumento(cantidad){
        this.stock = this.stock + this.stock
    }
}
const productos = []
let continuar = true

while(continuar === true){
    const nombre = prompt("ingrese nombre del producto").toUpperCase()
    const precio = parseFloat(prompt("ingrese precio"))
    const stock = parseFloat(prompt("ingrese stock"))
    const descripcion = prompt("ingrese descripcion").toUpperCase()
    const producto = new Producto(nombre,precio,stock,descripcion)
    productos.push(producto)
    continuar = confirm("desea seguir cargando productos")
}
console.log(productos)
//estoy teniendo un problema y es que no me figura el objeto creado en la consola, al no poder verlo en consola no puedo seguir con los demas metodos porque me lo toma como si no existiera//
continuar = confirm("ingrese nombre de producto para verificar su existencia")  
while(continuar === true){
    const nombreProductoVerificar = prompt("ingrese producto para verificar su existencia").toUpperCase()
    const index = productos.findIndex((producto)=> producto.nombre === nombreProductoVerificar)
    if(index != -1){
        productos.includes
        alert("producto existente")
    }
    else{
        alert("producto no existente")
    }
}
console.log(existe)


