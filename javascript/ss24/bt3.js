let menuString = `
    ================== MENU ===================

    1.Nhập mảng số nguyên
    2.Hiện thị mảng
    3.Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
    4.Tính tổng và trung bình cộng các số nguyên dương trong mảng
    5.Đảo ngược mảng
    6.Kiểm tra mảng có đối xứng không
    7.Thoát chương trình
 	============================================
`
let choice = null;
do{
    console.log("menu", menuString);
    choice = Number(prompt("Nhập lựa chọn của bạn: "));
    alert("Bạn vừa chọn yêu cầu số " + choice);
    switch(choice){
        case 1:
            myArray = [];
            let num  = Number(prompt("Nhập số lượng phần tử: "));
            if(isNaN(+num)){
                alert("Bạn phải nhập số");
                break;
            }

            for(let i = 1; i <= num; i++){
                let value = +prompt("Nhập phần tử thứ " + i);
                myArray.push(value);
            }
        case 2:
            console.log("Mảng đang quản lí là: ", myArray);
            break;
        case 3: 
            let maxNumber = myArray[0];
            for(let i = 0; i < myArray.length; i++){
                if(myArray[i] > maxNumber){
                    maxNumber = myArray[i];
                }
            }
            console.log("Phần tử lớn nhất là: ", maxNumber);
            break;
        case 4:
            let total = 0;
            let count = 0;
            for(let i = 0; i < myArray.length; i++){
                if(myArray[i] > 0){
                    total += myArray[i];
                    count++;
                }
            }
            let avg = count > 0 ? (total/count).toFixed(2) : "Không có số dương";
            console.log("Tổng của số dương là " + total + " TBC là " + avg);     
        }
        break;
            function daoNguocMang() {
                if (arr.length === 0) {
                    document.getElementById("ketQua").innerText = "Mảng rỗng!";
                    return;
                }
                arr.reverse();
                document.getElementById("mang").innerText = arr.join(", ");
                document.getElementById("ketQua").innerText = "Mảng sau khi đảo ngược: " + arr.join(", ");
            }
            function kiemTraDoiXung() {
                if (arr.length === 0) {
                    document.getElementById("ketQua").innerText = "Mảng rỗng!";
                    return;
                }
                let isSymmetric = true;
                for (let i = 0; i < Math.floor(arr.length / 2); i++) {
                    if (arr[i] !== arr[arr.length - 1 - i]) {
                        isSymmetric = false;
                        break;
                    }
                }
                document.getElementById("ketQua").innerText = isSymmetric ? "Mảng đối xứng" : "Mảng không đối xứng";
            }


} while(choice != 0)