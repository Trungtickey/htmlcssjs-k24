let a = parseInt(prompt("Nhập vào số A:"));
let b = parseInt(prompt("Nhập vào số B:"));

while (isNaN(a) || isNaN(b) || b < 0) {
    alert("Vui lòng nhập số nguyên hợp lệ! (B phải ≥ 0)");
    a = parseInt(prompt("Nhập vào số A:"));
    b = parseInt(prompt("Nhập vào số B:"));
}

// Khởi tạo kết quả với giá trị ban đầu là 1
let result = 1;

// Sử dụng vòng lặp for để tính lũy thừa
for (let i = 0; i < b; i++) {
    result *= a;
}

alert(a + " ^ " + b + " = " + result);
