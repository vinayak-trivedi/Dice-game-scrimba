let firstPlayerScore = 0
let secondPlayerScore = 0
let player1Chance = true

// All the elements from the id

const messageEl = document.getElementById("message")

const player1Scoreboard = document.getElementById("player1Scoreboard")

const player2Scoreboard = document.getElementById("player2Scoreboard")

const player1Dice = document.getElementById("player1Dice")

const player2Dice = document.getElementById("player2Dice")

const rollBtn = document.getElementById("rollDice")

const resetBtn = document.getElementById("resetGame")

rollBtn.addEventListener("click", gameStart)


function gameStart() {
    const randomNumber = Math.floor(Math.random()*6) + 1
    messageEl.textContent = "COMPUTER'S CHANCE"
    player1Dice.textContent = randomNumber
    firstPlayerScore += randomNumber
    player1Scoreboard.textContent = firstPlayerScore
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")
    if(firstPlayerScore >= 20) {
        messageEl.textContent = "YOU WON!🥳"
        rollBtn.style.display = "none"
        resetBtn.style.display = "block"
        return
    }

        setTimeout(() => computerGame(), 2000);
    
}
function computerGame() {
    const randomNumber = Math.floor(Math.random()*6) + 1
    messageEl.textContent = "YOUR CHANCE"
    player2Dice.textContent = randomNumber
    secondPlayerScore += randomNumber
    player2Scoreboard.textContent = secondPlayerScore
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    if(secondPlayerScore >= 20) {
        messageEl.textContent = "COMPUTER WON!🎉"
        rollBtn.style.display = "none"
        resetBtn.style.display = "block"
    }
   
}
resetBtn.addEventListener("click", resetGame) 

function resetGame() {
    messageEl.textContent = "YOUR CHANCE"
    firstPlayerScore = 0
    secondPlayerScore = 0
    player1Scoreboard.textContent = firstPlayerScore
    player2Scoreboard.textContent = secondPlayerScore
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    rollBtn.style.display = "block"
    resetBtn.style.display = "none"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
