
var tasks = []
load()

$('#add-task').on('click', addTask)

$('#tasks').on('click', 'li', toggleDone)
$('#tasks').on('click', '.delete', removeTask)
$('#tasks').on('click', '.up',     function(e) {move(e, true)})
$('#tasks').on('click', '.down',   function(e) {move(e, true)})

function load() {
    tasks = JSON.parse(window.localStorage.getItem('tasks'))

    for (var i = 0; i < tasks.length; i++) {
        addTask(null, tasks[i])
    }
}

function addTask(e, task) {
    if (!task) {
        var name = prompt('Task:')
        task = {name: name, done: false}
        tasks.push(task)
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    var $task = $('<li>')
        .appendTo('#tasks')
        .text(task.name)
        .data('task', task)
        .append(
            $('<span>').addClass('delete').text('x')
        )
        .prepend(
            $('<span>').addClass('up'  ).text('^'),
            $('<span>').addClass('down').text('v')
        )

    if (task.done) {
        $task.addClass('done')
    }
}

function removeTask(e) {
    var $task = $(e.target).closest('li')

    tasks.splice(tasks.indexOf($task.data('task')), 1)
    window.localStorage.setItem('tasks', JSON.stringify(tasks))

    $task.remove()
}

function toggleDone(e) {
    var $task = $(e.target).closest('li')
    $task.toggleClass('done')

    var task = $task.data('task')
    task.done = !task.done

    window.localStorage.setItem('tasks', JSON.stringify(tasks))
}

function move(e, up) {
    var $task = $(e.target).closest('li')

    var task = $task.data('task')
    var i = tasks.indexOf(task)

    // TODO: swap tasks in UI and in tasks array
    // TODO: make up/down buttons visible again
}
