var showRules=function(){
    document.getElementById("rules").style.display="block";
    document.getElementById("close").addEventListener("click",closeRules);
}
var closeRules=function(){
    document.getElementById("rules").style.display="none";
}
var gamePlay=function(){
    event.target.classList.toggle("cardBack");
}
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
    var board=document.getElementById("gameboard");
    while(board.hasChildNodes()){
        board.removeChild(board.firstChild);
    }
    for(var i=0;i<2;i++){
        shuffleDeck(cardBank);
        for(var j=0;j<cardBank.length;j++){
            var card=document.createElement('div');            
            card.className="cardBack card "+cardBank[j];
            card.addEventListener("click",gamePlay);
            document.getElementById("gameboard").appendChild(card);    
        }
    }
}
var endGame=function(){
    document.getElementById("winner").style.display="block";
}

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

setUp();