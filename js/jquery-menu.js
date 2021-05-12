$(document).ready(function (){
    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        if (scroll > 580) {
          var menu = $(".nav");
          menu.css({ position: "fixed" });
          menu.css({ width: "100%" });
          menu.css({ height: "115px" });
          menu.css({ transition: "all 300ms" });
          menu.css({ background: "#050716" });
          $(".nav a").css({ color: "#fff" });
          menu.css({ boxShadow: "rgba(0, 0, 0, 0.22) 6px 1px 1px" });
          menu.css({ "z-index": "100" });
          if(scroll > 580){
            var active = document.getElementsByClassName(' active')
            menu.css({ borderBottom: "1px solid #fff" });
            var menuLinks = $('.nav-menu-link');
                menuLinks.css("font-size","15px");
                
                var redes = $('.social-body');
                redes.show();
          }

          var services = $('#services');
          services.css("top","619px");


          } 
        else {
            var menu = $(".nav");
            var menuLinks = $('.nav-menu-link');
            menuLinks.css("font-size","18px");
            menu.css({ borderBottom: "none" });
            menu.css({ transition: "all 300ms" });
            menu.css({ position: "relative" });
          $(".nav").css({ position: "relative" });
          $(".nav").css({ background: "transparent" });
          $(".nav").css({ "box-shadow": "0 0 0" });
            var redes = $('.social-body');
                redes.hide();
        
        }

        
    })
})