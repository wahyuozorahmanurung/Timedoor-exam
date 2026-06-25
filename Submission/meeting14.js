var numberList = [111,11,1,111,1111,11,11,111,1,111];
function findNumberLocation(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1111) {
            return i; // Return the index if the number is found
        }
    }
}

var numLocation = findNumberLocation(numberList)
console.log('1111 is located at index ${numLocation}')