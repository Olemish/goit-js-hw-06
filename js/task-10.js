// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >,
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.


const createButton = document.querySelector('button[data-create]')
const removeButton=document.querySelector('button[data-destroy]')
const input = document.querySelector('input')
const boxes = document.querySelector('#boxes')
let amount = 0;

input.addEventListener('input',e=> handelInput(e))
createButton.addEventListener('click', () => createBoxes(amount))
removeButton.addEventListener('click', ()=> removeBoxes(amount))


function createBoxes(amount) {
  
let size = 30
  for (let i = 0; i < amount; i += 1, size+=10) {
    const container = document.createElement('div')
    container.style.height =`${size}px`
    container.style.width = `${size}px`
    container.style.background = getRandomHexColor()
    boxes.append(container)
  }

}
function removeBoxes() {
  boxes.textContent = '';
}

function handelInput(e) {
  amount = e.target.value
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
