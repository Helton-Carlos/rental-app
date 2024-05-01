<script setup lang="ts">
import { ref } from 'vue';
import { useHtmlToPaper } from '../composables/useHtmlToPaper';

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
    <div class="hidden sm:flex sm:w-[750px] sm:h-[750px] sm:bg-white sm:my-2 sm:px-4 sm:py-4 sm:mx-auto sm:overflow-auto">
      <div ref="contentToPrint">
        <h2 class="text-xl text-center font-bold my-2">CONTRATO DE LOCAÇÃO DE IMOVÉL RESIDENCIAL</h2>
        
        <p class="text-sm font-bold pb-2"> 
          IDENTIFICAÇÃO DAS PARTES CONTRATANTES
        </p>

        <p class="text-sm pb-2">
          <strong>LOCADOR:</strong> ____________, ____________, ____________, Solteiro(a), Carteira de identidade (RG) nº ____________, 
          expedida por ____________, C.P.F. nº ____________, residente na ____________, nº ____________, ____________, 
          ____________/____________, CEP: ____________.
        </p>

        <p class="text-sm py-2">
          <strong>LOCATÁRIO:</strong> ____________, ____________, ____________, Solteiro(a), Carteira de identidade (RG) nº ____________, 
          expedida por ____________, C.P.F. nº ____________, residente na ____________, nº ____________, ____________, 
          ____________/____________, CEP: ____________.
        </p>

        <p class="text-sm py-2">
          As partes acima nomeadas acordam o presente Contrato de Locação Residencial, de acordo com as cláusulas a seguir:
        </p>

        <p class="text-sm font-bold py-4">Cláusula 1ª - DO OBJETO DO CONTRATO</p>
        
        <p>
          O OBJETO deste contrato é o imóvel de propriedade do LOCADOR, situado na ____________, nº ____________, 
          ____________, ____________/____________, com as características a seguir:____________
        </p>
        <p>
          Imóvel isento de encargos ou quaisquer pendências financeiras.

          Parágrafo único. O atual documento é complementado pelo laudo de vistoria que descreve meticulosamente o imóvel e sua condição de preservação, no instante de entrega ao LOCATÁRIO.
        </p>

        <p class="text-sm font-bold py-4">Cláusula 2ª - DO PRAZO DE LOCAÇÃO</p> 

        <p>A duração da locação deste imóvel é de ____________ meses, iniciando-se em ____________.</p> 

        <p class="text-sm font-bold py-4">Cláusula 3ª - DA FINALIDADE DO IMÓVEL</p>   
          
        <p>
          O objetivo desta LOCAÇÃO é estritamente para a utilização do imóvel para fins de moradia, sendo vedado ao LOCATÁRIO sublocá-lo ou utilizá-lo de maneira diferente do estabelecido, a menos que haja consentimento explícito do LOCADOR.
        </p>    

        <p class="text-sm font-bold py-4">Cláusula 4ª - SOBRE O VALOR DO ALUGUEL, DESPESAS E IMPOSTOS</p>  
          
        <p class="pb-2">
          O LOCATÁRIO se compromete a pagar o aluguel mensal no valor de R$ ____________, que deverá ser realizado até o dia ____________ de cada mês subsequente ao vencido.
        </p>
        <p>
          § 1º. Este pagamento será efetuado em dinheiro (espécie), diretamente ao LOCADOR ou a terceiros que tenham a devida autorização deste.
        </p>
        <p>
          § 2º. O valor do aluguel poderá ser reajustado anualmente, com base nos índices previstos e acumulados no período anual do IGP-M. Caso haja alguma alteração no contexto governamental, todos os valores agregados ao aluguel, inclusive o próprio aluguel, serão revisados pelas partes.
        </p>
        <p>
          § 3º. O LOCATÁRIO, não realizando o pagamento do aluguel até a data estipulada, fica obrigado a pagar uma multa de 10% (dez por cento) sobre o valor do aluguel acordado neste contrato, além de juros de mora de 1% (um por cento) ao mês e correção monetária, conforme variação do IGP-M.
        </p>
        <p>
          § 4º. Todas as despesas como água, luz, gás, telefone, condomínio e tributos, ficarão sob a responsabilidade do LOCATÁRIO.
        </p>
        <p>
          § 5º. O LOCATÁRIO é obrigado a arcar com todos os impostos associados ao imóvel locado, incluindo o IPTU.
        </p>
        <p>
          § 6º. O LOCATÁRIO será responsabilizado por quaisquer multas decorrentes de desobediência às regras do condomínio ou às normas de convivência e vizinhança em vigor na jurisdição do imóvel.
        </p>

        <p class="text-sm font-bold py-4">Cláusula 5ª – DA GARANTIA</p> 

        <p class="pb-2">
          O LOCATÁRIO, para garantia do fiel cumprimento das obrigações ora pactuadas, depositará na conta do LOCADOR, a título de caução, a quantia de R$ ____________.
        </p>
        <p>
          § 1º. Este pagamento será efetuado da mesma forma que a locação, diretamente ao LOCADOR ou a terceiros que tenham a devida autorização deste.
        </p>
        <p>
          § 2º. O depósito da caução deverá ser realizado no ato da assinatura deste contrato, sendo que a falta do depósito da caução dará ao LOCADOR o direito de não efetivar a entrega do imóvel ao LOCATÁRIO.
        </p>
        <p>
          § 3º. Após o término da locação e com todas as obrigações adequadamente atendidas, o LOCATÁRIO estará habilitado a retirar o montante correspondente, incluindo possíveis benefícios resultantes, como juros e rendimentos.
        </p>
        <p>
          § 4º. A critério das partes envolvidas, o montante utilizado como caução pode ser destinado ao pagamento de aluguéis pendentes pelo LOCATÁRIO.
        </p>

        <p class="text-sm font-bold py-4">Cláusula 6ª - DEVERES DO LOCADOR</p> 
          
        <p class="pb-2">
          O LOCADOR se compromete a:
        </p>
        <p>
          I - Entregar ao LOCATÁRIO o imóvel em condições adequadas ao propósito estabelecido, garantindo seu uso pacífico e mantendo sua forma e destino durante o período de locação;
        </p>
        <p>
          II - Assumir responsabilidade pelos vícios ou defeitos preexistentes à locação e fornecer ao LOCATÁRIO recibo detalhado das quantias pagas;
        </p>
        <p>
          III - Arcar com taxas de administração imobiliária e intermediações, apresentando, quando solicitado, comprovantes de parcelas requeridas ao LOCATÁRIO;
        </p>
        <p>
          IV - O LOCADOR deve prover ao LOCATÁRIO, quando requerido por este, um relatório detalhado acerca das condições físicas nas quais o imóvel se encontra no momento da entrega, com indicações explícitas de quaisquer irregularidades ou defeitos preexistentes.
        </p>
        <p>
          V - Ao término do contrato, e observado o cumprimento das obrigações, devolver o valor da caução recebida, devidamente corrigido por juros e rendimentos.
        </p>
                
        <p class="text-sm font-bold py-4">Cláusula 7ª - DEVERES DO LOCATÁRIO</p> 

        <p class="pb-2">
          O LOCATÁRIO se obriga a:
        </p>
        <p>
          I - Efetuar o pagamento do aluguel e encargos no prazo acordado e utilizar o imóvel conforme seu propósito estipulado ou presumido, zelando por sua integridade como se fosse proprietário e comprometendo-se a restituí-lo conforme o laudo de vistoria inicial, descontando-se apenas as deteriorações decorrentes de uso comum;
        </p>
        <p>
          II - Comunicar prontamente o LOCADOR sobre danos ou defeitos cujo reparo seja de responsabilidade deste, assim como possíveis interferências de terceiros, além de assumir e corrigir quaisquer danos que tenham sido causados por sua ação ou daqueles sob sua responsabilidade;
        </p>
        <p>
          III - Abster-se de realizar modificações no imóvel sem a devida autorização escrita do LOCADOR e apresentar ao mesmo todos os documentos relacionados a tributos, encargos condominiais e intimações de autoridades, mesmo que direcionados ao LOCATÁRIO;
        </p>
        <p>
          IV - Conceder acesso ao LOCADOR para vistorias, previamente acordadas, e permitir visitações por terceiros em situações de intenção de venda ou transferência de direitos sobre o imóvel.
        </p>

        <p class="text-sm font-bold py-4">Cláusula 8ª - MELHORIAS E CONSTRUÇÕES</p> 
          
        <p class="pb-2">
          As benfeitorias necessárias serão passíveis de indenização, contanto que tenham sido feitas com a autorização do LOCADOR.
        </p>      
        <p>
          § 2º. As benfeitorias úteis, contudo, serão de responsabilidade do LOCATÁRIO. Contanto que tenham sido feitas com a autorização do LOCADOR.
        </p> 
        <p>
          § 3º. As benfeitorias voluptuárias não serão passíveis de indenização. Ao término da locação, o LOCATÁRIO poderá removê-las, contanto que essa remoção não prejudique a estrutura e a essência do imóvel.
        </p>  

        <p class="text-sm font-bold py-4">Cláusula 9ª - ACERCA DO DIREITO DE PREFERÊNCIA</p> 

        <p class="pb-2">
          Em situações de venda, compromisso de venda, transferência ou promessa de transferência de direitos ou pagamento em bens, o LOCATÁRIO possui prioridade para comprar o imóvel alugado nas mesmas condições oferecidas a terceiros. O LOCADOR deve informá-lo sobre a transação por meio de notificação judicial, extrajudicial ou qualquer outro método que garanta sua clara compreensão.
        </p> 
        <p> 
          § 1º. A notificação deve incluir detalhes sobre as condições da transação, especificamente o valor, a modalidade de pagamento, a presença de encargos reais e o local e horário em que a documentação relevante pode ser consultada.
        </p>  
        <p>
          § 2º. Depois de ser notificado, o LOCATÁRIO disporá de 30 (trinta) dias para expressar claramente sua concordância com a proposta.
        </p>  
        <p>
          § 3º. O direito de preferência não se aplica em situações de alienação do imóvel decorrentes de: decisão judicial; execução de garantias de qualquer natureza, incluindo leilões extrajudiciais; permuta; doação; conversão em capital social; cisão empresarial; fusão; incorporação ou estabelecimento de propriedade fiduciária.
        </p> 
        <p> 
          § 4º. A prioridade do condômino prevalecerá sobre a preferência do LOCATÁRIO.
        </p>  

        <p class="text-sm font-bold py-4">Cláusula 10ª - MULTA POR INFRAÇÃO</p> 

        <p>
          As partes acordam o pagamento da multa no valor de R$ ____________, a ser aplicada à parte que infringir qualquer uma das cláusulas contidas neste contrato, exceto nas hipóteses previstas na Cláusula 11ª.
        </p>  

        <p class="text-sm font-bold py-4">Cláusula 11ª - DA RESCISÃO</p>  

        <p class="pb-2">
          Se o LOCATÁRIO decidir rescindir o contrato antecipadamente, ele deverá pagar ao LOCADOR uma multa no valor de R$ ____________. Além disso, o LOCATÁRIO pode ser responsabilizado por eventuais perdas e danos.
        </p>  
        <p>
          § 1º. O LOCATÁRIO está isento do pagamento da multa de rescisão antecipada ou indenização se a entrega do imóvel for devido à transferência, a mando do empregador, seja este privado ou público, para outra localidade distinta daquela onde o contrato foi inicialmente estabelecido, desde que o LOCADOR seja notificado com pelo menos 30 (trinta) dias de antecedência.
        </p> 
        <p> 
          § 2º. Na eventualidade de uma prorrogação do contrato por tempo indeterminado, o LOCATÁRIO tem o direito de rescindir o contrato, desde que o LOCADOR seja notificado com uma antecedência mínima de 30 (trinta) dias.
        </p>  
        <p>
          § 3º. O LOCADOR somente pode rescindir o contrato nas situações especificamente descritas pela lei, sob risco de serem aplicadas as penalidades contratuais e legais pertinentes.
        </p>  
        <p>
          § 4º. No caso de desapropriação total ou parcial do imóvel locado, ou na ocorrência de um sinistro que torne o imóvel inabitável, este contrato será considerado automaticamente rescindido, independentemente de qualquer compensação entre as partes.
        </p> 
        <p> 
          § 5º. Se o LOCADOR falecer, os direitos e deveres da locação serão transferidos para seus herdeiros ou sucessores.
        </p> 
        <p> 
          § 6º. Se o LOCATÁRIO vier a falecer, os direitos e obrigações do contrato serão transferidos, em ordem, para: o cônjuge ou companheiro sobrevivente, herdeiros legais ou pessoas que dependiam economicamente dele e que moravam no imóvel locado.
        </p>  
          
        <p class="text-sm font-bold py-4"> Cláusula 12ª - DO FORO</p>  
       
        <p>
          O contrato atual entra em vigência entre as partes a partir do momento de sua assinatura, elegendo o foro da cidade onde está localizado o imóvel, para resolver quaisquer incertezas provenientes de sua execução e cumprimento; em concordância, justos e acordados, firmam este instrumento, em 2 (duas) cópias idênticas, juntamente com 2 (duas) testemunhas.
        </p>  

        <div class="mt-10">
          <p class="text-sm text-center font-bold py-2">Local e data de assinatura:</p>  
            
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
     Imprimir
    </button>
  </div>
</template>

<style> 
</style>
