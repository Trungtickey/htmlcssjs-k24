let num = prompt("Mời nhập sôs năm kinh nghiệm");

num = parseFloat(num);

if(1 > num){
    alert("Mới vào nghề");
} else if(1 <= num && num <= 3){
    alert("Nhân viên có kinh nghiệm");
} else if(4 <= num && num <= 6){
    alert("Chuyên viên");
} else {
    alert("Quản lý");
}