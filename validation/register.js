const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.username = validText(data.username) ? data.username : '';
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';
    data.role = validText(data.role) ? data.role : "";
    data.languages = validText(data.languages) ? data.languages : [];

    if(Validator.isEmpty(data.role)){
        errors.role = 'Please select a role'
    }

    // if (Validator.isEmpty(data.languages)){
    //     errors.languages = 'pls select at least one language'
    // }

    if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
        errors.username = 'Username must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = 'Please enter a username';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Please enter a password';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Please enter a password';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password muse be between 6 and 30 characters';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Please confirm password';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
