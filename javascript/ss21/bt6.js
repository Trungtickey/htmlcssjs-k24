let num = parseInt(prompt("Nhập vào một số nguyên bất kì:"));

while (isNaN(num) || num <= 0){
    alert("Vui lòng nhập một số nguyên dương hợp lệ!");
    num = parseInt(prompt("Nhập vào một số nguyên bất kì:"));
}

let result = "Các ước số của " + num + " là: ";

for(let i = 1; i <= num; i++){
    if(num % i === 0){
        result += i + " ";
    }
}

alert(result);
console.log(result);