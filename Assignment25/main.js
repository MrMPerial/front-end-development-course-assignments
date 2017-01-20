$(document).ready(function () {

    var dropBefore = document.getElementById('dropBtn');
    var dropAfter = document.getElementById('dropdown');

    $(dropAfter).hide();

    $(dropBefore).on('click', function () {
        $(dropAfter).slideToggle();
    });



});