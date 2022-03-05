const loginButton = document.getElementById('buttonHeader');
const email = document.getElementById('email');
const password = document.getElementById('password');
const agreement = document.getElementById('agreement');
const formButton = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const count = document.getElementById('counter');
const form = document.getElementById('evaluation-form');
const result = document.getElementById('result');

function validateLogin() {
  const emailValue = email.value;
  const passwordValue = password.value;
  const trybeUser = 'tryber@teste.com';
  const trybePassword = '123456';

  if (emailValue === trybeUser && passwordValue === trybePassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', validateLogin);

// Habilitar / desabilitar botão do formulário;
formButton.disabled = true;

function enableButton() {
  if (agreement.checked === true) {
    formButton.disabled = false;
  } else {
    formButton.disabled = true;
  }
}

agreement.addEventListener('change', enableButton);

// Contador de caracteres do textarea

/**
 * Consultei o site htmldom.dev para entender a lógica para realizar o contador.
 * https://htmldom.dev/count-the-number-of-characters-of-a-textarea/
 */

function countCharacter(event) {
  const comentary = event.target;
  const length = comentary.getAttribute('maxLength');
  const userComentary = comentary.value.length;

  count.innerHTML = length - userComentary;
}

textarea.addEventListener('input', countCharacter);

// Substituir formulario pelas informações do usuário

function getFullname() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;

  const text = document.createElement('p');
  text.innerHTML = `Nome: ${name} ${lastName}`;
  result.appendChild(text);
}

function getEmail() {
  const userEmail = document.getElementById('input-email').value;

  const text = document.createElement('p');
  text.innerHTML = `Email: ${userEmail}`;
  result.appendChild(text);
}

function getHouse() {
  const house = document.getElementById('house').selectedOptions;
  const houseSelected = house[0].value;

  const text = document.createElement('p');
  text.innerHTML = `Casa: ${houseSelected}`;
  result.appendChild(text);
}

function getFamily() {
  const familys = document.getElementsByClassName('family-radio');
  let familySelected = '';

  for (let i = 0; i < familys.length; i += 1) {
    if (familys[i].checked === true) {
      familySelected = familys[i].value;
    }
  }

  const text = document.createElement('p');
  text.innerHTML = `Família: ${familySelected}`;
  result.appendChild(text);
}

function getSubject() {
  const subjects = document.getElementsByClassName('subject');
  let subjectsSelecteds = '';

  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked === true) {
      subjectsSelecteds += `${subjects[i].value}, `;
    }
  }

  const numberToSlice = subjectsSelecteds.length - 2;
  const subjectDone = subjectsSelecteds.slice(0, numberToSlice);

  const text = document.createElement('p');
  text.innerHTML = `Matérias: ${subjectDone}`;
  result.appendChild(text);
}

function getAvaliation() {
  const avaliation = document.getElementsByClassName('radio-rate');
  let avaliationSelected = '';

  for (let i = 0; i < avaliation.length; i += 1) {
    if (avaliation[i].checked === true) {
      avaliationSelected = avaliation[i].value;
    }
  }

  const text = document.createElement('p');
  text.innerHTML = `Avaliação: ${avaliationSelected}`;
  result.appendChild(text);
}

function getObservations() {
  const observations = document.getElementById('textarea').value;

  const text = document.createElement('p');
  text.innerHTML = `Observações: ${observations}`;
  result.appendChild(text);
}

function showUserInfo() {
  getFullname();
  getEmail();
  getHouse();
  getFamily();
  getSubject();
  getAvaliation();
  getObservations();

  form.innerHTML = '';
  form.appendChild(result);
  result.style.display = 'flex';
}

formButton.addEventListener('click', showUserInfo);
