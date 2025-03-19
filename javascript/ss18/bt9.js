let hours = parseInt(prompt("Nhập giờ (0-23):"));
let minutes = parseInt(prompt("Nhập phút (0-59):"));
let seconds = parseInt(prompt("Nhập giây (0-59):"));
if (
    isNaN(hours) || isNaN(minutes) || isNaN(seconds) ||
    hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59
) {
    alert("Giá trị nhập không hợp lệ!");
} else {
    // Xác định AM hoặc PM
    let period = hours >= 12 ? "PM" : "AM";
    // Chuyển đổi sang định dạng 12 giờ
    let hour12 = hours % 12;
    hour12 = hour12 === 0 ? 12 : hour12; // Nếu là 0 giờ thì đổi thành 12
    // Định dạng thành chuỗi hh:mm:ss AM/PM
    let formattedTime = `${hour12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${period}`;
    
    alert(`Thời gian theo định dạng 12 giờ: ${formattedTime}`);
}
