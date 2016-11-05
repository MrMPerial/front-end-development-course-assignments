function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var fullName = firstName + " " + lastName;
    
    console.log(firstName);
    console.log(lastName);
    
    getElm('p1_fullName').innerHTML = fullName;
    
    if ( firstName != " " && lastName != " " ) {
        getElm('p1_valid').innerHTML = true;
    }
    
    getElm('p1_fullNameLength').innerHTML = firstName.length + lastName.length;




    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);


    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);




    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);











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