function newgameX(){
    document.getElementById("block").style.zIndex=1;
    document.getElementById("block").innerHTML='<div id="start"><span id="show">'+player1+' is WON, whant to continue the game?</span><button onclick="yesx()" id="yesx">Yes</button><button onclick="nox()" id="nox">No</button></div>';
}
function newgameO(){
    document.getElementById("block").style.zIndex=1;
    document.getElementById("block").innerHTML='<div id="start"><span id="show">'+player2+' is WON, whant to continue the game?</span><button onclick="yeso()" id="yeso">Yes</button><button onclick="noo()" id="noo">No</button></div>';
}

function nowiner(){
    if(counter>9 && x1<3 && x2<3 && x3<3 && x4<3 && x5<3 && x6<3 && x7<3 && x8<3 && o1<3 && o2<3 && o3<3 && o4<3 && o5<3 && o6<3 && o7<3 && o8<3  ){
    document.getElementById("block").style.zIndex=1;
    document.getElementById("block").innerHTML='<div id="start"><span id="show">No one won, whant to continue the game?</span><button onclick="yesn()" id="yesx">Yes</button><button onclick="non()" id="nox">No</button></div>';
    }
}
function yesn(){
    res();
    document.getElementById("block").innerHTML="";
    document.getElementById("block").style.zIndex="-1";
    if(counter % 2 == 0){
        counter = -7;
        document.getElementById("play").innerHTML=player1;
    }
    else{
        counter = -8;
        document.getElementById("play").innerHTML=player2;
    }
    

}
function non(){
    document.getElementById("block").innerHTML="";
    document.getElementById("block").style.zIndex="2";
    
}
function yesx(){
    scorep1++;
    res();
    counter = -7;
    document.getElementById("play").innerHTML=player1;
    document.getElementById("scorep1").innerHTML=scorep1;
    document.getElementById("block").innerHTML="";
    document.getElementById("block").style.zIndex="-1";
    
}
function nox(){
    scorep1++;
    document.getElementById("scorep1").innerHTML=scorep1;
    document.getElementById("block").innerHTML="";
    document.getElementById("block").style.zIndex="2";
    
}
function yeso(){
    scorep2++;
    res();
    counter = -8;
    document.getElementById("play").innerHTML=player2;
    document.getElementById("scorep2").innerHTML=scorep2;
    document.getElementById("block").innerHTML="";
    document.getElementById("block").style.zIndex="-1";
    
}
function noo(){
    scorep2++;
    document.getElementById("scorep2").innerHTML=scorep2;
    document.getElementById("block").innerHTML="";
    document.getElementById("block").style.zIndex="2";
    
}

// reset for new game //
function res(){
    
    x1 = 0;
    o1 = 0;
    x2 = 0;
    o2 = 0;
    x3 = 0;
    o3 = 0;
    x4 = 0;
    o4 = 0;
    x5 = 0;
    o5 = 0;
    x6 = 0;
    o6 = 0;
    x7 = 0;
    o7 = 0;
    x8 = 0;
    o8 = 0;
    q1 = 1;
    q2 = 1;
    q3 = 1; 
    q4 = 1; 
    q5 = 1;
    q6 = 1;
    q7 = 1;
    q8 = 1; 
    q9 = 1;
    for(var i = 1; i <=9; i++){
        document.getElementById("i"+i).style.display="none";
    }
        document.getElementById("play").innerHTML=player1;

}
function img(a,b){
    document.getElementById(a).src=b;
    document.getElementById(a).style.display="block";
    
}

var player1 = "Player 1" ;
var player2 = "Player 2" ;
document.getElementById("p1").innerHTML=player1;
document.getElementById("p2").innerHTML=player2;

function start(){
player1 = document.getElementById("name1").value;
player2 = document.getElementById("name2").value;
if(player1 == ""){
    player1 = "Player 1"
}
if(player2 == ""){
    player2 = "Player 2"
}
document.getElementById("p1").innerHTML=player1;
document.getElementById("p2").innerHTML=player2;
document.getElementById("play").innerHTML=player1;
document.getElementById("block").innerHTML="";
document.getElementById("block").style.zIndex=-1;
}


var scorep1 , scorep2;
scorep1 = 0;
scorep2 = 0;
document.getElementById("scorep1").innerHTML=scorep1;
document.getElementById("scorep2").innerHTML=scorep2;



var counter = -7;
if(counter%2!==0){
    document.getElementById("play").innerHTML=player1;
}
else{
    document.getElementById("play").innerHTML=player2;
}
var x1 , x2, x3 , x4 , x5 , x6 , x7 , x8;
var o1 , o2, o3 , o4 , o5 , o6 , o7 , o8;
x1 = 0;
o1 = 0;
x2 = 0;
o2 = 0;
x3 = 0;
o3 = 0;
x4 = 0;
o4 = 0;
x5 = 0;
o5 = 0;
x6 = 0;
o6 = 0;
x7 = 0;
o7 = 0;
x8 = 0;
o8 = 0;

