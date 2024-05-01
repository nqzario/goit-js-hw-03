function makeArray(firstArray, secondArray, maxLength) {
    arrayConcat = firstArray.concat(secondArray);
    for (let i = 0; i <= maxLength; i--) {
        if (arrayConcat.length > maxLength) {
            arrayConcat.pop()
        } else {
            break;
        }
    }
    return arrayConcat;
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
