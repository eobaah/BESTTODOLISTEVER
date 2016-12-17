

$( document ).ready(function() {
  $.fn.editable.defaults.mode = 'inline'
  $.fn.editable.defaults.url = '/post'
  $.fn.editable.defaults.type = 'text'

  $('.edit').editable();
  window.updateTitle = function (id, title) {
    console.log('poop');
    $('.poo').editable({
      type: 'textarea',
      url: `/todos/title/${$(this).data('id')}`,
      pk: id,
      title: 'title',
      send: 'always',
      ajaxOptions: {
        type: 'post'
      }
    })
  }


  $('[name=completed]').change(function() {
    $.post(`/todos/completed/${$(this).data('id')}`, { completed: this.checked })
    if(this.checked === true) {
      $(this).closest('li.todoitem').addClass('things')
    } else {
      $(this).closest('li.todoitem').removeClass('things')
    }
  })
  $('[name=priority]').change(function() {
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

  $.fn.inlineEdit = function(replaceWith, connectWith) {

    $(this).hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });

    $(this).click(function() {

        var elem = $(this);

        elem.hide();
        elem.after(replaceWith);
        replaceWith.focus();

        replaceWith.blur(function() {

            if ($(this).val() != "") {
                connectWith.val($(this).val()).change();
                elem.text($(this).val());
            }

            $(this).remove();
            elem.show();
        });
    });
};

  // var selectedolditem = localStorage.getItem('todoitem');
  //
  //   if (selectedolditem != null) {
  //       $('#' + selectedolditem).siblings().find(".things").removeClass("things");
  //       $('#' + selectedolditem).addClass("things");
  //   }

});
