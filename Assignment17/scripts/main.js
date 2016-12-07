$(document).ready(function(){

    // Hide errors
    $('.error').hide();
    
    // Add Class
    $('.input-group').filter(':even').addClass('even');
    
    // Validate First Name
    var fName = $('#firstName');
    fName.on('blur', function() {
        if( fName.val() === '') {
            fName.closest('.input-group').find('.requiredMsg').fadeIn();
        } else {
            fName.closest('.input-group').find('.requiredMsg').fadeOut();
        }
    });
    
    // Validate Last Name
    var lName = $('#lastName');
    lName.on('blur', function() {
        if( lName.val() === '') {
            lName.closest('.input-group').find('.requiredMsg').fadeIn();
        } else {
            lName.closest('.input-group').find('.requiredMsg').fadeOut();
        }
    });
    
    // Validate eMail
    var mail = $('#emailAddress');
    mail.on('blur', function() {
        if( mail.val() === '') {
            mail.closest('.input-group').find('.requiredMsg').fadeIn();
        } else {
            mail.closest('.input-group').find('.requiredMsg').fadeOut();
        }
        
        if( mail.val().indexOf('@') < 0 || $('#emailAddress').val().indexOf('.com') < 0 ) {
            mail.closest('.input-group').find('.emailMsg').fadeIn();
        } else {
            mail.closest('.input-group').find('.emailMsg').fadeOut();
        }
    });    

});