/**
 * Script corregido para validación del formulario de contacto
 * Ahora usa los elementos span específicos para iconos
 */
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (!contactForm) return;

  // Agregar clase para estilos de validación
  contactForm.classList.add("needs-validation");

  // Agregar event listener para validación al enviar
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Verificar si el formulario es válido
    if (validateForm(contactForm)) {
      // Simular envío
      submitForm(contactForm);
    }
  });

  // Añadir validación en tiempo real a cada campo
  const formInputs = contactForm.querySelectorAll("input, textarea, select");
  formInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this);
    });

    // Limpiar mensaje de error cuando el usuario empieza a escribir
    input.addEventListener("input", function () {
      if (this.classList.contains("is-invalid")) {
        this.classList.remove("is-invalid");
        const errorMessage = this.parentNode.querySelector(".error-message");
        if (errorMessage) {
          errorMessage.remove();
        }
      }
    });
  });
});

/**
 * Valida el formulario completo
 * @param {HTMLFormElement} form - El formulario a validar
 * @returns {boolean} - True si el formulario es válido
 */
function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll("input, textarea, select");

  // Validar cada campo
  inputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  return isValid;
}

/**
 * Valida un campo individual
 * @param {HTMLElement} field - El campo a validar
 * @returns {boolean} - True si el campo es válido
 */
function validateField(field) {
  let isValid = true;
  let errorMessage = "";

  // Eliminar mensajes de error previos
  const existingError = field.parentNode.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  // Limpiar clases de validación previas
  field.classList.remove("is-valid", "is-invalid");

  // Validar según el tipo de campo
  if (field.hasAttribute("required") && !field.value.trim()) {
    isValid = false;
    errorMessage = "Este campo es obligatorio";
  } else if (field.type === "email" && field.value.trim()) {
    // Validar formato de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(field.value)) {
      isValid = false;
      errorMessage = "Ingresa un correo electrónico válido";
    }
  } else if (field.id === "name" && field.value.trim()) {
    // Validar que el nombre solo tenga letras
    const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!namePattern.test(field.value)) {
      isValid = false;
      errorMessage = "El nombre solo debe contener letras";
    }
  }

  // Mostrar error si no es válido
  if (!isValid) {
    field.classList.add("is-invalid");

    // Crear mensaje de error
    const error = document.createElement("div");
    error.className = "error-message";
    error.textContent = errorMessage;
    field.parentNode.appendChild(error);
  } else {
    // Si el campo tiene valor y es válido
    if (field.value.trim()) {
      field.classList.add("is-valid");
    }
  }

  return isValid;
}

/**
 * Simula el envío del formulario
 * @param {HTMLFormElement} form - El formulario a enviar
 */
function submitForm(form) {
  // Mostrar indicador de carga
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

  // Simular una petición AJAX (en un caso real, aquí iría el código para enviar los datos al servidor)
  setTimeout(function () {
    // Mostrar mensaje de éxito
    form.innerHTML = `
        <div class="form-success">
          <i class="fas fa-check-circle"></i>
          <h3>¡Mensaje enviado con éxito!</h3>
          <p>Gracias por contactarme. Me pondré en contacto contigo lo antes posible.</p>
        </div>
      `;

    // Opcional: Scroll hacia el mensaje de éxito
    form.scrollIntoView({ behavior: "smooth" });
  }, 2000); // Simular 2 segundos de procesamiento
}
