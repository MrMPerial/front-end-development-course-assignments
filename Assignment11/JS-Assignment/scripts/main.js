function update() {
    //////////////////////Your Code Starts here


    var messages = [];
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var emailAddress = document.getElementById('emailAddress').value;
    var html = '<ul>';

    // Validation
    if ( firstName === '' ) {
        messages.push('First name is required');
    }
    
    if ( lastName === '' ) {
        messages.push('Last name is required');
    }
    
    if ( emailAddress === '' ) {
        messages.push('Email is required');
    }
    
    // Validation Fail
    for ( i = 0; i < messages.length; i++ ) {
        html = html + '<li>' + messages[i] + '</li>'
    }
    
    html = html + '</ul>';
    
    document.getElementById('error-list').innerHTML = html;
    
    // Validation Successful
    if ( messages.length === 0 ) {
        alert('Submitted');
    }
    
    // New Object
    var user = {
        firstname: firstName,
        lastname: lastName,
        email: emailAddress,
        fullname: function() {
            return this.firstname + ' ' + this.lastname;
        }
    }

    ////////////////////////Youre code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}