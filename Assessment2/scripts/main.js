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
        lastName.classList.add(errorClass);
    } else {
        lastName.classList.remove(errorClass);
    }

    if ( email.value === '' ) {
        error.push(email.placeholder + ' Is Required');
        email.classList.add(errorClass);
    } else {
        email.classList.remove(errorClass);
    }

    if ( explain.value === '' ) {
        error.push('Why You Need This Is Required');
        explain.classList.add(errorClass);
    } else {
        explain.classList.remove(errorClass);
    }

    if ( email.value.indexOf('@') < 0 || email.value.indexOf('.com') < 0 ) {
        error.push("A Valid Email is Required");
        email.classList.add(errorClass);
    } else {
        email.classList.remove(errorClass);
    }

    if ( hearAbout.value < 1 ) {
        error.push('How You Found Us Is Required');
        hearAbout.classList.add(errorClass);
    } else {
        hearAbout.classList.remove(errorClass);
    }

    if ( terms.checked === false ) {
        error.push("You Must Accept The Terms To Submit");
        terms.classList.add(errorClass);
    } else {
        terms.classList.remove(errorClass);
    }

    var html;

    if ( error.length > 0 ) {
        html = '<ul><li>' + error.join('</li><li>') + '</li></ul>';
    } else {
        html = '<h1 class="thankYou">Thank you for your submission!</h1>';
    }

    document.getElementById('errorMessages').innerHTML = html;

}
