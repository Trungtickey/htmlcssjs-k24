let countEven = 0;
let countOdd = 0;

for(let i = 1; i <= 5; i++){
    let num = prompt("Nhập vào số thứ " + i + ":");

    if(isNaN(num) || num.includes(".") || num.trim() === ""){
        alert("Số nhập vào không hợp lệ, Vui lòng nhập lại!");
    }
    num = parseInt(num);
    if(num % 2 === 0){
        countEven++;
    }  else {
        countOdd++;
    }
}

alert("Sổ lượng chẵn: " + countEven + "\nSố lượng lẻ: " + countOdd);