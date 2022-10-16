
var start = document.querySelector('.start');
let timer = document.querySelector('.time')
var scoreBoard = document.querySelector('.scoreBoard')
var questions = document.querySelector('.questions')
const showBtn = document.querySelectorAll('.answerButton')
var submitBtn = document.querySelector('.submitBtn')
var enterName = document.getElementById('enterName')
var highScoreLink = document.getElementById('highScoreLink')
//Button Links
var ans1 = document.getElementById('ans1')
var ans2 = document.getElementById('ans2')
var ans3 = document.getElementById('ans3')
var ans4 = document.getElementById('ans4')

// Question and answer arrays
var btn1 = ['Quotes', 'Numbers and strings', 'Commas', 'JavaScript']
var btn2 = ['Curly Brackets', 'Other arrays', 'Curly brackets', 'Terminal/Bash']
var btn3 = ['Parenthesis', ' Booleans', 'Quotes', 'For loops']
var btn4 = ['Square Brackets', 'All of the above', 'Parenthesis', 'Console.log']
var questionsArr = ["A condition in an if/else statement is enclosed within ______.",  "Arrays in Javascript can be used to store:", "String Values must be enclosed within ________ when being assigned to variables", "A very useful tool used during development and debugging for printing content to the debugger is:"]
var questionAns = ['Parenthesis', 'All of the above', 'Quotes', 'Console.log']

const scoreSheet = JSON.parse(localStorage.getItem('scoreSheet')) || []
let timerValue = 75
let i = -1
var stopclock;
// Loads questions and answers 
function setQuestions(){
    i++
    ans1.textContent = (btn1[i])
    ans2.textContent = (btn2[i])
    ans3.textContent = (btn3[i])
    ans4.textContent = (btn4[i])
    questions.textContent = (questionsArr[i])
    endGame()
}
//Subtracts time and moves on to next questions on wrong answer
function wrongAnswer(){
    timerValue -=15
    setQuestions()
    return
}
// Clock used to determine score
function myTimer(){
    timerValue = timerValue-1
    timer.innerText=`Seconds Left: ${timerValue}`
    if(timerValue === 0){
    endGame()
    }
}
// ends quiz and posts score
function endGame(){
    if (i==4 || timerValue == 0){
        questions.classList.add('endScreen')
        timer.classList.add('btnHide')
        questions.textContent = `Your score is ${timerValue}`
        showBtn.forEach(answerButton => {
            answerButton.classList.add('btnHide')})
            enterName.style.display = 'initial'
            submitBtn.classList.remove('btnHide')
            let finalScore = timerValue
            console.log(finalScore);
            clearInterval(stopclock)
        } else{ 
            return
        }}
        
        //starts game and timer
start.addEventListener('click', function(){
    start.style.display = "none"
    showBtn.forEach(answerButton => {
        answerButton.classList.remove('btnHide')
    })
    setQuestions()
    stopclock = setInterval(myTimer, 1000)
    myTimer()
    
})
//Answer buttons formatted to progress quiz
ans1.addEventListener('click', e=> {
    if (e.target.textContent == questionAns[i]){
        setQuestions()
    }else{
        wrongAnswer()
    }})


ans2.addEventListener('click', e=> {
    if (e.target.textContent == questionAns[i]){
        setQuestions()
    }else{
        wrongAnswer()
    }})



ans3.addEventListener('click', e=> {
    if (e.target.textContent == questionAns[i]){
        setQuestions()
    }else{
        wrongAnswer()
    }})



ans4.addEventListener('click', e=> {
    if (e.target.textContent == questionAns[i]){
        setQuestions()
    }else{
        wrongAnswer()
    }})
// sends name and score to local storage and opens highscore page
    submitBtn.addEventListener('click', e =>{
        setLocal()
        questions.textContent = 'Highscores'
        enterName.style.display = 'none'
        submitBtn.classList.add('btnHide')
        scoreBoard.classList.remove('btnHide')
        
    })
//called by submit button to send info to local storage
    function setLocal(){
        var userScore = {
            name: enterName.value,
            score: timerValue
        }
        console.log(userScore);
        scoreSheet.push(userScore);
        scoreSheet.sort((a, b) => b.score - a.score)
        scoreSheet.splice(5)
        localStorage.setItem('scoreSheet', JSON.stringify(scoreSheet))
        console.log(scoreSheet);
        scoreBoard.innerHTML = scoreSheet.map(userScore => {
            return(`<li>${userScore.name}:${userScore.score}</li>`);
        })
        .join('')

        console.log(scoreBoard);

  }
    

