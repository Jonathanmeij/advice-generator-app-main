let button = document.getElementById('button')
let id = document.getElementById('id')
let adviceText = document.getElementById('adviceText')

button.onclick = () => {
    setNewAdvice()
}

async function setNewAdvice(){
    const fetched = await fetch('https://api.adviceslip.com/advice')
    const data = await fetched.json()
    
    id.innerHTML = "ADVICE #" + data.slip.id
    adviceText.innerHTML = '"' + data.slip.advice + '"' 
}

window.onload = () => {
    setNewAdvice()
}