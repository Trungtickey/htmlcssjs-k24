let math = prompt("Nhập điểm môn Toán:");
let literature = prompt("Nhập điểm môn Văn:");
let english = prompt("Nhập điểm môn Toán:");

var sum = (parseFloat(math) + parseFloat(literature) + parseFloat(english)) / 3;

if(sum >= 8){
    alert("Học sinh giỏi");
} else if(7.9 >= sum && sum >= 6.5){
    alert("Học sinh khá");
} else if(6.4 >= sum && sum >= 5.0){
    alert("Học sinh trung bình");
} else{
    alert("Học sinh yếu");
} 