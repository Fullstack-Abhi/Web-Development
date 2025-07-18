$(document).ready(function(){
    $('#a').click(function(){
        $('#id').append('<h3>Append Method</h3>')
    })


    $('#b').click(function(){
        $('#id').prepend('<h3>PrePend Method</h3>')
    })

    $('#c').click(function(){
        $('<h3>appendTo Method</h3>').appendTo('#id');
    })

    $('#d').click(function(){
        $('<h3>prependTo Method</h3>').prependTo('#id');
    })

    $('#e').click(function(){
        $('#id').before('<h3>Before Method</h3>')
    })

    $('#f').click(function(){
        $('#id').after('<h3>After Method</h3>')
    })

    $('#g').click(function(){
        $('#id').empty('<h3>Empty Method</h3>')
    })

    $('#h').click(function(){
        $('#id').remove();
    })
})