let textInput = document.querySelector(".add-task input");
let addButton = document.querySelector(".add-task .plus");
let taskContent = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

window.onload = function(){
    textInput.focus();
}
addButton.onclick = function(){

    if(textInput.value === ""){

        function noTaskAdded(){
            Swal.fire({
            title: 'Failed!',
            text: 'No Task Added.',
            confirmButtonText: 'OK'
            })
        }
        noTaskAdded();

    }else{

        let noTaskMsg = document.querySelector(".no-tasks-message");

        if(document.body.contains(noTaskMsg)){
            noTaskMsg.remove();
        }

        let taskBox = document.createElement("span");
        taskBox.className = "task-box";
        taskBox.appendChild(document.createTextNode(textInput.value));

        let deleteButton = document.createElement("span");
        deleteButton.className = "delete";
        deleteButton.appendChild(document.createTextNode("delete"));

        taskBox.appendChild(deleteButton);
        taskContent.appendChild(taskBox);

        textInput.value = "";
        textInput.focus();

        taskCalculator();
    }
}
document.addEventListener("click", function(e){

    if(e.target.className == "delete"){
        e.target.parentNode.remove();
        if(taskContent.childElementCount == 0){
            noTaskShowMsg();
        }
    }
    if(e.target.classList.contains("task-box")){
        e.target.classList.toggle("finished");
    }
    taskCalculator();
})

function noTaskShowMsg(){
    let noTasksMsg = document.createElement("span");
    noTasksMsg.className = "no-tasks-message";
    noTasksMsg.appendChild(document.createTextNode("No Tasks To Show"));
    taskContent.appendChild(noTasksMsg);
}
function taskCalculator(){
    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;
}