
document.getElementById("add-task").addEventListener("click", function () {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (title) {
        const taskList = document.getElementById("task-list");

        // Додај нова задача како <div>
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        // Наслов
        const strongTitle = document.createElement("strong");
        strongTitle.textContent = title;

        // Содржина
        const taskContent = document.createElement("span");
        taskContent.textContent = content;

        

        // Копче за бришење
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Избриши задача";
        deleteButton.onclick = function () {
            taskDiv.remove();
        };

        // Состави го taskDiv
        taskDiv.appendChild(strongTitle);
        taskDiv.appendChild(taskContent);
        taskDiv.appendChild(deleteButton);

        // Додај во taskList
        taskList.appendChild(taskDiv);

        // Исчисти полињата за внес
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
    } else {
        alert("Мора да внесете наслов за задачата!");
    }
});

