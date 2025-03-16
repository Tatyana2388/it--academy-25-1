
let palindrome = (str) => {
    str = str.toLowerCase().replace(/\s/g, '')
    return str === str.split('').reverse().join('');
}

console.log(palindrome('a'));
console.log(palindrome('34543'));
console.log(palindrome('топот '));
console.log(palindrome('Anna'));
console.log(palindrome('mon'));