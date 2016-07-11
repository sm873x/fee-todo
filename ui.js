(function (ns, $) {
    'use strict';

    window.todo = ns = ( ns || {} );

    $('.show-active').on( 'click', function(e) {
        $('.openItem').show();
        $('.complete').hide();
    });

    $('.show-completed').on( 'click', function(e) {
        $('.openItem').hide();
        $('.complete').show();
    });

    $('.show-all-active').on( 'click', function(e) {
        $('.openItem').show();
        $('.complete').show();
    });

    $('.clear').on( 'click', function(e) {
        $('.complete').remove();
    });


})(window.todo, window.jQuery);
