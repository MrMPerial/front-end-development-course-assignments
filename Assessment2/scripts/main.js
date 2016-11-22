// Button
document.getElementById('btnSubmit').addEventListener('click', submit);

// Submit Function
function submit() {

    // Variables
    var error = [];
    var errorClass = 'invalid';
    var input = ['firstName', 'lastName', 'email', 'explain'];

    // Check For Empty Space
    for ( var index = 0; index < input.length; index++ ) {
        var element = document.getElementById(input[index]);
        if ( element.value === '' ) {
            error.push(element.placeholder + ' Is Required');
            element.classList.add(errorClass);
        } else {
            element.classList.remove(errorClass);
        }
    }

    // Validate Email
    if ( email.value.indexOf('@') < 0 || email.value.indexOf('.com') < 0 ) {
        error.push("A Valid Email is Required");
        email.classList.add(errorClass);
    } else {
        email.classList.remove(errorClass);
    }

    // Validate Options
    if ( hearAbout.value < 1 ) {
        error.push('How You Found Us Is Required');
        hearAbout.classList.add(errorClass);
    } else {
        hearAbout.classList.remove(errorClass);
    }

    // Validate Terms
    if ( terms.checked === false ) {
        error.push("You Must Accept The Terms To Submit");
        terms.classList.add(errorClass);
    } else {
        terms.classList.remove(errorClass);
    }

    // Display Error Message
    var html;

    if ( error.length > 0 ) {
        html = '<ul><li>' + error.join('</li><li>') + '</li></ul>';
    } else {
        html = '<h1 class="thankYou">Thank you for your submission!</h1>';
    }

    // Post to Document
    document.getElementById('errorMessages').innerHTML = html;

}
