let tasksList = [
    {
      id : 1,
      taskName: "Learn JavaScript",
    },
    {
      id : 2,
      taskName: "Learn React",
    },
    {
      id : 3,
      taskName: "Learn Node",
    },
  ];
  
  function showTask() {
      document.getElementById("list").innerHTML = "";
      tasksList.forEach((task) => {
          const li = document.createElement("li");
          li.innerHTML = `<span class="nameTask">${task.taskName}</span>
          <button onclick="editTask(${task.id})">Edit</button>
          <button onclick="deleteTask(${task.id})">Delete</button>
          `
          document.getElementById("list").appendChild(li);
      });
  }
  
  function editTask(id) {
    const newTaskName = prompt("Enter new task name");
    tasksList[id - 1].taskName = newTaskName;
    showTask();
  }
  function deleteTask(id) {
    tasksList = tasksList.filter((task) => task.id !== id);
    showTask();
  }
  
  function addTask() {
    const valueInput = document.getElementById("taskInput").value.trim();
    const newTask = {
      id : tasksList.length + 1,
      taskName: valueInput,
    }
    tasksList.push(newTask);
    showTask();
  }
  
  showTask();