
window.addEventListener('load', () => {
    const form = document.querySelector('#formulario')
    const apellidos = document.getElementById('apellidos')
    const nombres = document.getElementById('nombres')
    const dni = document.getElementById('dni')
    const fecha_nacimiento = document.getElementById('fecha_nacimiento')
    const correo_institucional = document.getElementById('correo_institucional')
    const contraseña = document.getElementById('contraseña')
  
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      validaCampos()
  })
    const validaCampos = () => {
      //capturar los valores ingresados por el usuario
     
      const apellidosValor = apellidos.value.trim()
      const nombresValor = nombres.value.trim()
      const dniValor = dni.value.trim()
      const fechaValor = fecha_nacimiento.value.trim()
      const correovalor = correo_institucional.value.trim()
      const contraseñavalor =contraseña.value.trim()

    //validando campo nombres y apellidos
      const usu = /^[a-zA-Z]+( [a-zA-Z]+)*$/
      if (!apellidosValor) {
      
        validaFalla(apellidos, 'Campo vacío')
      }else if (!apellidosValor.match(usu)) {
        validaFalla(apellidos, 'Solo se aceptan caracteres tipo letra')
      }  else {
        validaOk(apellidos,'Completado')
      }



      const usu1 = /^[a-zA-Z]+( [a-zA-Z]+)*$/
      if (!nombresValor) {
       
        validaFalla(nombres, 'Campo vacío')
      }else if (!nombresValor.match(usu)) {
        validaFalla(nombres, 'Solo se aceptan caracteres tipo letra')
      }  else {
        validaOk(nombres,'Completado')
      }

    
      //validando campo email
      if (!correovalor) {
        validaFalla(correo_institucional, 'Campo vacío')
      } else if (!validaEmail(correovalor)) {
        validaFalla(correo_institucional, 'El e-mail no es válido')
      } else {
        validaOk(correo_institucional,'Completado')
      }
  
      //validando campo fecha
      if (!fechaValor) {
        validaFalla(fecha_nacimiento, 'Campo vacío')
      } else {
        validaOk(fecha_nacimiento,'Completado')
      }
        //validando campo contraseña
         if (!dniValor) {
         validaFalla(dni, 'Campo vacío')
         }else if (dniValor.length < 7 ) {
            validaFalla(dni, 'Por favor el campo acepta 8 digitos numero de dni')
        }else {
        validaOk(dni,'Completado')
            }


       //validando campo contraseña
       const contra = /^[a-zA-Z0-9]+$/
       if (!contraseñavalor) {
        validaFalla(contraseña, 'Campo vacío')
      }else if (!contraseñavalor.match(contra)) {
        validaFalla(contraseña, 'Solo se aceptan caracteres tipo letra y numeros')
      }else if (contraseñavalor.length < 6 || contraseñavalor.length > 7) {
        validaFalla(contraseña, 'Por favor el campo acepta 6 digitos para su contraseña')
    }else {
        validaOk(contraseña,'Completado')
      }
  
  
      if (apellidos.parentElement.classList.contains('ok') &&
      nombres.parentElement.classList.contains('ok') &&
      dni.parentElement.classList.contains('ok') &&
      fecha_nacimiento.parentElement.classList.contains('ok') &&
      correo_institucional.parentElement.classList.contains('ok') &&
      contraseña.parentElement.classList.contains('ok')) {
      form.submit();
      }
  
  
  
  
    }
  
    const validaFalla = (input, msje) => {
      const formControl = input.parentElement
      const aviso = formControl.querySelector('p')
      aviso.innerText = msje
  
      formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
      const formControl = input.parentElement
      const aviso = formControl.querySelector('p')
      aviso.innerText = msje
      formControl.className = 'form-control ok'
      
    }
  
    const validaEmail = (email) => {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
  } )
  