const sanitizeDecimalNumber = (value?: string, minimumDigits?: number,  maximumDigits?: number): string => {
  if (!value && minimumDigits) {
    return ''.padEnd(minimumDigits, '0');
  }
  if (!value) {
    return '';
  }
  if (maximumDigits && value.length > maximumDigits) {
    return value.slice(0, maximumDigits);
  }
  if (minimumDigits && value.length < minimumDigits) {
    return value.padEnd(minimumDigits, '0');
  }
  return value;
};

export default sanitizeDecimalNumber;
