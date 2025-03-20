let str = prompt("Nhập vào một chuỗi bất kỳ:");

while (!str) {
    alert("Chuỗi không được để trống, vui lòng nhập lại!");
    str = prompt("Nhập vào một chuỗi bất kỳ:");
}

let charToFind = prompt("Nhập ký tự cần tìm kiếm:");

// Kiểm tra chỉ được nhập một ký tự duy nhất
while (!charToFind || charToFind.length !== 1) {
    alert("Vui lòng nhập một ký tự duy nhất!");
    charToFind = prompt("Nhập ký tự cần tìm kiếm:");
}

// Duyệt qua chuỗi để kiểm tra sự tồn tại của ký tự
let found = false;
for (let i = 0; i < str.length; i++) {
    if (str[i] === charToFind) {
        found = true;
        break;
    }
}

if (found) {
    alert(`Ký tự '${charToFind}' có tồn tại trong chuỗi!`);
} else {
    alert(`Ký tự '${charToFind}' không tồn tại trong chuỗi!`);
}
