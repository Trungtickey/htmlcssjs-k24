let n = parseInt(prompt("Nhập vào số nguyên dương bất kì: "));
if(isNaN(n) || n <= 0){
    alert("Vui lòng nhập một số nguyên dương hợp lệ");
} else {
    let count = 0;
    let num = 2;
    let result = "";

    while(count < n){
        let isPrime = true;
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            result += num + " ";
            count++;
        }        
        num++;
    }
    alert("Danh sách " + n + " số nguyên tố đầu tiên:\n" + result);
}