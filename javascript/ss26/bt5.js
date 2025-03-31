let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`), 10);
    numbers.push(num);
}
let maxNumber = Math.max(...numbers);
let maxIndex = numbers.indexOf(maxNumber);
console.log(`Mảng đã nhập: [${numbers.join(", ")}]`);
console.log(`Số lớn nhất trong mảng là: ${maxNumber}`);
console.log(`Vị trí của số lớn nhất trong mảng là: ${maxIndex}`);
