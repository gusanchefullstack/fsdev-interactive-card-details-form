import { digitsOnly } from './formatters.js';

export const validate = ({ cardholder, cardnumber, expmm, expyy, cvc }) => {
  const errors = {};

  if (!cardholder || !cardholder.trim()) {
    errors.cardholder = "Can't be blank";
  }

  if (!cardnumber || !cardnumber.trim()) {
    errors.cardnumber = "Can't be blank";
  } else if (/[^\d\s]/.test(cardnumber)) {
    errors.cardnumber = 'Wrong format, numbers only';
  } else if (digitsOnly(cardnumber).length !== 16) {
    errors.cardnumber = 'Must be 16 digits';
  }

  if (!expmm || !expyy) {
    errors.exp = "Can't be blank";
  } else if (!/^\d{2}$/.test(expmm) || !/^\d{2}$/.test(expyy)) {
    errors.exp = 'Wrong format, numbers only';
  } else {
    const mm = Number(expmm);
    if (mm < 1 || mm > 12) errors.exp = 'Invalid month';
  }

  if (!cvc || !cvc.trim()) {
    errors.cvc = "Can't be blank";
  } else if (!/^\d{3}$/.test(cvc)) {
    errors.cvc = 'Must be 3 digits';
  }

  return errors;
};
