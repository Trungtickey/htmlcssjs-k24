const categories = [
    { id: "DM001", name: "Quần áo", status: "active" },
    { id: "DM002", name: "Kính mắt", status: "inactive" },
    { id: "DM003", name: "Giày dép", status: "active" },
    { id: "DM004", name: "Thời trang nam", status: "inactive" },
  ];
  
  if (!localStorage.getItem("categories")) {
    localStorage.setItem("categories", JSON.stringify(categories));
  }
  
  const statusFilter = document.getElementById("status-filter");
  const tableBody = document.getElementById("category-list");
  
  function renderCategories(status) {
    const data = JSON.parse(localStorage.getItem("categories"));
    const filtered = data.filter(cat => {
      if (status === "all") return true;
      return cat.status === status;
    });
  
    tableBody.innerHTML = filtered.map((cat, index) => `
      <tr>
        <td>${cat.id}</td>
        <td>${cat.name}</td>
        <td>
          <span style="color: ${cat.status === "active" ? "green" : "red"}">
            ${cat.status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}
          </span>
        </td>
      </tr>
    `).join("");
  }
  
  renderCategories("all");
  
  statusFilter.addEventListener("change", function () {
    renderCategories(this.value);
  });
  