
// rock paper scissor game
// rock cut scissor, paper cut rock, scissor cut paper
// two oponent 1. person 2. computer/machine
// 0,1,2 is rock,paper,scissor for random num of computer

//    const resBtn = document.querySelectorAll('.resBtn')
//    const randomNum = Math.floor(Math.random() *3) - 1
//    console.log(randomNum);

// computer choice 
   // const computerChoice =() => {
   //  const asignNumber = ['rock','paper','scissor']
   //  const computerSelect = asignNumber[Math.floor(Math.random()*asignNumber.length)]
   //  return computerSelect
   // }

   // console.log(computerChoice());
 
   // button class name is resBtn
const resBtn = document.querySelectorAll('.resBtn') 
let playerScore = document.getElementById('player-score')
let showChoices = document.getElementById('showChoices')
let ShowResult = document.getElementById('result')

// when click the button, it return the button value;;
   
     function demo() {
      for(let element = 0 ; element > resBtn.length ; element++) {
         // console.log(element.value);
         resBtn[element].onclick = () => {
         const asignNumber = ['rock','paper','scissor']
    const computerChoice = asignNumber[Math.floor(Math.random()*asignNumber.length)]
            console.log(resBtn[element].value)
            let score
            let mark =0
            if(computerChoice === resBtn[element].value){
               score ="Draw"
               mark += 0 
               showChoices.innerText = `your choice: ${resBtn[element].value} computer
               choice: ${computerChoice}`

         }
         else if(computerChoice == "rock" && resBtn[element].value == "paper"){
               score = "Win"
               mark += 1
               showChoices.innerText = `your choice: ${resBtn[element].value} computer
               choice: ${computerChoice}`
         }
         else if(computerChoice == "paper" && resBtn[element].value == "scissor"){
            score =  "Win"
            mark += 1
            showChoices.innerText = `your choice: ${resBtn[element].value} computer
               choice: ${computerChoice}`
      }
      else if(computerChoice == "scissor" && resBtn[element].value == "rock"){
         score =  "Win"
         mark += 1
         showChoices.innerText = `your choice: ${resBtn[element].value} computer
               choice: ${computerChoice}`
   }
   else {
      score = "lose"
      mark -= 1
      showChoices.innerText = `your choice: ${resBtn[element].value} computer
               choice: ${computerChoice}`
   }
    
   playerScore.innerText = `your score is: ${mark}` 

   if(score === "win"){
      ShowResult.innerText = "win"

   }
   else if(score === "draw"){
      ShowResult.innerText ="deaw"
   }
   
   else if(score === "lose"){
      ShowResult.innerText ="lose"
   }
      else{
         ShowResult.innerText= "wrong"
      }
      }
     }

     console.log(mark);
     }

     demo()
       


 // when i call the function, get a error on console
 // Uncaught ReferenceError: userValue is not defined



// console.log(computerChoice());
// console.log(userChoice());

// exercise rock paper scissor;;

