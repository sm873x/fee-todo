(function (ns, $) {
    'use strict';

    window.todo = ns = ( ns || {} );

    //Form input - when 'enter'

    $('form').on( 'submit', function (e) {
        e.preventDefault();
        var newInput = $('.new-todo').val();
        addNewItem(newInput);
        $('.new-todo').val('');
    });

    //Creates new list item

    ns.itemList = [];

    function addNewItem(newInput) {
        var li = '<li></li>';
        var article = '<article class="openItem"></article>';
        var checkButton = '<button class="check"></button>';
        var para = '<p>' + newInput + '</p>';
        var delButton = '<button class="delete">X</button>';

        ns.itemList.push({
            complete: false,
            text: newInput,
            dateCreated: Date.now()
        });


        $('.items')
            .append(li)
            .find('li:last-child')
                .append(article)
                .find('.openItem')
                    .append(checkButton + para + delButton)
                    // .find('.delete')
                    //     .hide();

    }


    //Edit item inline
    $('.items').on('click', '.openItem p', editItem);

    function editItem(e) {
        console.log('clicked');
        var input = '<input type="text" class="edit-todo"></input>';
        $(this).replaceWith(input);
    }

    //Delete item
    $('.items').on('click', '.delete', function (){
            $(this)
                .parent()
                .remove();
            confirm('You sure about that? Click OK to proceed.');
        }
    );




})(window.todo, window.jQuery);
