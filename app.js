let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let btns=["red","green","orange","blue"];
let h2=document.querySelector("h2");
let highestSc=0;

document.addEventListener("keypress",function (){
    if(started==false){
        started=true;
        console.log("game started");
        levelUp();
    }
})

    
function reset(){
    started=false;
    gameSeq=[];
    level=0;
}

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
     h2.innerHTML=`<b>Level ${level}</b>`;
    let randInd=Math.floor(Math.random()*4);
    let randColor=btns[randInd];
    let randBtn=document.querySelector(`.${randColor}`);
    flash(randBtn);
    gameSeq.push(randColor);
}

function check(ind){
    if(userSeq[ind]===gameSeq[ind]){
        if(userSeq.length==gameSeq.length){
            setTimeout(function(){
            levelUp();
            console.log(gameSeq);
            },1000);
        }
    }
    else{
        if(level>highestSc){
            highestSc=level;
        }
        h2.innerHTML=`Game Over!!. Your score is <b>${(level)}</b>. Highest Score: ${highestSc} <br> Press any key to start again`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="grey";
        },250);
        reset();
    }
}


function btnPress(btn){
   flash(btn);
   let color=btn.classList[1];
   userSeq.push(color);
   check(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");

    for(let i=0;i<4;i++){
    allBtns[i].addEventListener("click", function(){
        btnPress(allBtns[i]);
    });
}



