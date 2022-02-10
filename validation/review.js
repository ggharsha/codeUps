const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReviewInput(data){
    let errors = {};
    data.text = validText(data.text) ? data.text : '';

    if (!data.rating) {
        errors.rating = 'Please enter a rating';
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = "Please enter a review"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}