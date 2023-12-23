const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', event => {
  const formData = {
    ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}),
    [event.target.name]: event.target.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const { email, message } = e.currentTarget.elements;
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  if (emailValue === '' || messageValue === '') {
    alert('Error: Fill in the fields');
    return;
  }

  console.log({
    email: emailValue,
    message: messageValue,
  });

  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
});

const savedFormData = localStorage.getItem(STORAGE_KEY);
if (savedFormData) {
  const { email, message } = JSON.parse(savedFormData);

  document.querySelector('input[name="email"]').value = email ? email : '';
  document.querySelector('textarea[name="message"]').value = message
    ? message
    : '';
}
