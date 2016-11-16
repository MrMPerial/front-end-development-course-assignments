/* Adding code doesn't seem to be a problem for me,
but starting with a blank canvas is a problem */

// Submit Button
var btn = getE('btnSubmit');
btn.addEventListener('click', submit);

// Reset Button
var btn2 = getE('btnReset');
btn2.addEventListener('click', reset);

// From HTML Form Inputs
var inputs = ['firstName', 'lastName', 'emailAddress', 'password', 'passwordConfirm', 'about'];
var ERROR_CLASS = 'invalid';

// Submit Validation Function
function submit() {
    var elm;
    var errorList = [];

    // Validate Names
    for ( var i = 0; i < inputs.length; i++ ) {
        elm = getE(inputs[i]);
        if ( elm.value === '' ) {
            errorList.push(elm.placeholder + ' is required');
            elm.classList.add(ERROR_CLASS);
        } else {
            elm.classList.remove(ERROR_CLASS);
        }
    }

    // Validate Password
    var passWord = getE('password').value;
    var passWordConfirm = getE('passwordConfirm').value;

    if ( passWord !== passWordConfirm ) {
        errorList.push('Passwords do not match');
    }

    // Validate Email
    var email = getE('emailAddress');

    if ( email.value.indexOf('@') == -1 ) {
        errorList.push('Enter a valid email');
    }

    // Validate Time Zone
    if ( zone.value < "1" ) {
        errorList.push('Please choose a time zone');
    }

    // Validate Terms and Conditions
    var terms = getE('terms').checked;

    if ( terms === false ) {
        errorList.push('You must agree to the terms');
    }

    // Display Results
    var html;

    if ( errorList.length > 0 ) {
        html = '<ul class="errors"><li>' + errorList.join('</li><li>') + '</li></ul>';
    } else {
        html = '<h1>Thank You for registering</h1>';
        reset();
    }

    getE('messages').innerHTML = html;

}

// Reset Form
function reset() {
    for ( var i = 0; i < inputs.length; i++ ) {
        var elm = getE(inputs[i]);
        elm.value = '';
        elm.classList.remove(ERROR_CLASS);
    }

    getE('messages').innerHTML = '';

}

// Get the Element
function getE(id) {
    return document.getElementById(id);
}
