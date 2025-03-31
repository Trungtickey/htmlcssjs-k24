let numbers = [];

for(let i = 0; i < 10; i++){
    let num = parseInt(prompt("Nhập số nguyên thứ " + i + 1 + ":" ));
    numbers.push(num);
}

let filteredNumbers = numbers.filter(num => num >= 10);
alert("Các số lớn hơn hoặc bằng 10 là: " + filteredNumbers.join(", "));