
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  $("#enviarCorreo").click(function(){
    alert("Su mensaje ha sido enviado exitosamente.");
  }); 

tooltipTriggerList2 = document.querySelectorAll('[data-bs-toggle="tooltip2"]');
tooltipList2 = [...tooltipTriggerList2].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));