player_one_var = localStorage.getItem("player_one");
player_two_var = localStorage.getItem("player_two");

score_one = 0;
score_two = 0;

document.getElementById("player1_name").innerHTML = player_one_var + ": ";
document.getElementById("player2_name").innerHTML = player_two_var + ": ";

document.getElementById("p1_score").innerHTML = score_one;
document.getElementById("p2_score").innerHTML = score_two;

document.getElementById("question_turn").innerHTML = "Question Turn: " + player_one_var;
document.getElementById("answer_turn").innerHTML = "Answer Turn: " + player_two_var;

function send() {
number1 = document.getElementById("number").value;
number2 = document.getElementById("number2").value;
answer = parseInt(number1) * parseInt(number2);
console.log(answer);

question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='check_answer'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row =  question_number + input_box + check_button ; 
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check()
{
get = document.getElementById("check_answer").value;
if(get == answer)	
{
    if(answer_turn == "player_1")
    {
        score_one = score_one + 1;
        document.getElementById("p1_score").innerHTML = score_one;
    }
    else if(answer_turn=="player_2")
    {
        score_two = score_two + 1;
        document.getElementById("p2_score").innerHTML = score_two;
    }
}

if(question_turn == "player_1")
{
    question_turn = "player_2"
    document.getElementById("question_turn").innerHTML = "Question Turn: " + player_two_var;
}
else 
{
    question_turn = "player_1"
    document.getElementById("question_turn").innerHTML = "Question Turn: " + player_one_var;
}

if(answer_turn == "player_1")
{
    answer_turn = "player_2"
    document.getElementById("answer_turn").innerHTML = "Answer Turn: " + player_two_var;
}
else 
{
    answer_turn = "player_1"
    document.getElementById("answer_turn").innerHTML = "Answer Turn: " + player_one_var;
}

document.getElementById("output").innerHTML = "";
}