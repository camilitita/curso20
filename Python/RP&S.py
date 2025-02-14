import random

times_played = 0
times_won = 0
times_lost = 0
times_drawn = 0
repeat = True

while repeat:
    game_start= input("Do you want to play? (yes/no) ").lower()
    if game_start==("yes"):
        options=["rock","paper","scissors"]

        def comparison(user, cpu):
            global times_won, times_lost, times_drawn
            if user == cpu:
                times_drawn += 1
                return "It's a tie, yikes"
            elif user == "rock" and cpu == "scissors":
                times_won += 1
                return "Congratulations! You won"
            elif user == "paper" and cpu == "rock":
                times_won += 1
                return "Congratulations! You won"
            elif user == "scissors" and cpu == "paper":
                times_won += 1
                return "Congratulations! You won"
            else:
                times_lost += 1
                return "Oh no! You lost"

        def game():
            global times_played
            while True:
                user_choice = input("Rock, paper or scissors? ").lower()
                if user_choice in options:
                    cpu_choice=random.choice(options)
                    break
                else:
                    print("Invalid input. Please try again")

            print(f"{user_choice} vs {cpu_choice}")
            print(comparison(user_choice, cpu_choice))

            times_played += 1
            print(f"Times played: {times_played}")
            print(f"Times won: {times_won}")
            print(f"Times lost: {times_lost}")
            print(f"Times drawn: {times_drawn}")

    game()

    repeat = input("Do you want to play again? (yes/no) ").lower()
    if repeat == "no":
        repeat = False
        print("Thanks for playing!")
        break
    else:
        repeat = True
        print("Let's play again!")

