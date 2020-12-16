//selectors

const span1=document.getElementById("score1");
const span2=document.getElementById("score2");
const maxScore=document.getElementById("maxScore");
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const reset=document.getElementById("reset");



//Listeners

btn1.addEventListener('click',()=>{
    
    const score1=parseInt(span1.innerText)+1;
    span1.innerText=`${score1}`;

    if(score1==maxScore.value){
        span1.classList.add('winner');
        span2.classList.add('loser');
        btn1.disabled=true;
        btn2.disabled=true;
        maxScore.disabled=true;
        return;
    }
})
btn2.addEventListener('click',()=>{
    
    const score2=parseInt(span2.innerText)+1;
    span2.innerText=`${score2}`;

    if(score2==maxScore.value){
        span2.classList.add('winner');
        span1.classList.add('loser');
        btn1.disabled=true;
        btn2.disabled=true;
        maxScore.disabled=true;
        return;
    }
})

reset.addEventListener('click',()=>{
    span1.innerText=0;
    span2.innerText=0;
    span1.classList.remove('winner');
    span1.classList.remove('loser');
    span2.classList.remove('winner');
    span2.classList.remove('loser');
    btn1.disabled=false;
    btn2.disabled=false;
    maxScore.disabled=false;
    
})