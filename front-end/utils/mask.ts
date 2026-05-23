export function maskCPF(num: number | string): string {
  const cpf = typeof num === 'number' ? num.toString() : num;
  if (!cpf) return '';

  return (
    cpf.substring(0, 3) +
    '.' +
    cpf.substring(3, 6) +
    '.' +
    cpf.substring(6, 9) +
    '-' +
    cpf.substring(9, 11)
  );
}

export function maskPJ(num: number | string): string {
  const cnpj = typeof num === 'number' ? num.toString() : num;
  if (!cnpj) return '';

  return (
    cnpj.substring(0, 2) +
    '.' +
    cnpj.substring(2, 5) +
    '.' +
    cnpj.substring(5, 8) +
    '/' +
    cnpj.substring(8, 12) +
    '-' +
    cnpj.substring(12)
  );
}

export function maskMoney(value: number | string): string {
  const number = typeof value === 'number' ? value.toString() : value;
  if (!number) return '0,00';

  const [integerPart, decimalPart] = number.split('.');
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    '.',
  );
  const formattedDecimalPart = decimalPart
    ? decimalPart.length === 1
      ? decimalPart + '0'
      : decimalPart
    : '00';

  return `${formattedIntegerPart},${formattedDecimalPart}`;
}

export function maskCEP(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 5) return digits;
  return digits.substring(0, 5) + '-' + digits.substring(5);
}

export function applyMaskCPF(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  let result = digits;

  if (digits.length > 3)
    result = digits.substring(0, 3) + '.' + digits.substring(3);
  if (digits.length > 6)
    result = result.substring(0, 7) + '.' + digits.substring(6);
  if (digits.length > 9)
    result = result.substring(0, 11) + '-' + digits.substring(9);

  return result;
}

export function applyMaskMoney(value: string): string {
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';

  const number = parseInt(digits, 10);
  const formatted = (number / 100).toFixed(2);
  const [intPart, decPart] = formatted.split('.');
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${formattedInt},${decPart}`;
}

export function applyMaskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7)
    return `(${digits.substring(0, 2)}) ${digits.substring(2)}`;
  return `(${digits.substring(0, 2)}) ${digits.substring(2, 7)}-${digits.substring(7)}`;
}

export type MaskType = 'cpf' | 'cep' | 'money' | 'phone' | 'none';

export function getMaskForField(fieldName: string): MaskType {
  if (fieldName === 'cpf') return 'cpf';
  if (fieldName === 'cep') return 'cep';
  if (
    ['rental-value', 'deposit', 'infringement', 'termination'].includes(
      fieldName,
    )
  )
    return 'money';
  return 'none';
}

export function applyMask(value: string, maskType: MaskType): string {
  switch (maskType) {
    case 'cpf':
      return applyMaskCPF(value);
    case 'cep':
      return maskCEP(value);
    case 'money':
      return applyMaskMoney(value);
    case 'phone':
      return applyMaskPhone(value);
    default:
      return value;
  }
}
