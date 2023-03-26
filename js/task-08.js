const form = document.querySelector('form.login_form');
form.addEventListener('submit', onClickButtonForm);

function onClickButtonForm(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    alert('WARNING!!! All brackets must be with value');
  } else {
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
      console.log('onFormSubmit -> name', name);
      console.log('onFormSubmit -> value', value);
    });
  }

  event.currentTarget.reset();
}
