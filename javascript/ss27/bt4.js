let danhSachSo = [];
function nhapDanhSach() {
  const input = prompt("Nhập các số nguyên, cách nhau bằng dấu phẩy:");
  if (!input) return;
  danhSachSo = input.split(',')
    .map(item => parseInt(item.trim()))
    .filter(item => !isNaN(item));
  
  console.log(`Đã nhập ${danhSachSo.length} số nguyên.`);
}

function tinhTrungBinh() {
  if (danhSachSo.length === 0) {
    console.log("Danh sách số đang trống!");
    return;
  }
  
  const sum = danhSachSo.reduce((a, b) => a + b, 0);
  const avg = sum / danhSachSo.length;
  console.log(`Trung bình các số: ${avg.toFixed(2)}`);
}

function timSoChanLonNhat() {
  const soChan = danhSachSo.filter(num => num % 2 === 0);
  
  if (soChan.length === 0) {
    console.log("Không có số chẵn nào trong danh sách!");
    return;
  }
  
  const maxChan = Math.max(...soChan);
  console.log(`Số chẵn lớn nhất: ${maxChan}`);
}

function timSoLeNhoNhat() {
  const soLe = danhSachSo.filter(num => num % 2 !== 0);
  
  if (soLe.length === 0) {
    console.log("Không có số lẻ nào trong danh sách!");
    return;
  }
  
  const minLe = Math.min(...soLe);
  console.log(`Số lẻ nhỏ nhất: ${minLe}`);
}

function hienThiMenu() {
  console.log(`
  MENU XỬ LÝ SỐ NGUYÊN
  1. Nhập danh sách số nguyên
  2. Tính trung bình các số
  3. Tìm số chẵn lớn nhất
  4. Tìm số lẻ nhỏ nhất
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
        nhapDanhSach();
        break;
      case "2":
        tinhTrungBinh();
        break;
      case "3":
        timSoChanLonNhat();
        break;
      case "4":
        timSoLeNhoNhat();
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