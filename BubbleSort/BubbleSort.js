let numbers = [44, 77, 32, 66, 90, 102, 70, 12];
let continueLooking = true;
let numLength = numbers.length - 1;

for (let i = 1; i <= numLength && continueLooking; i++) {
    continueLooking = false;
    for (let j = 0; j < numLength; j++) {
        if (numbers[j + 1] > numbers[j]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
            continueLooking = true;
        }
    }
}

console.log(numbers.join(', '));