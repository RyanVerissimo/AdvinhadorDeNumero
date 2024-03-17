const randomNumber = Math.round(Math.random() * 10)
let attempt = 1

function handleClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value)== randomNumber) {
        document.querySelector(".screen1").classList.toggle("hide")
        document.querySelector(".screen2").classList.toggle("hide")
        document.querySelector(".screen2 h2").innerText = `Acertou em ${attempt} tentativas.`
    } else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
        alert('Número Inválido!')
    }
    inputNumber.value = ''
    inputNumber.focus()
    attempt++
}

function goBack() {
    document.querySelector(".screen1").classList.toggle("hide")
    document.querySelector(".screen2").classList.toggle("hide")
    location.reload()
}