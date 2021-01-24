jQuery(document).ready(function ($) {
    var menuBtn= $('.fa-bars'),
        menu= $('.navigation ul');

    menuBtn.click(function()  {
        if(menu.hasClass('show')){
            menu.removeClass('show');
        } 
        else {
            menu.addClass('show');
        }
    });

});