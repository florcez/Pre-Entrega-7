
class Producto {
    constructor(nombre, precio, stock, carrito) {
        this.nombre = nombre;
        this.precio = Number(precio);
        this.stock = Number(stock);
        this.carrito = carrito;
    }
}



const productos = [];

productos.push(new Producto("Hayakawa", 16000, 3, 0));
productos.push(new Producto("Headcrab", 20000, 2, 0));
productos.push(new Producto("Chiquita", 15000, 10, 0));
productos.push(new Producto("Tenna", 46000, 9, 0));
productos.push(new Producto("Ralsei", 18000, 6, 0));
productos.push(new Producto("Marina", 14000, 8, 0));
productos.push(new Producto("Conejo", 19000, 10, 0));
productos.push(new Producto("BAMGEUT", 24000, 2, 0));
productos.push(new Producto("Rana", 16000, 4, 0));
productos.push(new Producto("Salchicha", 16000, 6, 0));



const listaProductos = document.getElementById("productos");
const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const stock = document.getElementById("stock");

MostrarLista(productos)

formulario.addEventListener('submit', agregarProducto)


function agregarProducto(e){
    e.preventDefault()
    const error = document.getElementById("error_nombre")
    error.textContent = ""
    const existe = productos.some((produc) => produc.nombre.toLowerCase() === nombre.value.trim().toLowerCase())


    if (existe === false){
        const agregar = (nombre, precio, stock) => (productos.push(new Producto(nombre.value, Number(precio.value), Number(stock.value))))
        agregar(nombre,precio,stock)

        listaProductos.innerHTML += AgregarALista(productos[productos.length-1], productos.length-1)
    }
    else{
        error.textContent = "Elegir otro nombre"
    }

}

function MostrarLista(productos){
    listaProductos.innerHTML = ""
    let n = -1
    for (const producto of productos){
    n += 1
    listaProductos.innerHTML += AgregarALista(producto, n)


    const boton = document.querySelectorAll('.btn_eliminar')

    for (cada_boton of boton){
        cada_boton.addEventListener('click', Eliminar)
    }
}
}

function AgregarALista(producto, n){
    lista = 
    `<li>
        <h3>${producto.nombre}</h3>  

        <dl>
            <dt>Precio:</dt>
            <dd>$${producto.precio}</dd>
            <dt>Stock:</dt>
            <dd>${producto.stock}</dd>
        </dl>
        <button class= "btn_eliminar" id = "${n}">Eliminar </button>
    </li>`
    return lista
}

function Eliminar (x){
    productos.splice(x.target.id,1)
    MostrarLista(productos)

}



const busqueda = document.getElementById("busqueda");

busqueda.addEventListener("input", buscarProducto);

function buscarProducto() {
    listaProductos.innerHTML = "";

    for (const producto of productos) {
        if (producto.nombre.toLowerCase().includes(busqueda.value.toLowerCase())) {
            listaProductos.innerHTML += AgregarALista(producto, productos.indexOf(producto));
        }
    }
    const boton = document.querySelectorAll(".btn_eliminar");

    for (const cada_boton of boton) {
        cada_boton.addEventListener("click", Eliminar);
    }
}


