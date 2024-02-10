let decrease = document.querySelector("#decrease");
let reset = document.querySelector("#reset");
let increase = document.querySelector("#increase");
let numberEnd = 0;

decrease.addEventListener("click",function(){
    document.querySelector("#numberValue").innerHTML = numberEnd-=1;
    autoColor();
});

reset.addEventListener("click",function(){
    document.querySelector("#numberValue").innerHTML = numberEnd=0;
    autoColor();
});

increase.addEventListener("click",function(){
    document.querySelector("#numberValue").innerHTML = numberEnd+=1;
    autoColor();
});

function autoColor(){
    if(numberEnd == 0){
        document.body.style.color = "black";
    } else if(numberEnd < 0){
        document.body.style.color = "red";
    }else if(numberEnd > 0){
        document.body.style.color = "green";
    }
}