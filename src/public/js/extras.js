function ConfirmDemo(id, mens, url) {
  var mensaje = confirm("¿Esta seguro de " + mens + " el " + url + " ?");
  //Detectamos si el usuario acepto el mensaje
  if (!mensaje) {
    window.location.href = url;
  } else {
    window.location.href = url + "/" + mens + "/" + id;
  }
}

function Usuario() {
  var nombre = $("#nombre").val();
  var a = "http://localhost:4000/cliente/ajax";

  $.ajax({
    url: a,
    type: "post",
    dataType: "json",
    data: $(this).serialize(),
    success: function (response) {},
  });
}


function campoVacio(campo, valor) {
  if (campo.length != 0) {
    return true;
  } else {
    document.getElementById(valor).innerHTML =
      '<br><p style="color:#FF0000">No se permite campos vacios</p>';
    return false;
  }
}

function validarNumeros(numero, valor) {
  var regex_numeros = /^\d{7,10}$/;
  if (regex_numeros.exec(numero)) {
    return true;
  } else {
    document.getElementById(valor).innerHTML +=
      '<br><p style="color:#FF0000">Solo se permiten numeros de 10 digitos </p>';
    return false;
  }
}

function validarLetra(letra, valor) {
  var regex_letras = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.

  if (regex_letras.exec(letra)) {
    return true;
  } else {
    document.getElementById(valor).innerHTML =
      '<br><p style="color:#FF0000">Solo se permite letras</p>';
    return false;
  }
}
function validarCedulaEcuador(cedula) {
  var cad = cedula.trim();
  var total = 0;
  var longitud = cad.length;
  var longcheck = longitud - 1;

  if (cad !== "" && longitud === 10) {
    for (i = 0; i < longcheck; i++) {
      if (i % 2 === 0) {
        var aux = cad.charAt(i) * 2;
        if (aux > 9) aux -= 9;
        total += aux;
      } else {
        total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
      }
    }

    total = total % 10 ? 10 - (total % 10) : 0;

    if (cad.charAt(longitud - 1) == total) {
      return true;
    } else {
      document.getElementById("grupo_cedula").innerHTML =
        '<br><p style="color:#FF0000">Cedula incorrecta</p>';
      return false;
    }
  } else {
    document.getElementById("grupo_cedula").innerHTML =
      '<br><p style="color:#FF0000">El campo debe contener 10 digitos numericos</p>';
    return false;
  }
}

function validarCorreo(correo) {
  var regex_correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (regex_correo.exec(correo)) {
    return true;
  } else {
    document.getElementById("grupo_correo").innerHTML +=
      '<br><p style="color:#FF0000">Correo Incorrecto.</p>';
    return false;
  }
}
