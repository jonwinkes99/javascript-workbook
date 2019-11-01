// using antonios code to choose and position team

$('makeBlueTeam').click(function() {
    $('#players').append($('#blue .selected').removeClass('selected'));
});

$('#move_right').click(function () {
    $('#players').append($('#red .selected').removeClass('selected'));
});

