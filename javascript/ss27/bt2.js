let danhSachSinhVien = [];

function nhapDanhSach() {
  const soLuong = parseInt(prompt("Nhập số lượng sinh viên:"));
  
  if (isNaN(soLuong) || soLuong <= 0) {
    alert("Số lượng sinh viên không hợp lệ!");
    return;
  }
  
  danhSachSinhVien = []; 
  
  for (let i = 0; i < soLuong; i++) {
    const ten = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
    if (ten) {
      danhSachSinhVien.push(ten.trim());
    } else {
      alert("Tên sinh viên không được để trống!");
      i--; 
    }
  }
  
  alert(`Đã nhập thành công ${danhSachSinhVien.length} sinh viên.`);
}

function hienThiDanhSach() {
  if (danhSachSinhVien.length === 0) {
    alert("Danh sách sinh viên đang trống!");
    return;
  }
  
  let danhSach = "DANH SÁCH SINH VIÊN:\n";
  danhSachSinhVien.forEach((sv, index) => {
    danhSach += `${index + 1}. ${sv}\n`;
  });
  
  alert(danhSach);
}

function timSinhVien() {
  const tenCanTim = prompt("Nhập tên sinh viên cần tìm:");
  if (!tenCanTim) return;
  
  const ketQua = danhSachSinhVien.filter(sv => 
    sv.toLowerCase().includes(tenCanTim.toLowerCase())
  );
  
  if (ketQua.length > 0) {
    alert("Kết quả tìm kiếm:\n" + ketQua.join("\n"));
  } else {
    alert(`Không tìm thấy sinh viên có tên chứa "${tenCanTim}"`);
  }
}
function xoaSinhVien() {
  const tenCanXoa = prompt("Nhập tên sinh viên cần xóa:");
  if (!tenCanXoa) return;
  
  const index = danhSachSinhVien.findIndex(sv => 
    sv.toLowerCase() === tenCanXoa.toLowerCase()
  );
  
  if (index !== -1) {
    const svXoa = danhSachSinhVien.splice(index, 1)[0];
    alert(`Đã xóa sinh viên: ${svXoa}`);
  } else {
    alert(`Không tìm thấy sinh viên "${tenCanXoa}" để xóa`);
  }
}

function hienThiMenu() {
  const menu = `
  MENU QUẢN LÝ SINH VIÊN
  1. Nhập danh sách sinh viên
  2. Hiển thị danh sách sinh viên
  3. Tìm sinh viên theo tên
  4. Xóa sinh viên khỏi danh sách
  5. Thoát
  Chọn chức năng (1-5):`;
  return prompt(menu);
}

function main() {
  let luaChon;
  
  do {
    luaChon = hienThiMenu();
    
    switch (luaChon) {
      case "1":
        nhapDanhSach();
        break;
      case "2":
        hienThiDanhSach();
        break;
      case "3":
        timSinhVien();
        break;
      case "4":
        xoaSinhVien();
        break;
      case "5":
        alert("Cảm ơn bạn đã sử dụng chương trình!");
        break;
      default:
        alert("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 5.");
    }
  } while (luaChon !== "5");
}
main();