

$('#add-task').on('click', addTask)

$('#tasks').on('click', 'li', toggleDone)

$('#tasks').on('click', '.delete', removeTask)

function addTask() {
    var task = prompt('Task:')

    var $task = $('<li>')
        .appendTo('#tasks')
        .text(task)
        .append(
            $('<span>').addClass('delete').text('x')
        )
}

function removeTask(e) {
    var $task = $(e.target).closest('li')
    $task.remove()
}

function toggleDone(e) {
    var $task = $(e.target).closest('li')

    $task.toggleClass('done')
}
