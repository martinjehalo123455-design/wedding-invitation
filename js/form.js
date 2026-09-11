const formulario = document.getElementById("confirmation-form");
const botonEnviar = document.getElementById("form-button");

// Se le agrega un evento al formulario
formulario.addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    apellidos:this.apellidos.value,
    nombre:this.nombre.value,
    alergias:this.alergias.value,
    mensaje:this.mensaje.value,
  };

  botonEnviar.disabled = true;

  fetch("https://script.google.com/macros/s/AKfycbyd8-c9hDouIc48gHoB-LIdRLAVbe2OHj-ThNL205xC4u1MNKhCKZn2rZcdoEjubw/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => {
    if (!res.ok) {
      throw new Error("Respuesta no exitosa del servidor");
    }
    alert("Se ha enviado tu respuesta, ¡Gracias por confirmar!");
    formulario.reset();
  })
  .catch(error => {
    alert("Error al enviar");
  })
  .finally(() => {
    botonEnviar.disabled = false;
  });
});