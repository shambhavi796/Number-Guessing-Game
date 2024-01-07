# Number-Guessing-Game
I have made a basic Javascript project in which the user first selects a maximum number which he wishes to select the range of guessing the number. Then, he makes his guess, if the guessed number is smaller/larger than the actual number then a hint mentioning the same is displayed until he guesses the correct number.
To take input from the user, _prompt()_ is used, whose value is stored in a variable.![promptt](https://github.com/shambhavi796/Number-Guessing-Game/assets/121026844/7d1fdb43-bae8-4c17-a6a3-bdae4a98192c)

To generate our random number from the range 1 to the maximum number given by the user, we will use a predefined object of Javascript **Math** which has a collection of several maths operations. The code is: Math.floor(Math.random()*max)+1 where- 
                          Math.random() will generate a random number between 0 and 1
                          Math.floor() will give the lower whole number; for example: Math.floor(4.67)=4
The random number generated will be stored in a variable and then compared with the guessed number.
If the (guessed number< actual number), then a hint will be prompted that our guessed number was small, and we should try with some larger number next time.![no smallhint](https://github.com/shambhavi796/Number-Guessing-Game/assets/121026844/6dde55e0-c50a-495b-b30c-1324b0338141)
If the (guessed number> actual number), then a hint will be prompted that our guessed number was large, and we should try with some smaller number next time.![no largehint](https://github.com/shambhavi796/Number-Guessing-Game/assets/121026844/d67bd96c-240d-48e1-a4a2-28133a73e830)
At the time when the user has guessed the right number then a Congrats message will be prompted.![congo](https://github.com/shambhavi796/Number-Guessing-Game/assets/121026844/6546efb1-c042-40cc-9f7d-62505c2b6faf)
