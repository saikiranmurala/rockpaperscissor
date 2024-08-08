let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let overallResult_ref = document.getElementById("overall-result");

let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }

}

function checker(input){
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: blue; color: white";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: red; color: white";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: yellow; color: grey";
            result_ref.innerHTML = "DRAW";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}


function playNTimes(n) {
    for (let i = 0; i < n; i++) {
        let choices = ["rock", "paper", "scissor"];
        let user_choice = choices[Math.floor(Math.random() * 3)];
        checker(user_choice);
    }

    if (computer_score > user_score) {
        overallResult_ref.innerHTML = "Overall Result: Computer wins!";
    } else if (computer_score < user_score) {
        overallResult_ref.innerHTML = "Overall Result: You won!";
    } else {
        overallResult_ref.innerHTML = "Overall Result: It's a draw!";
    }
}

function reload(){
    window.location.reload();
}
// function reload() {
//     computer_score = 0;
//     user_score = 0;
//     result_ref.innerHTML = "";
//     overallResult_ref.innerHTML = "";
//     document.getElementById("computer_score").innerHTML = computer_score;
//     document.getElementById("user_score").innerHTML = user_score;
//     document.getElementById("comp_choice").innerHTML = "";
//     document.getElementById("user_choice").innerHTML = "";
// }
