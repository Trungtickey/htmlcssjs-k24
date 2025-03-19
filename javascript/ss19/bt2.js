// Hàm kiểm tra ký tự có phải chữ cái không
function isLetter(character) {
    return /^[a-zA-Z]$/.test(character);
}
let input = prompt("Nhập một ký tự:");

// Kiểm tra và hiển thị kết quả
if (input.length === 1 && isLetter(input)) {
    alert(`Ký tự ${input} là chữ cái`);
} else {
    alert("Không phải chữ cái");
}
