function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn")
    const currentUser = localStorage.getItem("currentUser")
  
    if (isLoggedIn === "true" && currentUser) {
      if (
        window.location.pathname.includes("login.html") ||
        window.location.pathname.includes("register.html") ||
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html"
      ) {
        window.location.href = "home.html"
      }
    } else {
      if (window.location.pathname.includes("home.html")) {
        window.location.href = "login.html"
      }
    }
  }
  
  // Khởi tạo dữ liệu mẫu nếu chưa có
  function initializeData() {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([]))
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    initializeData()
    checkLoginStatus()
  })
  