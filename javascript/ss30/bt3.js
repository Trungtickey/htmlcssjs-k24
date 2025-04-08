let phones = [
  { id: 1, name: "iPhone 13", price: 20000, quantity: 5, company: "Apple" },
  { id: 2, name: "Galaxy S22", price: 18000, quantity: 4, company: "Samsung" },
  { id: 3, name: "Xiaomi Mi 11", price: 12000, quantity: 10, company: "Xiaomi" }
];

let cart = [];
function showPhonesByCompany() {
  let company = readlineSync.question("Nhap ten hang (VD: Samsung, Apple): ");
  let filtered = phones.filter(p => p.company.toLowerCase() === company.toLowerCase());
  if (filtered.length === 0) {
    console.log("Khong tim thay dien thoai thuoc hang " + company);
  } else {
    console.log("Danh sach dien thoai cua hang " + company + ":");
    filtered.forEach(p => console.log(p));
  }
}
function addPhone() {
  let id = parseInt(readlineSync.question("Nhap ID: "));
  let name = readlineSync.question("Nhap ten dien thoai: ");
  let price = parseFloat(readlineSync.question("Nhap gia: "));
  let quantity = parseInt(readlineSync.question("Nhap so luong: "));
  let company = readlineSync.question("Nhap ten hang: ");

  phones.push({ id, name, price, quantity, company });
  console.log("Them dien thoai thanh cong!");
}
function searchPhone() {
  let keyword = readlineSync.question("Nhap ten hoac ID dien thoai can tim: ");
  let found = phones.filter(p =>
    p.name.toLowerCase().includes(keyword.toLowerCase()) || p.id == keyword
  );

  if (found.length === 0) {
    console.log("Khong tim thay dien thoai.");
  } else {
    console.log("Ket qua tim kiem:");
    found.forEach(p => console.log(p));
  }
}
function buyPhone() {
  let id = parseInt(readlineSync.question("Nhap ID dien thoai muon mua: "));
  let phone = phones.find(p => p.id === id);
  if (!phone) {
    console.log("Khong tim thay dien thoai.");
    return;
  }

  let quantity = parseInt(readlineSync.question("Nhap so luong muon mua: "));
  if (quantity > phone.quantity) {
    console.log("Khong du so luong trong kho.");
    return;
  }

  phone.quantity -= quantity;

  let item = cart.find(c => c.id === id);
  if (item) {
    item.quantity += quantity;
  } else {
    cart.push({ id: phone.id, name: phone.name, price: phone.price, quantity });
  }

  console.log("Da them vao gio hang!");
}
function checkout() {
  if (cart.length === 0) {
    console.log("Gio hang trong!");
    return;
  }

  let total = 0;
  cart.forEach(item => total += item.price * item.quantity);

  console.log("Tong tien can thanh toan: " + total);
  console.log("Thanh toan thanh cong!");
  cart = [];
}
function sortPhonesByPrice(ascending = true) {
  let sorted = [...phones].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
  console.log("Danh sach dien thoai sau khi sap xep:");
  sorted.forEach(p => console.log(p));
}
function totalValueInStock() {
  let total = phones.reduce((sum, p) => sum + (p.price * p.quantity), 0);
  console.log("Tong gia tri dien thoai trong kho: " + total);
}
function totalQuantityByCompany() {
  let companyCount = {};
  phones.forEach(p => {
    if (companyCount[p.company]) {
      companyCount[p.company] += p.quantity;
    } else {
      companyCount[p.company] = p.quantity;
    }
  });

  console.log("Tong so luong dien thoai theo tung hang:");
  for (let company in companyCount) {
    console.log(`${company} - ${companyCount[company]}`);
  }
}
function main() {
  while (true) {
    console.log("\n=== QUAN LY CUA HANG DIEN THOAI ===");
    console.log("1. Hien thi dien thoai theo hang");
    console.log("2. Them dien thoai moi");
    console.log("3. Tim kiem dien thoai");
    console.log("4. Mua dien thoai");
    console.log("5. Thanh toan gio hang");
    console.log("6. Sap xep dien thoai theo gia tang dan");
    console.log("7. Sap xep dien thoai theo gia giam dan");
    console.log("8. Tong gia tri dien thoai trong kho");
    console.log("9. Tong so luong theo tung hang");
    console.log("10. Thoat");

    let choice = readlineSync.question("Chon chuc nang: ");
    switch (choice) {
      case "1": showPhonesByCompany(); break;
      case "2": addPhone(); break;
      case "3": searchPhone(); break;
      case "4": buyPhone(); break;
      case "5": checkout(); break;
      case "6": sortPhonesByPrice(true); break;
      case "7": sortPhonesByPrice(false); break;
      case "8": totalValueInStock(); break;
      case "9": totalQuantityByCompany(); break;
      case "10":
        console.log("Cam on da su dung chuong trinh.");
        return;
      default:
        console.log("Lua chon khong hop le.");
    }
  }
}

main();
