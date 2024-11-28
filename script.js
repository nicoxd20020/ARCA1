// Esperar a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function () {
  
    // 1. Manejo del menú desplegable
    const dropdownButton = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    dropdownButton.addEventListener('click', function () {
      // Alternar la visibilidad del menú desplegable
      dropdownMenu.classList.toggle('show');
    });
  
    // 2. Validación de formulario de contacto
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario hasta validar
        
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        
        // Validar si los campos están vacíos
        if (!nameInput.value || !emailInput.value) {
          alert('Por favor, complete todos los campos.');
          return;
        }
  
        // Verificar el formato del correo electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value)) {
          alert('Por favor, ingrese un correo electrónico válido.');
          return;
        }
  
        // Si la validación es exitosa, enviar el formulario (simulación)
        alert('Formulario enviado correctamente.');
        contactForm.reset(); // Limpiar el formulario
      });
    }
  
    // 3. Mostrar un mensaje de alerta al hacer clic en un enlace
    const alertLinks = document.querySelectorAll('.alert-link');
    
    alertLinks.forEach(function(link) {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        alert('¡Haz hecho clic en un enlace importante!');
      });
    });
  
  });
  