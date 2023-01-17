let player= "X";
function generateGame(){
    let cell123= 0;
    let gameBoard= document.getElementById("GameBoard");
    gameBoard.innerHTML= " ";
    for(let i=0; i<3; i++){
        let brLines= document.createElement("br");
            gameBoard.appendChild(brLines);
        for(let i=0; i<3; i++){
            let button = document.createElement("input");
            button.setAttribute("type", 'button');
            button.setAttribute("class", 'grid-cell');
            gameBoard.appendChild(button);
            button.setAttribute("onclick", "markedCheck(this)");
            button.setAttribute("id", cell123);
            button.setAttribute("value", " ");
            cell123++;
            console.log(cell123);

        }
    }
 
}

let selections= new Array();
selections["X"]= [0,0,0,0,0,0,0,0,0];
selections["O"] = [0,0,0,0,0,0,0,0,0];


let total_turns_played= 0;

function markedCheck(obj){
    obj.value= player;

    let cell= obj.id;

    if (player == "X"){
        obj.setAttribute("class", "green-player");
        console.log("player " + player + " marked " + cell);
        selections[player][cell]=1;
        console.log(selections[player]);
        checkPlayerHasAnyWinningPattern(); +0
        player="O";
    }
    else{
        obj.setAttribute("class", "red-player");
        console.log("player " + player + " marked " + cell);
        selections[player][cell]=1;
        console.log(selections[player]);
        checkPlayerHasAnyWinningPattern()
        player="X";
    }
    
    obj.setAttribute("disabled", "disabled");
}

let win_indexes= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function checkPlayerHasAnyWinningPattern(){
    if(selections["X"][0] && selections["X"][1] && selections["X"][2]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["X"][3] && selections["X"][4] && selections["X"][5]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["X"][6] && selections["X"][7] && selections["X"][8]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["X"][0] && selections["X"][3] && selections["X"][6]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["X"][1] && selections["X"][4] && selections["X"][7]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["X"][2] && selections["X"][5] && selections["X"][8]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["X"][0] && selections["X"][4] && selections["X"][8]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["X"][2] && selections["X"][4] && selections["X"][6]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["O"][0] && selections["O"][1] && selections["O"][2]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["O"][3] && selections["O"][4] && selections["O"][5]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["O"][6] && selections["O"][7] && selections["O"][8]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["O"][0] && selections["O"][3] && selections["O"][6]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["O"][1] && selections["O"][4] && selections["O"][7]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["O"][2] && selections["O"][5] && selections["O"][8]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["O"][0] && selections["O"][4] && selections["O"][8]== 1){
        alert("Player " + player + " won!");
    }

    if(selections["O"][2] && selections["O"][4] && selections["O"][6]== 1){
        alert("Player " + player + " won!");
    }

}