$(document).ready(function () {

    var formName = document.getElementById('name');

    $('input').on('blur', function () {            
        if (formName.value === '') {                
            $(this).addClass('errors');
            $('.errMsg1').show();
        } else {
            $(this).removeClass('errors');
            $('.errMsg1').hide();
        }
    });

    $('#subBtn').on('click', function () {
        if (formName.value === '') {
            $('.errMsg1').show();
        } else {
            $('.errMsg1').hide();
            $('#formAnswer').slideUp();
            $('#formThanks').slideDown();
        }
    });

    $('#addAnswer').on('click', function () {
        $('#formThanks').slideUp();
        $('#formAnswer').slideDown();
    });
    
    //

});