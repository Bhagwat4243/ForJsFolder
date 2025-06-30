var a=document.querySelector("#bulbimage")
var btn=document.querySelector("button")


var flag=0;
btn.addEventListener("click",function(){
   if(flag==0){
       a.src="bulb Image On.png"
       btn.textContent="OFF"
       flag=1;
   }
   else
   if(flag==1){
       a.src="bulb Image Off.png"
       btn.textContent="ON"
       flag=0;
   }
})