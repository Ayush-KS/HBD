$('#click-one').click(function(){
    $('#click-one').hide(500);
    $('#click-two').show(1000, "swing");

    $('#click-two').click(function() {
        $('#click-two').hide(500);
        $('#image').show(1000);
        $('#click-one').text("name your first born boy: ayushi");
        $('#click-one').css({'width': '300px', 'cursor' : 'default'});
        $('#click-one').off();
        $('#click-one').show(3000);

    })
})