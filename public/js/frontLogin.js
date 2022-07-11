window.addEventListener("load", () => {
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  let emailError = document.querySelector(".errorEmail");
  let passwordError = document.querySelector(".errorPassword");

  email.addEventListener("blur", function () {
    if (!this.value.includes("@") || this.value.indexOf(".") == -1) {
      email.style.backgroundColor = "#ff5151";
      emailError.innerText = "Debes incluir un email válido";
    } else if (this.value.length < 1) {
      email.style.backgroundColor = "#ff5151";
      emailError.innerText = "El campo debe tener min 2 caractéres";
    }
  });
  email.addEventListener("change", function () {
    if (
      this.value.includes("@") &&
      this.value.indexOf(".") >= 0 &&
      this.value.length >= 2
    ) {
      email.style.backgroundColor = "#dadada";
      emailError.innerText = "";
    }
  });

  password.addEventListener("blur", function () {
    if (this.value.length < 1) {
      password.style.backgroundColor = "#ff5151";
      passwordError.innerText = "Debes llenar este campo";
      //   errores.push("El campo debe tener min 2 caractéres");
    }
  });

  password.addEventListener("change", function () {
    if (this.value.length >= 1) {
      password.style.backgroundColor = "#dadada";
      passwordError.innerText = "";
    }
  });
});
