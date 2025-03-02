const initStr ='123411';
const str1 = initStr.substring(0, initStr.length / 2);
const str2 = initStr.substring(initStr.length / 2);

const findSum = (str) => str.split('').reduce((res, el) => res + Number(el), 0);
const sum1 = findSum(str1);
const sum2 = findSum(str2);
const isEqual = sum1 === sum2;
console.log(isEqual ? 'Да' : 'Нет');
