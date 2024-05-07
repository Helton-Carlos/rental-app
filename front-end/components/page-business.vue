<script setup lang="ts">
import { ref } from 'vue';
import { useHtmlToPaper } from '../composables/useHtmlToPaper';
import { useInfoPrint } from '../store/infoPrint';
import { maskCPF, maskMoney } from '../useful/mask';
import Print from '../public/image/print.svg';

const { $state } = useInfoPrint();

const { print } = useHtmlToPaper();

const contentToPrint = ref(null);

function handlePrint() {
  if (contentToPrint.value) {
    print(contentToPrint.value);
  }
};
</script>

<template>
  <div class="bg-gray p-2 m-5">
    <div class="hidden md:flex md:w-[750px] md:h-[750px] md:bg-white md:my-2 md:px-4 md:py-4 md:mx-auto md:overflow-auto">
      <div ref="contentToPrint">
        <h2 class="text-xl text-center font-bold my-2">CONTRATO DE LOCAÇÃO DE IMOVÉL COMERCIAL</h2>
        
        <div class="py-5">
          <p class="text-sm font-bold pb-2"> 
            IDENTIFICAÇÃO DAS PARTES CONTRATANTES
          </p>

          <p class="text-sm pb-2">
            <strong>LOCADOR: </strong> 
          </p> 
          
          <span class="capitalize" v-if="$state?.owners1[1]">{{ $state?.owners1[1] }}, </span><span v-else> ____________, </span> 
          <span class="capitalize" v-if="$state?.owners1[2]">{{ $state?.owners1[2] }}, </span><span v-else> ____________, </span> 
          <span class="capitalize" v-if="$state?.owners1[4]">{{ $state?.owners1[4] }}, </span><span v-else> ____________, </span>  
          <span v-if="$state?.owners1[5]">{{ $state?.owners1[0] }}, CPF: {{ maskCPF($state?.owners1[5]) }}, </span><span v-else> ____________, </span>
          Estado civil: <span v-if="$state?.owners1[3]">{{ $state?.owners1[3] }}, </span><span v-else> ____________, </span>
          residente na <span class="capitalize" v-if="$state?.owners2[1]">{{ $state?.owners2[1] }}, </span><span v-else> ____________, </span>  
          nº<span class="capitalize" v-if="$state?.owners2[2]">{{ $state?.owners2[2] }}, </span><span v-else> ____________, </span>  
          <span class="capitalize" v-if="$state?.owners2[4]">{{ $state?.owners2[4] }}, </span><span v-else> ____________, </span>  
          <span class="capitalize" v-if="$state?.owners2[5]">{{ $state?.owners2[5] }}/</span><span v-else> ____________/</span>
          <span class="uppercase" v-if="$state?.owners2[6]">{{ $state?.owners2[6] }},</span><span v-else> ____________, </span>
          CEP: <span class="capitalize" v-if="$state?.owners2[0]">{{ $state?.owners2[0] }}. </span><span v-else> ____________.</span>
      

          <p class="text-sm py-2">
            <strong>LOCATÁRIO: </strong>
          </p>

          <span class="capitalize" v-if="$state?.tenant1[1]">{{ $state?.tenant1[1] }}, </span><span v-else> ____________, </span> 
          <span class="capitalize" v-if="$state?.tenant1[2]">{{ $state?.tenant1[2] }}, </span><span v-else> ____________, </span> 
          <span class="capitalize" v-if="$state?.tenant1[4]">{{ $state?.tenant1[4] }}, </span><span v-else> ____________, </span>  
          <span v-if="$state?.tenant1[5]">{{ $state?.tenant1[0] }}, CPF: {{ maskCPF($state?.tenant1[5]) }}, </span><span v-else> ____________, </span>
          Estado civil: <span v-if="$state?.tenant1[3]">{{ $state?.tenant1[3] }}, </span><span v-else> ____________, </span>
          residente na <span class="capitalize" v-if="$state?.tenant2[1]">{{ $state?.tenant2[1] }}, </span><span v-else> ____________, </span>  
          nº<span class="capitalize" v-if="$state?.tenant2[2]">{{ $state?.tenant2[2] }}, </span><span v-else> ____________, </span>  
          <span class="capitalize" v-if="$state?.tenant2[4]">{{ $state?.tenant2[4] }}, </span><span v-else> ____________, </span>  
          <span class="capitalize" v-if="$state?.tenant2[5]">{{ $state?.tenant2[5] }}/</span><span v-else> ____________/</span>
          <span class="uppercase" v-if="$state?.tenant2[6]">{{ $state?.tenant2[6] }},</span><span v-else> ____________, </span>
          CEP: <span class="capitalize" v-if="$state?.tenant2[0]">{{ $state?.tenant2[0] }}. </span><span v-else> ____________.</span>
        

          <p class="text-sm py-2">
            As partes acima nomeadas acordam o presente Contrato de Locação Comercial, de acordo com as cláusulas a seguir:
          </p>

          <p class="text-sm font-bold py-5">Cláusula 1ª - DO OBJETO DO CONTRATO</p>
          
          <p>
            O OBJETO deste contrato é o imóvel de propriedade do LOCADOR, situado na 
            <span class="capitalize" v-if="$state?.owners2[1]">{{ $state?.owners2[1] }}, </span><span v-else> ____________, </span>  
            nº<span class="capitalize" v-if="$state?.owners2[2]">{{ $state?.owners2[2] }}, </span><span v-else> ____________, </span>  
            <span class="capitalize" v-if="$state?.owners2[4]">{{ $state?.owners2[4] }}, </span><span v-else> ____________, </span>  
            <span class="capitalize" v-if="$state?.owners2[5]">{{ $state?.owners2[5] }}/</span><span v-else> ____________/</span>
            <span class="uppercase" v-if="$state?.owners2[6]">{{ $state?.owners2[6] }},</span><span v-else> ____________, </span>
            CEP: <span class="capitalize" v-if="$state?.owners2[0]">{{ $state?.owners2[0] }}. </span><span v-else> ____________.</span>
          </p>
          <p>
            Imóvel isento de encargos ou quaisquer pendências financeiras.

            Parágrafo único. O atual documento é complementado pelo laudo de vistoria que descreve meticulosamente o imóvel e sua condição de preservação, no instante de entrega ao LOCATÁRIO.
          </p>

          <p class="text-sm font-bold py-5">Cláusula 2ª - DO PRAZO DE LOCAÇÃO</p> 

          <p>A duração da locação deste imóvel é de
            <span class="capitalize" v-if="$state?.agreement[0]">{{ $state?.agreement[0] }} meses, </span><span v-else> ____________ meses, </span>
            iniciando-se em <span class="capitalize" v-if="$state?.agreement[1]">{{ $state?.agreement[1] }} </span><span v-else> ____________.</span>
          </p> 

          <p class="pb-2">
            § 1°. O LOCATÁRIO poderá optar pela extensão deste contrato se:
          </p>
          <p class="pb-2">
            a. A duração inicial do contrato ou a soma das durações de contratos contínuos entre as partes atinge 5 (cinco) anos; e
          </p>
          <p class="pb-2">
            b. O LOCATÁRIO mantenha a operação do seu comércio no mesmo setor por um período ininterrupto e mínimo de 3 (três) anos.
          </p>
          <p class="pb-2">
            § 2°. No caso de dissolução da sociedade comercial devido ao falecimento de um dos sócios, o sócio remanescente assume o direito de renovação, contanto que permaneça atuando no mesmo segmento.
          </p>
          <p class="pb-2">
            § 3°. O LOCADOR fica isento da obrigação de estender o contrato se:
          </p>
          <p class="pb-2">
            a. O Poder Público exigir obras substanciais no imóvel, ou se forem necessárias modificações que aumentem o valor comercial ou da propriedade;
          </p>
          <p class="pb-2">
            b. O imóvel for requisitado para uso próprio ou para relocalização de um estabelecimento comercial existente há mais de um ano, cuja maioria do capital seja de posse do LOCADOR, seu cônjuge, ascendente ou descendente.
          </p>
          <p class="pb-2">
            § 4°. Nesse contexto, o imóvel não poderá ser alocado para operações comerciais no mesmo segmento do LOCATÁRIO.
          </p>
          <p class="pb-2">
            § 5°. O LOCATÁRIO será compensado por perdas, danos e lucros cessantes resultantes da mudança, perda de localização e desvalorização do estabelecimento comercial, caso a extensão do contrato não seja realizada devido à oferta de um terceiro em termos mais favoráveis, ou se o LOCADOR não cumprir o propósito declarado ou iniciar as obras exigidas pelo Poder Público dentro de 3 (três) meses após a desocupação do imóvel.
          </p>
          <p class="pb-2">
            § 6°. Após o término do período estipulado, se o LOCATÁRIO permanecer no imóvel por mais de trinta dias sem oposição do LOCADOR, será considerado que a locação foi estendida por tempo indeterminado, retendo todas as outras cláusulas e condições previamente acordadas no contrato.
          </p>

          <p class="text-sm font-bold py-5">Cláusula 4ª - SOBRE O VALOR DO ALUGUEL, DESPESAS E IMPOSTOS</p> 

          <p class="pb-2">
            O LOCATÁRIO, para garantia do fiel cumprimento das obrigações ora pactuadas, depositará na conta do LOCADOR, a título de caução, 
            a quantia de R$ <span class="capitalize" v-if="$state?.agreement[4]">{{ maskMoney($state?.agreement[4]) }} </span>
            <span v-else> ____________.</span> 
          </p>
          <p class="pb-2">
            § 1º. Este pagamento será efetuado em dinheiro (espécie), diretamente ao LOCADOR ou a terceiros que tenham a devida autorização deste.
          </p>
          <p class="pb-2">
            § 2º. O valor do aluguel poderá ser reajustado anualmente, com base nos índices previstos e acumulados no período anual do IGP-M. Caso haja alguma alteração no contexto governamental, todos os valores agregados ao aluguel, inclusive o próprio aluguel, serão revisados pelas partes.
          </p>
          <p class="pb-2">
            § 3º. O LOCATÁRIO, não realizando o pagamento do aluguel até a data estipulada, fica obrigado a pagar uma multa de 10% (dez por cento) sobre o valor do aluguel acordado neste contrato, além de juros de mora de 1% (um por cento) ao mês e correção monetária, conforme variação do IGP-M.
          </p>
          <p class="pb-2">
            § 4º. Todas as despesas como água, luz, gás, telefone, condomínio e tributos, ficarão sob a responsabilidade do LOCATÁRIO.
          </p>
          <p class="pb-2">
            § 5º. O LOCATÁRIO é obrigado a arcar com todos os impostos associados ao imóvel locado, incluindo o IPTU.
          </p>
          <p class="pb-2">
            § 6º. O LOCATÁRIO será responsabilizado por quaisquer multas decorrentes de desobediência às regras do condomínio ou às normas de convivência e vizinhança em vigor na jurisdição do imóvel.
          </p>

          <p class="text-sm font-bold py-5">Cláusula 5ª – DA GARANTIA</p> 
            
          <p class="pb-2">
            O LOCADOR se compromete a:
          </p>
          <p class="pb-2">
            § 1º. Este pagamento será efetuado da mesma forma que a locação, diretamente ao LOCADOR ou a terceiros que tenham a devida autorização deste.
          </p>
          <p class="pb-2">
            § 2º. O depósito da caução deverá ser realizado no ato da assinatura deste contrato, sendo que a falta do depósito da caução dará ao LOCADOR o direito de não efetivar a entrega do imóvel ao LOCATÁRIO.
          </p>
          <p class="pb-2">
            § 3º. Após o término da locação e com todas as obrigações adequadamente atendidas, o LOCATÁRIO estará habilitado a retirar o montante correspondente, incluindo possíveis benefícios resultantes, como juros e rendimentos.
          </p>
          <p class="pb-2">
            § 4º. A critério das partes envolvidas, o montante utilizado como caução pode ser destinado ao pagamento de aluguéis pendentes pelo LOCATÁRIO.
          </p>
                  
          <p class="text-sm font-bold py-5">Cláusula 6ª - DEVERES DO LOCADOR</p> 

          <p class="pb-2">
            O LOCATÁRIO se obriga a:
          </p>
          <p class="pb-2">      
            I - Entregar ao LOCATÁRIO o imóvel em condições adequadas ao propósito estabelecido, garantindo seu uso pacífico e mantendo sua forma e destino durante o período de locação;
          </p>
          <p class="pb-2">
            II - Assumir responsabilidade pelos vícios ou defeitos preexistentes à locação e fornecer ao LOCATÁRIO recibo detalhado das quantias pagas;
          </p>
          <p class="pb-2">
            III - Arcar com taxas de administração imobiliária e intermediações, apresentando, quando solicitado, comprovantes de parcelas requeridas ao LOCATÁRIO;
          </p>
          <p class="pb-2">
            IV - O LOCADOR deve prover ao LOCATÁRIO, quando requerido por este, um relatório detalhado acerca das condições físicas nas quais o imóvel se encontra no momento da entrega, com indicações explícitas de quaisquer irregularidades ou defeitos preexistentes.
          </p>
          <p class="pb-2">
            V - Ao término do contrato, e observado o cumprimento das obrigações, devolver o valor da caução recebida, devidamente corrigido por juros e rendimentos.
          </p>

          <p class="text-sm font-bold py-5">Cláusula 7ª - DEVERES DO LOCATÁRIO</p> 
            
          <p class="pb-2">
            O LOCATÁRIO se obriga a:
          </p>      
          <p class="pb-2">
            I - Efetuar o pagamento do aluguel e encargos no prazo acordado e utilizar o imóvel conforme seu propósito estipulado ou presumido, zelando por sua integridade como se fosse proprietário e comprometendo-se a restituí-lo conforme o laudo de vistoria inicial, descontando-se apenas as deteriorações decorrentes de uso comum;
          </p> 
          <p class="pb-2">
            II - Comunicar prontamente o LOCADOR sobre danos ou defeitos cujo reparo seja de responsabilidade deste, assim como possíveis interferências de terceiros, além de assumir e corrigir quaisquer danos que tenham sido causados por sua ação ou daqueles sob sua responsabilidade;
          </p>  
          <p class="pb-2">
            III - Abster-se de realizar modificações no imóvel sem a devida autorização escrita do LOCADOR e apresentar ao mesmo todos os documentos relacionados a tributos, encargos condominiais e intimações de autoridades, mesmo que direcionados ao LOCATÁRIO;
          </p>  
          <p class="pb-2">
            IV - Conceder acesso ao LOCADOR para vistorias, previamente acordadas, e permitir visitações por terceiros em situações de intenção de venda ou transferência de direitos sobre o imóvel.
          </p>

          <p class="text-sm font-bold py-5">Cláusula 8ª - MELHORIAS E CONSTRUÇÕES</p> 

          <p class="pb-2">
            As benfeitorias necessárias serão passíveis de indenização, contanto que tenham sido feitas com a autorização do LOCADOR.
          </p> 
          <p class="pb-2"> 
            § 1º.  As benfeitorias úteis, contudo, serão de responsabilidade do LOCATÁRIO. Contanto que tenham sido feitas com a autorização do LOCADOR.
          </p>  
          <p class="pb-2">
            § 2º. As benfeitorias voluptuárias não serão passíveis de indenização. Ao término da locação, o LOCATÁRIO poderá removê-las, contanto que essa remoção não prejudique a estrutura e a essência do imóvel.
          </p>  

          <p class="text-sm font-bold py-5">Cláusula 9ª - ACERCA DO DIREITO DE PREFERÊNCIA</p> 

          <p class="pb-2">
            Em situações de venda, compromisso de venda, transferência ou promessa de transferência de direitos ou pagamento em bens, o LOCATÁRIO possui prioridade para comprar o imóvel alugado nas mesmas 
            condições oferecidas a terceiros. O LOCADOR deve informá-lo sobre a transação por meio de notificação judicial, extrajudicial ou qualquer outro método que garanta sua clara compreensão.
          </p>  

          <p class="pb-2"> 
            § 1º. A notificação deve incluir detalhes sobre as condições da transação, especificamente o valor, a modalidade de pagamento, a presença de encargos reais e o local e horário em que a documentação relevante pode ser consultada.
          </p> 

          <p class="pb-2"> 
            § 2º. Depois de ser notificado, o LOCATÁRIO disporá de 30 (trinta) dias para expressar claramente sua concordância com a proposta.
          </p> 

          <p class="pb-2"> 
            § 3º. O direito de preferência não se aplica em situações de alienação do imóvel decorrentes de: decisão judicial; execução de garantias de qualquer natureza, incluindo leilões extrajudiciais; permuta; doação; conversão em capital social; cisão empresarial; fusão; incorporação ou estabelecimento de propriedade fiduciária.
          </p> 

          <p class="pb-2"> 
            § 4º. A prioridade do condômino prevalecerá sobre a preferência do LOCATÁRIO.
          </p> 

          <p class="text-sm font-bold py-5">Cláusula 10ª - MULTA POR INFRAÇÃO</p>  

          <p class="pb-2">
            As partes acordam o pagamento da multa no valor de R$ ____________, a ser aplicada à parte que infringir qualquer uma das cláusulas contidas neste contrato, exceto nas hipóteses previstas na Cláusula 11ª.
          </p>
            
          <p class="text-sm font-bold py-5">Cláusula 11ª - DA RESCISÃO</p>  
        
          <p class="pb-2">
            Se o LOCATÁRIO decidir rescindir o contrato antecipadamente, ele deverá pagar ao LOCADOR uma multa no valor de R$ ____________. Além disso, o LOCATÁRIO pode ser responsabilizado por eventuais perdas e danos.
          </p> 

          <p class="pb-2">
            § 1º. O LOCATÁRIO está isento do pagamento da multa de rescisão antecipada ou indenização se a entrega do imóvel for devido à transferência, a mando do empregador, seja este privado ou público, para outra localidade distinta daquela onde o contrato foi inicialmente estabelecido, desde que o LOCADOR seja notificado com pelo menos 30 (trinta) dias de antecedência.
          </p>  

          <p class="pb-2">
            § 2º. Na eventualidade de uma prorrogação do contrato por tempo indeterminado, o LOCATÁRIO tem o direito de rescindir o contrato, desde que o LOCADOR seja notificado com uma antecedência mínima de 30 (trinta) dias.
          </p>  

          <p class="pb-2">
            § 3º. O LOCADOR somente pode rescindir o contrato nas situações especificamente descritas pela lei, sob risco de serem aplicadas as penalidades contratuais e legais pertinentes.
          </p>  

          <p class="pb-2">
            § 4º. No caso de desapropriação total ou parcial do imóvel locado, ou na ocorrência de um sinistro que torne o imóvel inabitável, este contrato será considerado automaticamente rescindido, independentemente de qualquer compensação entre as partes.
          </p>  

          <p class="pb-2">
            § 5º. Se o LOCADOR falecer, os direitos e deveres da locação serão transferidos para seus herdeiros ou sucessores.
          </p>  

          <p class="pb-2">
           § 6º. Se o LOCATÁRIO vier a falecer, os direitos e obrigações do contrato serão transferidos, em ordem, para: o cônjuge ou companheiro sobrevivente, herdeiros legais ou pessoas que dependiam economicamente dele e que moravam no imóvel locado.
          </p>  
          
          <p class="text-sm font-bold py-5">Cláusula 12ª - DO FORO</p>  
        
          <p class="pb-2">
            O contrato atual entra em vigência entre as partes a partir do momento de sua assinatura, elegendo o foro da cidade onde está localizado o imóvel, para resolver quaisquer incertezas provenientes de sua execução e cumprimento; em concordância, justos e acordados, firmam este instrumento, em 2 (duas) cópias idênticas, juntamente com 2 (duas) testemunhas.
          </p> 
        </div> 

        <div class="mt-10">
          <p class="text-sm text-center font-bold py-2 pt-4">Local e data de assinatura:</p>  
            
          <p class="text-center py-2">____________/____________, ____________ de ____________ de ____________</p>
            
          <p class="text-sm text-center font-bold py-2">LOCADOR:</p>  
            
          <p class="text-center py-2">____________________________________</p><p class="text-center py-2"> ____________</p>

          <p class="text-sm text-center font-bold py-2">LOCATÁRIO:</p>  
            
          <p class="text-center py-2">____________________________________</p><p class="text-center py-2"> ____________</p>
          <p class="text-sm text-center font-bold py-2">1º TESTEMUNHA:</p>     
          <p class="text-center py-2">____________________________________</p>
    
          <p class="text-center py-2">Nome: ____________</p>  
          <p class="text-center py-2">CPF: ____________</p>  

          <p class="text-sm text-center font-bold py-2">2º TESTEMUNHA:</p>     
          <p class="text-center py-2">____________________________________</p>
          
          <p class="text-center py-2">Nome: ____________</p>  
          <p class="text-center py-2">CPF: ____________</p>  
        </div>
      </div>
    </div>

    <button 
      class="w-full btn-primary mt-3"
      @click="handlePrint"
    >
      <div class="flex justify-center items-center">
        <span class="pr-1">Imprimir</span>
      
        <img :src="Print" alt="imprimir" />
      </div>
    </button>
  </div>
</template>