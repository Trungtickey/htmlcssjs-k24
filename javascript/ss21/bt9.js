let num = parseInt(prompt("Nhập vàp 1 số nguyên bất kì: "));

if(isNaN(num) || num < 1){
    alert("Số nhập vào không hợp lệ! Vui lòng nhập lại 1 số nguyên dương bất kì.");
} else {
    let isPrime = num > i; // Giả định ban đầu là số nguyên tố
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
    alert(num + " là số nguyên tố!");
    } else {
    alert(num + " không phải là số nguyên tố!");
    }

}