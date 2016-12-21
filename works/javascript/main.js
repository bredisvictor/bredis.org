// create 514 blocks //

for(var i = 1; i <= 514; i++){
    document.getElementById("first").innerHTML+='<div class="cl" id="q'+i+'"></div>';
}

// start mixing//

var q = 1;
for(var i = 1; i<=514; i++){
   q = Math.round(Math.random()*1000);
   document.getElementById("q"+i).style.marginLeft=q+"px";
   
} 

//mixing click function//

function mix(){
var y = 1;
var z = 1;
    
    for(var i = 1; i<=514; i++){
    z = Math.round(Math.random()*1000);
    y = Math.round(Math.random()*1000);
    document.getElementById("q"+i).style.marginLeft=z+"px";
    document.getElementById("q"+i).style.marginTop=y+"px";
    }
    
}

// Style functions//

// m = margin //
// w = width //
// h = height //
// b = background //
// t = transform //
// r = border-radius //
// ml = margin-left //
// mt = margin-top //
// z = z-index //
// trans = transition //
// show = inner HTML //
function m(a,b){
    document.getElementById(a).style.margin=b;
}
function w(a,b){
    document.getElementById(a).style.width=b;
}
function h(a,b){
    document.getElementById(a).style.height=b;
}
function b(a,b){
    document.getElementById(a).style.background=b;
}
function t(a,b){
  document.getElementById(a).style.transform="rotate("+b+"deg)";
}
function r(a,b){
  document.getElementById(a).style.borderRadius=b;
}
function ml(a,b){
  document.getElementById(a).style.marginLeft=b;
}
function mt(a,b){
  document.getElementById(a).style.marginTop=b;
}
function z(a,b){
  document.getElementById(a).style.zIndex=b;
}
function trans(a,b){
  document.getElementById(a).style.transition=b;
}
function show(a,b){
    document.getElementById(a).innerHTML=b;
}
 // setTimeout functions//

function autoplay(){
    /*mix();*/
    show("buttons","");
    slide1();
    setTimeout(slide2,4000);
    setTimeout(canvas1,9000);
    setTimeout(canvas2,10500);
    setTimeout(canvas3,12000);
    setTimeout(canvas4,13500);
    setTimeout(canvas5,15000);
    setTimeout(canvas6,16500);
    setTimeout(canvas7,18000);
    setTimeout(canvas8,19500);
    setTimeout(canvas9,21000);
    setTimeout(canvas10,22500);
    setTimeout(canvas11,24000);
    setTimeout(canvas12,25500);
    setTimeout(canvas13,27000);
    setTimeout(canvas14,28500);
    setTimeout(canvas15,30000);
    setTimeout(canvas16,31500);
    setTimeout(canvas17,33000);
    setTimeout(canvas18,34500);
    setTimeout(developed,37500);
    setTimeout(endMix,41500);
    setTimeout(startbutt,42500);
    
}
    // start buttons //
function startbutt(){
    show("buttons",'<button id="autoplay" onclick="autoplay()">Autoplay</button><button id="slideshow" onclick="slideshow()">Slideshow</button>');
    document.getElementById("buttons").style.position="fixed";
    w("buttons","636px");
    h("buttons","50px");
    document.getElementById("buttons").style.left="50%";
    ml("buttons","-318px");
    mt("buttons","227px");
    document.getElementById("buttons").style.zIndex="1";
    ml("slideshow","5px");
}

function sliderbutt(){
    show("buttons",'<button id="previousSlide" onclick="previousSlide()">Previous Slide</button><button id="mix" onclick="mix()">Mix</button><button id="nextSlide" onclick="nextSlide()">Next Slide</button>');
    mt("buttons","510px");
    ml("mix","5px");
    ml("nextSlide","5px");
    
}

function endMix(){
    for(var i = 1; i<=514; i++){
        q = Math.round(Math.random()*1000);
        ml("q"+i,q+"px");
        mt("q"+i,"-25px");
    }
}

// slideshow //

var slide = 2;

function slideshow(){
    slide1();
    sliderbutt();
}
function nextSlide(){
    if(slide < 0){
    slide = 0;
}
    
    switch(slide){
        case 0:{
            endMix();
            startbutt();
            slide = 2;
        }    
        break;    
        case 1:{
            slide1();
            slide++;
            
        }
            break;
        case 2:{
            slide2();
            slide++;
        }
            break;
        case 3:{
            canvas1();
            slide++;
        }
            break;
        case 4:{
            canvas2();
            slide++;
        }
            break;
        case 5:{
            canvas3();
            slide++;
        }
            break;
        case 6:{
            canvas4();
            slide++;
        }
            break;
        case 7:{
            canvas5();
            slide++;
        }
            break;
        case 8:{
            canvas6();
            slide++;
        }
            break;
        case 9:{
            canvas7();
            slide++;
        }
            break;
        case 10:{
            canvas8();
            slide++;
        }
            break;
        case 11:{
            canvas9();
            slide++;
        }
            break;
        case 12:{
            canvas10();
            slide++;
        }
            break;
        case 13:{
            canvas11();
            slide++;
        }
            break;
        case 14:{
            canvas12();
            slide++;
        }
            break;
        case 15:{
            canvas13();
            slide++;
        }
            break;
        case 16:{
            canvas14();
            slide++;
        }
            break;
        case 17:{
            canvas15();
            slide++;
        }
            break;
        case 18:{
            canvas16();
            slide++;
        }
            break;
        case 19:{
            canvas17();
            slide++;
        }
            break;
        case 20:{
            canvas18();
            slide++;
        }
            break;
        case 21:{
            developed();
            slide++;
        }
            break;
        case 22:{
            endMix();
            setTimeout(startbutt,1000);
            slide = 2;
        }
            break;
        
    }
}

function previousSlide(){
    slide -=2;
    nextSlide();
    
}