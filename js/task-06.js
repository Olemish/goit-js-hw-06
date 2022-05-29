// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid, которые мы уже
// добавили в исходные файлы задания.
const focusInput = document.querySelector("#validation-input")
focusInput.addEventListener("blur", e => inputHandle(e))
function inputHandle(e) {
    console.log(focusInput.getAttribute("data-length"))
    if (e.target.value.length===Number(focusInput.getAttribute("data-length"))) {
    focusInput.classList.add("valid")
    } else {
     focusInput.classList.add("invalid")   
 }   
}