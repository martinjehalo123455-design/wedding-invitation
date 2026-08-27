const fechaObjetivo = new Date("2026-12-06T11:59:59").getTime();
// const fechaObjetivo = new Date("2026-05-07T09:32:00").getTime();

const intervalo = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    clearInterval(intervalo);
    const timer = document.getElementById("timer-card");
    timer.textContent = "";
    timer.innerHTML = "<h3>!ES HOY, ES HOY!</h3>";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = `${dias}`;
  document.getElementById("horas").textContent = `${horas}`;
  document.getElementById("minutos").textContent = `${minutos}`;
  document.getElementById("segundos").textContent = `${segundos}`;

  
}, 1000);