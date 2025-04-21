document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const waitingTasksContainer = document.getElementById('waiting-tasks');
    const inProgressTasksContainer = document.getElementById('in-progress-tasks');
    const completedTasksContainer = document.getElementById('completed-tasks');

    const statuss = {
        waiting: 'waiting',
        inProgress: 'in-progress',
        completed: 'completed'
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    function renderTasks() {
        waitingTasksContainer.innerHTML = '';
        inProgressTasksContainer.innerHTML = '';
        completedTasksContainer.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = createTaskElement(task);
            
            switch(task.status) {
                case statuss.waiting:
                    waitingTasksContainer.appendChild(taskElement);
                    break;
                case statuss.inProgress:
                    inProgressTasksContainer.appendChild(taskElement);
                    break;
                case statuss.completed:
                    completedTasksContainer.appendChild(taskElement);
                    break;
            }
        });
    }

    function createTaskElement(task) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        
        const taskContent = document.createElement('div');
        taskContent.classList.add('task-content');
        taskContent.textContent = task.name;
        
        const taskActions = document.createElement('div');
        taskActions.classList.add('task-actions');
        
        if (task.status === statuss.waiting) {
            const moveToProgressBtn = document.createElement('button');
            moveToProgressBtn.classList.add('move-btn', 'move-to-progress');
            moveToProgressBtn.textContent = 'Chuyển tiếp';
            moveToProgressBtn.addEventListener('click', () => changeTaskStatus(task.id, statuss.inProgress));
            taskActions.appendChild(moveToProgressBtn);
        } else if (task.status === statuss.inProgress) {
            const moveToCompletedBtn = document.createElement('button');
            moveToCompletedBtn.classList.add('move-btn', 'move-to-completed');
            moveToCompletedBtn.textContent = 'Hoàn thành';
            moveToCompletedBtn.addEventListener('click', () => changeTaskStatus(task.id, statuss.completed));
            taskActions.appendChild(moveToCompletedBtn);
        }
        
        taskElement.appendChild(taskContent);
        taskElement.appendChild(taskActions);
        
        return taskElement;
    }

    function addTask(name) {
        const newTask = {
            id: Date.now().toString(),
            name: name,
            status: statuss.waiting
        };
        
        tasks.push(newTask);
        saveTasks();
        renderTasks();
    }

    function changeTaskStatus(taskId, newStatus) {
        tasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, status: newStatus };
            }
            return task;
        });
        
        saveTasks();
        renderTasks();
    }
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const taskName = taskInput.value.trim();
        if (taskName) {
            addTask(taskName);
            taskInput.value = '';
        }
    });
    renderTasks();
});