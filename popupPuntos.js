// id = updateButton

document.addEventListener("DOMContentLoaded", function () {
  var cambiarColorBtn = document.getElementById("updateButton");
  cambiarColorBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "capturarPuntos" },
        function (response) {
          // Aquí obtienes solo el valor del mensaje
          let msnResponse = response && response.message;
          console.log(msnResponse);
          var token = localStorage.getItem(
            "CognitoIdentityServiceProvider.2r1mfggq9g4kcevm2f4kiu73us.c7fc6e4f-31eb-47d1-b00d-2d6d2aa20872.accessToken"
          );
          persistirPuntos(msnResponse, token);
        }
      );
    });
  });
});

function persistirPuntos(puntos, token2) {
  // URL de la API Gateway
  const url =
    "https://qpfg5gn4rk.execute-api.us-east-2.amazonaws.com/pruebas/postPuntos";

  // Encabezados de la solicitud
  const headers = {
    Authorization:
      "Bearer "+ token2,
      "Content-Type": "application/json",
  };

  // Datos a enviar en la solicitud
  const data = {
    puntos: puntos,
  };

  // Configuración de la solicitud
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  };

  // Realizar la solicitud a la API
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Aquí puedes manejar la respuesta de la API
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud:", error);
    });
}
