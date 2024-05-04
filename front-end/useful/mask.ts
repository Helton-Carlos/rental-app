export function maskCPF(num: number | string) {
  const cpf = typeof num === 'number' ? num.toString() : num;

  if(cpf) {
    return (
      cpf.substring(0, 3) +
      '.' +
      cpf.substring(3, 6) +
      '.' +
      cpf.substring(6, 9) +
      '-' +
      cpf.substring(9)
    );
  }
}

export function maskPJ(num: number | string) {
  const cnpj = typeof num === 'number' ? num.toString() : num;

  if(cnpj) {
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
}

export function maskMoney(value: number | string) {
  const number = typeof value === 'number' ? value.toString() : value;

  if (!number) return '0,00';

  const [integerPart, decimalPart] = number.split('.');

  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const formattedDecimalPart = decimalPart ? (decimalPart.length === 1 ? decimalPart + '0' : decimalPart) : '00';

  return `${formattedIntegerPart},${formattedDecimalPart}`;
}