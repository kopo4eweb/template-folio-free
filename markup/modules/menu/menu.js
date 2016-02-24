$(document).ready(function () {

    // ------------------------- going a section ----------------------------
    $('.goLink').on('click', function (e) {
        e.preventDefault();
        var id_section = $($(this).attr('href')), a_href;
        a_href = $(this).attr('href');
        $('html, body').stop().animate({ scrollTop: id_section.offset().top }, 500, function () {
            window.location.hash = a_href;
        });
        return false;
    });
    // ------------------------/ going a section ----------------------------

});
