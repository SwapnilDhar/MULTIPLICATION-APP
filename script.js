let num1 = Math.ceil(Math.random() * 10)

let num2 = Math.ceil(Math.random() * 10)

let score = JSON.parse(localStorage.getItem("score"))
if(!score){
    score = 0
}


const questionEl = document.getElementById('question')
const answerEl = document.getElementById('answer')
const scoreEl = document.getElementById('score')
questionEl.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2

const formEl = document.getElementById('container')

scoreEl.innerText = `score : ${score}`

formEl.addEventListener("submit", () => {
    const userAns = +answerEl.value
    if(userAns === correctAns){
        score++
        updataLocalStorage()
    }
    else{
        score--
        updataLocalStorage()
    }
})

function updataLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}