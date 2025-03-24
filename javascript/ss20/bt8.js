do {
    let n = parseInt(prompt("Nhập vào số lượng số nguyên tố cần hiển thị:"));
    if (isNaN(n) || n.includes(".") || parseInt(n) <= 0) {
        alert("Số nhập vào không hợp lệ, vui lòng nhập lại!");
    }
} while (isNaN(n) || n.includes(".") || parseInt(n) <= 0);



let count = 0; // Biến đếm số lượng số nguyên tố đã tìm được
let num = 2; // Bắt đầu từ số nguyên tố đầu tiên
let result = "Các số nguyên tố: ";

// Duyệt từng số để tìm số nguyên tố
while (count < n) {
    let isPrime = true; // Mặc định num là số nguyên tố

    // Kiểm tra số nguyên tố (chỉ chia hết cho 1 và chính nó)
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false; // Không phải số nguyên tố
            break;
        }
    }

    if (isPrime) {
        count++; // Tăng số lượng số nguyên tố tìm được
        result += num + ", "; // Thêm số nguyên tố vào chuỗi kết quả
    }

    num++; // Kiểm tra số tiếp theo
}
// Hiển thị kết quả
alert(result.slice(0, -2)); // Xóa dấu ", " ở cuối chuỗi trước khi hiển thị
