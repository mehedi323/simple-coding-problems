// function duplicateName(array) {
//     let uniqe = [];
//     for (const arr of array) {
//         if (uniqe.includes(arr) === false){
//             uniqe.push(arr)
//         }
//     }
//     return uniqe;
// }

// const duplicateArray = ['mehedi', 'hasan', 'dewan', 'mehedi',  'hasan', 'shabbir', 'jubaeid', 'hasan'];
// const result = duplicateName(duplicateArray);
// console.log(result);


function duplicateNumbers(items) {
    const array = [];
    for (const item of items) {
        if (array.includes(item) === false) {
            array.push(item)
        }
    }
    return array
}
const duplicateNumber = [1, 20, 22, 30, 30, 10, 1, 20, 22];
const duplicateResult = duplicateNumbers(duplicateNumber);
console.log(duplicateResult);