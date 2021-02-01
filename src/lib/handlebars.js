const helpers = {};
helpers.lista = function (value) {
  return value[0].rol_nombre;
};
helpers.existe = function (datos, pos) {
  var x = false;
  var modulo = "";
  var aux = 0;
  for (var i = 0; i < datos.length; i++) {
    if (datos[i].mod_id == pos) {
      x = true;
      modulo = datos[i].mod_modulo;
    }
  }
  if (x && pos == 1) {
    var html =
      '<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse1"';
    html += 'aria-expanded="true" aria-controls="collapse1">';
    html += '  <i class="fas fa-user-alt"></i>';
    html += " <span>" + modulo + "</span>";
    html += "  </a>";
    html +=
      '<div id="collapse1" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">';
    html += ' <div class="bg-white py-2 collapse-inner rounded">';
    html += '  <a class="collapse-item" href="/cliente">Clientes</a>';
    html += '<a class="collapse-item" href="/rol">Roles</a>';
    html += '  <a class="collapse-item" href="/modulo">Modulos</a>';
    html +=
      ' <a class="collapse-item" href="/usuario/asig_rol">Asignar Usuario Rol</a>';
    html += "</div>";
    html += "</div>";
    html += ' <hr class="sidebar-divider">';
  } else if (x && pos == 2) {
    var html =
      '<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse2"';
    html += 'aria-expanded="true" aria-controls="collapse2">';
    html += '  <i class="fas fa-user-alt"></i>';
    html += " <span>" + modulo + "</span>";
    html += "  </a>";
    html +=
      '<div id="collapse2" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">';
    html += ' <div class="bg-white py-2 collapse-inner rounded">';
    html += '  <a class="collapse-item" href="#">Falta</a>';
    html += "</div>";
    html += "</div>";
    html += ' <hr class="sidebar-divider">';
  } else if (x && pos == 3) {
    var html =
      '<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse3"';
    html += 'aria-expanded="true" aria-controls="collapse3">';
    html += '  <i class="fas fa-user-alt"></i>';
    html += " <span>" + modulo + "</span>";
    html += "  </a>";
    html +=
      '<div id="collapse3" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">';
    html += ' <div class="bg-white py-2 collapse-inner rounded">';
    html += '  <a class="collapse-item" href="#">Falta</a>';
    html += "</div>";
    html += "</div>";
    html += ' <hr class="sidebar-divider">';
  } else if (x && pos == 4) {
    var html =
      '<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse4"';
    html += 'aria-expanded="true" aria-controls="collapse4">';
    html += '  <i class="fas fa-user-alt"></i>';
    html += " <span>" + modulo + "</span>";
    html += "  </a>";
    html +=
      '<div id="collapse4" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">';
    html += ' <div class="bg-white py-2 collapse-inner rounded">';
    html += '  <a class="collapse-item" href="#">Falta</a>';
    html += "</div>";
    html += "</div>";
    html += ' <hr class="sidebar-divider">';
  }else if(x && pos==5){
    var html =
      '<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse5"';
    html += 'aria-expanded="true" aria-controls="collapse5">';
    html += '  <i class="fas fa-user-alt"></i>';
    html += " <span>" + modulo + "</span>";
    html += "  </a>";
    html +=
      '<div id="collapse5" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">';
    html += ' <div class="bg-white py-2 collapse-inner rounded">';
    html += '  <a class="collapse-item" href="#">Falta</a>';
    html += "</div>";
    html += "</div>";
    html += ' <hr class="sidebar-divider">';
    } else {
    html = "";
  }
  return html;
};

module.exports = helpers;
