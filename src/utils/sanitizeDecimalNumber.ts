const sanitizeDecimalNumber = (value: string | undefined, digits: number): string => {
  if (!value) {
    return ''.padEnd(digits, '0');
  }
  if (value.length > digits) {
    return value.slice(0, digits);
  }
  if (value.length < digits) {
    return value.padEnd(digits, '0');
  }
  return value;
};

export default sanitizeDecimalNumber;
