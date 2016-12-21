var preload = document.getElementById("preload");
var universe = document.getElementById("universe");
preload.style.display = "block";


function preloader(){
    preload.style.display = "none";  
    universe.style.display = "block";
    menu.style.display = "block";
    
}


setTimeout(preloader, 5000);

window.onload = function(){

    
    
   var secondLayer = document.getElementById("secondLayer");
    var firstLayer = document.getElementById("firstLayer");
    var thirdLayer = document.getElementById("thirdLayer");
    var fourthLayer = document.getElementById("fourthLayer");
    var sun = document.getElementById("sun");
    var pluto = document.getElementById("pluto");
    var neptune = document.getElementById("neptune");
    var uranus = document.getElementById("uranus");
    var saturn = document.getElementById("saturn");
    var mercury = document.getElementById("mercury");
    var earth = document.getElementById("earth");
    var moon = document.getElementById("moon");
    var venus = document.getElementById("venus");
    var mars = document.getElementById("mars");
    var jupiter = document.getElementById("jupiter");
    var menu = document.getElementById("menu");
    var aboutMe = document.getElementById("aboutme");
    var earthIn = document.getElementById("earthin");
    var moonIn = document.getElementById("moonin");
    var myWorks = document.getElementById("mywork");
    var saturnIn = document.getElementById("saturnin");
    var skils = document.getElementById("skils");
    var uranusIn = document.getElementById("uranusin");
    var contacts = document.getElementById("contacts");
    var marsIn = document.getElementById("marsin");
    var aboutMeOut = document.getElementById("aboutmeout");
    var aboutX = document.getElementById("aboutclose");
    var n = 20;
    var y = 100;
    var z = 500;
    

    fourthLayer.onmousemove = function(e){
       firstLayer.style.backgroundPosition = -e.offsetX/40+n+'px '+-e.offsetY/40+'px';
       secondLayer.style.backgroundPosition = -e.offsetX/10+y+'px '+-e.offsetY/10+'px';
       thirdLayer.style.backgroundPosition = -e.offsetX/15+y+'px '+-e.offsetY/15+'px';
       sun.style.margin = -e.offsetY/8+'px '+-e.offsetX/8+'px';
       pluto.style.margin = -e.offsetY/8+'px '+-e.offsetX/9+'px';
       neptune.style.margin = -e.offsetY/7+'px '+-e.offsetX/7+'px';
       uranus.style.margin = -e.offsetY/9+'px '+-e.offsetX/9+'px';
       saturn.style.margin = -e.offsetY/6+'px '+-e.offsetX/6+'px';
       mercury.style.margin = -e.offsetY/8+'px '+-e.offsetX/8+'px';
       earth.style.margin = -e.offsetY/5+'px '+-e.offsetX/5+'px';
       moon.style.margin = -e.offsetY/5+'px '+-e.offsetX/5+'px';
       venus.style.margin = -e.offsetY/7+'px '+-e.offsetX/7+'px';
       mars.style.margin = -e.offsetY/8+'px '+-e.offsetX/8+'px';
       jupiter.style.margin = -e.offsetY/3+'px '+-e.offsetX/3+'px';
     
        
   }
    var button = menu.children[0] ;
    
    function closeMenu(){
        button.style.background ='url("img/leftarrow.svg")';
        button.innerHTML = "Close";
        button.style.backgroundSize = "40px 40px";
        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "left center";
        
    }
    
    function startMenu(){
        button.style.background ='url("img/rightarrow.svg")';
        button.innerHTML = "Menu";
        button.style.backgroundSize = "40px 40px";
        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "left center";
    }
    
    function liOn(){
        for(var i = 1; i < menu.children.length; i++){
                menu.children[i].style.display = "inline-block";
            }
    }
    var menuCount = 1;
    button.onclick = function(){
        
        if(menuCount%2!==0){
            this.innerHTML= "";
            this.style.left = "890px";
            menu.style.width = "100%";
            this.style.backgroundSize = "50px 50px";
            setTimeout(liOn,220);
            setTimeout(closeMenu, 200);
            this.onmouseover = function(){
                button.style.backgroundSize = "50px 50px";
            }
            this.onmouseout = function(){
                button.style.backgroundSize = "40px 40px";
            }
        }
        else{
            for(var i = 1; i < menu.children.length; i++){
                menu.children[i].style.display = "none";
            }
            this.innerHTML = "";
            this.style.left = "-150px"
            menu.style.width = "0";
            setTimeout(startMenu,200);
        }
        menuCount++;
    }
    
    
    
    aboutMe.onmouseover = function(){
       earthIn.style.width = "200px";
       earthIn.style.height = "200px";
       moonIn.style.width = "50px";
       moonIn.style.height = "50px";
       moonIn.style.marginLeft = "250px";
       moonIn.style.marginTop = "50px";
   }
   
   aboutMe.onmouseout = function(){
       earthIn.style.width = "35px";
       earthIn.style.height = "35px";
       
       moonIn.style.width = "12px";
       moonIn.style.height = "12px";
       moonIn.style.marginLeft = "0";
       moonIn.style.marginTop = "0";
    }
    function about(){
        aboutMeOut.style.width = "900px";
    }
    function about2(){
        aboutMeOut.style.height = "700px";
        aboutMeOut.style.top = "50%";
        aboutX.style.display = "block"
    }
    function aboutClose(){
        aboutMeOut.style.width = "30px";
    }
    function aboutClose2(){
        aboutMeOut.style.left = "-50%";
        aboutMeOut.style.zIndex = "0";
    }
    aboutX.onclick = function(){
            aboutX.style.display = "none"
            aboutMeOut.style.height = "2px";
            aboutMeOut.style.top = "90%";
            setTimeout(aboutClose,500);
            setTimeout(aboutClose2,1000);
            aboutCount++;
    }
    var aboutCount = 1;
    aboutMe.onclick = function(){
        if(aboutCount%2!==0){
        aboutMeOut.style.left = "50%";
        aboutMeOut.style.zIndex = "6";
        setTimeout(about,500);
        setTimeout(about2,1000);
        
        }
        else{
            aboutX.style.display = "none"
            aboutMeOut.style.height = "2px";
            aboutMeOut.style.top = "90%";
            setTimeout(aboutClose,500);
            setTimeout(aboutClose2,1000);
        }
       aboutCount++;
    }
   
    myWorks.onmouseover = function(){
        saturnIn.style.width = "550px";
        saturnIn.style.height = "250px";
        saturnIn.style.marginLeft = "-400%"
    }
  
    myWorks.onmouseout = function(){
        saturnIn.style.width = "150px";
        saturnIn.style.height = "70px";
        saturnIn.style.marginLeft = "0"
    }
    
    skils.onmouseover = function(){
        uranusIn.style.width = "350px";
        uranusIn.style.height = "350px";
        uranusIn.style.marginLeft = "-400%"
        uranusIn.style.marginTop = "200%"
        
    }
  
    skils.onmouseout = function(){
        uranusIn.style.width = "70px";
        uranusIn.style.height = "70px";
        uranusIn.style.marginLeft = "0"
        uranusIn.style.marginTop = "0"
        
    }
    
    contacts.onmouseover = function(){
        marsIn.style.width = "350px";
        marsIn.style.height = "350px";
        marsIn.style.marginLeft = "1000%";
        marsIn.style.marginTop = "-200%";
        
    }
  
    contacts.onmouseout = function(){
        marsIn.style.width = "17px";
        marsIn.style.height = "17px";
        marsIn.style.marginLeft = "0";
        marsIn.style.marginTop = "0";
        
        
    }
  
    
    
    
}
