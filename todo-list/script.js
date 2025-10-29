const task = document.getElementById('new_task');
const add_button = document.getElementById('add_button');
const tasks_list = document.getElementById('tasks_list');

function add_task(e){
    if(!task.value.trim()){
        alert("You haven't added a task!");
        return;
    }
    const new_task_list = document.createElement('li');
    new_task_list.textContent = task.value.trim();
    tasks_list.appendChild(new_task_list);

    task.value = '';
    task.focus();
}

function remove_task(e){
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
}

add_button.addEventListener('click', add_task);
tasks_list.addEventListener('click', remove_task);