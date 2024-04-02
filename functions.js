


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('eyecon').addEventListener('click', function () {
        var passwordInput = document.getElementById('password1');
        var passwordInput2 = document.getElementById('password2');
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          passwordInput2.type = 'text';
        } else {
          passwordInput.type = 'password';
          passwordInput2.type = 'password';
        }
    });
    document.querySelector('form').addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();

  
      // Obtiene los valores de los campos de contraseña
      var password1 = document.getElementById('password1').value;
      var password2 = document.getElementById('password2').value;

      var errorDisplay = document.getElementById('errorMsgDisplay')

      // Verifica si las contraseñas son iguales
      if (password1 !== password2) {
        errorDisplay.style.display = 'block';
        errorDisplay.style.color = 'red';
        errorDisplay.textContent = 'Las contraseñas no coinciden.';
        return;
      }
    
      // Verifica si la contraseña cumple con los requisitos
      var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      if (!regex.test(password1)) {
        errorDisplay.style.display = 'block';
        errorDisplay.style.color = 'red';
        errorDisplay.textContent = 'La contraseña debe tener al menos una mayúscula' + 'un número y ser mayor a 7 letras.' ;
        return;
      }
    
      // Si todo está bien, muestra un mensaje de éxito
      errorDisplay.style.display = 'block';
      errorDisplay.textContent = '¡Formulario completado correctamente!';
      errorDisplay.style.color = 'green';

      if (errorDisplay.textContent = '¡Formulario completado correctamente!'){
        setTimeout(function() {
          errorDisplay.style.display = 'none';
      }, 7000);
      }
    
    });
    


});

