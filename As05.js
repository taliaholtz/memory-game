//Modal functions
var showRules=function(){
    document.getElementById("rules").style.display="block";
    document.getElementById("close").addEventListener("click",closeModal);
}
var closeModal=function(){
    var mod=document.getElementsByClassName("modal");
    for(var i=0;i<mod.length;i++){
        mod[i].style.display="none";        
    }
}
var closeWindow=function(){
    window.close();
}
var endGame=function(){
    document.getElementById("winner").style.display="block";
    document.getElementById("exit").addEventListener("click",closeWindow);
    document.getElementById("playAgain").addEventListener("click",setUp);
    document.getElementById("playAgain").addEventListener("click",closeModal);    
}
//Game play functions
var resumePlay=function(){ 
    card1.classList.add("cardBack");    
    card2.classList.add("cardBack");
    var deck=document.getElementsByClassName("cardBack");
    for(var j=0;j<deck.length;j++){
        deck[j].addEventListener("click",gamePlay);
    }
}
var cardMatch=function(){
    card1.classList.add("matched");    
    card2.classList.add("matched");      
    var matches=document.getElementsByClassName("matched");
    var deck=document.getElementsByClassName("cardBack");
    for(var j=0;j<deck.length;j++){
        deck[j].addEventListener("click",gamePlay);
    }
    if(matches.length===12){
        document.getElementById("guesses").textContent="You had "+wrong+" wrong guesses.";
        endGame();
    }
}
var gamePlay=function(){
    counter++;
    event.target.classList.remove("cardBack");
    event.target.removeEventListener("click",gamePlay);
    if(counter%2!=0){
        card1=event.target
        back1=event.target.classList.item(0);
        console.log(back1);
    }else{
        card2=event.target;
        back2=event.target.classList.item(0);
        console.log(back2);
        var deck=document.getElementsByClassName("card");
        for(var i=0;i<deck.length;i++){
            deck[i].removeEventListener("click",gamePlay);
        }
        if(back1===back2){
            console.log("match!");
            setTimeout(cardMatch,1000);
        }else{
            wrong++;
            setTimeout(resumePlay,1000);                                
        }
    }
}
//New game functions
var shuffleDeck=function(array){
    var n=array.length;
    while(n){
        var i=Math.floor(Math.random()*n--);
        var temp=array[n];
        array[n]=array[i];
        array[i]=temp;
    }
    return array;
}
var setUp=function(){
    wrong=0;  
    counter=0;  
    var board=document.getElementById("gameboard");
    while(board.hasChildNodes()){
        board.removeChild(board.firstChild);
    }
    for(var i=0;i<2;i++){
        shuffleDeck(cardBank);
        for(var j=0;j<cardBank.length;j++){
            var card=document.createElement('div');            
            card.className=cardBank[j]+" cardBack card";
            card.addEventListener("click",gamePlay);
            board.appendChild(card);    
        }
    }
}

//HTML
var cardBank=["shark1","shark2","shark3","shark4","shark5","shark6"];

var header=document.createElement('div');
header.id="header";
document.body.appendChild(header);
var nav=document.createElement('div');
nav.id="nav";
header.appendChild(nav);
var menu=["New Game","Rules"];
for (var i=0;i<menu.length;i++){
    var link=document.createElement('a');
    link.id=menu[i];
    link.class="header";
    link.textContent=menu[i];
    nav.appendChild(link);
}
document.getElementById("New Game").addEventListener("click",setUp);
document.getElementById("Rules").addEventListener("click",showRules);

var pageBreak=document.createElement('hr');
document.body.appendChild(pageBreak);

var game=document.createElement('div');
game.id="gameboard";
document.body.appendChild(game);

var wrong;
var counter;
var card1;
var card2;

setUp();