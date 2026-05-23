interface IField {
  label: string;
  placeholder?: string;
  model: string;
  select?: boolean;
  option?: string[];
  name?: string;
  type?: string;
  max?: number;
}

const ownerPersonalFields: IField[] = [
  {
    label: 'Nome completo:',
    placeholder: 'Ex: João da Silva',
    model: '',
    name: 'name',
    type: 'text',
    max: 80,
  },
  {
    label: 'Nacionalidade',
    placeholder: 'Escolha',
    name: 'nationality',
    model: '',
    select: true,
    option: ['Brasileiro(a)', 'Estrangeiro(a)'],
  },
  {
    label: 'Estado Civil:',
    placeholder: 'Escolha',
    name: 'marital',
    model: '',
    select: true,
    option: ['Solteiro(a)', 'Casado(a)'],
  },
  {
    label: 'Profissão:',
    placeholder: 'Ex: Gerente',
    model: '',
    name: 'profession',
    type: 'text',
    max: 50,
  },
  {
    label: 'CPF:',
    placeholder: '000.000.000-00',
    type: 'text',
    name: 'cpf',
    model: '',
    max: 14,
  },
];

const addressFields: IField[] = [
  {
    label: 'CEP:',
    placeholder: '00000-000',
    type: 'text',
    name: 'cep',
    model: '',
    max: 9,
  },
  {
    label: 'Rua:',
    placeholder: 'Ex: Rua das Flores',
    name: 'street',
    type: 'text',
    model: '',
    max: 80,
  },
  {
    label: 'Número:',
    placeholder: 'Ex: 123',
    model: '',
    name: 'number',
    type: 'text',
    max: 10,
  },
  {
    label: 'Bairro:',
    placeholder: 'Ex: Centro',
    model: '',
    name: 'neighborhood',
    type: 'text',
    max: 50,
  },
  {
    label: 'Cidade:',
    placeholder: 'Ex: São Paulo',
    model: '',
    name: 'city',
    type: 'text',
    max: 40,
  },
  {
    label: 'UF:',
    placeholder: 'Ex: SP',
    model: '',
    name: 'uf',
    type: 'text',
    max: 2,
  },
];

const contractBaseFields: IField[] = [
  {
    label: 'Duração:',
    placeholder: 'Ex: 12 meses',
    type: 'text',
    name: 'duration',
    model: '',
    max: 20,
  },
  {
    label: 'Data de início:',
    name: 'date-init',
    type: 'date',
    model: '',
    max: 10,
  },
  {
    label: 'Valor mensal (R$):',
    placeholder: 'Ex: 1.500,00',
    model: '',
    name: 'rental-value',
    type: 'text',
    max: 15,
  },
  {
    label: 'Dia de vencimento:',
    placeholder: 'Ex: 5',
    model: '',
    name: 'term',
    type: 'text',
    max: 3,
  },
  {
    label: 'Valor do caução (R$):',
    placeholder: 'Ex: 3.000,00',
    model: '',
    name: 'deposit',
    type: 'text',
    max: 15,
  },
  {
    label: 'Multa por infração (R$):',
    placeholder: 'Ex: 2.000,00',
    model: '',
    name: 'infringement',
    type: 'text',
    max: 15,
  },
];

export const residentialSteps: IField[][] = [
  ownerPersonalFields.map((f) => ({ ...f })),
  addressFields.map((f) => ({ ...f, label: `${f.label} (Proprietário)` })),
  ownerPersonalFields.map((f) => ({
    ...f,
    label: f.label.replace(':', ' (Inquilino):'),
  })),
  addressFields.map((f) => ({ ...f, label: `${f.label} (Inquilino)` })),
  [
    ...addressFields.map((f) => ({ ...f, label: `${f.label} (Imóvel)` })),
    {
      label: 'Tipo do imóvel:',
      placeholder: 'Escolha',
      name: 'property-type',
      model: '',
      select: true,
      option: ['Casa', 'Apartamento', 'Kitnet', 'Sobrado'],
    },
  ],
  contractBaseFields.map((f) => ({ ...f })),
];

