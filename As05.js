var shuffleDeck=function(array){
    console.log("shuffling");
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
    for(var i=0;i<2;i++){
        shuffleDeck(cardBank);
        console.log("round");
        for(var j=0;j<cardBank.length;j++){
            var card=document.createElement('div');            
            card.className="cardBack shark";
            card.value=cardBank[j];
            document.getElementById("gameboard").appendChild(card);    
        }
    }
}
var endGame=function(){
    document.getElementById("myModal").style.display="block";
}

var cardBank=["shark1","shark2","shark3","shark4","shark5","shark6"];

var game=document.createElement('div');
game.id="gameboard";
document.body.appendChild(game);

setUp();




