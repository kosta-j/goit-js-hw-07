// Задание 4
// Счетчик состоит из спана и кнопок,
// которые должны увеличивать и уменьшать
// значение счетчика на 1.

// Создай переменную counterValue
// в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement
// для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки,
// вызовы функций и обновление интерфейса

// 1. Парсим элементы
"use strict";

const decrementBtnRef = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const incrementBtnRef = document.querySelector(
  '#counter button[data-action="increment"]'
);

const counterValueRef = document.querySelector("#counter #value");

//2. Создаем счетчик и функции

let counterValue = 0;

const onDecrementBtnClick = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
};

const onIncrementBtnClick = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
};

// 3. Добавляем слушатели кликов

decrementBtnRef.addEventListener("click", onDecrementBtnClick);

incrementBtnRef.addEventListener("click", onIncrementBtnClick);
