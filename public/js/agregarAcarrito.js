window.onload = function() {
    let anadirAlCarrito = document.querySelector('.boton-verde');
    
    anadirAlCarrito.addEventListener('click', function(e){
        e.preventDefault();
        //capturamos la URL del producto
        let url = window.location.href.split("/");
        
        let id = url [url.length -1]
        
        let imagen = document.querySelector('.ver-producto').getAttribute("src")
        let tituloProd = document.querySelector('.nombre-del-producto').innerText
        let precio = document.querySelector('.precio').innerText
        let inputCantidad = document.querySelector('#count').value
        let inputTalle = document.querySelector('#talle-nuevo').value

        let producto = {
            idProducto: id, 
            imagen,
            tituloProd,
            precio: parseFloat(precio),
            inputCantidad: parseFloat(inputCantidad),
            inputTalle: parseFloat(inputTalle)
        } 
        console.log(producto)
        
        if(localStorage.length == 0) {
            let carrito = []
            carrito.push(producto)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            localStorage.setItem("totalCarrito", producto.precio * producto.inputCantidad)
            } 
        else {
            let carrito = JSON.parse(localStorage.carrito)
            let arrayProductos = carrito.filter(function(producto){
                return producto.idProducto == id
            })

            if(arrayProductos.length == 0){
                carrito.push(producto)
                localStorage.setItem("carrito", JSON.stringify(carrito))
            } else {
                arrayProductos[0].inputCantidad == parseInt(arrayProductos[0].inputCantidad)+1;
                localStorage.setItem("carrito", JSON.stringify(carrito))
            }

            

            let totalCarrito = 0
            for (let i=0; i<carrito.length; i++) {
               let carro = carrito[i].precio * carrito[i].inputCantidad;
               totalCarrito += carro 
            }
            localStorage.setItem("totalCarrito", totalCarrito)

            console.log(totalCarrito);
        }
        

        alert('Agregaste' + " " + tituloProd + " al carrito")
    

    })
    
}
