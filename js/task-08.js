// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount),
// которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано
// в amount и добавляет их в div #boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть
// шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(),
// которая очищает div#boxes.
"use strict";

const refs = {
  inputNumber: document.querySelector("#controls input"),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  boxContainer: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  const boxAmount = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;

    box.style.backgroundColor = randomColor();
    box.style.borderColor = randomColor();

    boxAmount.push(box);
  }
  refs.boxContainer.append(...boxAmount);
}

function destroyBoxes() {
  refs.boxContainer.innerHTML = "";
}

function onRenderClick(event) {
  createBoxes(refs.inputNumber.value);
}

function randomColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

refs.renderBtn.addEventListener("click", onRenderClick);
refs.destroyBtn.addEventListener("click", destroyBoxes);
