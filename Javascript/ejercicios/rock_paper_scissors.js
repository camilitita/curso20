
let times_played = 0;

let times_user_won = 0;

let times_cpu_won = 0;

let repeat = true;

while (repeat) {

  let game_start = prompt("Hi there! Welcome to rock, paper and scissors, would you like to play? (yes/no)");

  if (game_start.toLowerCase()==="yes") {
    const options = ["rock", "paper", "scissors"];

    function cpu_choice (){
      return options[Math.floor(Math.random() * options.length)];
    }

    function comparison (user, cpu){
      if (user === cpu) {
        return "Its a tie!";
      }
      else if (
        (user === "rock" && cpu === "scissors") ||
        (user === "paper" && cpu === "rock") ||
        (user === "scissors" && cpu === "paper")
      ) {
        times_user_won++;
        return "You won!";
      } else {
        times_cpu_won++;
        return "You lost, sorry :(";
      }
    }

    function game(){
      let user_choice;

      while (true) {
        user_choice = prompt("Now you choose: rock, paper or scissors?").toLowerCase();
        if (options.includes(user_choice)) {
          break;
        } else {
          console.log("Please enter a valid option!");
        }
      }
      const cpu_choice_final = cpu_choice();
      console.log(`User: ${user_choice} vs CPU: ${cpu_choice_final}`);
      console.log(comparison(user_choice, cpu_choice_final));

      times_played++;
      console.log(`Times played: ${times_played}`);
      console.log(`Times you won: ${times_user_won}`);
      console.log(`Times you lost: ${times_cpu_won}`);
    }

    game();


    repeat = prompt("Would you like to play again?(yes/no)");
    if (repeat !== "yes"){
      repeat=false;
      console.log("Veeery well then, see you later bud");
      break;
    }

  } else {
    console.log("Oh well, that's your lost :p");
    break;
  }
}





