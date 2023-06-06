// validation script here

const inputs = document.querySelectorAll('input');

const patterns = {
    telephone:/^\d{10}$/, // ^ & $ at the beginning and end tell JS that this regex search must start and end with \d & {10}
    // the \d is calling for digits and the {10} is calling for 10 digits exactly, no more no less.
    username:/^[a-z\d]{5,12}$/i,
    password:/^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};


// validation function
function validate(field, regex){
    if(regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });

});