function play() {
  let computerNum = Math.floor(Math.random()*10)
  let myNumber = document.getElementById('myNumber')
  let compResult = document.getElementById('comp-result')
  let myResult = document.getElementById('my-result')
  compResult.innerHTML = `Computer picked: ${computerNum}`

  computerNum == myNumber.value ? myResult.innerHTML = 'Tie 😜':
  
  computerNum < myNumber.value ? myResult.innerHTML = 'You won 🙌' : myResult.innerHTML = 'You lose 😢'
}

