var block = document.getElementById("block");
var hull = document.getElementById("hull");
var karakter = document.getElementById("karakter");
var jumping = 0;
var counter = 0;

hull.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hull.style.top = random + "px";
    counter++;
});
setInterval(function(){
    var karakterTop = 
    parseInt(window.getComputedStyle(karakter).getPropertyValue("top"));
    if(jumping==0){
    karakter.style.top = (karakterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var hullTop = parseInt(window.getComputedStyle(hull).getPropertyValue("top"));
    var cTop = -(500-karakterTop);
    if((karakterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<hullTop)||(cTop>hullTop+130)))){
        alert("Game over. Score: "+(counter-1));
        karakter.style.top = 100 + "px";
        counter=0;
    }
},10);

function jump() {
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var karakterTop = parseInt(window.getComputedStyle(karakter).getPropertyValue("top"));
        if((karakterTop>6)&&(jumpCount<15)) {
            karakter.style.top = (karakterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;       
        }
        jumpCount++;
    },10);
}
