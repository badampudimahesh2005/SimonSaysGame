let gameSeq=[];
let userSeq=[];
let colors=["red","green","yellow","purple"];

let started=false;
let level=0;

let h2=document.querySelector('h2');

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game stared.");
        started=true;
        levelup();
    }
});


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
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=colors[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    //console.log(randcolor);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameflash(randbtn);


}


function checkSeq(idx){
    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length === gameSeq.length){
           setTimeout(levelup,1000);
        }
    
    }else{
    h2.innerHTML=`Game Over! Your Score is ${level} <br>Press any key to start`;
    resetLevel();

    }

}
function btnpress(){
    let btn=this;
    userflash(btn);
    usercolor =btn.getAttribute('id');
    console.log(usercolor);
    userSeq.push(usercolor);

    checkSeq(userSeq.length-1);

}

let allBtns=document.querySelectorAll('.btn');

for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function resetLevel(){
    level=0;
    started=false;
    userSeq=[];
    gameSeq=[];
}
