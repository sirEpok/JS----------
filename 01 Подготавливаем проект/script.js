let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

let answer1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let answer2 = prompt('Во сколько обойдется?', '');
let answer3 = prompt('Введите обязательную статью расходов в этом месяце', '');
let answer4 = prompt('Во сколько обойдется?', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {
    [answer1]: answer2,
    [answer3]: answer4,
  },
  optionalExpenses: null,
  income: null,
  savings: false,
};

alert(appData.budget / 30);