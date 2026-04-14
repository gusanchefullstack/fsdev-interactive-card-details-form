export const digitsOnly = (value) => value.replace(/\D+/g, '');

export const formatCardNumber = (value) => {
  const digits = digitsOnly(value).slice(0, 16);
  return digits.replace(/(.{4})/g, '$1 ').trim();
};

export const padOrDefault = (value, length, fallback) => {
  if (!value) return fallback;
  return value.length >= length ? value.slice(0, length) : value.padStart(length, '0');
};
