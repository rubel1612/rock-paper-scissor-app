
 let totalScore = {'computerScore':0, 'playerScore': 0}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice()  'Rock'
// getComputerChoice()  'Scissors'
function getComputerChoice() {
     let options = ["Rock","Paper","Scissor"]
     let computerChoice = options[Math.floor(Math.random() * 3)]
     return computerChoice
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors')  1
// human loses - getResult('Scissors', 'Rock')  -1
// human draws - getResult('Rock', 'Rock')  0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
     let score 
         if(playerChoice == computerChoice){
             score = 0
         }
         else if(playerChoice == "Rock" && computerChoice == "Scissor"){
            score =1
         }
         else if(playerChoice == "Paper" && computerChoice == "Rock"){
          score =1
       }
       else if(playerChoice == "Scissor" && computerChoice == "Paper"){
        score =1
     }
     else{
        score = -1
     }
  
    return score 
  // All situations where human draws, set `score` to 0
  

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
  

  // return score
  
}

// console.log(getResult("Paper",getComputerChoice()));

// ** showResult updates the DOM to `You Win!` or `You Lose!` or 
//`It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
    let result = document.getElementById('result')
   if(score == 1){
    result.innerText = "You Win"
   }
   else if(score === -1){
    result.innerText = "You Lose"
   }
   else{
    result.innerText = "draw"
   }

  //  switch(score){
  //   case 1:
  //       result.innerText = "You Win"
  //   break
  //   case 0:
  //     result.innerText = "Draw"
  //   break 
  //   case -1:
  //     result.innerText = "You Lose"
  //     break 
  //   }
// ** Calculate who won and show it on the screen **
    // let playerScore = document.getElementById('player-score')
    // playerScore.innerText = score
    // playerScore.innerText = `${Number(playerScore.innerTex) + score}`
    // console.log(score);
    let totalPlayerScore = document.getElementById('player-score') 
    totalPlayerScore.innerText = totalScore['playerScore']
    let showChoices = document.getElementById('showChoices')
    showChoices.innerText = `UserChoice: ${playerChoice}  &&   ComputerChoice: ${computerChoice}`
}


function onClickRPS(playerChoice) {
   console.log(playerChoice.value);
   let computerChoice = getComputerChoice()
   console.log(computerChoice);
   const score = getResult(playerChoice.value, computerChoice)
   console.log(score);
  // showResult(score, playerChoice.value, getComputerChoice())
  
  totalScore['playerScore'] += score 
  
   showResult(score, playerChoice.value, computerChoice)
}



// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

    let buttons = document.querySelectorAll('.resBtn')
    buttons.forEach(button => {
           button.onclick = () => onClickRPS(button)
    })

  // Add a click listener to the end game button that runs the endGame() function on click
  
    let clearBtn = document.getElementById('clear-btn')
    clearBtn.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let totalPlayerScore = document.getElementById('player-score') 
  totalPlayerScore.innerText = ''
  let showChoices = document.getElementById('showChoices')
  showChoices.innerText = ''
  let result = document.getElementById('result')
  result.innerText =''
}

playGame()