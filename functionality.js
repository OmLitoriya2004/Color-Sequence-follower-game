let gameSeq=[];
let userSeq=[];
let colors=["red","green","yellow","blue"];

let level=0;
let  started=false;

let h3=document.querySelector("h3");let h1=document.querySelector("h1");

document.addEventListener("keypress",()=>{
    if(started==false){
        started=true;
        levelup();
    }
})
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let idx=Math.floor(Math.random()*3);
    let color=colors[idx];
    gameSeq.push(color);
    let btn=document.querySelector(`.${color}`);
    gameflash(btn);
}
function check(idx){
    console.log(userSeq,gameSeq);
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,500);
        }
    }
    else{
        h3.innerHTML=`<b>Game Over!</b> Your score was:<u>${gameSeq.length-1}</u><br> Press any key to Start new game:)`;
        let over=document.querySelector("body");
        showred(over);
        reset()
    }  
}
function showred(over){
    over.classList.add("ired");
    setTimeout(function(){
        over.classList.remove("ired");
    },150);
}
function buttonpress(){
    let btn=this;
    let col=btn.getAttribute("id");
    userSeq.push(col);
    userflash(btn);
    check(userSeq.length-1);  
}
let allbutton=document.querySelectorAll(".btn");
for(btn of allbutton){
    btn.addEventListener("click",buttonpress);
}
function reset(){
    level=0;
    gameSeq=[];
    // h1.innerText="Simon Game";
    // h2.innerText="Please enter any key to start the game again";
    started=false;
}