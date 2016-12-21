$(document).ready(function () {

    var formName = document.getElementById('name');
    var formAnswers = document.getElementById('answer');

    function updateAnswer() {
        var appendAnswer = '<div class="answerBlock"><p>' + formAnswers.value + '</p><img src="avatar-sam09-8-251.jpg" width="100px" alt="Avatar"><br class="clear"><p class="aName">' + formName.value + '</p></div>';
        return appendAnswer;
    }

    function updateName() {
        var prependName = '<li>' + formName.value + ' Responded</li>';
        return prependName;
    }

    $.get(qaForm, function (response) {});

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

        if (formName.value !== '' && formAnswers.value !== '') {
            $('#formAnswer').slideUp();
            $('#formThanks').slideDown();
            $('.newAnswer').append(updateAnswer()).slideDown(1000);
            $('.newName').prepend(updateName()).fadeIn(500);            
            $.post("index.html", {
                name: formName.value,
                answer: formAnswers.value
            });
        }
        
    });

    $('#addAnswer').on('click', function () {
        $('#formThanks').slideUp();
        $('#formAnswer').slideDown();
        $('input').val('');
        $('textarea').val('');
    });

});