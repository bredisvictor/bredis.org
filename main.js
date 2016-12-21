$(function(){
    var loadingconteiner = $("#loadingconteiner");
    var loadingtext = $("#loading");
    var bredis1 = $("#bredis1");
    var bredis2 = $("#bredis2");
    var bordertop = $("#bordertop");
    var borderright = $("#borderright");
    var borderbottom = $("#borderbottom");
    var borderleft = $("#borderleft");
    var b = $("#b");
    var r = $("#r");
    var e = $("#e");
    var d = $("#d");
    var i = $("#i");
    var s = $("#s");
    var v = $("#v");
    var i2 = $("#i2");
    var c = $("#c");
    var t = $("#t");
    var o = $("#o");
    var r2 = $("#r2");
    var loadinterval;
    
    $("#bredis2 div:odd").css("margin-top","-300px");
    $("#bredis2 div:even").css("margin-top","300px");
    
    
    function loading(){
        $("#bredis2 div").css("display","block");
        b.animate({"margin-top":"-5px"},300).animate({"margin-top":"0"},300);
        loadingtext.animate({"top":"70%"},500);
        loadinterval = setInterval(loadingtextt,500);
        setTimeout(rt,200);
        setTimeout(et,200*2);
        setTimeout(dt,200*3);
        setTimeout(it,200*4);
        setTimeout(st,200*5);
        setTimeout(vt,200*6);
        setTimeout(i2t,200*7);
        setTimeout(ct,200*8);
        setTimeout(tt,200*9);
        setTimeout(ot,200*10);
        setTimeout(r2t,200*11);
        setTimeout(border1,2400);
        setTimeout(border2,2900);
        setTimeout(border3,3400);
        setTimeout(border4,3900);
        setTimeout(bredis1t,2400);
        setTimeout(bredishide,4400);
        setTimeout(loadingoff,5000);
    
        
        
    }
    
    function rt(){
        r.animate({"margin-top":"5px"},300).animate({"margin-top":"0"},300);
    }
    function et(){
        e.animate({"margin-top":"-5px"},300).animate({"margin-top":"0"},300);
    }
    function dt(){
        d.animate({"margin-top":"5px"},300).animate({"margin-top":"0"},300);
    }
    function it(){
        i.animate({"margin-top":"-5px"},300).animate({"margin-top":"0"},300);
    }
    function st(){
        s.animate({"margin-top":"5px"},300).animate({"margin-top":"0"},300);
    }
    function vt(){
        v.animate({"margin-top":"-5px"},300).animate({"margin-top":"0"},300);
    }
    function i2t(){
        i2.animate({"margin-top":"5px"},300).animate({"margin-top":"0"},300);
    }
    function ct(){
        c.animate({"margin-top":"-5px"},300).animate({"margin-top":"0"},300);
    }
    function tt(){
        t.animate({"margin-top":"5px"},300).animate({"margin-top":"0"},300);
    }
    function ot(){
        o.animate({"margin-top":"-5px"},300).animate({"margin-top":"0"},300);
    }
    function r2t(){
        r2.animate({"margin-top":"5px"},300).animate({"margin-top":"0"},300);
    }
    function loadingtextt(){
        loadingtext.fadeToggle();
    }
    function border1(){
        bordertop.animate({"width":"100%"},500);
        
    }
    function border2(){
        borderright.animate({"height":"100%"},500);
         
    }
    function border3(){
        borderbottom.animate({"width":"100%"},500);
    }
    function border4(){
        borderleft.animate({"height":"100%"},500)
                  .animate({
                      "bottom":"50%",
                      "height":"0"
                  },300);
    }
    function bredis1t(){
        bredis1.animate({"width":"200px"},2000);
    }
    
    function bredishide(){
        $("#bredisspan").css("display","none");
        bredis2.css("display","none");
        clearInterval(loadinterval);
        loadingtext.css("display","none");
        borderbottom.animate({"bottom":"50%"},300).animate({"width":"0",
                                                           "right":"50%"},300);
        bordertop.animate({"top":"50%"},300)
                 .animate({"width":"0",
                           "left":"50%"},300);
       borderright.animate({
            "top":"50%",
            "height":"0"
        },300);
        
    }
    
    function loadingoff(){
        loadingconteiner.css("display","none");
    }
    
    loading();
    
    
    
    
    
    
    setTimeout(function(){
        $("header").animate({"opacity":"1"},700);
        $("section").css("opacity","1");
        $("footer").css("opacity","1");
        $("html").css({"overflow-y":"auto",
                    "overflow-x":"auto"});
        $("#logo>h1").animate({"margin-top":"0",
                              "opacity":"1"},700);
        $("#logo>span").animate({"top":"120px",
                              "opacity":"1"},700);
        $("body").css("background-color"," #fff");
        $("#menubutton").fadeIn(700);
        
    },5000);
    
    
    
    
    
    function skillsscales(html,css,js,jq,ajs,njs,php,mysql,nosql){
    $("#html5scale").animate({"width":+html+"%"},700);
    $("#css3scale").animate({"width":+css+"%"},700);
    $("#javascriptscale").animate({"width":+js+"%"},700);
    $("#jqueryscale").animate({"width":+jq+"%"},700);
    $("#angularjsscale").animate({"width":+ajs+"%"},700);
    $("#hodejsscale").animate({"width":+njs+"%"},700);
    $("#phpscale").animate({"width":+php+"%"},700);
    $("#mysqlscale").animate({"width":+mysql+"%"},700);
    $("#nosqlscale").animate({"width":+nosql+"%"},700);
}
    
    
    
    
    
    var q1 = false;
    var q2 = false;
    var q3 = false;
    var q4 = false;
    var q5 = false;
    var q6 = false;
    var q7 = false;
    var q8 = false;
    var q9 = false;
    
    $(document).scroll(function(){
        
        var scrolltop = (document.body.scrollTop || document.documentElement.scrollTop);
        var clientW = (document.body.clientWidth || document.documentElement.clientWidth);
        
        
        
        
        
        var screenHeight = (document.body.clientHeight || document.documentElement.clientHeight);
        var aboutFirst = ($(".aboutheader").eq(0).offset().top) - screenHeight ;
        var aboutSecond = ($(".aboutheader").eq(1).offset().top) - screenHeight ;
        var aboutThirth = ($(".aboutheader").eq(2).offset().top) - screenHeight ;
        var aboutFourth = ($(".aboutheader").eq(3).offset().top) - screenHeight ;
        var aboutSell = ($("#abiutsection").offset().top) - screenHeight+240 ;
        var personalinfosection = ($("#personalinfosection").offset().top) - screenHeight+240 ;
        var picsection = ($("#picsection").offset().top) - screenHeight+240 ;
        var skillsmainP = ($("#skillsmain p").offset().top) - screenHeight+240 ;
        var skillsinner = ($("#skillsinner").offset().top) - screenHeight+240 ;
        
        if(scrolltop>aboutFirst&&!q1){
            $(".aboutheader").eq(0).animate({"margin-top":"0",
                                       "opacity":"1"},700);
            q1 = true;
        }
        if(scrolltop>aboutSell&&!q2){
            q2 = true;
            $("#abiutsection").animate({"left":"0",
                                       "opacity":"1"},700);
                          
        }
        
        if(scrolltop>personalinfosection&&!q3){
            q3 = true;
            $("#personalinfosection").animate({"right":"0",
                                       "opacity":"1"},700);
            
                 
        }
        
        if(scrolltop>picsection&&!q4){
            q4 = true;
            
            $("#picsection").css({"transform":"rotate(30deg)"});
            $("#picsection").css({"opacity":"1"});      
            setTimeout(rotate1,200);                
        }
        
        function rotate1(){
            $("#picsection").css({"transform":"rotate(-20deg)"});
            setTimeout(rotate2,200); 
        }
        function rotate2(){
            $("#picsection").css({"transform":"rotate(10deg)"});
            setTimeout(rotate3,200); 
        }
        function rotate3(){
            $("#picsection").css({"transform":"rotate(0deg)"});
        }
        
        
        if(scrolltop>aboutSecond&&!q5){
            $(".aboutheader").eq(1).animate({"margin-top":"0",
                                       "opacity":"1"},700);
            q5 = true;
        }
        
        if(scrolltop>skillsmainP&&!q6){
            q6 = true;
            $("#skillsmain p").animate({"left":"100px",
                                       "opacity":"1"},700);
         }
        
        if(scrolltop>skillsinner&&!q7){
            q7 = true;
           $("#skillsinner").animate({"right":"0",
                                       "opacity":"1"},700);
            skillsscales(90,95,80,85,50,0,69,72,0);
         }
        if(scrolltop>aboutThirth&&!q8){
            $(".aboutheader").eq(2).animate({"margin-top":"0",
                                       "opacity":"1"},700);
            q8 = true;
        }
        
        if(scrolltop>aboutFourth&&!q9){
            $(".aboutheader").eq(3).animate({"margin-top":"0",
                                       "opacity":"1"},700);
            q9 = true;
        }
        
        
        
        
        $(".works").mouseover(function(){
            
            $(this).children(".filter").css({"opacity":"1"});
            $(this).children(".imagetextwrapper").css({"opacity":"1",
                                                   "top":"25%"});
            
            
            
            $(this).children(".imagetextwrapper").children("a").css("display","block");
            
            
        });
        $(".works").mouseleave(function(){
            $(this).children(".filter").css({"opacity":"0"});
            $(this).children(".imagetextwrapper").css({"opacity":"0",
                                                   "top":"15%"},400);
            $(this).children(".imagetextwrapper").children("a").css("display","none");
            
        });
        
        
        if(clientW>1000&&screen.width>1000){
                var scrol = (document.body.scrollTop || document.documentElement.scrollTop);
                $("header").css("background-position","0 "+scrol/1.3+"px");
                $("header").css("background-size","cover");
            
            
        
        }
        
    });
    
    
    
        
    $(window).resize(function(){
        var clientW = (document.body.clientWidth || document.documentElement.clientWidth);
        if(clientW<1000){
            $("header").css("background-position","top");
        }    
   
    
    });
    
    
    var menuOn = false;
    
    function menuOff(){
        menuOn = false;
            $("nav").fadeOut(700);
            $("#menu>li").css("display","none");
            $("#menu>li").css("opacity","0");
            $("#menu>li").eq(0).css({"top":"50px"});
            $("#menu>li").eq(1).css({"top":"100px"});
            $("#menu>li").eq(2).css({"top":"150px"});
            $("#menu>li").eq(3).css({"top":"200px"});
            
            
    }
    
    function toggleMenu(){
        $("#topLine").toggleClass("topLine");
        $("#midleLine").toggleClass("midleLine");
        $("#bottomLine").toggleClass("bottomLine");
    }
    
    $("#menubutton").click(function(){
        toggleMenu();
        
        
        if(!menuOn){
            menuOn = true;
            $("nav").fadeIn(700);
            $("#menu>li").css("display","block");
            $("#menu>li").eq(0).stop().animate({"top":"0","opacity":"1"},750);
            $("#menu>li").eq(1).stop().delay(100).animate({"top":"50px","opacity":"1"},750);
            $("#menu>li").eq(2).stop().delay(200).animate({"top":"100px","opacity":"1"},750);
            $("#menu>li").eq(3).stop().delay(300).animate({"top":"150px","opacity":"1"},750);
            
        }
        else{
            menuOff();
        }
    });
    
    $("#menu>li>a").click(function(){
        toggleMenu();
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({"scrollTop":destination},1300,"swing");
        menuOff();
    });
    
    var sendInt;
    function sending(){
        
        $(".messageSpan").removeClass("spanred").text("Sending...").fadeToggle(500);
        
        
    }
    
    $("#sendbutton").click(function(){
        
        var name = $("#fname").val().trim();
        var email = $("#fmail").val().trim();
        var message = $("#fmessage").val().trim();
    
        if(name.length == 0){
            $(".messageSpan").addClass("spanred").text("Enter name");
            return false;
        }
        
        if(email.length == 0){
            $(".messageSpan").addClass("spanred").text("Enter e-mail");
            return false;
        }
        
        if(email.indexOf(".") == -1 || email.indexOf(".") == email.length-1 ||
          email.indexOf("@") == -1 || email.indexOf("@")>email.indexOf(".")){
           $(".messageSpan").addClass("spanred").text("Incorrect e-mail address");
            return false;
        }
        
        if(message.length == 0){
            $(".messageSpan").addClass("spanred").text("Enter message");
            return false;
        }
        
        sendInt = setInterval(sending,500);
        
        
        $.ajax({
            type:"POST",
            url:"sendemail.php",
            data:{
                name:$("#fname").val(),
                email:$("#fmail").val(),
                message:$("#fmessage").val()
            },
            success:function(ansver){
                clearInterval(sendInt);
                $(".messageSpan").fadeIn().removeClass("spanred").text(ansver);
				$("#fname").val("");
                $("#fmail").val("");
                $("#fmessage").val("");
            }
        });
        
        return false;
    });
});
