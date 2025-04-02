function cong(a, b) {
    return a + b;
}

function tru(a, b) {
    return a - b;
}

function nhan(a, b) {
    return a * b;
}

function chia(a, b) {
    if (b === 0) {
        return "Không thể chia cho 0";
    }
    return a / b;
}
function showMenu() {
    console.log("\nMENU TÍNH TOÁN");
    console.log("1. Cộng hai số");
    console.log("2. Trừ hai số");
    console.log("3. Nhân hai số");
    console.log("4. Chia hai số");
    console.log("5. Thoát");
}
function main() {
    let choice;
    let a, b;
    
    do {
        showMenu();
        choice = prompt("Nhập lựa chọn của bạn (1-5):");
        
        if (choice === "5") {
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        }
        if (choice >= "1" && choice <= "4") {
            a = parseFloat(prompt("Nhập số thứ nhất:"));
            b = parseFloat(prompt("Nhập số thứ hai:"));
        }
        
        switch (choice) {
            case "1":
                console.log(`Kết quả: ${a} + ${b} = ${cong(a, b)}`);
                break;
            case "2":
                console.log(`Kết quả: ${a} - ${b} = ${tru(a, b)}`);
                break;
            case "3":
                console.log(`Kết quả: ${a} * ${b} = ${nhan(a, b)}`);
                break;
            case "4":
                console.log(`Kết quả: ${a} / ${b} = ${chia(a, b)}`);
                break;
            case "5":
                console.log("Đã thoát khỏi chương trình");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 5.");
        }
    } while (choice !== "5");
}
main();