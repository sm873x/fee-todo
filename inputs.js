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
            timeStamp: Date.now(),
            edited: false
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

    $('.items').on( 'keypress', '.edit-todo', function (e) {
        if ( e.keyCode === 13) {
            console.log('enter');
            var prevText = $(this).val();
        
        }
    });

    function editItem(e) {
        console.log('clicked');
        var input = '<input type="text" class="edit-todo" value=' + this.innerText + '>';
        $(this)
            .replaceWith(input)
        console.log( this );

    }



    //Delete item
    $('.items').on('click', '.delete', function (){
            $(this)
                .parent()
                .remove();
            confirm('You sure about that? Click OK to proceed.');
            ns.itemList.splice($.inArray)
        }
    );




})(window.todo, window.jQuery);
