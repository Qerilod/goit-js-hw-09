const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', () => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      email: emailInput.value,
      message: messageTextarea.value,
    })
  );
});

form.addEventListener('submit', e => {
  e.preventDefault();

  console.log({
    email: emailInput.value,
    message: messageTextarea.value,
  });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

const savedFormData = localStorage.getItem(STORAGE_KEY);
if (savedFormData) {
  const { email, message } = JSON.parse(savedFormData);

  emailInput.value = email;
  messageTextarea.value = message;
}
