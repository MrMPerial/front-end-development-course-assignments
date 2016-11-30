$(document).ready(function(){

     ///// Code goes here
    // Part 1
    $('#btnOne').on('click', function() {
        alert('Hi');
    });

    // Part 2
    $('#btnTwo').on('click', function() {
        $('.update-html').html('<h3>Hello World</h3>');
    });

    // Part 3
    $('#btnThree').on('click', function() {
        $('#text-update').val('Hello World');
    });

    // Part 4
    $('#btnCopyHtml').on('click', function() {
        var copiedHtml = $('.copy-html').html();
        $('.paste-html').html(copiedHtml);
    });
    
    // Part 5
    $('#btnCopyValues').on('click', function() {
        var copiedValue = $('#copy-text').val();
        $('#paste-text').val(copiedValue);
    });

});