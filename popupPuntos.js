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
          persistirPuntos(msnResponse);
          console.log(
            localStorage.getItem(
              "CognitoIdentityServiceProvider.2r1mfggq9g4kcevm2f4kiu73us.c7fc6e4f-31eb-47d1-b00d-2d6d2aa20872.accessToken"
            )
          );

          sessionStorage.getItem("accessToken: ", encryptedAccessToken);
        }
      );
    });
  });
});

function persistirPuntos(puntos) {
  // URL de la API Gateway
  const url =
    "https://qpfg5gn4rk.execute-api.us-east-2.amazonaws.com/pruebas/postPuntos";

  // Encabezados de la solicitud
  const headers = {
    Authorization:
      "Bearer eyJraWQiOiJZUEt2eGpwXC9haHRRdEJmOUdGdVZieGJYbDh1SkJnVmllVHRcL3hJMVhTXC80PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjN2ZjNmU0Zi0zMWViLTQ3ZDEtYjAwZC0yZDZkMmFhMjA4NzIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9WV1ZGdmZmQTgiLCJjbGllbnRfaWQiOiIycjFtZmdncTlnNGtjZXZtMmY0a2l1NzN1cyIsIm9yaWdpbl9qdGkiOiJlMjA4NzBhNy02ZGFhLTQ1MWItOTkxNi0yN2QzZjRjNGE4ODQiLCJldmVudF9pZCI6IjlkNzg1MzY2LWVjMGEtNDg0NC1hMmQ0LThmYzA4ZTcyNDYzZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2OTEwMjgwNDEsImV4cCI6MTY5MTAzMTY0MSwiaWF0IjoxNjkxMDI4MDQxLCJqdGkiOiI2MjlkZDk5MS0zM2YyLTQwODItYTY0NS0xYWRjZGZiMTA2MzYiLCJ1c2VybmFtZSI6ImM3ZmM2ZTRmLTMxZWItNDdkMS1iMDBkLTJkNmQyYWEyMDg3MiJ9.O3bhLbYmx_srp_ck5wn5y8GaCoPaiOIqCOPb7sXjVLUBlPwR01_PzuMDno4a47yWSLV1P37kAk9fk-bO62STx3ftgm6f0Z0wsxx1a2KsKjW37TPW09_dhUjw9Z0ZyVJJcb-xAAIXLEJfEKLvxygJaYcI9ee5j_nhAtP3R0Ofy8Qpt455tevNAPoG5eqDrEnueaVNb4VRmY18mWUCYNuW3AjPs2hhFTGDBJqTjLjigaq8RRXcfpt8kXs_AyNdu6IJIltVW9SbGwbZRho1Yc_4zXNHhP7DqLZol-Gy5N1CF_-COJ49WMyO-YSoWtLWUucQO_7-R20mAtJe4bF4GgLMnQ",
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
