$('[name=completed]').change(function() {
  $.post(`/todos/completed/${$(this).data('id')}`, { completed: this.checked })
  if(this.checked === true) {
    $(this).closest('li.todoitem').addClass('things')
  } else {
    $(this).closest('li.todoitem').removeClass('things')
  }
})

$('[name=priority]').change(function() {
  $.post(`/todos/completed/${$(this).data('priority')}`, { priority: this.priority })
})
