function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join(""); 
    return str === reversedStr; 
}
let inputString = prompt("Nhập vào chuỗi cần kiểm tra:");
if (isPalindrome(inputString)) {
    alert(inputString + " là chuỗi đối xứng");
} else {
    alert(inputString + " không phải chuỗi đối xứng");
}
