(function (ns, $) {
    'use strict';

    window.todo = ns = ( ns || {} );

    //TODO input form - when 'enter'

    $('form').on( 'submit', function (e) {
        e.preventDefault();
        var newInput = $('.new-todo').val();
        addNewItem(newInput);

    });

    console.log(newInput);

    function addNewItem(newInput) {
        $('.items').append('<li>' + newInput + '</li>');
    }


    console.log( $('form') );





})(window.todo, window.jQuery);
