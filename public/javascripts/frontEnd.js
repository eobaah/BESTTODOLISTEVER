$( document ).ready(function() {

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
    $.ajax({
      type: "POST",
      url: `/todos/prioritize/${$(this).data('id')}`,
      data: { priority: this.value },
      success: function() {
        window.location.reload()
      }
    })
  })

  $('li').sort(sort_li).appendTo('.listItems');
  function sort_li(a, b){
    return ($(b).data('priority')) < ($(a).data('priority')) ? 1 : -1;
  }

  // var selectedolditem = localStorage.getItem('todoitem');
  //
  //   if (selectedolditem != null) {
  //       $('#' + selectedolditem).siblings().find(".things").removeClass("things");
  //       $('#' + selectedolditem).addClass("things");
  //   }

});
