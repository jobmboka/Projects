export function isRequired(value) {
  return value !== undefined && value !== null && String(value).trim() !== "";
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isValidKenyanPhone(value) {
  return /^(\+254|0)7\d{8}$|^(\+254|0)1\d{8}$/.test(value.replace(/\s/g, ""));
}
