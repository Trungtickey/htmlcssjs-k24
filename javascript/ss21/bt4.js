let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));
let c = parseFloat(prompt("Nhập số c:"));

if(a === 0){
    if(b === 0){
        if(c === 0){
            alert("Phương trình có vô số nghiệm.");
        } else {
            alert("Phương trình vô nghiệm.");
        }
    } else {
        let x = -c / b;
        alert("Phương trình có một nghiệm kép: x = " + x);
    }
} else {
    let delta = b^2 - 4*a*c;

    if(delta < 0){
        alert("Phương trình vô nghiệm.");
    } else if(delta === 0){
        let x = -b / (2*a);
        alert("Phương trình có nghiệm kép: x = " + x);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);
        alert("Phương trình có hai nghiệm phân biệt: x1 = " + x1 + " và x2 = " + x2);
    }
}