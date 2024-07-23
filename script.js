/* реалізувати функцію removeElement(array, item), щоб видалити елемент item
з масиву array */

function removeElement(array, item) {
    let index = array.indexOf(item);
    while (index !== -1) {
        array.splice(index, 1);
        index = array.indexOf(item);
    }
}
const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array, 4);
console.log(array); // result: [1, 3, 6, 2, 5, 7]