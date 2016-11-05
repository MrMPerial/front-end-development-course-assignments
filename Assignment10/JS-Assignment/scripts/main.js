function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var fullName = firstName + " " + lastName;
    
    // Console Logging
    console.log(firstName);
    console.log(lastName);
    
    // Output Full Name
    getElm('p1_fullName').innerHTML = fullName;
    
    // Both Fields
    if ( firstName != "" && lastName != "" ) {
        getElm('p1_valid').innerHTML = true;
    } else {
        getElm('p1_valid').innerHTML = false;
    }
    
    // Name Length
    getElm('p1_fullNameLength').innerHTML = firstName.length + lastName.length;

    ///////////////////////////////////////
    
    // Part 2
    var emailAddress = getValue('emailAddress');
    
    // Console Logging
    console.log(emailAddress);
    
    // Output Email
    getElm('p2_email').innerHTML = emailAddress;
    
    // Verify @ Used
    if ( emailAddress.indexOf('@') > -1 ) {
        getElm('p2_valid').innerHTML = true;
    } else {
        getElm('p2_valid').innerHTML = false;
    }
    
    // Email Length
    getElm('p2_emailLength').innerHTML = emailAddress.length;

    ///////////////////////////////////////
    
    // Part 3
    var randomNumber = getValue('randomNumber');
    
    // Console Logging
    console.log(randomNumber);
    
    // Display Value
    getElm('p3_number').innerHTML = randomNumber;
    
    // Validate value is a number
    if ( randomNumber >=0 ) {
        getElm('p3_valid').innerHTML = true;
    } else {
        getElm('p3_valid').innerHTML = false;
    }

    ///////////////////////////////////////

    // Part 4
    var arrayInput = getValue('arrayValue');
    
    // Console Logging
    console.log(arrayInput);
    
    // Array Length
    getElm('p4_arraylength').innerHTML = arrayInput.length;
    
    // Display Array
    getElm('p4_valid').innerHTML = arrayInput;
    
    ///////////////////////////////////////
    
    // Bonus
    // --------------------
    
    // Name Validator
    var firstNameVal = getElm('firstName');
    var lastNameVal = getElm('lastName');
    
    if ( firstName == false || lastName == false ) {
        firstNameVal.classList.add('invalid');
        lastNameVal.classList.add('invalid');
    } else {
        firstNameVal.classList.remove('invalid');
        lastNameVal.classList.remove('invalid');
    }
    
    // Email Validator
    var emailVal = getElm('emailAddress');
    
    if ( emailAddress == false ) {
        emailVal.classList.add('invalid');
    } else {
        emailVal.classList.remove('invalid');
    }
    
    // Number Validator
    var numberVal = getElm('randomNumber');
    if ( randomNumber == false ) {
        numberVal.classList.add('invalid');
    } else {
        numberVal.classList.remove('invalid');
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