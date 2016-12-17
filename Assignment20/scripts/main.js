$(document).ready(function () {

    var formName = document.getElementById('name');
    var formAnswers = document.getElementById('answer');

    $('input').on('blur', function () {
        if (formName.value === '') {
            $(this).addClass('errors');
            $('.errMsg1').fadeIn();
        } else {
            $(this).removeClass('errors');
            $('.errMsg1').fadeOut();
        }
    });

    $('textarea').on('blur', function () {
        if (formAnswers.value === '') {
            $(this).addClass('errors');
            $('.errMsg2').fadeIn();
        } else {
            $(this).removeClass('errors');
            $('.errMsg2').fadeOut();
        }
    });

    $('#subBtn').on('click', function () {
        if (formName.value === '') {
            $('.errMsg1').fadeIn();
        } else {
            $('.errMsg1').fadeOut();
        }

        if (formAnswers.value === '') {
            $('.errMsg2').fadeIn();
        } else {
            $('.errMsg2').fadeOut();
        }
    });

    $('#subBtn').on('click', function () {
        if (formName.value !== '' && formAnswers.value !== '') {
            $('#formAnswer').slideUp();
            $('#formThanks').slideDown();
        }
    });

    $('#addAnswer').on('click', function () {
        $('#formThanks').slideUp();
        $('#formAnswer').slideDown();
        $('input').val('');
        $('textarea').val('');
    });

    $('#subBtn').on('click', function () {
        $('.newAnswer').append(updateAnswer()).slideDown(1000);
        $('.newName').prepend(updateName()).fadeIn(500);
    });

    function updateAnswer() {
        var appendAnswer = '<div class="answerBlock"><p>' + formAnswers.value + '</p><img src="avatar-sam09-8-251.jpg" width="100px" alt="Avatar"><br class="clear"><p class="aName">' + formName.value + '</p></div>';
        return appendAnswer;
    }

    function updateName() {
        var prependName = '<ul><li>' + formName.value + ' Responded' + '</li></ul>';
        return prependName;
    }

    // AJAX ??? //
    $.get(qaForm, function(response){
    });

    $("subBtn").on('click', function () {
        $.post("index.html", {
            name: formName.value,
            answer: formAnswers.value
        });
    });

});