let playerScore = 0;
let computerScore = 0;

const choices = {
    'rock': '✊ Камень',
    'scissors': '✌️ Ножницы',
    'paper': '✋ Бумага'
};

function playGame(playerChoice) {
    const options = ['rock', 'scissors', 'paper'];
    const computerChoice = options[Math.floor(Math.random() * 3)];
    
    let resultText = '';
    
    if (playerChoice === computerChoice) {
        resultText = `Ничья! Оба выбрали ${choices[playerChoice]}`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        resultText = `Ты победила! ${choices[playerChoice]} бьет ${choices[computerChoice]}`;
        playerScore++;
    } else {
        resultText = `Ты проиграла... ${choices[computerChoice]} бьет ${choices[playerChoice]}`;
        computerScore++;
    }
    
    document.getElementById('result').innerHTML = resultText;
    document.getElementById('score').innerHTML = `Счет: Вы ${playerScore} : ${computerScore} Компьютер`;
}