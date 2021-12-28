window.addEventListener('load', function () {

    /** Indicador de menu*/

    const secciones = document.querySelectorAll('.section')
    const menuItems = document.querySelectorAll('.nav-menu-item')

    const funcionObserverser = entries => {
        entries.forEach(entry => {
            if (entry.isInteresting) {
                const itemActual = Array.from(menuItems).find(item => item.dataset.url === entry.target.id)
                itemActual.classList.add('active')
            }
        });
    }

    const observer = new IntersectionObserver(funcionObserverser, {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    })

    secciones.forEach(seccion => observer.observe(seccion))


    //Menu responsivo

    const iconoMenu = document.querySelector('.menu-responsivo-icono');
     menu = document.querySelector('#menu-responsivo');
     

    iconoMenu.addEventListener('click', (e) => {
        menu.classList.toggle('active');

        document.body.classList.toggle('opacity');

        const rutaActual = e.target.getAttribute('src');

        if(rutaActual == imagenes/menu-responsive.png){
            e.target.setAttribute('src','imagenes/menu2-responsivo.png');
        }else{
            e.target.setAttribute('src','imagenes/menu-responsivo.png');
        }



    });

});

