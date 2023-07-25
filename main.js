
function losProductos(){
    // array vacio de productos
    stock= []

    // clase constructora
    class productos{
        constructor(nombre, precio, id, fecha){
            this.nombre = nombre;
            this.precio = precio ;
            this.id = id;
            this.fecha = fecha
        }
    }

    // productos
    stock.push(new productos ('remera', 2400, 1,new Date('2023-07-05')))
    stock.push(new productos ('pantalon', 2500, 2, new Date('2023-07-10')))
    stock.push(new productos ('camisa', 1900, 3, new Date('2023-07-16')))
    stock.push(new productos ('short', 2000, 4, new Date('2023-07-20')))
    stock.push(new productos ('jean', 6000, 5, new Date('2023-06-10')))
    stock.push(new productos ('zapatillas', 10000, 6,new Date('2023-07-07')))
    console.log(stock)


// crear un div por cada uno
for (const producto of stock) {
    let contenedor = document.createElement('div')

    // agregar html por cada uno
    contenedor.innerHTML = `<h2> Nombre : ${producto.nombre}</h2>
                            <h3> Precio : $${producto.precio}</h3>
                            <h3> id : ${producto.id}</h3>
                            <h3> ${producto.fecha}</h3>
                            <button id="${producto.id}" class ="btn"> Agregar al carrito </button>
                            `

// estilos basicos para los div
    contenedor.style.padding='10px';
    contenedor.style.marging='20px';
    contenedor.style.border='solid 1px blue';
    contenedor.style.width='30%';

    // agregar contenedor
    document.body.append(contenedor)
}



// array de carrito
const carrito = []
    let botones = document.getElementsByClassName('btn')
    
    // agregar al carrito
    for (const boton of botones) {
        boton.onclick= ()=>{
            let productoSeleccionado = stock.find((el)=>el.id === parseInt (boton.id))
            carrito.push(productoSeleccionado)
            console.log(carrito)
            localStorage.setItem('carrito', JSON.stringify(carrito))
        }

        
}


// boton finalizar compra
let terminarCompra = document.createElement('button')
terminarCompra.innerText = 'FINALIZAR COMPRA'

// estilos a boton finalizar(basicos)
terminarCompra.style.fontSize='30px'
terminarCompra.style.margin='40px'

document.body.append(terminarCompra);


// terminar compra, limpiar local storage y limpiar carrito
    terminarCompra.onclick=()=>{
        carrito.length === 0 ? alert('no hay productos en el carrito') :  alert(`¡EL carrito se guardo correctamente con ${carrito.length} productos!`)
        // alert(`¡EL carrito se guardo correctamente con ${carrito.length} productos!`)
        localStorage.clear()
        carrito.length = 0
    }



// mostrar carrito
let MostrarCarrito = document.createElement('button')
    MostrarCarrito.innerText = 'Mostrar carrito'
    MostrarCarrito.onclick = () => {
        const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'))
        console.log(carritoLocalStorage)

        const nombreProductos = carritoLocalStorage.map((e) => e.nombre)
        alert(`Los productos que estan en el carrito son: ${nombreProductos}`)
}
// estilos basicosa boton mostrar carrito
MostrarCarrito.style.fontSize='30px'
MostrarCarrito.style.margin='40px'
document.body.append(MostrarCarrito)

}

losProductos()