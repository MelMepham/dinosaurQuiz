document.addEventListener('DOMContentLoaded', start)

function start() {
  questions();
  changeAnswers()
}

let total = []
let answered = 0
let quesQ = ["Do you think you are mostly", "Which super power would you rather have?", "You have to chhange your name to one of these, which would you prefer?", "Your spirit animal is closest to..", "How did 2017 treat you?"]
let quesA = [
  ["Friendly", "Invisibility", "Larry", "Bird", "Best year of my life!"],
  ["Angry", "Fire breathing", "Garry", "Fish", "Thankfully its OVER!"],
  ["Confused", "Ability to fly", "Barry", "Otter", "Eh."]
]
function changeAnswers() {
  if (total.length === 5) {
    results()
  } else {
  document.getElementById('quesAns').innerHTML = quesQ[answered];
  document.getElementById('quesA').innerHTML = quesA[0][answered];
  document.getElementById('quesB').innerHTML = quesA[1][answered];
  document.getElementById('quesC').innerHTML = quesA[2][answered];
}
}

function questions() {
  var buttons =  document.getElementsByClassName('btn')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {useButton(e.target.value), answered++, changeAnswers()}, false)
  }
}

 function useButton(que) {
    total.push(que)
    console.log(total)
  }

  function results() {
    num = total.map(Number)
    results = num[0] + num[1] + num[2] + num[3] + num[4]
    if (results < 26) {
      window.location.href=("https://melmepham.github.io/dinosaurquiz.github.io/result-a.html")      //go to result-a.html
    } else if (results <51) {
      window.location.href=("https://melmepham.github.io/dinosaurquiz.github.io/result-b.html")
    } else {
      window.location.href=("https://melmepham.github.io/dinosaurquiz.github.io/result-c.html")
    }
  }
