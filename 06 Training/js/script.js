let menu = document.querySelector('.menu');
let menuItem = menu.querySelectorAll('.menu-item');
let menuItemSecond = menuItem[1];
let menuItemThird = menuItem[2];
menu.insertBefore(menuItemThird, menuItemSecond);

let menuItemFive = menuItemSecond.cloneNode();
menuItemFive.textContent = 'Пятый элемент';
menu.append(menuItemFive);

document.body.style.backgroundImage = 'url("img/apple_true.jpg")';

title.textContent = 'Мы продаем только подлинную технику Apple';

let adv = document.querySelector('.adv');
adv.remove();

let answerQuestion = prompt('Каково ваше отношение к технике Apple?', '');
let divAnswer = document.getElementById('prompt');
divAnswer.textContent = answerQuestion;