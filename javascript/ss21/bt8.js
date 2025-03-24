for (let num = 100; num <= 999; num++) {
    let x = Math.floor(num / 100); // Chữ số hàng trăm
    let y = Math.floor((num % 100) / 10); // Chữ số hàng chục
    let z = num % 10; // Chữ số hàng đơn vị

    let sumOfCubes = x ** 3 + y ** 3 + z ** 3;

    if (sumOfCubes === num) {
        console.log(num);
    }
}
