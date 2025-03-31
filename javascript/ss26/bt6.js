function filterValidDates(arr) {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return arr.filter(item => dateRegex.test(item));
}
const inputArray = ["15/08/2023", "hello", "31/12/2020", "2023/05/10", "01/01/2000", "99/99/9999"];
const validDates = filterValidDates(inputArray);

console.log(validDates);
