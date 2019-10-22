# Animal Crossing Town Builder: Description

<!-- This is a single page application for the well loved classic game: Tic-Tac-Toe. The user can sign up and sign in with their email and password and start a game. Each piece is placed manually into the board and placing three in a row will signal a win, or if the board if filled with without a match, the game will declare a tie! As a user plays games, the background API will log the completed games and the user can see the total in the game history. The application was to be completed within a 4 day period (with a weekend squeezed in!) without any user facing bugs and responsive game play.

A good majority of people know the game of Tic-Tac-Toe, it's a well loved classic! I have built an application which allows the user to play as many games as they like! This is my first project within the General Assembly Software Engineering Immersive course. -->

# Link to live game!

[Animal Crossing Town Builder](https://sangelici.github.io/AC-Town-Builder-Client/)


# Story

<!-- Coming into this project, you could say I was both excited and nervous. I was ready to jump in and start putting what I learned into practical use, but I had a feeling that this would be a lot more challenging that what it seemed. There was a lot to take into account, and it pushed far beyond the rules of the game.
I began with the layout. It was something I felt confident it. If I could get something onto the page then I had a better jumping off point into the back-end side of the pool. Once the board was in place, I set up the authorization. We had a recent lesson in setting up account credentials and storing the information within the API, so with it fresh in my memory, I put it together.
It went well, with a small hiccup here and there that required some tests with the terminal and Devtools, but the roadblocks didn't come until the game logic. By day three, I was stumped. It was a challenge for me to break the steps into bite-size pieces. The first challenge was getting 'X' to change to 'O', and then it moved to creating the win/tie condition and getting the condition to recognize that three empty cells do not count as a three-in-a-row win.
I believe the greatest challenge I faced was working with the API PATCH request, where each move and resulting win/tie would be stored. Some of the issues came down to the order of my code, where the api would run before a condition would, leading to the result of that condition never being accounted for. The rest was trying to connect all my pieces between my event.js, api.js, and ui.js files. In the end, I was able to push passed the errors and reorder my code in a way that allowed my application to run with minimal bugs.
Looking back, when I was building my game, the project was difficult and, at times, strenuous, but I did enjoy building this game from scratch and I look forward to future projects. In the future, I will continue to work my code, refactor and add in additional features as I go. -->

# User Stories

  Auth:
  1. As the user, I want to be able to sign up with a unique email and password
  2. As the user, I want to be able to sign in with my email and password
  3. As the user, I want to be able to change my password
  4. As the user, I want to be able to sign out when I’m done

  API:
  1. As the user, I want to be able to create a town and add residents
  2. As the user, I want to be able to select a resident and update the information within
  3. As the user, I want to be able to select and delete resident
  4. As the user, I want to press a button and view the towns and residents that I have created

Note: I did not reach the point of implementing the front-end functionality for my Residents resource, but it will be something I would like to incorporate in the future!

# Technologies Used

  -HTML
  -CSS
  -Sass
  -Bootstraps
  -Handlebars
  -JavaScript
  -jQuery
  -Ajax
  -Curl/API
  -RESTful api
  -Ruby
  -on Rail

# Future Goals
  <!--
  -Change the 'Press Start' message to the actual button a user can press to initiate the game
  -Show past games played in game history where a user can view the board
  -Create an AI that a user can play against
      -add different levels of difficulty
  -Create multiplayer functionality where users can play against each other (turn based)
  -View account information and be able to add a profile picture
  -Allow user to create custom username
  -Add in background music that can be toggled
  -Add additional themes a user can choose from
  -Create phone accessibility (on-the-go play)
  -Tighten up CSS by utilizing more sass and adding variable usage -->

# ERD + Wireframe:

<img src="erd.png"
     alt="Animal Crossing API Entity Relationship Diagram"
     style="float: left; margin-right: 10px;" />
<img src="wireframe.png"
     alt="Animal Crossing API Entity Relationship Diagram"
     style="float: left; margin-right: 10px;" />
<img src="wireframe_2.png"
     alt="Animal Crossing API Entity Relationship Diagram"
     style="float: left; margin-right: 10px;" />
