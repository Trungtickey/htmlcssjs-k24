let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "com lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];

let cart = [];
function displayByCategory() {
    const categories = [...new Set(products.map(p => p.category))];
    let message = "Các danh mục sản phẩm:\n";
    
    categories.forEach((category, index) => {
        message += `${index + 1}. ${category}\n`;
    });
    
    const choice = parseInt(prompt(message + "\nChọn danh mục (nhập số):"));
    
    if (choice >= 1 && choice <= categories.length) {
        const selectedCategory = categories[choice - 1];
        const filteredProducts = products.filter(p => p.category === selectedCategory);
        
        let productList = `Sản phẩm trong danh mục "${selectedCategory}":\n`;
        filteredProducts.forEach(p => {
            productList += `ID: ${p.id} - ${p.name} - ${p.price}đ - Còn lại: ${p.quantity}\n`;
        });
        
        alert(productList);
    } else {
        alert("Lựa chọn không hợp lệ!");
    }
    showMenu();
}
function addToCart() {
    const productId = parseInt(prompt("Nhập ID sản phẩm bạn muốn mua:"));
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        alert("Không tìm thấy sản phẩm với ID này!");
        showMenu();
        return;
    }
    
    const quantity = parseInt(prompt(`Nhập số lượng ${product.name} muốn mua (còn ${product.quantity}):`));
    
    if (isNaN(quantity) || quantity <= 0) {
        alert("Số lượng không hợp lệ!");
        showMenu();
        return;
    }
    
    if (quantity > product.quantity) {
        alert(`Không đủ số lượng! Chỉ còn ${product.quantity} sản phẩm.`);
        showMenu();
        return;
    }
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        });
    }
    product.quantity -= quantity;
    
    alert(`Đã thêm ${quantity} ${product.name} vào giỏ hàng!`);
    showMenu();
}
function sortProducts() {
    const choice = prompt("Sắp xếp sản phẩm theo giá:\n1. Tăng dần\n2. Giảm dần\nChọn (1 hoặc 2):");
    
    let sortedProducts = [...products];
    if (choice === "1") {
        sortedProducts.sort((a, b) => a.price - b.price);
        alert("Sản phẩm sắp xếp theo giá tăng dần:");
    } else if (choice === "2") {
        sortedProducts.sort((a, b) => b.price - a.price);
        alert("Sản phẩm sắp xếp theo giá giảm dần:");
    } else {
        alert("Lựa chọn không hợp lệ!");
        showMenu();
        return;
    }
    
    let productList = "";
    sortedProducts.forEach(p => {
        productList += `ID: ${p.id} - ${p.name} - ${p.price}đ - Còn lại: ${p.quantity}\n`;
    });
    
    alert(productList);
    showMenu();
}
function calculateTotal() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        showMenu();
        return;
    }
    
    let total = 0;
    let receipt = "HÓA ĐƠN MUA HÀNG:\n\n";
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        receipt += `${item.name} x ${item.quantity}: ${itemTotal}đ\n`;
        total += itemTotal;
    });
    
    receipt += `\nTỔNG CỘNG: ${total}đ`;
    alert(receipt);
    showMenu();
}
function showMenu() {
    const choice = prompt(
        "CỬA HÀNG ĐẶC SẢN\n\n" +
        "1. Xem sản phẩm theo danh mục\n" +
        "2. Thêm sản phẩm vào giỏ hàng\n" +
        "3. Sắp xếp sản phẩm theo giá\n" +
        "4. Xem hóa đơn\n" +
        "5. Thoát\n\n" +
        "Nhập lựa chọn của bạn (1-5):"
    );
    
    switch (choice) {
        case "1":
            displayByCategory();
            break;
        case "2":
            addToCart();
            break;
        case "3":
            sortProducts();
            break;
        case "4":
            calculateTotal();
            break;
        case "5":
            alert("Cảm ơn bạn đã mua sắm!");
            return;
        default:
            alert("Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 5.");
            showMenu();
    }
}
showMenu();