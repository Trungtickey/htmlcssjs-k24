let arr = [];

while (true){
    console.log("\n================== MENU ===================");
    console.log("1. Nhập số phần tử và giá trị các phần tử");
    console.log("2. In ra giá trị các phần tử đang quản lý");
    console.log("3. In ra giá trị các phần tử chẵn và tính tổng");
    console.log("4. In ra giá trị lớn nhất và nhỏ nhất trong mảng");
    console.log("5. In ra các phần tử là số nguyên tố trong mảng và tính tổng");
    console.log("6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó");
    console.log("7. Thêm một phần tử vào vị trí chỉ định");
    console.log("8. Thoát");
    console.log("============================================");
    let choice = parseInt(prompt("Nhập lựa chọn của bạn:"));

    switch(choice){
        case 1:{
            let n = parseInt(prompt("Nhập số phần tử của mảng:"));
            if(n <= 0){
                console.log("Số phần tử phải lớn hơn 0!");
            } else {
                arr = [];
                for(let i = 0; i < n; i++){
                    arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
                }
            }
        }
    }
}