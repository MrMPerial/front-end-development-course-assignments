$(document).ready(function () {

    var dropBefore = document.getElementById('dropBtn');
    var dropAfter = document.getElementById('dropdown');
    var hamBtn = document.getElementById('ham');
    var menu = document.getElementById('dropMenu');

    $(dropAfter).hide();

    $(dropBefore).on('click', function () {
        $(dropAfter).slideToggle();
    });

    $(hamBtn).on('click', function () {
        $(menu).slideToggle();
    });

});