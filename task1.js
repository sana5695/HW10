let array = [];
let oddCount = 0;
let evenCount = 0;
let zeroCount = 0;

for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 10);
}

function arrayEvenOddCount(array) {
    console.log(`Исходный массив - ${array}\n`);
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i] !== 0) {
            evenCount++;
        } else if (array[i] % 2 !== 0 && array[i] !== 0) {
            oddCount++;
        } else {
            zeroCount++;
        }
    }
    console.log(`Четных эллементов - ${evenCount}`);
    console.log(`Нечетных эллементов - ${oddCount}`);
    console.log(`Нулевых элементов - ${zeroCount}`);
}

arrayEvenOddCount(array);
