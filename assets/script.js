
var start = document.querySelector('.start');
let timer = document.querySelector('.time')
var questions = document.querySelector('.questions')
const showBtn = document.querySelectorAll('.answerButton')

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



let timerValue = 100
let i = 0
// Loads questions and answers 
function setQuestions(){
    ans1.textContent = (btn1[i])
    ans2.textContent = (btn2[i])
    ans3.textContent = (btn3[i])
    ans4.textContent = (btn4[i])
    questions.textContent = (questionsArr[i])
}

function wrongAnswer(){
    timerValue -=15
}

//starts game and timer
start.addEventListener('click', function(){
    start.style.display = "none"
    showBtn.forEach(answerButton => {
        answerButton.classList.remove('btnHide')
    })
    setQuestions()
    setInterval(myTimer, 1000)
    myTimer()
    
})

ans1.addEventListener('click', e=> {
    if (e.target.textContent == questionAns[i]){
        i++
        setQuestions()
        endGame()
    }else{
        console.log('you failed');
        wrongAnswer()
        i++
        setQuestions()
        endGame()
        return
    }})


ans2.addEventListener('click', e=> {
    if (e.target.textContent == questionAns[i]){
        i++
        setQuestions()
    }else{
        console.log('you failed');
        wrongAnswer()
        i++
        setQuestions()
        return
    }})


ans3.addEventListener('click', e=> {
    if (e.target.textContent == questionAns[i]){
        i++
        setQuestions()
    }else{
        console.log('you failed');
        wrongAnswer()
        i++
        setQuestions()
        return
    }})


ans4.addEventListener('click', e=> {
    if (e.target.textContent == questionAns[i]){
        i++
        setQuestions()
        endGame()
    }else{
        console.log('you failed');
        wrongAnswer()
        i++
        setQuestions()
        return
    }})

 function endGame(){
    if (i==4){
        questions.classList.add('endScreen')
        questions.textContent = `Your score is ${timerValue}`
        showBtn.forEach(answerButton => {
        answerButton.classList.add('btnHide')})
         timer.remove('innerText')
        }else{ 
    return
 }}

function myTimer(){
    timerValue = timerValue-1
    timer.innerText=`Seconds Left: ${timerValue}`
}
    
             
/*

timer.innerText=`Seconds Left: ${timerValue}`
 ;
    console.log(timer); */
