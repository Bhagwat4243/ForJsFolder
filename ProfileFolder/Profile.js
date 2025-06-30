

var istatus=document.querySelector("h5");
var btns=document.querySelector("#add");

check=0;
btns.addEventListener("click",function(){
    if(check==0){
        istatus.innerHTML="Friend";
        istatus.style.color="green";
        btns.textContent="Remove Friend";
        check=1;
    }
    else
    { 
        if(check==1)
        istatus.innerHTML="Stranger";
        istatus.style.color="red";
        btns.textContent="Add Friend";
        check=0;
    }
})