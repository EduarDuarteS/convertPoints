// Escucha el mensaje enviado desde el background script o el popup
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "capturarPuntos") {
    console.log("Ejecutando la acción para capturar puntos.");
    let puntos = capturarPuntos();
    //console.log("puntos en Listener: ", puntos);
    sendResponse({ message: puntos });
  }
});

// Función para capturar puntos de CooMeet

function capturarPuntos() {
  let puntos;
  var btn = document.querySelectorAll(".app-badge-button");
  puntos = btn[0].innerText;
  // console.log("puntos en función capturar puntos: ", puntos);
  return puntos;
}
