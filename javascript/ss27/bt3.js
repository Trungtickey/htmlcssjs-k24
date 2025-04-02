function tinhDienTichHinhTron(banKinh) {
    return Math.PI * banKinh * banKinh;
  }
  
  function tinhChuViHinhTron(banKinh) {
    return 2 * Math.PI * banKinh;
  }
  
  function tinhDienTichHinhChuNhat(chieuDai, chieuRong) {
    return chieuDai * chieuRong;
  }
  
  function tinhChuViHinhChuNhat(chieuDai, chieuRong) {
    return 2 * (chieuDai + chieuRong);
  }
  
  function hienThiMenu() {
    console.log(`
    MENU TÍNH TOÁN HÌNH HỌC
    1. Tính diện tích hình tròn
    2. Tính chu vi hình tròn
    3. Tính diện tích hình chữ nhật
    4. Tính chu vi hình chữ nhật
    5. Thoát
    `);
  }

  function main() {
    let luaChon;
    
    do {
      hienThiMenu();
      luaChon = prompt("Nhập lựa chọn của bạn (1-5):");
      
      switch (luaChon) {
        case "1":
          const banKinh1 = parseFloat(prompt("Nhập bán kính hình tròn:"));
          if (!isNaN(banKinh1) && banKinh1 > 0) {
            console.log(`Diện tích hình tròn: ${tinhDienTichHinhTron(banKinh1).toFixed(2)}`);
          } else {
            console.log("Bán kính không hợp lệ!");
          }
          break;
          
        case "2":
          const banKinh2 = parseFloat(prompt("Nhập bán kính hình tròn:"));
          if (!isNaN(banKinh2) && banKinh2 > 0) {
            console.log(`Chu vi hình tròn: ${tinhChuViHinhTron(banKinh2).toFixed(2)}`);
          } else {
            console.log("Bán kính không hợp lệ!");
          }
          break;
          
        case "3":
          const chieuDai3 = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
          const chieuRong3 = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
          if (!isNaN(chieuDai3) && !isNaN(chieuRong3) && chieuDai3 > 0 && chieuRong3 > 0) {
            console.log(`Diện tích hình chữ nhật: ${tinhDienTichHinhChuNhat(chieuDai3, chieuRong3).toFixed(2)}`);
          } else {
            console.log("Chiều dài/chiều rộng không hợp lệ!");
          }
          break;
          
        case "4":
          const chieuDai4 = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
          const chieuRong4 = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
          if (!isNaN(chieuDai4) && !isNaN(chieuRong4) && chieuDai4 > 0 && chieuRong4 > 0) {
            console.log(`Chu vi hình chữ nhật: ${tinhChuViHinhChuNhat(chieuDai4, chieuRong4).toFixed(2)}`);
          } else {
            console.log("Chiều dài/chiều rộng không hợp lệ!");
          }
          break;
          
        case "5":
          console.log("Cảm ơn bạn đã sử dụng chương trình!");
          break;
          
        default:
          console.log("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 5.");
      }
    } while (luaChon !== "5");
  }
  main();