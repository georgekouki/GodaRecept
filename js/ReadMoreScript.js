$(function(){ 
    
        $('a.read_more').click(function(event){ 
    
            event.preventDefault(); 
            $(this).parents('.information').find('.more_text').show(); 
    
        });
    
    });
    