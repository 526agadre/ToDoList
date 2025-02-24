//Init an array to store tasks
let tasks = []

//add an event listener to add tasks to the add task btn
document.getElementById('addTaskBtn').addEventListener('click', function) {
//storing text value from input box as a variable 'taskInput'
let taskInput = document.getElementById('taskInput').value
//checks if value in the textbox is empty if it is wont activate  also clears textbox when clicking enter
if(taskInput)

    tasks.push(taskInput)
    document.getElementById ('taskInput').value = ''

    displayTasks()
}