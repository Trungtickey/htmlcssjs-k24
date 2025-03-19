const exchangeRate = 23000;

let choice = parseInt(prompt("Bạn muốn đổi tiền theo mệnh giá nào? Nhập '1' nếu muốn đổi từ USD sang VND, nhập '2' nếu muốn đổi từ VND sang USD:"));

if (choice === "1") {
    let vnd = parseFloat(prompt("Nhập số tiền VND:"));
    if (!isNaN(vnd) && vnd >= 0) {
        let usd = vnd / exchangeRate;
        alert(`${vnd.toLocaleString()} VND = ${usd.toFixed(2)} USD`);
    } else {
        alert("Vui lòng nhập số tiền hợp lệ!");
    }
} else if (choice === "2") {
    let usd = parseFloat(prompt("Nhập số tiền USD:"));
    if (!isNaN(usd) && usd >= 0) {
        let vnd = usd * exchangeRate;
        alert(`${usd.toFixed(2)} USD = ${vnd.toLocaleString()} VND`);
    } else {
        alert("Vui lòng nhập số tiền hợp lệ!");
    }
} else {
    alert("Lựa chọn không hợp lệ! Vui lòng nhập '1' hoặc '2'.");
}