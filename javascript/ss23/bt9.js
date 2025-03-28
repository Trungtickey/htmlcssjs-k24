let menuString = `
    ================== MENU ===================

    1.Nhập số phần tử cần nhập và giá trị các phần tử
    2.In ra giá trị các phần tử đang quản lý
    3.In ra giá trị các phần tử chẵn và tính tổng
    4.In ra giá trị lớn nhất và nhỏ nhất trong mảng
    5.In ra các phần tử là số nguyên tố trong mảng và tính tổng
    6.Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
    7.Thêm một phần từ vào vị trí chỉ định
    0.Thoát
 	============================================
`


let choice = null;
let myArray = [1,2,3,4,5,6];
do {
    console.log("menu", menuString)
    choice = Number(prompt("Nhập lựa chọn của bạn: ", 0))
    alert("Bạn vừa chọn yêu cầu số " + choice)
    switch (choice) {
        case 1:
            myArray = []
            let slpt = Number(prompt("Nhập số lượng phần tử: ", 3))
            if (isNaN(+slpt)) {
                alert("bạn phải nhập số")
                break;
            }

            for (let i = 1; i <= slpt; i ++) {
                let value = +prompt(`Nhập phần tử thứ ${i}`)
                myArray.push(value)
            }
        case 2:
            console.log("Array dang quản lý là ", myArray)
            break
        case 3:
            let total = 0;
            for(let i = 0; i < myArray.length; i++) {
                if (myArray[i] % 2 == 0) {
                    console.log("Phần tử chẵn là ", myArray[i])
                    total += myArray[i]
                }
            }
            console.log("Tổng giá trị của các phần tử chẵn có trong Array là: ", total)
            break
        case 4:
            let minNumber = myArray[0];
            let maxNumber = myArray[0];
            for(let i = 0; i < myArray.length; i++) {
                if (myArray[i] < minNumber) {
                    minNumber = myArray[i]
                }
                if (myArray[i] > maxNumber) {
                    maxNumber = myArray[i]
                }
            }
            console.log("giá trị min là: ", minNumber)
            console.log("giá trị max là: ", maxNumber)
            break
        case 5:
            let totalNguyenTo = 0;
            for(let i = 0; i < myArray.length; i++) {
                if(checkSoNguyenTo(myArray[i])) {
                    console.log("so nguyen to la: ", myArray[i])
                    totalNguyenTo += myArray[i]
                }
            }
            console.log("tổng số nguyên tố là: ", totalNguyenTo)
            break
        case 6:
            let numberSelect = +prompt("nhập số bạn thích")

            let totalRepeat = 0;
            for(let i = 0; i < myArray.length; i++) {
                if (myArray[i] == numberSelect) {
                    totalRepeat++;
                }
            }
            console.log("số lần xuất hiện trong array của ", numberSelect, " là: ", totalRepeat)
            break
        default:
            break;
    }
    alert("Hoàn tất xử lý yêu cầu số " + choice)

}while(choice != 0)


function checkSoNguyenTo(targetNumber) {
    if (isNaN(+targetNumber)) return false
    if (targetNumber < 2) return false

    for (let i = 2; i < targetNumber; i++) {
        if (targetNumber % i == 0) {
            return false
        }
    }

    return true
}