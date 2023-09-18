import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input')
};

refs.form.addEventListener('submit', onSubmitForm);
refs.form.addEventListener('input', throttle(onInputForm, 500));

function onSubmitForm(ev) {
    ev.preventDefault()
    ev.currentTarget.reset()
    localStorage.removeItem("feedback-form-state")
};

function onInputForm(evt) {
    const emailValue = refs.input.value;
    const messageValue = refs.textarea.value;

    const formData = {
        email: emailValue,
        message: messageValue
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

function populateInputForms() {
    const saveInputsText = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (saveInputsText) {
        refs.input.value = saveInputsText.email;
        refs.textarea.value = saveInputsText.message;
    }
};

populateInputForms();

console.log(form)