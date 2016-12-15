$('[name=completed]').change(function() {
  $.post(`/todos/completed/${$(this).data('id')}`, { completed: this.checked })
  if(this.checked === true) {
    $(this).closest('li.todoitem').addClass('things')
  } else {
    $(this).closest('li.todoitem').removeClass('things')
  }
})

$('[name=priority]').change(function() {
  console.log('going to make a post req', this, $(this).data('id'))
  $.post(`/todos/prioritize/${$(this).data('id')}`, { priority: this.value }).load(`/todos`);
})

$('li').sort(sort_li).appendTo('.listItems');
function sort_li(a, b){
  return ($(b).data('priority')) < ($(a).data('priority')) ? 1 : -1;
}
