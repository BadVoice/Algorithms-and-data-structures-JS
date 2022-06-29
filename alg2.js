let arr = [1, 2, 1, 2, 1, 10, 20, 20, 5]
const forTest = (arr) => {

    let arrEmpty = {}

    for (let i = []; i < arr.lenght - 1; i++) {
        arrEmpty = arr[i] == arr[i] ? arr[i] + 1 : arr[i]
        return arrEmpty
    }

}
console.log(forTest(arr))