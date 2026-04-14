import { digitsOnly, formatCardNumber } from './formatters.js';
import { validate } from './validators.js';

const DEFAULTS = {
  number: '0000 0000 0000 0000',
  name: 'Jane Appleseed',
  mm: '00',
  yy: '00',
  cvc: '000',
};

const $ = (id) => document.getElementById(id);
const preview = (key) => document.querySelector(`[data-preview="${key}"]`);

export function initLivePreview() {
  const cardholder = $('cardholder');
  const cardnumber = $('cardnumber');
  const expmm = $('expmm');
  const expyy = $('expyy');
  const cvc = $('cvc');

  cardholder.addEventListener('input', (e) => {
    preview('name').textContent = e.target.value.trim() || DEFAULTS.name;
  });

  cardnumber.addEventListener('input', (e) => {
    const formatted = formatCardNumber(e.target.value);
    e.target.value = formatted;
    preview('number').textContent = formatted.padEnd(19, ' ') || DEFAULTS.number;
    if (!formatted) preview('number').textContent = DEFAULTS.number;
  });

  const updateExp = () => {
    preview('mm').textContent = expmm.value ? expmm.value.padStart(2, '0') : DEFAULTS.mm;
    preview('yy').textContent = expyy.value ? expyy.value.padStart(2, '0') : DEFAULTS.yy;
  };
  expmm.addEventListener('input', (e) => {
    e.target.value = digitsOnly(e.target.value).slice(0, 2);
    updateExp();
  });
  expyy.addEventListener('input', (e) => {
    e.target.value = digitsOnly(e.target.value).slice(0, 2);
    updateExp();
  });

  cvc.addEventListener('input', (e) => {
    e.target.value = digitsOnly(e.target.value).slice(0, 3);
    preview('cvc').textContent = e.target.value || DEFAULTS.cvc;
  });
}

function setError(id, message) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = message || '';
}

function setInvalid(inputId, invalid) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.setAttribute('aria-invalid', invalid ? 'true' : 'false');
}

function clearErrors() {
  ['err-cardholder', 'err-cardnumber', 'err-exp', 'err-cvc'].forEach((id) => setError(id, ''));
  ['cardholder', 'cardnumber', 'expmm', 'expyy', 'cvc'].forEach((id) => setInvalid(id, false));
}

function renderErrors(errors) {
  clearErrors();
  if (errors.cardholder) {
    setError('err-cardholder', errors.cardholder);
    setInvalid('cardholder', true);
  }
  if (errors.cardnumber) {
    setError('err-cardnumber', errors.cardnumber);
    setInvalid('cardnumber', true);
  }
  if (errors.exp) {
    setError('err-exp', errors.exp);
    setInvalid('expmm', true);
    setInvalid('expyy', true);
  }
  if (errors.cvc) {
    setError('err-cvc', errors.cvc);
    setInvalid('cvc', true);
  }
}

function resetAll() {
  const form = $('cardForm');
  form.reset();
  clearErrors();
  preview('name').textContent = DEFAULTS.name;
  preview('number').textContent = DEFAULTS.number;
  preview('mm').textContent = DEFAULTS.mm;
  preview('yy').textContent = DEFAULTS.yy;
  preview('cvc').textContent = DEFAULTS.cvc;
}

export function initFormSubmit() {
  const form = $('cardForm');
  const success = $('success');
  const continueBtn = $('continueBtn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      cardholder: $('cardholder').value,
      cardnumber: $('cardnumber').value,
      expmm: $('expmm').value,
      expyy: $('expyy').value,
      cvc: $('cvc').value,
    };
    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      renderErrors(errors);
      return;
    }
    clearErrors();
    form.hidden = true;
    success.hidden = false;
  });

  continueBtn.addEventListener('click', () => {
    success.hidden = true;
    form.hidden = false;
    resetAll();
  });
}
