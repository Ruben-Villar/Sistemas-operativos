const contraseña = document.getElementById('contraseña');
const iconoOjo = document.getElementById('icono-ojo');

iconoOjo.addEventListener('click', function() {
  if (contraseña.type === 'password') {
    contraseña.type = 'text';
    iconoOjo.src = '/public/img/ojoc.png';
  } else {
    contraseña.type = 'password';
    iconoOjo.src = '/public/img/descarga.png';
  }
});
