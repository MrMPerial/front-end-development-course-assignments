// What I had after 2 hours :( ... This was changed about three times before the follow along

/*
function getEl(id) {
    return document.getElementById(id);
}

var update = function() {
    alert('Your form has been sent to the clouds!')
}

var update2 = function() {
    alert(document.write = 'Your form has been reset.')
}

var subBtn = getEl('subBtn');
var resBtn = getEl('resBtn');

subBtn.addEventListener('click', update);
resBtn.addEventListener('click', update2);
*/

///////////////////////////////
// Follow along in class... //
/////////////////////////////

/*
function getEl(id) {
    return document.getElementById(id);
}
var invalid = 'invalid';

var subBtn = getEl('subBtn');
subBtn.addEventListener('click', submit);

var resBtn = getEl('resBtn');
resBtn.addEventListener('click', reset);

var inputs = ['firstName', 'lastName', 'email', 'password', 'confirm'];

var submit = function() {
    
    var messages = [];
    
    var fName = getEl('firstName');
    if (fName.value === '') {
        messages.push('First name is required');
    }
    
    
    for (var i = 0; i < inputs.length; i++) {
        var elm = getEl(inputs[i]);
        if(elm.value === '') {
            messages.push(elm.placeholder + ' is invalid');
            elm.classList.add(invalid);
        } else {
            elm.classList.remove(invlaid);
        }
    }
    
    var email = getEl('email').value;
    if(email.indexOf('@') === -1) {
        messages.push('A valid email is required');
        email.classList.add(invalid);
    }
    
    var password = getEl('password');
    var confirm = getEl('confirm');
    
    if(password.value !== confirm.value) {
        messages.push('Passwords do not match');
    }
    
    var messageElm = getEl('message');
    if(messages.length > 0) {
        var html = '<ul class="errors><ul>';
        html += messages.join('</li></ul');
        messageElm.innerHTML = html;
    }
    
}

var reset = function() {
    console.log('reset');
} 
*/

//////////////////////
// From the source //
////////////////////

// Submit Button
var btn = getE('btnSubmit');
btn.addEventListener('click', submit);

// Reset Button
var btn2 = getE('btnReset');
btn2.addEventListener('click', reset);

// From HTML Form Inputs
var inputs = ['firstName', 'lastName', 'emailAddress', 'password', 'passwordConfirm'];
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