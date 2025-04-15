let tasks = [];
let editingIndex = -1;
document.addEventListener("DOMContentLoaded", function () {
  loadTasksFromLocalStorage();
  renderTasks();
});

document.getElementById("submitBtn").addEventListener("click", function () {
  const content = document.getElementById("content").value.trim();
  const dueDate = document.getElementById("dueDate").value;
  const status = document.getElementById("status").value;
  const assignedTo = document.getElementById("assignedTo").value.trim();

  if (!content || !dueDate || !status || !assignedTo) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  const formattedDate = formatDate(dueDate);

  if (editingIndex === -1) {
    const newTask = {
      content,
      dueDate: formattedDate,
      status,
      assignedTo,
    };

    tasks.push(newTask);
  } else {
    tasks[editingIndex] = {
      content,
      dueDate: formattedDate,
      status,
      assignedTo,
    };

    editingIndex = -1;
    document.getElementById("submitBtn").textContent = "Submit";
  }

  saveTasksToLocalStorage();
  renderTasks();
  resetForm();
});

function renderTasks() {
  const tableBody = document.getElementById("taskTableBody");
  tableBody.innerHTML = "";

  tasks.forEach((task, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${task.content}</td>
                    <td>${task.dueDate}</td>
                    <td>${task.status}</td>
                    <td>${task.assignedTo}</td>
                    <td>
                        <button class="btn btn-sm btn-secondary action-btn edit-btn" data-index="${index}">Sửa</button>
                        <button class="btn btn-sm btn-danger action-btn delete-btn" data-index="${index}">Xoá</button>
                    </td>
                `;

    tableBody.appendChild(row);
  });

  addButtonEventListeners();
}
function addButtonEventListeners() {
  document.querySelectorAll(".edit-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      editTask(index);
    });
  });
  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      deleteTask(index);
    });
  });
}

function editTask(index) {
  const task = tasks[index];

  document.getElementById("content").value = task.content;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("status").value = task.status;
  document.getElementById("assignedTo").value = task.assignedTo;

  editingIndex = index;
  document.getElementById("submitBtn").textContent = "Update";
}

function deleteTask(index) {
  if (confirm("Bạn có chắc chắn muốn xoá không?")) {
    tasks.splice(index, 1);
    saveTasksToLocalStorage();
    renderTasks();

    if (editingIndex === index) {
      resetForm();
      editingIndex = -1;
      document.getElementById("submitBtn").textContent = "Submit";
    }
  }
}

function resetForm() {
  document.getElementById("content").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("status").value = "";
  document.getElementById("assignedTo").value = "";
}
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  } else {
    tasks = [
      {
        content: "Learn Javascript Session 01",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Anh Bách",
      },
      {
        content: "Learn Javascript Session 2",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Lâm",
      },
      {
        content: "Learn CSS Session 1",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Hiếu Ci ớt ớt",
      },
    ];
    saveTasksToLocalStorage();
  }
}
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