export const residentialTitles = [
  'Dados do proprietário',
  'Endereço do proprietário',
  'Dados do inquilino',
  'Endereço do inquilino',
  'Dados do imóvel',
  'Condições do contrato',
];

export const commercialSteps: IField[][] = [
  ownerPersonalFields.map((f) => ({ ...f })),
  addressFields.map((f) => ({ ...f, label: `${f.label} (Proprietário)` })),
  ownerPersonalFields.map((f) => ({
    ...f,
    label: f.label.replace(':', ' (Locatário):'),
  })),
  addressFields.map((f) => ({ ...f, label: `${f.label} (Locatário)` })),
  [
    ...addressFields.map((f) => ({ ...f, label: `${f.label} (Imóvel)` })),
    {
      label: 'Tipo do espaço:',
      placeholder: 'Escolha',
      name: 'space-type',
      model: '',
      select: true,
      option: ['Sala comercial', 'Loja', 'Galpão', 'Escritório'],
    },
    {
      label: 'Atividade comercial:',
      placeholder: 'Ex: Comércio varejista',
      model: '',
      name: 'activity',
      type: 'text',
      max: 60,
    },
  ],
  contractBaseFields.map((f) => ({ ...f })),
];

export const commercialTitles = [
  'Dados do proprietário',
  'Endereço do proprietário',
  'Dados do locatário',
  'Endereço do locatário',
  'Dados do imóvel comercial',
  'Condições do contrato',
];

export const partySpaceSteps: IField[][] = [
  ownerPersonalFields.map((f) => ({ ...f })),
  addressFields.map((f) => ({ ...f, label: `${f.label} (Proprietário)` })),
  ownerPersonalFields.map((f) => ({
    ...f,
    label: f.label.replace(':', ' (Locatário):'),
  })),
  [
    ...addressFields.map((f) => ({ ...f, label: `${f.label} (Espaço)` })),
    {
      label: 'Tipo do espaço:',
      placeholder: 'Escolha',
      name: 'space-type',
      model: '',
      select: true,
      option: [
        'Chácara',
        'Salão de festas',
        'Clube',
        'Sítio',
        'Espaço de eventos',
      ],
    },
    {
      label: 'Capacidade (pessoas):',
      placeholder: 'Ex: 100',
      model: '',
      name: 'capacity',
      type: 'text',
      max: 5,
    },
  ],
  [
    {
      label: 'Data do evento:',
      name: 'event-date',
      type: 'date',
      model: '',
      max: 10,
    },
    {
      label: 'Horário de início:',
      placeholder: 'Ex: 14:00',
      model: '',
      name: 'start-time',
      type: 'time',
    },
    {
      label: 'Horário de término:',
      placeholder: 'Ex: 23:00',
      model: '',
      name: 'end-time',
      type: 'time',
    },
    {
      label: 'Valor da locação (R$):',
      placeholder: 'Ex: 3.000,00',
      model: '',
      name: 'rental-value',
      type: 'text',
      max: 15,
    },
    {
      label: 'Valor do caução (R$):',
      placeholder: 'Ex: 1.000,00',
      model: '',
      name: 'deposit',
      type: 'text',
      max: 15,
    },
    {
      label: 'Multa por danos (R$):',
      placeholder: 'Ex: 5.000,00',
      model: '',
      name: 'infringement',
      type: 'text',
      max: 15,
    },
  ],
];

export const partySpaceTitles = [
  'Dados do proprietário',
  'Endereço do proprietário',
  'Dados do locatário',
  'Dados do espaço',
  'Condições da locação',
];

