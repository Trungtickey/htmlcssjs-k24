let books = [
  { id: 1, name: "Sách Toán", price: 100, quantity: 10, category: "Giáo Khoa" },
  { id: 2, name: "Sách Văn", price: 120, quantity: 5, category: "Giáo Khoa" },
  { id: 3, name: "Truyện Tranh A", price: 80, quantity: 20, category: "Truyện Tranh" },
  { id: 4, name: "Sách Kỹ Năng", price: 150, quantity: 7, category: "Kỹ Năng" },
];

let cart = [];
function displayBooksByCategory() {
  let category = readlineSync.question("Nhap ten the loai sach: ");
  let filtered = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
  if (filtered.length === 0) {
    console.log("Khong tim thay sach thuoc the loai nay.");
  } else {
    console.log("Danh sach sach thuoc the loai " + category + ":");
    filtered.forEach(book => console.log(book));
  }
}

function addBook() {
  let id = parseInt(readlineSync.question("Nhap ID sach: "));
  let name = readlineSync.question("Nhap ten sach: ");
  let price = parseFloat(readlineSync.question("Nhap gia sach: "));
  let quantity = parseInt(readlineSync.question("Nhap so luong: "));
  let category = readlineSync.question("Nhap the loai: ");
  books.push({ id, name, price, quantity, category });
  console.log("Da them sach thanh cong!");
}

function searchBook() {
  let keyword = readlineSync.question("Nhap ten hoac ID sach can tim: ");
  let found = books.filter(book =>
    book.name.toLowerCase().includes(keyword.toLowerCase()) || book.id == keyword
  );
  if (found.length === 0) {
    console.log("Khong tim thay sach.");
  } else {
    console.log("Ket qua tim kiem:");
    found.forEach(book => console.log(book));
  }
}

function buyBook() {
  let id = parseInt(readlineSync.question("Nhap ID sach muon mua: "));
  let book = books.find(b => b.id === id);
  if (!book) {
    console.log("Khong tim thay sach.");
    return;
  }

  let quantity = parseInt(readlineSync.question("Nhap so luong muon mua: "));
  if (quantity > book.quantity) {
    console.log("Khong du sach trong kho.");
    return;
  }

  book.quantity -= quantity;

  let cartItem = cart.find(item => item.id === book.id);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({
      id: book.id,
      name: book.name,
      price: book.price,
      quantity: quantity
    });
  }
  console.log("Da them vao gio hang.");
}
function sortBooksByPrice(ascending = true) {
  let sorted = [...books].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
  console.log("Danh sach sach da sap xep:");
  sorted.forEach(book => console.log(book));
}
function displayCartSummary() {
  let totalQuantity = 0;
  let totalPrice = 0;
  console.log("Danh sach sach trong gio hang:");
  cart.forEach(item => {
    console.log(item);
    totalQuantity += item.quantity;
    totalPrice += item.quantity * item.price;
  });
  console.log("Tong so luong da mua:", totalQuantity);
  console.log("Tong tien:", totalPrice);
}
function totalBooksInStock() {
  let total = books.reduce((sum, book) => sum + book.quantity, 0);
  console.log("Tong so luong sach trong kho:", total);
}
function main() {
  while (true) {
    console.log("\n=== CHUONG TRINH QUAN LY SACH ===");
    console.log("1. Hien thi sach theo the loai");
    console.log("2. Them sach moi");
    console.log("3. Tim sach theo ten hoac id");
    console.log("4. Mua sach");
    console.log("5. Sap xep sach theo gia tang dan");
    console.log("6. Sap xep sach theo gia giam dan");
    console.log("7. Xem gio hang va tinh tong tien");
    console.log("8. Tong so luong sach trong kho");
    console.log("9. Thoat");

    let choice = readlineSync.question("Chon chuc nang: ");

    switch (choice) {
      case "1": displayBooksByCategory(); break;
      case "2": addBook(); break;
      case "3": searchBook(); break;
      case "4": buyBook(); break;
      case "5": sortBooksByPrice(true); break;
      case "6": sortBooksByPrice(false); break;
      case "7": displayCartSummary(); break;
      case "8": totalBooksInStock(); break;
      case "9":
        console.log("Thoat chuong trinh.");
        return;
      default:
        console.log("Lua chon khong hop le.");
    }
  }
}

main();
