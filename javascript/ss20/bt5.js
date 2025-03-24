let a = parseInt(prompt("Nhập vào số A:"));
let b = parseInt(prompt("Nhập vào số B:"));

while (isNaN(a) || isNaN(b) || b < 0) {
    alert("Vui lòng nhập số nguyên hợp lệ! (B phải ≥ 0)");
    a = parseInt(prompt("Nhập vào số A:"));
    b = parseInt(prompt("Nhập vào số B:"));
}

let result = 1;
for (let i = 0; i < b; i++) {
    result *= a;
}

alert(a + " ^ " + b + " = " + result);
