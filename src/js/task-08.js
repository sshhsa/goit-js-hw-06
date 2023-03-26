const form = document.querySelector('form.login_form');

const inputEmail = document.querySelector('.input_email');
const inputPassword = document.querySelector('.input_password');

form.addEventListener('submit', onClickButtonForm);

function onClickButtonForm(event) {
  event.preventDefault();

  if (inputEmail.value === '' && inputPassword.value === '') {
    alert('WARNING!!! All brackets must be with value');
  }

  //   const formElements = event.currentTarget.elements;
  //   const email = formElements.email.value;
  //   const passsword = formElements.passsword.value;
  //   const formData = { email, passsword };

  //   console.log(formData);

  const formData = new formData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
}
