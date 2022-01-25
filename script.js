const botaoEntrar = document.querySelector('#btn');
const inputEmail = document.querySelector('#input-login-email');
const inputSenha = document.querySelector('#input-login-senha');
const inputCheckBox = document.querySelector('#agreement');
const botaoEnviar = document.querySelector('#submit-btn');
const contador = document.querySelector('#counter');
const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const textarea = document.querySelector('#textarea');
const form = document.querySelector('#evaluation-form');
const main = document.querySelector('main');
contador.innerText = 500;

// Requisito 21 Pegar valores dos inputs do formulario
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.getElementsByName('family');
const subjects = document.getElementsByName('subject');
const rate = document.getElementsByName('rate');

botaoEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  if (
    inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

inputCheckBox.addEventListener('change', (event) => {
  if (event.target.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}, false);

textarea.addEventListener('input', () => {
  const conta = 500 - textarea.value.length;
  contador.innerText = conta;
});

function showFamily() {
  let familyText = '';
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      familyText += family[i].value;
    }
  }
  const ffamilyText = `Família: ${familyText}`;
  return ffamilyText;
}

function showSubjects() {
  let subjectsText = 'Matérias: ';
  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked) {
      subjectsText += `${subjects[i].value}, `;
    }
  }
  subjectsText = subjectsText.slice(0, -2);
  return subjectsText;
}

function showEvaluation() {
  let rateText = '';
  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked) {
      rateText += rate[i].value;
    }
  }
  const frateText = `Avaliação: ${rateText}`;
  return frateText;
}

const resultFields = [];

function addInfo() {
  resultFields.push(`Nome: ${firstName.value} ${lastName.value}`);
  resultFields.push(`Email: ${email.value}`);
  resultFields.push(`Casa: ${house.value}`);
  resultFields.push(showFamily());
  resultFields.push(showSubjects());
  resultFields.push(showEvaluation());
  resultFields.push(`Observações: ${textarea.value}`);
}

function setCss() {
  document.querySelector('.logo').style.display = 'none';
  const bg = './pergaminho.png';
  main.style.justifyContent = 'center';
  form.style.alignItems = 'center';
  form.style.background = `url(${bg})`;
  form.style.backgroundSize = 'cover';
  form.style.width = '525px';
  form.style.height = '700px';
  form.style.padding = '120px 0px';
  form.style.margin = '80px auto';
}

botaoEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  addInfo();
  setCss();
  form.innerHTML = '';
  const divResult = document.createElement('div');
  divResult.className = 'resultClass';
  for (let i = 0; i < resultFields.length; i += 1) {
    const result = document.createElement('p');
    result.innerHTML = resultFields[i];
    divResult.appendChild(result);
    form.appendChild(divResult);
  }
});
