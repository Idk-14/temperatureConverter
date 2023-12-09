const celciusInput = document.querySelector('#celcius > input')
const fahrenheitInput = document.querySelector('#fahrenheit > input')
const kelvinInput = document.querySelector('#kelvin > input')

const btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function() {
    const cTemp = parseFloat(celciusInput.value)
    const fTemp = (cTemp*9/5) + 32
    const kTemp = cTemp +  273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

fahrenheitInput.addEventListener('input', function() {
    const fTemp = parseFloat(fahrenheitInput.value)
    const cTemp = (fTemp -32) * (5/9)
    const kTemp = (fTemp - 32) * (5/9) + 273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})


kelvin.addEventListener('input', function() {
    const kTemp = parseFloat(kelvinInput.value)
    const fTemp = (kTemp - 273.15) * (1.8) + 32
    const cTemp = kTemp -  273.15

    fahrenheitInput.value = roundNumber(fTemp)
    celciusInput.value = roundNumber(cTemp)
})

btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})