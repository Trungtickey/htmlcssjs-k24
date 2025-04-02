const cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];

// Sử dụng hàm reduce
function calculateTotal(cart) {
    return cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

// Sử dụng vòng lặp for
// function calculateTotal2(cart) {
//     let total = 0;
//     for (const item of cart) {
//         total += item.price * item.quantity;
//     }
//     return total;
// }
const totalAmount = calculateTotal(cart);
console.log("Tổng tiền giỏ hàng là:", totalAmount, "đồng");