// Напиши скрипт который, при наборе текста в инпуте input#name - input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const textInput = document.querySelector("#name-input")
const spanName = document.querySelector("#name-output")

textInput.addEventListener("input", e => inputHandle(e))

function inputHandle(e) {
    console.log(e.target.value)
    if (e.target.value.length === 0) {
        spanName.innerText = "Anonymous"
    }
    else (spanName.innerText = e.target.value)
}