
$(document).ready(function(){  
    $("#butt1").click(function(){
        $("#targil1").text("Welcome to jQuery");
        console.log("Welcome to jQuery");
        alert("Welcome to jQuery");
    });
    
    
    $("table tr:even").css("background","#656565"); 
    $("table tr:odd").css("background","#e2e2e2");
    
    
    $("#targil3").mouseenter(function(){
        $(this).stop().fadeOut(0);
    });
    $("#targil3").mouseleave(function(){
        $(this).delay(300).fadeIn(500);
    });
    
    
    
        $(".a1").css({"color":"orange",
                    "text-decoration":"none"}); 
    
    
    
        
        var a = $(".a2");
        a.css("color","green");
        $(a).each(function(){
            if($(this).attr("href").indexOf(".co.il") !=-1)
                $(this).css("color","blue");
        });
    
    $("#galery img").first().show().siblings().hide();
    $("#galery img").click(function(){
        $(this).hide().next().show();
        if(!$(this).next().length){
            $("#galery img").first().show().siblings().hide();
        }
    });
    
    
    function slideshow(){
        
        var img = $("#galery2 img");
        $(img).each(function(){
           if($(this).css("display") == "inline" || $(this).css("display") == "block" || $(this).css("display") == "inline-block" ){
                $(this).hide().next().show();
                if(!$(this).next().length){
                    img.first().show().siblings().hide();
                }
               return false;
           } 
        });
        
    }
    
    var slide = setInterval(slideshow, 3000);
    
    
    var img1 = $("#galery3 img");
    $("#next").click(function(){
        $(img1).each(function(){
           if($(this).css("display") == "inline" || $(this).css("display") == "block" || $(this).css("display") == "inline-block" ){
               $(this).hide().next().show();
                if(!$(this).next().length){
                    img1.first().show().siblings().hide();
                }   
               
               return false;
           }
        }); 
    });
    
    
    $("#back").click(function(){
       $(img1).each(function(){
           if($(this).css("display") == "inline" || $(this).css("display") == "block" || $(this).css("display") == "inline-block" ){
               $(this).hide().prev().show();
                if(!$(this).prev().length){
                    img1.last().show().siblings().hide();
                }   
               
               return false;
           }
       }); 
    });
    
    
  








    $("#tabs li").click(function(){
    $(".content").eq($(this).index()).addClass("active")
                 .siblings().removeClass("active");
    });


    $(".active").children(".im").animate({"margin-right":"10px"},500);
    $("#tabs li").click(function(){
    $(".content").eq($(this).index()).children(".im").animate({"margin-right":"10px"},500);
    $(".im").css("margin-right","-100%");

    });             



    bredisGallery.start("#galery-1");

    bredisGallery.start("#galery-2");

    

});  






    
    
