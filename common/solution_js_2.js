/*
#2 Выборка объекта
Сформировать произвольный массив объектов, описывающий, например, работников компании,
в каждом объекте должны содержаться сл. свойства (поля) - name (содержащее имя сотрудника)
и поле salary (содержащее зарплату сотрудника от 0 до 3000). Сформировать функцию в которую
будет передан в качестве аргумента этот массив и возвращен из функции массив содержащий
имена всех сотрудников, чья зарплата превышает 1000.

const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}
];
*/

const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}
];

function getWorthyWorkers(workers) {
  var result = [];
  workers.forEach(worker => {
    if (worker.salary > 1000) {
      result.push(worker.name);
    }
  });
  return result
}

console.log(getWorthyWorkers(workers))