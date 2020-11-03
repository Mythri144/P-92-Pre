function log_in(){
    player_1 = document.getElementById("player_one").value;
    player_2 = document.getElementById("player_two").value;
    localStorage.setItem("player_one", player_1);
    localStorage.setItem("player_two", player_2);
    window.location="quiz_page.html";
}
