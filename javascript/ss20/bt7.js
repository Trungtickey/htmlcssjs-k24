do {
    let n = parseInt(prompt("Nhập vào số lượng số Fibonacci cần hiển thị:"));

    if(isNaN(n) || n.includes(".") || parseInt(n) <= 0){
        alert("Số nhập vào không hợp lệ, vui lòng nhập lại!");
    }
} while(isNaN(n) || n.includes(".") || parseInt(n) <= 0);

let fib1 = 1, fib2 = 1; // Hai số đầu tiên của dãy Fibonacci
let result = "Dãy Fibonacci: " + fib1; // Chuỗi kết quả

if (n > 1) {
    result += ", " + fib2;
}

// Dùng vòng lặp để tính Fibonacci từ số thứ 3 trở đi
for (let i = 3; i <= n; i++) {
    let nextFib = fib1 + fib2; // Tính số Fibonacci tiếp theo
    result += ", " + nextFib;
    fib1 = fib2; // Cập nhật lại giá trị
    fib2 = nextFib;
}

// Hiển thị kết quả
alert(result);