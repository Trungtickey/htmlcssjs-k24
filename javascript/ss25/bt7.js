function vietHoaChuCaiDau(str) {
    return str.split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" "); 
}
let inputString = prompt("Nhập vào chuỗi:");
let chuoiVietHa = vietHoaChuCaiDau(inputString);

alert("Chuỗi sau khi chuyển đổi: " + chuoiVietHa);