var q1 , q2 , q3 , q4 , q5 , q6 , q7 , q8 , q9;
q1 = 1;
q2 = 1;
q3 = 1; 
q4 = 1; 
q5 = 1;
q6 = 1;
q7 = 1;
q8 = 1; 
q9 = 1;

function XorO1(){
    
    if(counter %2 !==0 && q1 == 1){
       img("i1","img/x.png");
        counter++;
        q1++;
        x1++;
        x4++;
        x8++;
        document.getElementById("play").innerHTML=player2;
    }
    else if(counter %2 ==0 && q1 == 1){
        img("i1","img/o.png");
        counter+=3;
        q1++;
        o1++;
        o4++;
        o8++;
        document.getElementById("play").innerHTML=player1;
    }
    
    if(x1>=3){
        img("i1","img/xz.png");
        img("i4","img/xz.png");
        img("i7","img/xz.png");
        setTimeout(newgameX, 100);
        
    }
    else if(o1>=3){
        img("i1","img/oz.png");
        img("i4","img/oz.png");
        img("i7","img/oz.png");
        setTimeout(newgameO, 100);
    }
    
    if(x4>=3){
        img("i1","img/xl.png");
        img("i2","img/xl.png");
        img("i3","img/xl.png");
        setTimeout(newgameX, 100);
    }
    else if(o4>=3){
        img("i1","img/ol.png");
        img("i2","img/ol.png");
        img("i3","img/ol.png");
        setTimeout(newgameO, 100);
    }
    
    if(x8>=3){
        img("i1","img/xy.png");
        img("i5","img/xy.png");
        img("i9","img/xy.png");
        if(x1<3 && x3<3 && x4<3 && x6<3){
        setTimeout(newgameX, 100);
        }
    }
    else if(o8>=3){
        img("i1","img/oy.png");
        img("i5","img/oy.png");
        img("i9","img/oy.png");
        setTimeout(newgameO, 100);
    }
    
    if(counter>9){
        nowiner();
    }
   
}
function XorO2(){
    if(counter %2 !==0 && q2 == 1){
        img("i2","img/x.png");
        counter++;
        q2++;
        x2++
        x4++;
        document.getElementById("play").innerHTML=player2;
    }
    else if(counter %2 ==0 && q2 == 1){
        img("i2","img/o.png");
        counter+=3;
        q2++;
        o2++;
        o4++
        document.getElementById("play").innerHTML=player1;
    }
    
    if(x2>=3){
        img("i2","img/xz.png");
        img("i5","img/xz.png");
        img("i8","img/xz.png");
        if(x5<3){
        setTimeout(newgameX, 100);
        }
    }
    else if(o2>=3){
        img("i2","img/oz.png");
        img("i5","img/oz.png");
        img("i8","img/oz.png");
        setTimeout(newgameO, 100);
    }
    
    if(x4>=3){
        img("i1","img/xl.png");
        img("i2","img/xl.png");
        img("i3","img/xl.png");
        setTimeout(newgameX, 100);
    }
    else if(o4>=3){
        img("i1","img/ol.png");
        img("i2","img/ol.png");
        img("i3","img/ol.png");
        setTimeout(newgameO, 100);
    }
    
    if(counter>9){
        nowiner();
    }
    
}
function XorO3(){
    if(counter %2 !==0 && q3 == 1){
        img("i3","img/x.png");
        counter++;
        q3++;
        x3++;
        x4++;
        x7++;
        document.getElementById("play").innerHTML=player2;
    }
    else if(counter %2 ==0 && q3 == 1){
        img("i3","img/o.png");
        counter+=3;
        q3++;
        o3++;
        o4++;
        o7++;
        document.getElementById("play").innerHTML=player1;
    }
    
    if(x3>=3){
        img("i3","img/xz.png");
        img("i6","img/xz.png");
        img("i9","img/xz.png");
        setTimeout(newgameX, 100);
    }
    else if(o3>=3){
        img("i3","img/oz.png");
        img("i6","img/oz.png");
        img("i9","img/oz.png");
        setTimeout(newgameO, 100);
    }
    
    if(x4>=3){
        img("i1","img/xl.png");
        img("i2","img/xl.png");
        img("i3","img/xl.png");
        setTimeout(newgameX, 100);
    }
    else if(o4>=3){
        img("i1","img/ol.png");
        img("i2","img/ol.png");
        img("i3","img/ol.png");
        setTimeout(newgameO, 100);
    }
    
    if(x7>=3){
        img("i3","img/xj.png");
        img("i5","img/xj.png");
        img("i7","img/xj.png");
        if(x1<3 && x3<3 && x4<3 && x6<3){
        setTimeout(newgameX, 100);
        }
    }
    else if(o7>=3){
        img("i3","img/oj.png");
        img("i5","img/oj.png");
        img("i7","img/oj.png");
        setTimeout(newgameO, 100);
    }
    
    if(counter>9){
        nowiner();
    }
}
function XorO4(){
    if(counter %2 !==0 && q4 == 1){
        img("i4","img/x.png");
        counter++;
        q4++;
        x1++;
        x5++;
        document.getElementById("play").innerHTML=player2;
    }
    else if(counter %2 ==0 && q4 == 1){
        img("i4","img/o.png");
        counter+=3;
        q4++;
        o1++;
        o5++;
        document.getElementById("play").innerHTML=player1;
    }
    
    if(x1>=3){
        img("i1","img/xz.png");
        img("i4","img/xz.png");
        img("i7","img/xz.png");
        setTimeout(newgameX, 100);
    }
    else if(o1>=3){
        img("i1","img/oz.png");
        img("i4","img/oz.png");
        img("i7","img/oz.png");
        setTimeout(newgameO, 100);
    }
    
    if(x5>=3){
        img("i4","img/xl.png");
        img("i5","img/xl.png");
        img("i6","img/xl.png");
        setTimeout(newgameX, 100);
    }
    else if(o5>=3){
        img("i4","img/ol.png");
        img("i5","img/ol.png");
        img("i6","img/ol.png");
        setTimeout(newgameO, 100);
    }
    
    if(counter>9){
        nowiner();
    }
    
}
function XorO5(){
    if(counter %2 !==0 && q5 == 1){
        img("i5","img/x.png");
        counter++;
        q5++;
        x2++;
        x5++;
        x7++;
        x8++;
        document.getElementById("play").innerHTML=player2;
    }
    else if(counter %2 ==0 && q5 == 1){
        img("i5","img/o.png");
        counter+=3;
        q5++;
        o2++;
        o5++;
        o7++;
        o8++;
        document.getElementById("play").innerHTML=player1;
    }
    if(x2>=3){
        img("i2","img/xz.png");
        img("i5","img/xz.png");
        img("i8","img/xz.png");
        if(x5<3){
        setTimeout(newgameX, 100);
        }
    }
    else if(o2>=3){
        img("i2","img/oz.png");
        img("i5","img/oz.png");
        img("i8","img/oz.png");
        setTimeout(newgameO, 100);
    }
    
    if(x5>=3){
        img("i4","img/xl.png");
        img("i5","img/xl.png");
        img("i6","img/xl.png");
        setTimeout(newgameX, 100);
    }
    else if(o5>=3){
        img("i4","img/ol.png");
        img("i5","img/ol.png");
        img("i6","img/ol.png");
        setTimeout(newgameO, 100);
    }
    
    if(x7>=3){
        img("i3","img/xj.png");
        img("i5","img/xj.png");
        img("i7","img/xj.png");
        if(x1<3 && x3<3 && x4<3 && x6<3){
        setTimeout(newgameX, 100);
        }
    }
    else if(o7>=3){
        img("i3","img/oj.png");
        img("i5","img/oj.png");
        img("i7","img/oj.png");
        setTimeout(newgameO, 100);
    }
    
    if(x8>=3){
        img("i1","img/xy.png");
        img("i5","img/xy.png");
        img("i9","img/xy.png");
        if(x1<3 && x3<3 && x4<3 && x6<3){
        setTimeout(newgameX, 100);
        }
    }
    else if(o8>3){
        img("i1","img/oy.png");
        img("i5","img/oy.png");
        img("i9","img/oy.png");
        setTimeout(newgameO, 100);
    }
    
    if(counter>9){
        nowiner();
    }
}
function XorO6(){
    if(counter %2 !==0 && q6 == 1){
        img("i6","img/x.png");
        counter++;
        q6++;
        x3++;
        x5++;
        document.getElementById("play").innerHTML=player2;
    }
    else if(counter %2 ==0 && q6 == 1){
        img("i6","img/o.png");
        counter+=3;
        q6++;
        o3++;
        o5++;
        document.getElementById("play").innerHTML=player1;
    }
    if(x3>=3){
        img("i3","img/xz.png");
        img("i6","img/xz.png");
        img("i9","img/xz.png");
        setTimeout(newgameX, 100);
    }
    else if(o3>=3){
        img("i3","img/oz.png");
        img("i6","img/oz.png");
        img("i9","img/oz.png");
        setTimeout(newgameO, 100);
    }
    
    if(x5>=3){
        img("i4","img/xl.png");
        img("i5","img/xl.png");
        img("i6","img/xl.png");
        setTimeout(newgameX, 100);
    }
    else if(o5>=3){
        img("i4","img/ol.png");
        img("i5","img/ol.png");
        img("i6","img/ol.png");
        setTimeout(newgameO, 100);
    }
    
    if(counter>9){
        nowiner();
    }
}
function XorO7(){
    if(counter %2 !==0 && q7 == 1){
        img("i7","img/x.png");
        counter++;
        q7++;
        x1++;
        x6++;
        x7++;
        document.getElementById("play").innerHTML=player2;
    }
    else if(counter %2 ==0 && q7 == 1){
        img("i7","img/o.png");
        counter+=3;
        q7++;
        o1++;
        o6++;
        o7++;
        document.getElementById("play").innerHTML=player1;
    }
    
    if(x1>=3){
        img("i1","img/xz.png");
        img("i4","img/xz.png");
        img("i7","img/xz.png");
        setTimeout(newgameX, 100);
    }
    else if(o1>=3){
        img("i1","img/oz.png");
        img("i4","img/oz.png");
        img("i7","img/oz.png");
        setTimeout(newgameO, 100);
    }
    
    if(x6>=3){
        img("i7","img/xl.png");
        img("i8","img/xl.png");
        img("i9","img/xl.png");
        setTimeout(newgameX, 100);
    }
    else if(o6>=3){
        img("i7","img/ol.png");
        img("i8","img/ol.png");
        img("i9","img/ol.png");
        setTimeout(newgameO, 100);
    }
    
    if(x7>=3){
        img("i3","img/xj.png");
        img("i5","img/xj.png");
        img("i7","img/xj.png");
        if(x1<3 && x3<3 && x4<3 && x6<3){
        setTimeout(newgameX, 100);
        }
    }
    else if(o7>=3){
        img("i3","img/oj.png");
        img("i5","img/oj.png");
        img("i7","img/oj.png");
        setTimeout(newgameO, 100);
    }
    
    if(counter>9){
        nowiner();
    }
}
function XorO8(){
    if(counter %2 !==0 && q8 == 1){
        img("i8","img/x.png");
        counter++;
        q8++;
        x2++;
        x6++;
        document.getElementById("play").innerHTML=player2;
    }
    else if(counter %2 ==0 && q8 == 1){
        img("i8","img/o.png");
        counter+=3;
        q8++;
        o2++;
        o6++;
        document.getElementById("play").innerHTML=player1;
    }
    if(x2>=3){
        img("i2","img/xz.png");
        img("i5","img/xz.png");
        img("i8","img/xz.png");
        if(x5<3){
        setTimeout(newgameX, 100);
        }
    }
    else if(o2>=3){
        img("i2","img/oz.png");
        img("i5","img/oz.png");
        img("i8","img/oz.png");
        setTimeout(newgameO, 100);
    }
    
    if(x6>=3){
        img("i7","img/xl.png");
        img("i8","img/xl.png");
        img("i9","img/xl.png");
        setTimeout(newgameX, 100);
    }
    else if(o6>=3){
        img("i7","img/ol.png");
        img("i8","img/ol.png");
        img("i9","img/ol.png");
        setTimeout(newgameO, 100);
    }
    
    if(counter>9){
        nowiner();
    }
}
function XorO9(){
    if(counter %2 !==0 && q9 == 1){
        img("i9","img/x.png");
        counter++;
        q9++;
        x3++;
        x6++;
        x8++;
        document.getElementById("play").innerHTML=player2;
        
    }
    else if(counter %2 ==0 && q9 == 1){
        img("i9","img/o.png");
        counter+=3;
        q9++;
        o3++;
        o6++;
        o8++;
        document.getElementById("play").innerHTML=player1;
    }
    if(x3>=3){
        img("i3","img/xz.png");
        img("i6","img/xz.png");
        img("i9","img/xz.png");
        setTimeout(newgameX, 100);
    }
    else if(o3>=3){
        img("i3","img/oz.png");
        img("i6","img/oz.png");
        img("i9","img/oz.png");
        setTimeout(newgameO, 100);
    }
    
    if(x6>=3){
        img("i7","img/xl.png");
        img("i8","img/xl.png");
        img("i9","img/xl.png");
        setTimeout(newgameX, 100);
    }
    else if(o6>=3){
        img("i7","img/ol.png");
        img("i8","img/ol.png");
        img("i9","img/ol.png");
        setTimeout(newgameO, 100);
    }
    
    if(x8>=3){
        img("i1","img/xy.png");
        img("i5","img/xy.png");
        img("i9","img/xy.png");
        if(x1<3 && x3<3 && x4<3 && x6<3){
        setTimeout(newgameX, 100);
        }
    }
    else if(o8>=3){
        img("i1","img/oy.png");
        img("i5","img/oy.png");
        img("i9","img/oy.png");
        setTimeout(newgameO, 100);
    }
    if(counter>9){
        nowiner();
    }
}

