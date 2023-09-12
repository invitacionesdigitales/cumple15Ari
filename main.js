
    const $days = document.getElementById('days'),
    $hours = document.getElementById('hours'),
    $minutes = document.getElementById('minutes'),
    $seconds = document.getElementById('seconds'),
    $finalMessage = document.querySelector('.final-sms');
    let boton = document.querySelector("#btn")
    
    
    boton.addEventListener("click", () => {

        Swal.fire({
          title: '<strong>VER LA UBICACION<u></u></strong>',
          icon: 'success',
          html:
            'INGRESÁ' +
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.328166449957!2d-56.4461346!3d-34.7473253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1c45efac80efb%3A0x2d97f6253f8d9ada!2sGranja%20Tur%C3%ACstica%20Las%20Cabras!5e0!3m2!1ses-419!2suy!4v1694476682206!5m2!1ses-419!2suy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
            'Podes ampliar el mapa',
            
            
        })
      });
          
        
    
        
     

   
    //Fecha a futuro
const countdownDate = new Date('Octubre 20 2023 22:00:30 GMT-0300').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //Cuando llegue a 0
    if(distance < 0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);