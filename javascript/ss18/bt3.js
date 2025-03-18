let name = prompt("Xin mời nhập tên:");

if(name == "admin"){
    let password = prompt("Xin mời nhập mật khẩu:");
    if(password == "TheMaster"){
        alert("Welcome");
    } else if(password == "" || password == null){
        alert("Canceled");
    } else{
        alert("Wrong password");
    }
} else if(name == "" || name == null){
    alert("Canceled");
} else{
    alert("I don't know you");
}