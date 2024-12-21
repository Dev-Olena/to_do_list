const form = document.querySelector('.form');
const list = document.querySelector('.tasks-list');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const {task: {value:  newTask}} = event.target;
    if(newTask && ) {
        createNewTask(newTask);
    }
    form.reset();
});

list.addEventListener('click', manageTasks);

function createNewTask(text){
    const taskText = document.createElement('span');
    taskText.textContent = text;
    taskText.classList.add('task-text');

    const delButton = document.createElement('button');
    delButton.textContent = 'Delete';
    delButton.classList.add('btn', 'btn-del');

    const li = document.createElement('li');
    li.classList.add('task-item');
    li.append(taskText, delButton);
    
    list.append(li);
}

function manageTasks(event){
    if(event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove()
    }
    if(event.target.tagName === 'SPAN') {
        console.log(event.target)
        event.target.parentElement.classList.toggle('checked')
    }
}
