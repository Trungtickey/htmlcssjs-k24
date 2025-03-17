function convertCurrency() {
    var usd = parseFloat(document.getElementById("usd").value);

    if (isNaN(usd) || usd <= 0) {
        alert("Vui lòng nhập số tiền hợp lệ!");
        return;
    }
    // Tỷ giá USD sang VND
    var rate = 25000;
    // Tính số tiền VND
    var vnd = usd * rate;
    document.getElementById("result").innerHTML = 
    "<strong>Số tiền VND:</strong> " + vnd.toLocaleString() + " đ";
}