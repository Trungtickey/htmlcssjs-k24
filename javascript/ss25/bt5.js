function count(arr){
    if(arr.length == 0){
        console.log("Mảng rỗng");
        return;
    }
    let count = 0;
    for(let value of arr){
        if(value > 0);{
            count++;   
        }
    }
       console.log(count);
       return count;
}

let arr = [2, 4, 6, 8, 10];
count(arr);