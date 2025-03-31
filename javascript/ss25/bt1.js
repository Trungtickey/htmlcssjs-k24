function findMinValue(arr) {
    if (arr.length === 0) {
        return "Mảng rỗng!";
    }

    let min = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; 
        }
    }
    return min;
}
let numbers = [3, 7, 1, -4, 9, 0, -2];
console.log("Giá trị nhỏ nhất trong mảng là:", findMinValue(numbers));
