// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается
// в его атрибуте data - length.
// Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
"use strict";
// 1. Парсим инпут элемент
const inputRef = document.querySelector("#validation-input");
// 2. Делаем коллбек, который будет менять класс у инпута
// по условию
function onBlurInput(event) {
  const inputValue = event.currentTarget.value;

  if (inputValue.length.toString() !== inputRef.dataset.length) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  }
}
// 3. Вешаем слушателя на инпут
inputRef.addEventListener("blur", onBlurInput);
