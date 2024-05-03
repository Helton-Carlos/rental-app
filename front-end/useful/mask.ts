export function maskCPF(num: number | string) {
  const cpf = typeof num === 'number' ? num.toString() : num;

  if(cpf) {
    if (cpf.length !== 11) {
      console.log('erro')
    }

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
    if (cnpj.length !== 14) {
      console.log('erro')
    }

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