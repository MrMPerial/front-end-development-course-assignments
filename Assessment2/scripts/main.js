document.getElementById('btnSubmit').addEventListener('click', submit);

function submit() {

    var error = [];
    var errorClass = 'invalid';

    if ( firstName.value === '' ) {
        error.push(firstName.placeholder + ' Is Required');
        firstName.classList.add(errorClass);
    } else {
        firstName.classList.remove(errorClass);
    }

    if ( lastName.value === '' ) {
        error.push(lastName.placeholder + ' Is Required');
    }

    if ( email.value === '' ) {
        error.push(email.placeholder + ' Is Required');
    }

    if ( explain.value === '' ) {
        error.push('Why You Need This Is Required');
    }

    if ( email.value.indexOf('@') < 0 || email.value.indexOf('.com') < 0 ) {
        error.push("A Valid Email is Required");
    }

    if ( hearAbout.value < 1 ) {
        error.push('How You Found Us Is Required');
    }

    if ( terms.checked === false ) {
        error.push("You Must Accept The Terms To Submit");
    }

    var html;

    if ( error.length > 0 ) {
        html = '<ul><li>' + error.join('</li><li>') + '</li></ul>';
    } else {
        html = '<h1>Thank you for your submission!</h1>';
    }

    document.getElementById('errorMessages').innerHTML = html;

}
