let products = [
    { id: 1, name: "iPhone 13", price: 20000000, category: "Điện thoại", quantity: 10 },
    { id: 2, name: "MacBook Air", price: 25000000, category: "Laptop", quantity: 5 },
    { id: 3, name: "AirPods Pro", price: 5000000, category: "Phụ kiện", quantity: 20 }
];

// Hàm tạo ID mới
function generateId() {
    return products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
}
function addProduct() {
    const name = prompt("Nhập tên sản phẩm:");
    const price = parseFloat(prompt("Nhập giá sản phẩm:"));
    const category = prompt("Nhập danh mục sản phẩm:");
    const quantity = parseInt(prompt("Nhập số lượng sản phẩm:"));
    
    if (name && !isNaN(price) && category && !isNaN(quantity)) {
        const newProduct = {
            id: generateId(),
            name,
            price,
            category,
            quantity
        };
        products.push(newProduct);
        alert("Đã thêm sản phẩm thành công!");
    } else {
        alert("Thông tin nhập không hợp lệ!");
    }
    showMenu();
}
function displayAllProducts() {
    let message = "DANH SÁCH SẢN PHẨM:\n\n";
    products.forEach(product => {
        message += `ID: ${product.id}\nTên: ${product.name}\nGiá: ${product.price}đ\nDanh mục: ${product.category}\nSố lượng: ${product.quantity}\n\n`;
    });
    alert(message);
    showMenu();
}
function displayProductById() {
    const id = parseInt(prompt("Nhập ID sản phẩm cần xem:"));
    const product = products.find(p => p.id === id);
    
    if (product) {
        alert(`CHI TIẾT SẢN PHẨM:\n\nID: ${product.id}\nTên: ${product.name}\nGiá: ${product.price}đ\nDanh mục: ${product.category}\nSố lượng: ${product.quantity}`);
    } else {
        alert("Không tìm thấy sản phẩm với ID này!");
    }
    showMenu();
}
function updateProduct() {
    const id = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"));
    const product = products.find(p => p.id === id);
    
    if (product) {
        const newName = prompt(`Tên hiện tại: ${product.name}\nNhập tên mới (bỏ trống nếu không đổi):`, product.name);
        const newPrice = prompt(`Giá hiện tại: ${product.price}\nNhập giá mới (bỏ trống nếu không đổi):`, product.price);
        const newCategory = prompt(`Danh mục hiện tại: ${product.category}\nNhập danh mục mới (bỏ trống nếu không đổi):`, product.category);
        const newQuantity = prompt(`Số lượng hiện tại: ${product.quantity}\nNhập số lượng mới (bỏ trống nếu không đổi):`, product.quantity);
        
        product.name = newName || product.name;
        product.price = newPrice ? parseFloat(newPrice) : product.price;
        product.category = newCategory || product.category;
        product.quantity = newQuantity ? parseInt(newQuantity) : product.quantity;
        
        alert("Cập nhật sản phẩm thành công!");
    } else {
        alert("Không tìm thấy sản phẩm với ID này!");
    }
    showMenu();
}
function deleteProduct() {
    const id = parseInt(prompt("Nhập ID sản phẩm cần xóa:"));
    const initialLength = products.length;
    products = products.filter(p => p.id !== id);
    
    if (products.length < initialLength) {
        alert("Đã xóa sản phẩm thành công!");
    } else {
        alert("Không tìm thấy sản phẩm với ID này!");
    }
    showMenu();
}
function filterProductsByPrice() {
    const minPrice = parseFloat(prompt("Nhập giá tối thiểu:"));
    const maxPrice = parseFloat(prompt("Nhập giá tối đa:"));
    
    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
        const filtered = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
        let message = `SẢN PHẨM TRONG KHOẢNG GIÁ ${minPrice}đ - ${maxPrice}đ:\n\n`;
        
        if (filtered.length > 0) {
            filtered.forEach(product => {
                message += `ID: ${product.id}\nTên: ${product.name}\nGiá: ${product.price}đ\nDanh mục: ${product.category}\nSố lượng: ${product.quantity}\n\n`;
            });
        } else {
            message += "Không có sản phẩm nào trong khoảng giá này!";
        }
        alert(message);
    } else {
        alert("Giá nhập vào không hợp lệ!");
    }
    showMenu();
}
function showMenu() {
    const choice = prompt(
        "HỆ THỐNG QUẢN LÝ SẢN PHẨM\n\n" +
        "1. Thêm sản phẩm mới\n" +
        "2. Hiển thị tất cả sản phẩm\n" +
        "3. Xem chi tiết sản phẩm\n" +
        "4. Cập nhật sản phẩm\n" +
        "5. Xóa sản phẩm\n" +
        "6. Lọc sản phẩm theo giá\n" +
        "7. Thoát\n\n" +
        "Nhập lựa chọn của bạn (1-7):"
    );
    
    switch (choice) {
        case "1":
            addProduct();
            break;
        case "2":
            displayAllProducts();
            break;
        case "3":
            displayProductById();
            break;
        case "4":
            updateProduct();
            break;
        case "5":
            deleteProduct();
            break;
        case "6":
            filterProductsByPrice();
            break;
        case "7":
            alert("Cảm ơn bạn đã sử dụng hệ thống!");
            return;
        default:
            alert("Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 7.");
            showMenu();
    }
}
showMenu();