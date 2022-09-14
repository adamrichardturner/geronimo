const validateName = str => {
    // Validates name contains only alphabetical chars
    const re = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return re.test(str);
}

const validateNumber = str => {
    // Validates UK phone numbers (+44, 020.. etc)
    const re = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
    return re.test(str);
}

const validateEmail = str => {
    // Validates email address
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(str);
}

const validateForm = event => {
    // Name validation
    const name = document.getElementById('fullName').value;
    if( !validateName(name) ) {
        document.getElementById('name_error').classList.remove('hidden');
    } else {
        document.getElementById('name_error').classList.add('hidden');
    }
    // Email validation
    const email = document.getElementById('email').value;
    if ( !validateEmail(email) ) {
        document.getElementById('email_error').classList.remove('hidden');
    } else {
        document.getElementById('email_error').classList.add('hidden');
    }
    // Phone number validation
    const phone = document.getElementById('phone').value;
    if( !validateNumber(phone) ) {
        document.getElementById('phone_error').classList.remove('hidden');
    } else {
        document.getElementById('phone_error').classList.add('hidden');
    }
    event.preventDefault();
}

document.getElementById('geronimoForm').addEventListener('submit', validateForm);