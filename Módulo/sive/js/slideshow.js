function slideSwitch() {
    var $active = $('#slide IMG.active');

    if ( $active.length == 0 ) $active = $('#slide IMG:last');

    var $next =  $active.next().length ? $active.next()
        : $('#slide IMG:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});
