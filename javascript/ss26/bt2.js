function filterLongWords(arr){
    if(!Array.isArray(arr)){
        console.log("Dữ liệu nhập vào không hợp lệ");
    }
    if(arr.length === 0){
        console.log("Mảng không có phẩn tử nào");
    }

    let result = arr.filter(word => typeof word === "string" && word.length > 5);
    return result;
}

console.log(filterLongWords(["apple", "banana", "cat", "elephant", "dog"])); 
console.log(filterLongWords([])); 
console.log(filterLongWords("abc")); 