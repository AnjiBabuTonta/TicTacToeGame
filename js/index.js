let turn="X";
let gameover=false;
var count=0;
//Function to change the turn
 const changeTurn=()=>{
    return turn==="X"?"0":"X"
 }

 //function to check win
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName("textbox");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText!=="")){
            // document.getElementsByClassName("popup").innerHTML;
            document.querySelector(".info").innerText=boxtexts[e[0]].innerText+" Won";
            gameover=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
            count=0;
        }
    })

}

//Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector(".textbox");
    element.addEventListener('click',()=>{
      if(boxtext.innerText===''){
        count=count+1;
        boxtext.innerText=turn;
        turn=changeTurn();
        checkWin();
        if(!gameover){
        if(!gameover && count===9){
          document.querySelector(".info").innerText="Tie";
          document.querySelector(".imgbox").getElementsByTagName("img")[1].style.width="200px";
          count=0;
        }
        else{
        document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
        // console.log(count);
        }
        }
      }
    })
});

//reset logic
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll(".textbox");
    Array.from(boxtexts).forEach(element=>{
      element.innerText="";
    }
    )
     turn="X";
     gameover=false;
     document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
     document.querySelector(".imgbox").getElementsByTagName("img")[1].style.width="0px";
     document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
})