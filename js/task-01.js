//Напиши скрипт который:
//Посчитает и выведет в консоль количество категорий в ul#categories,
//то есть элементов li.item.
//Для каждого элемента li.item в списке ul#categories, найдет
//и выведет в консоль текст заголовка элемента(тега < h2 >)
//и количество элементов в категории(всех вложенных в него < li >).

const numberAllCategorias = document.querySelector("#categories");
console.log(numberAllCategorias)
const liItemTitle = Array.from(numberAllCategorias.children);
// console.log(numberAllCategorias.children.length);

console.log(`Number of categorias:${liItemTitle.length}`);
liItemTitle.map(item => console.log(`Category: ${item.querySelector('h2').textContent}
    Elements:${item.querySelectorAll('li').length}`));



// const numberOfElement = document.querySelector(".item");
// console.log(`Elements: ${numberOfElement.children.length}`);
