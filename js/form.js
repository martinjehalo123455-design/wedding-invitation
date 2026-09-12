const confirmation_label1 = document.getElementById("confirmation-label-1");
const confirmation_label2 = document.getElementById("confirmation-label-2");
const formulario = document.getElementById("confirmation-form");
const botonEnviar = document.getElementById("form-button");


function confirmed() {
    formulario.remove();
    confirmation_label2.remove();
    confirmation_label1.innerHTML = "";
    confirmation_label1.innerText = "¡Gracias por confirmar tu asistencia!"
}

// Se le agrega un evento al formulario
formulario.addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    apellidos:this.apellidos.value,
    nombre:this.nombre.value,
    alergias:this.alergias.value,
    mensaje:this.mensaje.value,
  };

  fetch("https://script.google.com/macros/s/AKfycbwViBfoY1ZASWarcTZqPEykYRriYjU4NrWJGuQpHVEVzovr1F_Z-YUe7nczDSh0weE/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => {
    if (!res.ok) {
      throw new Error("Respuesta no exitosa del servidor");
    } else {
        alert("Respuesta enviada");
        confirmed();
    }
  })
  .catch(error => {
    alert("Error al enviar");
  })
});