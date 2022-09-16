
import Throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');

const email = form.querySelector('[name="email"]');

const message = form.querySelector('[name="message"]');

const localKey = 'feedback-form-state';

form.addEventListener('input', Throttle(storageFormData, 500));
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
 
  const savedData = JSON.parse(localStorage.getItem(localKey));
    console.dir(savedData);
    
  localStorage.removeItem(localKey);
  event.currentTarget.reset();
}
function storageFormData(event) {
  const formValue = { email: '', message: '' };
  if (localStorage.getItem(localKey)) {
    Object.assign(formValue, JSON.parse(localStorage.getItem(localKey)));
  }
  
  formValue[event.target.name] = event.target.value;
  //   console.log(formValue);
  localStorage.setItem(localKey, JSON.stringify(formValue));
}