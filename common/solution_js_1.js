/*
#1 Фильтрация строки
Создать переменную со строковым значением. Сформировать переменную
которая будет состоять только из ГЛАСНЫХ букв этой строки. Результат
вывести в консоль.
*/

const string = "Привет! Как дела?";


function getVowels(string) {
  const result = string.match(/[аеёиоуыэюя]/gi);
  return result ? result.join("") : "";
}

console.log(getVowels(string)); 