document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById(".input-container input");
    const addButton = document.querySelector(".input-container button");
    const taskList = document.querySelector(".task-list ul");
    const progressText = document.querySelector(".progress-text");

    function updateProgress() {
        const totalTasks = document.querySelectorAll(".task-item").length;
        const completedTasks = document.querySelectorAll(".task-item input:checked").length;
        const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        progressText.textContent = `Tiến độ hoàn thành: ${progressPercentage}%`;
    }

    addButton.addEventListener('click', function() {
        if (taskInput.value.trim() !== '') {
            const li = document.createElement('li');
            li.className = 'task-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';
            checkbox.addEventListener('change', function() {
                taskText.classList.toggle('completed');
                updateProgress();
            });
            
            const taskText = document.createElement('span');
            taskText.className = 'task-text';
            taskText.textContent = taskInput.value;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = '🗑️';
            deleteBtn.addEventListener('click', function() {
                li.remove();
                updateProgress();
            });
            
            li.appendChild(checkbox);
            li.appendChild(taskText);
            li.appendChild(deleteBtn);
            
            taskList.appendChild(li);
            taskInput.value = '';
            updateProgress();
        }
    });
    
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.remove();
            updateProgress();
        });
    });

    document.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            this.nextElementSibling.classList.toggle('completed');
            updateProgress();
        });
    });

    updateProgress();

})