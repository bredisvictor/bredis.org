//Help functions
function sp(a,b,c){
                document.getElementById("sp").innerHTML="x="+a;
                document.getElementById("sp1").innerHTML="y="+b;
                document.getElementById("sp2").innerHTML="deg="+c;
                
}
function sp2(a,b,c){
                document.getElementById("sp3").innerHTML="x="+a;
                document.getElementById("sp4").innerHTML="y="+b;
                document.getElementById("sp5").innerHTML="deg="+c;
}
function tHrow(a,b,c,x,y,z){
document.getElementById("cube").style.transform="rotate3d("+a+","+b+",0,"+c+"deg)";
document.getElementById("cube2").style.transform="rotate3d("+x+","+y+",0,"+z+"deg)";
}

// Throw function
function butt(){
            var a,b,c,x,y,z;
    
        //First dice method
    
            a = Math.round(Math.random()*1);
            if (a==0){
                b = 1;
                c = Math.floor(Math.random()*4+1);
                if(c==1){
                c = 0;
                }
                if(c==2 ){
                c = 90;
                }
                if(c==3 ){
                c = 180;
                }
                if(c==4 ){
                c = 270;
                }
           }
            else{
                b=0;
                c = Math.round(Math.random()*2);
                if(c==1 ){
                c = 90;
                }
                if(c==2 ){
                c = 270;
                }
                
            }
            
        //Second dice mhethod
            
            x = Math.round(Math.random()*1);
            if (x==0){
                y = 1;
                z = Math.round(Math.random()*360);
                if(z>0 && z<90){
                z = 0;
                }
                if(z>90 && z<180 ){
                z = 90;
                }
                if(z>180 && z<270 ){
                z = 180;
                }
                if(z>270 && z<360 ){
                z = 270;
                }
            }
            else{
                y=0;
                z = Math.round(Math.random()*270);
                if(z>0 && z<135 ){
                z = 90;
                }
                if(z>135 && z<270 ){
                z = 270;
                }
            }
            
    sp(a,b,c);
    sp2(x,y,z);
    tHrow(a,b,c,x,y,z);
}