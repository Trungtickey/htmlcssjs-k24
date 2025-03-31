function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }
  function filterOddPrimes(inputArray) {
    if (!Array.isArray(inputArray)) {
      return "Dữ liệu không hợp lệ";
    }
    
    if (inputArray.length === 0) {
      return "Mảng không có dữ liệu";
    }
    
    // Lọc số nguyên tố lẻ
    const oddPrimes = inputArray.filter(num => {
      if (!Number.isInteger(num)) return false;
      return num % 2 !== 0 && isPrime(num);
    });
    
    return oddPrimes.length > 0 ? oddPrimes : "Không có số nguyên tố lẻ nào trong mảng";
  }
  
 