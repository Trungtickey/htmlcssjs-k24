// Mảng chứa số đọc cho các chữ số
const ones = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
const teens = ["mười", "mười một", "mười hai", "mười ba", "mười bốn", "mười lăm", "mười sáu", "mười bảy", "mười tám", "mười chín"];
const tens = ["", "", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

// Hàm chuyển đổi số thành chữ
function numberToWords(num) {
    if (num < 0 || num > 999 || isNaN(num)) {
        return "Số không hợp lệ!";
    }
    if (num === 0) return "Không";

    let words = "";
    let hundred = Math.floor(num / 100);
    let ten = Math.floor((num % 100) / 10);
    let one = num % 10;

    // Xử lý hàng trăm
    if (hundred > 0) {
        words += ones[hundred] + " trăm ";
    }

    // Xử lý hàng chục và đơn vị
    if (ten === 1) {
        words += teens[one]; // Nếu là 10 - 19
    } else if (ten > 1) {
        words += tens[ten];
        if (one > 0) words += " " + ones[one];
    } else if (one > 0) {
        if (hundred > 0) words += "linh "; // Nếu có hàng trăm và hàng chục là 0
        words += ones[one];
    }

    return words.charAt(0).toUpperCase() + words.slice(1); // Viết hoa chữ cái đầu
}

// Nhập số từ người dùng
let inputNumber = parseInt(prompt("Nhập số nguyên từ 0 - 999:"));
alert(numberToWords(inputNumber));
