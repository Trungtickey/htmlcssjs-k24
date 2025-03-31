function filterValidEmails(emails) {
    if (!Array.isArray(emails)) {
        return "Dữ liệu không hợp lệ";
    }
    if (emails.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let validEmails = emails.filter(email => 
        typeof email === "string" && email.includes("@") && !email.includes(" ")
    );

    return validEmails;
}
console.log(filterValidEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]));
console.log(filterValidEmails([]));
console.log(filterValidEmails("abc"));
