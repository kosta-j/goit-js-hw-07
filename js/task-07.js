// Задание 7
// Напиши скрипт, который реагирует на изменение значения
// input #font-size-control(событие input) и изменяет
// инлайн - стиль span #text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет
// меняться размер текста.
"use strict";

// 1. Парсим инпут и текст
const fontSizeControlRef = document.querySelector("#font-size-control");
const outputTextRef = document.querySelector("#text");

// 2. Пишем функцию которая меняет шрифт
function onInputFontSizeControl(event) {
  outputTextRef.style.fontSize = `${event.currentTarget.value}px`;
}
// 3. Вешаем слушатель на инпут
fontSizeControlRef.addEventListener("input", onInputFontSizeControl);
