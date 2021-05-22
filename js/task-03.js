// Задание 3
// Напиши скрипт для создания галлереи изображений
// по массиву данных.
// Используй массив объектов images для создания
// тегов img вложенных в li.
// Для создания разметки используй шаблонные строки

// Все элементы галереи должны добавляться в DOM
// за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами
// или гридами через css - классы.

"use strict";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//1. Делаем ф-цию, к-я принимает элемент массива
// и генерит html теги шаблонной строкой атрибутами,
// которые берет из массива
const makeGalleryListMarkup = ({ url, alt }) => {
  return `
    <li class="gallery-item">
    <img class="gallery-image" src="${url}" alt="${alt}"/>
    </li>
    `;
};
// 2. Парсим элемент gallery
const galleryRef = document.querySelector("#gallery");

// 3. Делаем .map на массиве gallery,
// вызываем там коллбек написанный в п.1
// получаем массив li->img элементов,
// делаем из него строку
const makeGalleryList = images.map(makeGalleryListMarkup).join("");

// 4. Полученный массив добавляем в gallery
galleryRef.insertAdjacentHTML("beforeend", makeGalleryList);

// 5. Оформление
galleryRef.classList.add("gallery-list");
