let P = parseFloat(prompt("Nhập số tiền gửi ban đầu:"));
let r = parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100;
let n = parseInt(prompt("Nhập số tháng gửi:"));

while (isNaN(P) || P <= 0 || isNaN(r) || r < 0 || isNaN(n) || n <= 0) {
    alert("Vui lòng nhập số hợp lệ!");
    P = parseFloat(prompt("Nhập số tiền gửi ban đầu:"));
    r = parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100;
    n = parseInt(prompt("Nhập số tháng gửi:"));
}
let A = P * Math.pow(1 + r, n); // Tính tổng tiền nhận được sau n tháng (lãi nhập gốc)
// Tính tiền lãi
let interest = A - P;
alert(`Tiền lãi: ${interest.toFixed(3)}\nTiền nhận được: ${A.toFixed(3)}`);
console.log(`Tiền lãi: ${interest.toFixed(3)}`);
console.log(`Tiền nhận được: ${A.toFixed(3)}`);
