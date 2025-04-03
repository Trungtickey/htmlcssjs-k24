// Mảng lưu trữ sản phẩm
let products = [
    { id: 1, name: "iPhone 13", price: 20000000, category: "Điện thoại", quantity: 10 },
    { id: 2, name: "MacBook Air", price: 25000000, category: "Laptop", quantity: 5 },
    { id: 3, name: "AirPods Pro", price: 5000000, category: "Phụ kiện", quantity: 20 }
];

// Hàm tạo ID mới
function generateId() {
    return products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
}

// 1. Thêm sản phẩm mới
function addProduct(name, price, category, quantity) {
    const newProduct = {
        id: generateId(),
        name,
        price,
        category,
        quantity
    };
    products.push(newProduct);
    console.log("Đã thêm sản phẩm thành công!");
}

// 2. Hiển thị tất cả sản phẩm
function displayAllProducts() {
    console.log("Danh sách sản phẩm:");
    products.forEach(product => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}đ, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);
    });
}

// 3. Hiển thị chi tiết sản phẩm theo ID
function displayProductById(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        console.log("Chi tiết sản phẩm:");
        console.log(`ID: ${product.id}`);
        console.log(`Tên: ${product.name}`);
        console.log(`Giá: ${product.price}đ`);
        console.log(`Danh mục: ${product.category}`);
        console.log(`Số lượng: ${product.quantity}`);
    } else {
        console.log("Không tìm thấy sản phẩm với ID này!");
    }
}

// 4. Cập nhật sản phẩm
function updateProduct(id, newName, newPrice, newCategory, newQuantity) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = {
            ...products[index],
            name: newName || products[index].name,
            price: newPrice || products[index].price,
            category: newCategory || products[index].category,
            quantity: newQuantity || products[index].quantity
        };
        console.log("Cập nhật sản phẩm thành công!");
    } else {
        console.log("Không tìm thấy sản phẩm để cập nhật!");
    }
}

// 5. Xóa sản phẩm
function deleteProduct(id) {
    const initialLength = products.length;
    products = products.filter(p => p.id !== id);
    if (products.length < initialLength) {
        console.log("Đã xóa sản phẩm thành công!");
    } else {
        console.log("Không tìm thấy sản phẩm để xóa!");
    }
}

// 6. Lọc sản phẩm theo khoảng giá
function filterProductsByPrice(minPrice, maxPrice) {
    const filtered = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
    if (filtered.length > 0) {
        console.log(`Sản phẩm trong khoảng giá ${minPrice}đ - ${maxPrice}đ:`);
        filtered.forEach(product => {
            console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}đ`);
        });
    } else {
        console.log("Không có sản phẩm nào trong khoảng giá này!");
    }
}

// Ví dụ sử dụng các chức năng
console.log("=== THÊM SẢN PHẨM MỚI ===");
addProduct("iPad Pro", 18000000, "Tablet", 8);

console.log("\n=== HIỂN THỊ TẤT CẢ SẢN PHẨM ===");
displayAllProducts();

console.log("\n=== HIỂN THỊ CHI TIẾT SẢN PHẨM ===");
displayProductById(2);

console.log("\n=== CẬP NHẬT SẢN PHẨM ===");
updateProduct(1, "iPhone 13 Pro", 22000000, null, 15);

console.log("\n=== LỌC SẢN PHẨM THEO GIÁ ===");
filterProductsByPrice(5000000, 20000000);

console.log("\n=== XÓA SẢN PHẨM ===");
deleteProduct(3);

console.log("\n=== DANH SÁCH SAU KHI CẬP NHẬT ===");
displayAllProducts();