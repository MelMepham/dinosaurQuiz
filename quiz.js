document.addEventListener('DOMContentLoaded', start)

function start() {
  questions();
}

let total = ["0"]
let answered = -1

function questions() {
  let quesQ = ["Do you think you are mostly", "b", "c", "d", "e"]
  let quesA = [
    ["Friendly", "b", "c", "d", "e"],
    ["Angry", "b", "c", "d", "e"],
    ["Confused", "b", "c", "d", "e"]
  ]
  var buttons =  document.getElementsByClassName('btn')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {useButton(e.target.value)}, false)
  }
    for (j = 0; j < total.length; j++) {
      answered++
      document.getElementById('quesAns').innerHTML = quesQ[answered];
      document.getElementById('quesA').innerHTML = quesA[0][answered];
      document.getElementById('quesB').innerHTML = quesA[1][answered];
      document.getElementById('quesC').innerHTML = quesA[2][answered];
    }
}



 function useButton(que) {
    total.push(que)

  }
