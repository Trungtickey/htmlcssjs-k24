let sumOdd = 0;
for(let i = 1; i <= 5; i++){
    let num;

    do{
       num = prompt("Nhập số nguyên thứ " + i + ":");

       if(isNaN(num) || num.includes(".") || num.trim() === ""){
        alert("Số nhập vào không hợp lệ, vui lòng nhập lại!");
       }
    } while(isNaN(num) || num.includes(".") || num.trim() === "");

    num = parseInt(num); 

    if(num % 2 !== 0){
        sumOdd += num;
    }
}

alert("Tổng các số lẻ là: " + sumOdd);