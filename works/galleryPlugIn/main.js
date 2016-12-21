

    
$(function(){
    
    var firstDone = false;
    
    var secondDone = false;
    
    var clientW = (document.body.clientWidth || document.documentElement.clientWidth);
    
       $(document).on("scroll",function(){
            if(clientW>1000 && screen.width>1000 ){
                var scrol = (document.body.scrollTop || document.documentElement.scrollTop)-1500;
                $("#options").css("background-position","0 "+scrol/2+"px");
            }
            var scrolCalcSecond = 0;
           
           if(clientW > 480){
               scrolCalcSecond = 400;
           }
           else{
               scrolCalcSecond = 150;
           }
           
           var scrol2 = (document.body.scrollTop || document.documentElement.scrollTop);
           if(scrol2>scrolCalcSecond && !firstDone){
            $(".insText").delay(500).animate({"opacity":"1"},500);
               if(clientW<640 && clientW>480) {
                $(".wrapper").animate({"width":"200px"},500);
                }
               else if(clientW>640){
                $(".wrapper").animate({"width":"400px"},500);
                }
               else if(clientW<480){
            $(".wrapper").animate({"width":"150px"},500);
            }
            $(".wrapper").css("overflow","visible");
            firstDone = true;
           }
             
            var scrollCalc = 0;
           
           if(clientW > 800){
               scrollCalc = 1700;
           }
           else{
               scrollCalc = 1300;
           }
           
            if(scrol2>scrollCalc && !secondDone){
                $(".htmlcode").animate({"width":"100%"},500);
                $(".blue").delay(500).animate({"opacity":"1"},500);
                $(".gree").delay(500).animate({"opacity":"1"},500);
                $(".orange").delay(500).animate({"opacity":"1"},500);
                $(".black").delay(500).animate({"opacity":"1"},500);
                $(".purple").delay(500).animate({"opacity":"1"},500);
            
                secondDone = true;
            }
            
    }); 
    
    
    
    $(window).resize(function(){
        var clientW = (document.body.clientWidth || document.documentElement.clientWidth);
            if(clientW<635 && clientW>480){
                $(".wrapper").css("width","250px");
            }
            else if(clientW>640){
            $(".wrapper").css("width","400px");
            }
            else if(clientW<480){
            $(".wrapper").css("width","150px");
            }
            $(document).on("scroll",function(){
                if(clientW>1000 && screen.width>1000 ){
                var scrol = (document.body.scrollTop || document.documentElement.scrollTop)-1500;
                $("#options").css("background-position","0 "+scrol/2+"px");
                }
            else{
            $("#options").css("background-position","center");
            }
            });
            if(clientW>1000 && screen.width>1000 ){
                $("#options").css("background-position","center");
            }
        
    });
    
     bredisGallery.start("#hidePicsHere"); 
    
    
    });
    
    
    
