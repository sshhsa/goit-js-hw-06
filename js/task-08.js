const form = document.querySelector('form.login_form');

const inputEmail = document.querySelector('.input_email');
const inputPassword = document.querySelector('.input_password');

const buttonSubmit = document.getElementById('form_button');

form.addEventListener('submit', onClickButtonForm);

function onClickButtonForm(event) {
  event.preventDefault();

  if (inputEmail.value === '' || inputPassword.value === '') {
    alert('WARNING!!! All brackets must be with value');
  }

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });

  //   const formElements = event.currentTarget.elements;

  //   console.log(formElements);

  //   const mail = formElements.mail.value;
  //   const password = formElements.password.value;

  //   const formData = {
  //     mail,
  //     password,
  //   };

  //   console.log(formData);

  buttonSubmit.addEventListener('click', onResetForm);

  function onResetForm() {
    form.reset();
  }
}
