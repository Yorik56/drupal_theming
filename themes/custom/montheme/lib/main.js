jQuery(document).ready(function($) {
    $('#block-montheme-main-menu li').hover(function(){
        $(this).find('.sub-menu').toggle();
    });
});