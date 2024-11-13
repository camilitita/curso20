
let repeat = true;

  while (repeat) {

  let game_start = prompt("Hello! Welcome to guess da number, would you like to give it a try? (yes/no)");

  if (game_start.toLowerCase()==="yes") {
    function randomnumber(){
      return Math.floor(Math.random() * 100) + 1;
    }
    function entry() {
      let user_number = prompt("Okay, please enter a number between 1 and 100");
      user_number = Number(user_number);
      if (isNaN(user_number) || user_number < 1 || user_number > 100) {
        console.log("Don't be silly, please enter a valid number between 1 and 100.");
        return entry();
      }
      return user_number;
    }
    user_number = entry();

    function game(){
    const cpu_number = randomnumber();
    let chances = 6;

    console.log("Remember, you have only 6 chances!");

    for (let i = 1; i <= chances; i++){
      let user_number = entry();
      const difference = Math.abs(user_number - cpu_number);

      if (user_number === cpu_number) {
        console.log("Congratulations! You made it! Are you sure you're not a magician?", cpu_number);
        return;
      } else if (user_number > cpu_number) {
        if (difference > 50) {
          console.log ("Slow down cowboy! You're way too high");
        } else if (difference > 20) {
          console.log("Too high, you need to go a bit lower");
        } else {
          console.log ("You're close! But still too high");
        }
      } else {
        if (difference < 50) {
          console.log ("Don't go that far! You're way too low");
        } else if (difference < 20) {
          console.log("Too low, you need to go a bit higher");
        } else {
          console.log ("You're close! But still too low");
        }
      }

      console.log (`Attemps remaining: `, chances - i);
    }
    console.log("Sorry :(, you've used all of your attemps, the correct number was: ", cpu_number);
    }

    game();

    repeat = prompt("Would you like to play again?(yes/no)");
      if (repeat !== "yes"){
        repeat=false;
        console.log("Veeery well then, see you later bud");
        break;
      }

  } else {
    console.log("Oh, see you next time then c:");
    break;
  }
}
