$(document).ready(function () {
  $('form').on('submit', function(e) {
    e.preventDefault(); 
    const nameTask = $('input').val();
    const newTask = $(`<li>${nameTask}</li>`)

    $(newTask).appendTo('ul')
    $('input').val('')
    
  })

  $('ul').on ('click', 'li', function(e){
    e.preventDefault();
    $(this).toggleClass('riscarTarefa')


  })

   

   
      
            
})

  