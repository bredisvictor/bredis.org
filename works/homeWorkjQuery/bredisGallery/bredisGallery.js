
var bredisGallery = {


    main: $("<div id='galeryMain'></div>"),


    next: $("<div id='nextbutton'></div>").click(function(){

        var image = $("#galeryMain img");
        $(image).each(function(){
            if($(this).css("display") == "inline" || $(this).css("display") == "block" || $(this).css("display") == "inline-block" ){
                $(this).hide().next().show().css({"right":"-300%",
                                                 "opacity":"0"}).animate({"right":"0",
                                                                         "opacity":"1"},300);
                if(!$(this).next().length){
                        image.first().show().css({"right":"-300%",
                                                 "opacity":"0"}).animate({"right":"0",
                                                        "opacity":"1"},300).siblings().hide();
                    }   

                   return false;
               }
            });
        }),

    back: $("<div id='backbutton'></div>").click(function(){

        var image = $("#galeryMain img");
        $(image).each(function(){
            if($(this).css("display") == "inline" || $(this).css("display") == "block" || $(this).css("display") == "inline-block" ){
                   $(this).hide().prev().show().css({"left":"-300%",
                                                 "opacity":"0"}).animate({"left":"0",
                                                                         "opacity":"1"},300);
                if(!$(this).prev().length){
                        image.last().show().css({"left":"-300%",
                                                 "opacity":"0"}).animate({"left":"0",
                                                        "opacity":"1"},300).siblings().hide();
                    }   

                   return false;
               }
            });
        }),
    
    close:  $("<div id='closebutton'></div>").click(function(){
        $("#galeryMain").empty();
        $("#galeryMain").fadeOut();
        $("#wrappernav").hide();
        $("#nextbutton").hide();
        $("#backbutton").hide();
        $(this).hide();
        }),
    
    wrapperNav: $("<div id='wrappernav'></div>"),

    start: function(index){
        var images = $(index).html();
        $(index+" img").click(this,function(e){
            $(e.data.main).prependTo("body");
            $(images).appendTo("#galeryMain");
            $(e.data.wrapperNav).prependTo("body");
            $(e.data.back).prependTo("#wrappernav");
            $(e.data.next).prependTo("#wrappernav");
            $(e.data.close).prependTo("body");
            $("#galeryMain").show();
            $("#wrappernav").show();
            $("#nextbutton").show();
            $("#backbutton").show();
            $("#closebutton").show();
            $("#galeryMain img").eq($(this).index()).fadeIn().siblings().hide();
        });
    }
}


