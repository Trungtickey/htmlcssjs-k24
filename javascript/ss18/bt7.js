let a = parseFloat(prompt("Mời bạn nhập vào số a"));
let b = parseFloat(prompt("Mời bạn nhập vào số b"));
// Nhập phép toán từ người dùng
let operator = prompt("Mời bạn nhập vào phép tính (+, -, *, /)");

let result;
if (operator === "+") {
    result = a + b;
} else if (operator === "-") {
    result = a - b;
} else if (operator === "*") {
    result = a * b;
} else if (operator === "/") {
    if (b !== 0) {
        result = a / b;
    } else {
        alert("Lỗi: Không thể chia cho 0");
        result = "Không hợp lệ";
    }
} else {
    alert("Lỗi: Phép toán không hợp lệ");
    result = "Không hợp lệ";
}

alert(`Kết quả của phép tính trên: ${a} ${operator} ${b} = ${result}`);
