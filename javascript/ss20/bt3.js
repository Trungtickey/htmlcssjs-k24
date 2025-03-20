let input;

do {
    input = prompt("Nhập một số nguyên:");
    if (isNaN(input) || input.includes(".") || parseInt(input) < 0) {
        alert("Số nhập vào không hợp lệ, vui lòng nhập lại!");
    }
} while (isNaN(input) || input.includes(".") || parseInt(input) < 0);

let number = parseInt(input); // Chuyển chuỗi input thành số nguyên
let strNum = number.toString(); // Chuyển số thành chuỗi

// Đảo ngược chuỗi số
let reversedNum = "";
for (let i = strNum.length - 1; i >= 0; i--) {
    reversedNum += strNum[i];
}

if (strNum === reversedNum) {
    alert(number + " là số đối xứng!");
} else {
    alert(number + " không phải là số đối xứng!");
}
