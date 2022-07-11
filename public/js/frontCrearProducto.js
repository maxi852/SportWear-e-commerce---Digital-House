window.addEventListener("load", function (e) {
  let nombreProducto = document.querySelector(".input-name");
  let descripcionProducto = document.querySelector(".input-description");
  let precioProducto = document.querySelector(".input-precio");
  let errorMessageName = document.querySelector(".front-error-name");
  let errorMessagePrecio = document.querySelector(".front-error-precio");
  let errorMessageDescription = document.querySelector(
    ".front-error-description"
  );

  e.preventDefault();

  nombreProducto.addEventListener("blur", function () {
    if (this.value.length <= 4) {
      nombreProducto.style.backgroundColor = "#ff5151";
      errorMessageName.innerText = "El campo debe tener min 5 caractéres";
    }
  });

  nombreProducto.addEventListener("change", function () {
    console.log(this.value.length);
    if (this.value.length >= 5) {
      nombreProducto.style.backgroundColor = "#dadada";
      errorMessageName.innerText = "";
    }
  });

  descripcionProducto.addEventListener("blur", function () {
    if (this.value.length <= 20) {
      descripcionProducto.style.backgroundColor = "#ff5151";
      errorMessageDescription.innerText =
        "El campo debe tener min 20 caractéres";
    }
  });

  descripcionProducto.addEventListener("change", function () {
    if (this.value.length >= 20) {
      descripcionProducto.style.backgroundColor = "#dadada";
      errorMessageDescription.innerText = "";
    }
  });

  precioProducto.addEventListener("blur", function () {
    if (this.value.length <= 0) {
      precioProducto.style.backgroundColor = "#ff5151";
      errorMessagePrecio.innerText = "Debes llenar este campo";
    }
  });

  precioProducto.addEventListener("change", function () {
    if (this.value.length >= 1) {
      precioProducto.style.backgroundColor = "#dadada";
      errorMessagePrecio.innerText = "";
    }
  });
});

/*
        let descripcionCarateres = document.getElementById("descripcion")
   
   descripcionCarateres.addEventListener("click", function(){
    descripcionCarateres.style.backgroundColor = "red",
            alert("Tienes que completar en nombre del Producto")
            descripcionCarateres.addEventListener("blur", function() {
            if (nombreProducto >= 20) {
                descripcionCarateres.style.backgroundColor = "white"
            }
        })
        */

//let archivoImagen = document.getElementById("productImage")
