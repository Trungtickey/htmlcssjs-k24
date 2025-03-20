let n = parseInt(prompt("Nhập vào 1 số nguyên dương bất kì"));
do{
    if(isNaN(n) || n <= 0){
        alert("Nhập n không đúng vui lòng nhập lại");
    } 

} while (isNaN(n) || n <= 0);
    let sum = 0;

    for(let i = 1; i <= n; i++){
        sum += i;
    }


alert("Tổng các số từ 1 đến " + n + " là: " + sum);