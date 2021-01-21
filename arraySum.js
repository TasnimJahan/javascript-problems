let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum = 0;

function arraySum(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
let result = arraySum(num);
console.log(result);
// let result2 = arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result2);