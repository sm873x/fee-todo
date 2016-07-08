(function (ns, $) {
    'use strict';

    window.todo = ns = ( ns || {} );

    //open item count
    $('incomplete-items')
        .replaceWith($('.items').length);
    console.log(itemList);
})(window.todo, window.jQuery);
