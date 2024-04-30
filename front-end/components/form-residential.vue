<script setup lang="ts">
const owners = [
  {
    label : "O proprietário(a) é:",
    placeholder: "Pessoa Física (CPF)",
    model: "",
    select: true,
    option: ["Pessoa Física (CPF)", "Pessoa jurídica (PJ)"]
  },
  {
    label: "Nome completo:",
    placeholder: "Ex: João da Silva",
    model: "",
    name: "name",
    type: "text"
  },
  {
    label: "Nacionalidade",
    placeholder: "Ex: Brasileiro",
    model: "",
    name: "nationality",
    type: "text"
  },
  {
    label: "Estado Civil:",
    placeholder: "Solteiro(a)",
    model: "",
    select: true,
    option: ["Solteiro(a)", "Casado(a)"]
  },
  {
    label: "Profissão:",
    placeholder: "Ex: Gerente, Mecânico, Atendente...",
    model: "",
    name: "profession",
    type: "text"
  },
]
</script>

<template>
  <div class="flex justify-between">
    <Form
      title="Quais são as informações do proprietário(a)?"
      :info="owners"
    />
  
    <Page />
  </div>
</template>