/**
 * Created by kopo4e on 06.01.2016.
 */

$(function () {

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });

    var prevent_action;

    var container = $('#portfolio__img');
    container.mixItUp();
    container.on('mixLoad', function (e, state) {
        container.find('.item').addClass('item_hide');
    });

    // fix function for the mixLoad
    if ($('html').hasClass('ie9') || $('html').hasClass('ie8')) {
        container.find('.item').addClass('item_hide');
    }

    $('.filter_sort').on('click', function () {
        var filter_sort_but = $(this);

        if (prevent_action) {
            prevent_action.removeClass('action');
        }

        filter_sort_but.addClass('action');

        prevent_action = filter_sort_but;

        $('#portfolio__img').mixItUp('multiMix', {
            filter: filter_sort_but.attr('data-filter'),
            sort: filter_sort_but.attr('data-sort'),
            changeLayout: {
                containerClass: 'flex'
            }
        });
    });

});
