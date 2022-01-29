# Rock, Paper, Scissors!

## A Brief Introduction

This is week one of the [School of Code](https://github.com/SchoolOfCode/) Hackathon.

A JavaScript console application game of rock, paper, scissors played through JavaScript popup boxes:

- prompt
- alert
- confirm

You can play the game [here](https://priya-m1.github.io/rock_paper_scissors/)

## How to Play

1. To begin the player is asked for their username so that a player can see their name in the messages sent to them.

2. The game prompts players for their move from rock, paper or scissors game, whilst the computer move is generated at random.

3. The player is then alerted with:

   - whether the round is a win, draw or loss for the player
   - result of the round
     - 1: win
     - 0: draw
     - -1: loss
   - current score of all the games played
   - total number of games:
     - played
     - won
     - lost
     - drawn

4. The player is then asked to confirm if they want to continue playing:
   - OK: continues to another game of rock, paper, scissors
   - Cancel: ends the game

## What did I learn?

1. To ensure all permutations of the three possible moves for each player have been handled correctly (win, loss or draw):

   - if statements
   - logical operators: && and ||

2. To call a function with any combination of valid moves to return the appropriate number/ score:

   - if statements
   - logical operators: && and ||
   - functions

3. Ensuring a player can input any move and can see the correct result

   - prompt: asks player for their move
   - alert: displays the results

4. Ensuring the computer move is chosen by random:

   - Math.random()
   - Math.floor()

5. Ensuring a player can keep playing the game indefinitely and has the option to stop playing after every round

   - confirm: ask the player if they want to continue playing
   - do while loop: enables the player to play the game at least once, then the loop continues if the player confirms they want to continue playing

6. Displaying and tracking of how many games have been played, as well as the number of wins, losses, and draws

   - alert
   - block scope/ global scope
   - switch: to evaluate the result and increment the draw, win or loss
   - break: to break out of the switch statement

7. Asking the player for a username so that a player can see their name in the messages sent to them and ensuring it is uniform by restricting the number characters to 10. Ensuring the username is capitalised

   - prompt
   - while loop
   - toUpperCase()
   - toLowerCase()
   - substring()
