// Напиши скрипт, который реагирует на изменение значения input#font - size
// - control(событие input) и изменяет инлайн - стиль span#text
// обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const newSizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");
newSizeControl.addEventListener("input", e => inputHandle(e))

function inputHandle(e) {
    textSize.style.fontSize = e.target.value+'px'
}