// Задание 5
// Напиши скрипт который, при наборе текста
// в инпуте input #name-input(событие input),
// подставляет его текущее значение
// в span #name-output. Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.
"use strict";

const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

function onTextInput(event) {
  if (event.currentTarget.value === "") {
    nameOutputRef.textContent = "незнакомец";
  } else {
    nameOutputRef.textContent = event.currentTarget.value;
  }
}

nameInputRef.addEventListener("input", onTextInput);
