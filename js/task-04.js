// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай
// значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const removeBtn = document.querySelector(".js-remove-btn");
const targetBtn = document.querySelector(".js-target-btn");
const addBtn = document.querySelector(".js-add-btn");

addBtn.addEventListener('click', ()=>handelButton())

function handelButton() {
    targetBtn.innerText = Number(targetBtn.innerText) + 1
}

removeBtn.addEventListener('click', () => handelRemoveButton())
function handelRemoveButton() {
    targetBtn.innerText=Number(targetBtn.innerText)-1
}