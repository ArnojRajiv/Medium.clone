$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
          $(".black").css("background" , "#fff");
        }
  
        else{
            $(".black").css("background" , "#FFC017");  	
        }
    })
  })

  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
          $(".not-so-dark").css("background" , "green");
        }
  
        else{
            $(".not-so-dark").css("background" , "black");  	
        }
    })
  })
