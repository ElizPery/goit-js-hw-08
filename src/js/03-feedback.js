import throttle from 'lodash.throttle';


const emailData = document.querySelector('input');
const messageData = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";
const formData = {};

setDataFromStorage();


form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);


function onInputChange(e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onFormSubmit(e) {
    e.preventDefault();
    if (emailData.value === '' || messageData.value === '') {
       return alert('Fill all!');
    }

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}


function setDataFromStorage() {
    const savedValue = localStorage.getItem(STORAGE_KEY);

    if (savedValue) {
        const savedValueObj = JSON.parse(savedValue);
        
        if (savedValueObj.email) {
            emailData.value = savedValueObj.email;
            formData.email = savedValueObj.email;
        } 
        if (savedValueObj.message) {
            messageData.value = savedValueObj.message;
            formData.message = savedValueObj.message;
        }
    }
}