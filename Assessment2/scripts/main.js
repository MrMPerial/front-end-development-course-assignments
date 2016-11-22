document.getElementById('btnSubmit').addEventListener('click', submit);

function submit() {

    if ( firstName.value === '' ) {
        console.log("firstName is empty");
    } else {
        console.log("firstName is not empty");
    }

    if ( lastName.value === '' ) {
        console.log("lastName is empty");
    } else {
        console.log("lastName is not empty");
    }

    if ( email.value === '' ) {
        console.log("email is empty");
    } else {
        console.log("email is not empty");
    }

    if ( explain.value === '' ) {
        console.log("explain is empty");
    } else {
        console.log("explain is not empty");
    }

    if ( email.value.indexOf('@') < 0 || email.value.indexOf('.com') < 0 ) {
        console.log("email is Invalid");
    } else {
        console.log("email is Valid");
    }

    if ( hearAbout.value < 1 ) {
        console.log("hearAbout is Invalid");
    } else {
        console.log("hearAbout is Valid");
    }

    if ( terms.checked === false ) {
        console.log("terms is Invalid");
    } else {
        console.log("terms is Valid");
    }

}
