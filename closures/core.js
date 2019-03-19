// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return b => a + b;
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let arr = [];

  return n => {
    arr.push(n);

    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
  };
}

module.exports = {
  sum,
  average
};