const formulario = document.getElementById("miFormulario");

// Se le agrega un evento al formuario
formulario.addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    asistir:this.asistir.value,
    nombre:this.nombre.value,
    alergias:this.alergias.value,
    musica:this.musica.value,
    mensaje:this.mensaje.value,
  };

  fetch("https://script.google.com/macros/s/AKfycbxcrbcWZqE9DJI0Hu_I3uRHKu4v1H2NsUkJ_4uA5pJhUgYUPOVTv2ntrIZOuPO8ekE/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    const form = document.getElementById('form-register-section');
    form.className = "form-register-confirmation-section";
    form.innerText = "¡Gracias por confirmar tu asistencia. Te esperamos!";
  })
  .catch(error => {
    document.getElementById('info').innerText = "Error al enviar datos"
  });
});