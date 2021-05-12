$(document).ready(function () {
    var next = $('.page-link-next');
    var content = $('#content'); 
    var project1 = $('#projects');
    var projec1Clase= $('.project');
    var content2 = $('#content-2');
    var project2 = $('#projects-2');
    var content3 = $('#content-3');
    var project3 = $('#projects-3');

    next.click(function(){
      next.show();
      content.hide();
      project1.hide();
      content2.css("display","flex").css("left","0px").css("top","360px");
      project2.css("display","flex");

      btn_1.css("background","#fff");
      btn_1.css("color","#0d6efd");

      btn_2.css("background","#fff");
      btn_2.css("color","#0d6efd");

      btn_3.css("background","#fff");
      btn_3.css("color","#0d6efd");

      next.click(function(){
        content2.hide();
        project2.hide();
        content3.css("display","flex").css("left","0px").css("top","360px");
        project3.css("display","flex");

        btn_1.css("background","#fff");
        btn_1.css("color","#0d6efd");
  
        btn_2.css("background","#fff");
        btn_2.css("color","#0d6efd");
  
        btn_3.css("background","#fff");
        btn_3.css("color","#0d6efd");
      })
         
    })

    var btn_1 = $('.page-link1').click(function(){
        btn_1.show();

            btn_1.css("background","#ccc");
            btn_1.css("color","#223");
        

            btn_2.css("background","#fff");
            btn_2.css("color","#223");

            btn_3.css("background","#fff");
            btn_3.css("color","#0d6efd");
        

        content2.hide();
        project2.hide();
        content3.hide();
        project3.hide();
        content.css("display","flex");
        project1.css("display","flex");
        
    })

    var btn_2 = $('.page-link2').click(function(){
        btn_2.show();
        
        btn_2.css("background","#ccc");
        btn_2.css("color","#223");
        
            
        btn_1.css("background","#fff");
        btn_1.css("color","#0d6efd");

        btn_3.css("background","#fff");
        btn_3.css("color","#0d6efd");

        content.hide();
        project1.hide();
        content3.hide();
        project3.hide();
        content2.css("display","flex").css("left","0px").css("top","360px");
        project2.css("display","flex");
        
    })

    var btn_3 = $('.page-link3').click(function(){
        btn_3.show();
        
        btn_3.css("background","#ccc");
        btn_3.css("color","#333");
        
        btn_2.css("background","#fff");
        btn_2.css("color","#0d6efd");
            
        btn_1.css("background","#fff");
        btn_1.css("color","#0d6efd");

        content.hide();
        project1.hide();
        content2.hide();
        project2.hide();
        content3.css("display","flex").css("left","0px").css("top","360px");
        project3.css("display","flex");
        
    })

 

});