export const vehicleSteps: IField[][] = [
  ownerPersonalFields.map((f) => ({ ...f })),
  ownerPersonalFields.map((f) => ({
    ...f,
    label: f.label.replace(':', ' (Locatário):'),
  })),
  [
    {
      label: 'Marca:',
      placeholder: 'Ex: Toyota',
      model: '',
      name: 'brand',
      type: 'text',
      max: 30,
    },
    {
      label: 'Modelo:',
      placeholder: 'Ex: Corolla',
      model: '',
      name: 'model',
      type: 'text',
      max: 30,
    },
    {
      label: 'Ano:',
      placeholder: 'Ex: 2022',
      model: '',
      name: 'year',
      type: 'text',
      max: 4,
    },
    {
      label: 'Placa:',
      placeholder: 'Ex: ABC-1234',
      model: '',
      name: 'plate',
      type: 'text',
      max: 8,
    },
    {
      label: 'Cor:',
      placeholder: 'Ex: Prata',
      model: '',
      name: 'color',
      type: 'text',
      max: 20,
    },
    {
      label: 'Renavam:',
      placeholder: 'Ex: 00000000000',
      model: '',
      name: 'renavam',
      type: 'text',
      max: 11,
    },
    {
      label: 'Km atual:',
      placeholder: 'Ex: 45.000',
      model: '',
      name: 'km',
      type: 'text',
      max: 10,
    },
  ],
  [
    {
      label: 'Duração:',
      placeholder: 'Ex: 30 dias',
      type: 'text',
      name: 'duration',
      model: '',
      max: 20,
    },
    {
      label: 'Data de início:',
      name: 'date-init',
      type: 'date',
      model: '',
      max: 10,
    },
    {
      label: 'Valor da locação (R$):',
      placeholder: 'Ex: 2.500,00',
      model: '',
      name: 'rental-value',
      type: 'text',
      max: 15,
    },
    {
      label: 'Valor do caução (R$):',
      placeholder: 'Ex: 5.000,00',
      model: '',
      name: 'deposit',
      type: 'text',
      max: 15,
    },
    {
      label: 'Multa por atraso (R$):',
      placeholder: 'Ex: 500,00',
      model: '',
      name: 'infringement',
      type: 'text',
      max: 15,
    },
    {
      label: 'Limite de km:',
      placeholder: 'Ex: 3.000 km',
      model: '',
      name: 'km-limit',
      type: 'text',
      max: 10,
    },
  ],
];

export const vehicleTitles = [
  'Dados do proprietário',
  'Dados do locatário',
  'Dados do veículo',
  'Condições da locação',
];

export const productSteps: IField[][] = [
  ownerPersonalFields.map((f) => ({ ...f })),
  ownerPersonalFields.map((f) => ({
    ...f,
    label: f.label.replace(':', ' (Locatário):'),
  })),
  [
    {
      label: 'Tipo do equipamento:',
      placeholder: 'Escolha',
      name: 'equipment-type',
      model: '',
      select: true,
      option: [
        'Máquina pesada',
        'Equipamento eletrônico',
        'Ferramenta',
        'Outro',
      ],
    },
    {
      label: 'Descrição:',
      placeholder: 'Ex: Retroescavadeira CAT 416',
      model: '',
      name: 'description',
      type: 'text',
      max: 100,
    },
    {
      label: 'Número de série:',
      placeholder: 'Ex: SN-123456',
      model: '',
      name: 'serial',
      type: 'text',
      max: 30,
    },
    {
      label: 'Estado de conservação:',
      placeholder: 'Escolha',
      name: 'condition',
      model: '',
      select: true,
      option: ['Novo', 'Bom', 'Regular', 'Usado'],
    },
    {
      label: 'Valor do bem (R$):',
      placeholder: 'Ex: 50.000,00',
      model: '',
      name: 'asset-value',
      type: 'text',
      max: 15,
    },
  ],
  [
    {
      label: 'Duração:',
      placeholder: 'Ex: 15 dias',
      type: 'text',
      name: 'duration',
      model: '',
      max: 20,
    },
    {
      label: 'Data de início:',
      name: 'date-init',
      type: 'date',
      model: '',
      max: 10,
    },
    {
      label: 'Valor da locação (R$):',
      placeholder: 'Ex: 5.000,00',
      model: '',
      name: 'rental-value',
      type: 'text',
      max: 15,
    },
    {
      label: 'Valor do caução (R$):',
      placeholder: 'Ex: 10.000,00',
      model: '',
      name: 'deposit',
      type: 'text',
      max: 15,
    },
    {
      label: 'Multa por danos (R$):',
      placeholder: 'Ex: 20.000,00',
      model: '',
      name: 'infringement',
      type: 'text',
      max: 15,
    },
  ],
];

export const productTitles = [
  'Dados do proprietário',
  'Dados do locatário',
  'Dados do equipamento',
  'Condições da locação',
];
