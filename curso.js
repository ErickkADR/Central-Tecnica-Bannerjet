'use strict';

/* ============================================================
   COURSE DATA
============================================================ */
const COURSES = [
  {
    id: 'linha-a3',
    title: 'Linha A3',
    subtitle: 'Plotters de Recorte',
    desc: 'Monte, calibre, opere e mantenha os equipamentos da Linha A3: A3 Pro, Servo, Pro Max 2, Pro Max 3 e Twin. Do setup inicial à operação avançada com CameraCut.',
    icon: 'fa-scissors',
    gradient: 'linear-gradient(135deg,#F79E77,#F58979)',
    img: 'images/image-27-1.png',
    modules: [
      {
        id: 'm1', title: 'Módulo 1 — Montagem e Primeiros Passos',
        desc: 'Setup inicial, montagem e checklist de operação.',
        lessons: [
          { id:'l1', title:'Como Realizar a Montagem da sua Plotter da Linha A3', url:'https://www.youtube.com/watch?v=9KMxADGWXVI' },
          { id:'l2', title:'Confira o Checklist da sua Plotter da Linha A3', url:'https://www.youtube.com/watch?v=-r_hNVh6FeA' },
          { id:'l3', title:'Como Ajustar a Trava da Base do Equipamento', url:'https://drive.google.com/file/d/1NGx26u1zOtXDytn9Fv0BkrH-XKFG8iOK/view' },
          { id:'l4', title:'Como Realizar a Montagem da sua A3 Pro Max 3', url:'https://www.youtube.com/watch?v=BP0ZqUngK_c' }
        ],
        resources: [
          { title:'Manual de Utilização A3 Pro', url:'https://drive.google.com/file/d/1-C-JPVzTt8dwkXJQKu69bK1iX-iX_jGe/view?usp=sharing' },
          { title:'Manual de Utilização A3 Pro Max 3', url:'https://drive.google.com/file/d/1-M4jNRBd-FSaBzUBEwhCjr3D6COuEcFn/view?usp=sharing' }
        ],
        quiz: { questions: [
          { q:'Qual a velocidade máxima de corte da Linha A3 (Servo e Pro Max)?', opts:['700 mm/s','900 mm/s','1.200 mm/s','1.500 mm/s'], c:2 },
          { q:'A A3 Servo suporta até qual gramatura de papel?', opts:['150g','200g','270g','300g'], c:3 },
          { q:'Qual o limite de tamanho de mídia da A3 Servo?', opts:['Apenas A5','Do A4 ao Super A3','Apenas A4','Até A2'], c:1 },
          { q:'O sistema de alimentação da A3 Pro Max 2 é por:', opts:['Motor de passo','Correia manual','Adsorção (sistema de ar)','Gravidade'], c:2 },
          { q:'Qual a capacidade máxima de folhas da A3 Pro Max 2?', opts:['200 folhas','500 folhas','750 folhas','1.000 folhas'], c:3 },
          { q:'Qual software de corte acompanha a A3 Pro Max 3?', opts:['SignMaster','LightBurn','CameraCut','EZCAD'], c:2 },
          { q:'Quais tipos de conectividade possui a A3 Pro Max 3?', opts:['Somente USB','Somente WiFi','USB e cabo','Wi-Fi, USB e cabo'], c:3 }
        ]}
      },
      {
        id: 'm2', title: 'Módulo 2 — Ajustes e Calibração',
        desc: 'Rolete branco, offset, LED de câmera e velocidade de puxada.',
        lessons: [
          { id:'l5', title:'Como Ajustar o Rolete Branco da sua Plotter', url:'https://drive.google.com/file/d/18l06NB8WB2foRVdik_kMAeXFo0VpO89k/view?usp=sharing' },
          { id:'l6', title:'Como Zerar e Ajustar o Offset do Equipamento', url:'https://drive.google.com/file/d/1IHXLtAAp7gUR3HDIpkFj-ur-m4zQKnWF/view?usp=sharing' },
          { id:'l7', title:'Como Ajustar o LED da Câmera do Equipamento', url:'https://www.youtube.com/watch?v=5vtNUptOpgw' },
          { id:'l8', title:'Como Reduzir a Velocidade da Puxada das Folhas', url:'https://drive.google.com/file/d/1YSiHxvUdOJoDU0A_pixhvE7q4sn8RTtJ/view?usp=sharing' }
        ],
        quiz: { questions: [
          { q:'O que é o "offset" nas plotters de recorte?', opts:['Aumentar velocidade','Compensar posicionamento da lâmina para precisão','Regular temperatura','Definir tamanho do papel'], c:1 },
          { q:'Por que ajustar o LED da câmera é importante?', opts:['Iluminar o ambiente','Garantir leitura correta das marcas de registro','Indicar fim do corte','Indicar erros de hardware'], c:1 },
          { q:'A função do rolete branco na plotter é:', opts:['Fazer o corte','Tracionar a mídia durante o processo','Detectar marcas de câmera','Regular temperatura'], c:1 },
          { q:'Ao zerar o offset, o objetivo é:', opts:['Resetar configurações de fábrica','Definir o ponto zero de referência para o corte','Desligar o equipamento','Limpar memória do painel'], c:1 },
          { q:'Reduzir a velocidade de puxada é recomendado quando:', opts:['O equipamento está novo','O papel é pesado ou a alimentação está imprecisa','A câmera não funciona','A lâmina está nova'], c:1 }
        ]}
      },
      {
        id: 'm3', title: 'Módulo 3 — Operação Avançada',
        desc: 'Marcação automática, corte em matriz, repetição e conectividade.',
        lessons: [
          { id:'l9', title:'Como Utilizar a Marcação e Leitura Automática (Auto Original Point)', url:'https://www.youtube.com/watch?v=GAbjA_w5q-c' },
          { id:'l10', title:'Como Fazer o Corte em Repetição (Laço)', url:'https://www.youtube.com/watch?v=IOr6-moeZ6g' },
          { id:'l11', title:'Como Fazer o Corte em Matriz na A3 Pro', url:'https://drive.google.com/file/d/1SK0ISg2ryYJJgagvkp_IByJuxk6P7Zw9/view' },
          { id:'l12', title:'Como Conectar o CameraCut na Plotter Via WiFi e USB', url:'https://www.youtube.com/watch?v=shZCQu6UFaY' },
          { id:'l13', title:'Como Criar Arquivos Utilizando a A3 Twin', url:'https://www.youtube.com/watch?v=kRRVeYInaFE' }
        ],
        quiz: { questions: [
          { q:'O que é o corte em "Laço" (repetição)?', opts:['Cortar uma peça maior','Repetir o mesmo corte múltiplas vezes automaticamente','Fazer vinco em papel','Corte e vinco simultâneo'], c:1 },
          { q:'O corte em Matriz permite:', opts:['Cortar apenas um arquivo por vez','Organizar e cortar múltiplos arquivos em uma única folha','Fazer gravação a laser','Cortar apenas vinco'], c:1 },
          { q:'Como o CameraCut se conecta à plotter da Linha A3?', opts:['Somente USB','Somente WiFi','Via WiFi e USB','Via Bluetooth'], c:2 },
          { q:'A "Marcação Automática" (Auto Original Point) na A3 é:', opts:['A plotter desenha marcas sozinha','O equipamento posiciona e lê marcas de registro automaticamente','A lâmina é trocada automaticamente','O corte é feito sem lâmina'], c:1 },
          { q:'A A3 Pro Max 3 possui cabeça dedicada para:', opts:['Impressão a laser','Vinco tangencial para dobras precisas','Corte de acrílico','Gravação de metal'], c:1 }
        ]}
      },
      {
        id: 'm4', title: 'Módulo 4 — Manutenção Preventiva',
        desc: 'Limpeza, troca de peças e resolução dos problemas mais comuns.',
        lessons: [
          { id:'l14', title:'Como Fazer a Limpeza dos Roletes do Equipamento', url:'https://www.youtube.com/watch?v=oVts9zlcazo' },
          { id:'l15', title:'Máquina Não Puxa a Folha: Como Fazer a Limpeza dos Sensores', url:'https://www.youtube.com/watch?v=7WmQ8aoTSeU' },
          { id:'l16', title:'Como Realizar a Troca da Mola do Equipamento', url:'https://www.youtube.com/watch?v=HrPmKhJV9DA' },
          { id:'l17', title:'Como Realizar a Troca do Cabo Flat Longo da sua A3 Pro', url:'https://drive.google.com/file/d/1TZOpSQKpWltlKfKyD3Yp_mYyU_0ik0ZD/view' },
          { id:'l18', title:'Como Ajustar a Polia e a Correia da A3', url:'https://drive.google.com/file/d/1ZQht2qcZOre-Jzq9cqTU1XLX2UzGvAPa/view' },
          { id:'l19', title:'Tutorial: Como Nivelar os Roletes Frontais da A3', url:'https://drive.google.com/file/d/1t13TKyGMD4r6HV1gefipqIyTWI5zYOWC/view' }
        ],
        resources: [
          { title:'Manual do Equipamento A3 Pro', url:'https://drive.google.com/file/d/10bmQzoW2lJvC7x8P7D_xU_Vx8mp5xNOS/view?usp=sharing' },
          { title:'Manual do Equipamento A3 Pro Max 3', url:'https://drive.google.com/file/d/1mqFioR67Uo3vUrz3VI3Z1hjzjZRXNNwA/view?usp=sharing' }
        ],
        quiz: { questions: [
          { q:'Quando a máquina A3 não puxa a folha, qual é o primeiro passo?', opts:['Trocar o motor','Limpar os sensores de detecção de papel','Reinstalar o software','Trocar a lâmina'], c:1 },
          { q:'Por que limpar os roletes regularmente?', opts:['Para aumentar velocidade','Manter tração e precisão na alimentação do material','Economizar energia','Calibrar câmera'], c:1 },
          { q:'A correia e a polia da A3 devem ser ajustadas quando:', opts:['O equipamento é novo','Há folga excessiva ou o carro de corte perde precisão','O LED está apagado','O WiFi não conecta'], c:1 },
          { q:'O cabo flat longo é responsável por:', opts:['Conectar ao WiFi','Transmitir sinais entre placa principal e carro de corte','Alimentar a lâmina','Conectar o painel'], c:1 },
          { q:'Roletes frontais desnivelados causam:', opts:['Imprecisão e desvio no corte','Aumento de velocidade','LED apagado','Perda de WiFi'], c:0 }
        ]}
      }
    ]
  },

  {
    id: 'linha-profissional',
    title: 'Linha Profissional',
    subtitle: 'Plotters C / V / SV / D',
    desc: 'Domine as plotters profissionais: Linha C (entrada), Linha V (profissional), SV60 e Linha D (dual head). Inclui operação com SignMaster e BannerCut.',
    icon: 'fa-cut',
    gradient: 'linear-gradient(135deg,#F58979,#F2778D)',
    img: 'images/image-29.png',
    modules: [
      {
        id: 'm1', title: 'Módulo 1 — Conhecendo a Linha Profissional',
        desc: 'Diferenças entre as linhas, montagem e setup inicial.',
        lessons: [
          { id:'l1', title:'Como Montar o Pedestal das Plotters de Recorte', url:'https://www.youtube.com/watch?v=PCYq-CxjSvE' },
          { id:'l2', title:'Como Montar o Pedestal do Modelo G1', url:'https://drive.google.com/file/d/1Ew0KQbzowvzH3TyZsiZ8NsXbj_s2V_jS/view?usp=sharing' },
          { id:'l3', title:'Como Montar o Pedestal do Modelo G2', url:'https://www.youtube.com/watch?v=d_318RbKzKo' }
        ],
        resources: [
          { title:'Manual de Utilização da Linha V', url:'https://drive.google.com/file/d/1KRj5wylJ5obxK0Vc5TYiqv86aYALNWAx/view?usp=sharing' },
          { title:'Manual de Utilização da Linha D', url:'https://drive.google.com/file/d/1TKPoL-K2dwMF9saPoA58Px2VwSt4zNWJ/view?usp=sharing' },
          { title:'Manual Técnico G1', url:'https://drive.google.com/file/d/1KvqOfcdyfV08jYMFoL0eNkQa4lthjEJT/view?usp=sharing' },
          { title:'Manual Técnico G2', url:'https://drive.google.com/file/d/1_dCIuCcbfAGGCYPhaYa5YPHB8Rzw-5_7p/view?usp=sharing' }
        ],
        quiz: { questions: [
          { q:'Qual a força de corte da Linha V?', opts:['750g','1.000g','2.000g','3.000g'], c:2 },
          { q:'Qual a principal diferença entre a Linha C e a Linha V?', opts:['A linha C é maior','Linha V tem motor servo, C tem motor de passo com maior força','Linha C tem 750g de força e a V tem 2.000g','Linha V não corta vinil'], c:2 },
          { q:'Qual linha de plotters consegue cortar EVA?', opts:['Linha A3','Linha C','Linha V','Linha Saga'], c:2 },
          { q:'Para riscar PS de 1mm na Linha V, qual lâmina é necessária?', opts:['Lâmina de 30','Lâmina de 45','Lâmina de 60','Lâmina de 90'], c:2 },
          { q:'A Linha D (Dual Head) tem qual diferença principal?', opts:['Faz apenas corte','Tem dois motores independentes','Faz corte e vinco simultaneamente','É dedicada a tecidos'], c:2 },
          { q:'A V48 possui espaço lateral de quanto para entrada de material?', opts:['1,00 m','1,15 m','1,20 m','1,30 m'], c:3 },
          { q:'Qual software acompanha a plotter G2 (via plugin para CorelDRAW)?', opts:['CameraCut','SignWork','EZCAD','LightBurn'], c:1 }
        ]}
      },
      {
        id: 'm2', title: 'Módulo 2 — Ajustes e Calibração',
        desc: 'Alinhamento de câmera, offset, escala e LED.',
        lessons: [
          { id:'l4', title:'Como Fazer o Alinhamento de Câmera do Equipamento', url:'https://www.youtube.com/watch?v=9YsXq22EQN4' },
          { id:'l5', title:'Esquema do Alinhamento Longe do Sensor', url:'https://drive.google.com/file/d/18cCobdTVZOve0vT2Wz12YNA4vNy_08No/view' },
          { id:'l6', title:'Como Ajustar o Offset Utilizando o SignMaster', url:'https://www.youtube.com/watch?v=6bNOWAtXwHo' },
          { id:'l7', title:'Como Fazer o Ajuste de Escala no seu Equipamento', url:'https://www.youtube.com/watch?v=cnIMZw7LtYI' },
          { id:'l8', title:'Como Ajustar o LED do seu Equipamento', url:'https://www.youtube.com/watch?v=5vtNUptOpgw' }
        ],
        quiz: { questions: [
          { q:'O alinhamento de câmera garante:', opts:['Aumento de velocidade','Que as marcas de registro sejam lidas corretamente para corte preciso','Que a lâmina não desgaste','Conexão WiFi estável'], c:1 },
          { q:'O ajuste de escala no equipamento é necessário para:', opts:['Corrigir diferenças de tamanho entre o arquivo e o corte físico','Aumentar a força de corte','Alterar a velocidade','Resetar o firmware'], c:0 },
          { q:'O offset no SignMaster serve para:', opts:['Limpar histórico de cortes','Compensar o raio da ponta da lâmina para curvas precisas','Alterar o idioma','Conectar ao WiFi'], c:1 },
          { q:'O alinhamento "longe do sensor" serve para:', opts:['Configurar WiFi','Ajustar a câmera quando o sensor está afastado do ponto de referência','Calibrar a velocidade','Trocar a lâmina'], c:1 },
          { q:'Por que ajustar o LED da câmera na Linha C/V/D?', opts:['Para economizar energia','Para garantir leitura precisa das marcas de registro em diferentes iluminações','Para ligar o equipamento','Para conectar via USB'], c:1 }
        ]}
      },
      {
        id: 'm3', title: 'Módulo 3 — Operação com BannerCut',
        desc: 'Corte via pendrive, WiFi, força e configurações do BannerCut.',
        lessons: [
          { id:'l9', title:'Como Cortar Arquivos Direto do Pendrive Utilizando o BannerCut', url:'https://www.youtube.com/watch?v=Yzl0hT4q2P0' },
          { id:'l10', title:'Como Conectar o WiFi Utilizando o BannerCut', url:'https://www.youtube.com/watch?v=V8azKQu1tbw' },
          { id:'l11', title:'Como Posicionar a Caneta Utilizando o BannerCut', url:'https://www.youtube.com/watch?v=r9C3setKnlc' },
          { id:'l12', title:'Como Inverter o Eixo Y Utilizando o BannerCut', url:'https://www.youtube.com/watch?v=7RCdLzsEg8o' },
          { id:'l13', title:'Como Fazer o Teste de Força Utilizando o BannerCut', url:'https://www.youtube.com/watch?v=esvbC40omiE' },
          { id:'l14', title:'Como Salvar a Força Utilizada no BannerCut', url:'https://drive.google.com/file/d/18PQSEB6z43pJI4vd4kivMSiHOntlGqz5/view?usp=sharing' },
          { id:'l15', title:'Diferenças Entre o Envio do Corte Com e Sem Leitura das Marcações', url:'https://drive.google.com/file/d/170wq69Gy_cpRslVcOfQFM9e-vfryrnux/view?usp=sharing' },
          { id:'l16', title:'Como Restaurar o Padrão de Fábrica (Reset) no BannerCut', url:'https://drive.google.com/file/d/1U-QfAViP9tYB_Kv7YUG_2JqUBF0hvXsI/view?usp=sharing' }
        ],
        quiz: { questions: [
          { q:'Como cortar um arquivo diretamente do pendrive no BannerCut?', opts:['Não é possível','Conectando via USB e selecionando o arquivo no painel do equipamento','Usando o WiFi exclusivamente','Exportando como PDF'], c:1 },
          { q:'O teste de força no BannerCut serve para:', opts:['Verificar a conexão WiFi','Calibrar o corte para o material específico sem desperdiçar mídia','Formatar o equipamento','Atualizar o firmware'], c:1 },
          { q:'Inverter o Eixo Y no BannerCut é necessário quando:', opts:['O arquivo está muito grande','O corte sai espelhado verticalmente','O WiFi não conecta','A lâmina está gasta'], c:1 },
          { q:'Por que salvar a força utilizada no BannerCut?', opts:['Para reutilizar as configurações de corte para o mesmo material sem reconfigurar','Para fazer backup do firmware','Para conectar ao WiFi','Para atualizar o software'], c:0 },
          { q:'A diferença entre envio com e sem leitura de marcações é:', opts:['A velocidade do corte','Com marcações há alinhamento automático ao contorno impresso; sem, o corte é absoluto','O tipo de lâmina usada','A resolução do arquivo'], c:1 }
        ]}
      },
      {
        id: 'm4', title: 'Módulo 4 — Manutenção da Linha Profissional',
        desc: 'Troca e limpeza de roletes, alinhamento de câmera nos modelos G.',
        lessons: [
          { id:'l17', title:'Como Fazer a Limpeza dos Roletes do Equipamento', url:'https://www.youtube.com/watch?v=L2sSNsEyh1I' },
          { id:'l18', title:'Como Fazer a Troca dos Roletes V do Equipamento', url:'https://drive.google.com/file/d/1rCU9o1MibcEtxAt60T7_-riuolwQVscp/view?usp=sharing' },
          { id:'l19', title:'Como Fazer a Troca dos Roletes C do Equipamento', url:'https://drive.google.com/file/d/1rCU9o1MibcEtxAt60T7_-riuolwQVscp/view?usp=sharing' },
          { id:'l20', title:'Como Realizar o Alinhamento de Câmera na Saga / G1', url:'https://www.youtube.com/watch?v=dgrPzMmKXbQ' },
          { id:'l21', title:'Como Conectar o WiFi no Modelo G1', url:'https://drive.google.com/file/d/1kLsN9-8ZWvyfNlfm3OWOhl2uKnNxfSKR/view?usp=sharing' },
          { id:'l22', title:'Como Atualizar sua Plotter do Modelo G1', url:'https://drive.google.com/file/d/1aFdUW5vaeKqXHh2O3wOl7rlSJIdx0izm/view?usp=sharing' }
        ],
        resources: [
          { title:'Manual dos Equipamentos da Linha V', url:'https://drive.google.com/file/d/19kU2wd4PZCj-Y9VJKdEgOOnJssmL3Oz1/view?usp=sharing' },
          { title:'Manual dos Equipamentos da Linha C16', url:'https://drive.google.com/file/d/1oP_xiGRsPmuc94Us_AM0Ismm3IS3f1u1/view?usp=sharing' }
        ],
        quiz: { questions: [
          { q:'Com que frequência devem ser limpos os roletes das plotters profissionais?', opts:['Nunca precisam de limpeza','Regularmente, pois sujeira reduz tração e causa imprecisão','Apenas ao comprar o equipamento','Somente quando quebram'], c:1 },
          { q:'A diferença entre roletes V e C está em:', opts:['Cor e tamanho apenas','Formato e compatibilidade com cada linha de equipamentos','Marca do fabricante','Tensão de operação'], c:1 },
          { q:'Para atualizar a plotter G1, é necessário:', opts:['Enviar para assistência técnica','Usar o procedimento de atualização via arquivo fornecido pela Bannerjet','Comprar nova placa','Reinstalar o Windows'], c:1 },
          { q:'O modelo G1 possui qual sistema para segurar a bobina?', opts:['Grampos manuais','Sistema de vácuo','Fita adesiva','Presilhas plásticas'], c:1 },
          { q:'Qual software de corte é compatível com o G1 (licença para 3 computadores)?', opts:['SignMaster','BannerCut','CutArtistic','CameraCut'], c:2 }
        ]}
      }
    ]
  },

  {
    id: 'fibra-laser',
    title: 'Fibra Laser',
    subtitle: 'Gravação em Metal e Não-Metais',
    desc: 'Grave metais, couro, acrílico e PVC com precisão. Aprenda montagem, foco, parâmetros e operação completa com EZCAD e a ferramenta rotativa.',
    icon: 'fa-bolt',
    gradient: 'linear-gradient(135deg,#F2778D,#9E6396)',
    img: 'images/image-35.png',
    modules: [
      {
        id: 'm1', title: 'Módulo 1 — Instalação e Setup',
        desc: 'Montagem, ajuste de foco e alinhamento dos feixes.',
        lessons: [
          { id:'l1', title:'Como Realizar a Montagem da Fibra Laser', url:'https://www.youtube.com/watch?v=uv4jbDCT9TE' },
          { id:'l2', title:'Como Ajustar a Altura do Foco Automático da Fibra Laser', url:'https://www.youtube.com/watch?v=aF3c5yEvizg' },
          { id:'l3', title:'Como Ajustar os Feixes de Luz na Fibra Laser', url:'https://www.youtube.com/watch?v=242qmrq5Dq4' }
        ],
        resources: [
          { title:'Manual Fibra Laser', url:'https://drive.google.com/file/d/1cIJVsSocN7dfRJtCkLcHOO4GI7-2xyQx/view' }
        ],
        quiz: { questions: [
          { q:'Qual fonte (laser source) equipa os modelos Bannerjet de Fibra Laser?', opts:['Trumpf','IPG','Raycus','nLIGHT'], c:2 },
          { q:'Qual software é utilizado para operar a Fibra Laser Bannerjet?', opts:['SignMaster','CameraCut','EZCAD / LightBurn','PrintFactory'], c:2 },
          { q:'A Fibra Laser consegue gravar em quais materiais?', opts:['Apenas metais','Metais, couro, acrílico e PVC','Apenas acrílico e madeira','Apenas MDF'], c:1 },
          { q:'O ajuste do foco automático na Fibra Laser serve para:', opts:['Aumentar velocidade','Posicionar o feixe laser na altura ideal para cada material','Regular temperatura','Calibrar câmera'], c:1 },
          { q:'Qual a potência disponível para a Fibra Laser Bannerjet?', opts:['10W ou 20W','30W ou 50W','60W ou 100W','150W'], c:1 }
        ]}
      },
      {
        id: 'm2', title: 'Módulo 2 — Operação com EZCAD',
        desc: 'Criar arquivos, pré-visualização e ajuste de escala.',
        lessons: [
          { id:'l4', title:'Como Criar Arquivos para Gravação a Laser Utilizando o EZCAD', url:'https://drive.google.com/file/d/1SPCFmelRNw4asNmOG4slsSbbdaQZ75CW/view?usp=sharing' },
          { id:'l5', title:'Como Fazer a Pré-Visualização da Gravação no EZCAD', url:'https://www.youtube.com/watch?v=MlelwFfJlUQ' },
          { id:'l6', title:'Como Ajustar a Escala das Gravações no EZCAD', url:'https://www.youtube.com/watch?v=hCEdW_XtrRI' },
          { id:'l7', title:'Como Ajustar os Principais Parâmetros da Fibra Laser', url:'https://drive.google.com/file/d/1cA9LszFyMfSOuTxXjO4G_mnfAVHOi4_Z/view?usp=sharing' }
        ],
        quiz: { questions: [
          { q:'O EZCAD é utilizado para:', opts:['Imprimir em lona','Criar e enviar arquivos de gravação para a Fibra Laser','Cortar adesivo em vinil','Gerenciar impressoras UV'], c:1 },
          { q:'A pré-visualização no EZCAD serve para:', opts:['Gerar o arquivo final de gravação','Confirmar o posicionamento e tamanho da gravação antes de executar','Atualizar o firmware','Testar a conexão USB'], c:1 },
          { q:'Ajustar a escala no EZCAD corrige:', opts:['Diferenças entre o tamanho do arquivo e a gravação real no material','A temperatura do laser','A velocidade de deslocamento','O idioma do software'], c:0 },
          { q:'Qual cabeçote de impressão está presente nas Fibras Laser Bannerjet?', opts:['RC1001CM-V1-GY','TX800','I3200','Konica 512'], c:0 },
          { q:'Quais parâmetros principais são ajustados na Fibra Laser?', opts:['Temperatura e umidade','Velocidade, potência, frequência e número de passadas','Pressão do ar e voltagem','Largura e altura de corte'], c:1 }
        ]}
      },
      {
        id: 'm3', title: 'Módulo 3 — Projetos Avançados e Ferramenta Rotativa',
        desc: 'Gravação em cilindros, garrafas e projetos com ChatGPT.',
        lessons: [
          { id:'l8', title:'Como Ajustar a Ferramenta Rotativa da sua Fibra Laser', url:'https://www.youtube.com/watch?v=-Q_ZYrLGK6U' },
          { id:'l9', title:'Como Utilizar a Ferramenta Rotativa no EZCAD', url:'https://www.youtube.com/watch?v=39vjvil7310' },
          { id:'l10', title:'Como Criar Arquivos para a Fibra Laser Usando o ChatGPT', url:'https://drive.google.com/file/d/1YPEjcM1TRxHdlv_seV42z3hyBNC19fMG/view?usp=sharing' }
        ],
        quiz: { questions: [
          { q:'A ferramenta rotativa da Fibra Laser serve para gravar em:', opts:['Superfícies planas apenas','Objetos cilíndricos como garrafas, copos e canetas','Apenas papel','Apenas madeira'], c:1 },
          { q:'Ao configurar a ferramenta rotativa no EZCAD, qual informação é essencial?', opts:['Cor do material','Diâmetro do objeto e steps/mm da ferramenta rotativa','Tipo de conexão USB','Versão do Windows'], c:1 },
          { q:'A Fibra Laser Bannerjet pode gravar copos térmicos?', opts:['Não, apenas superfícies planas','Sim, utilizando a ferramenta rotativa','Apenas com cabeçote UV','Somente em modo de baixa potência'], c:1 },
          { q:'O ChatGPT pode auxiliar na criação de arquivos para Fibra Laser como:', opts:['Geração de layouts e vetores com prompts específicos','Controle direto do laser','Substituir o EZCAD','Calibrar o foco automático'], c:0 },
          { q:'O equipamento Fibra Laser acompanha:', opts:['Apenas o laser','Computador, ferramenta rotativa e ajuste de altura','Apenas o software','Apenas o cabeçote'], c:1 }
        ]}
      },
      {
        id: 'm4', title: 'Módulo 4 — Manutenção da Fibra Laser',
        desc: 'Troca de lente e cuidados preventivos.',
        lessons: [
          { id:'l11', title:'Como Realizar a Troca da Lente da sua Fibra Laser', url:'https://www.youtube.com/watch?v=P_BQn_Fny1E' }
        ],
        quiz: { questions: [
          { q:'A troca de lente da Fibra Laser é necessária quando:', opts:['A gravação está perfeita','Há queda de qualidade, manchas ou a lente está danificada/suja','O software trava','O WiFi não conecta'], c:1 },
          { q:'Qual cuidado é essencial ao manusear a lente da Fibra Laser?', opts:['Usar luvas de borracha','Não tocar na superfície óptica com os dedos (usar luvas ou flanela limpa)','Lavar com água e sabão','Soprar com ar comprimido com força'], c:1 },
          { q:'A vida útil média da cabeça de impressão/lente da Fibra Laser é:', opts:['1 mês','3 a 6 meses','2 a 5 anos','Não possui desgaste'], c:2 },
          { q:'A Fibra Laser precisa de qual voltagem de operação?', opts:['110v exclusivamente','220v exclusivamente','110v ou 220v','12v DC'], c:1 },
          { q:'Para gravar em objetos não metálicos com a Fibra Laser, como PVC e acrílico:', opts:['Não é possível','É possível ajustando os parâmetros corretos de potência e velocidade','Necessita de gás especial','Requer lente específica diferente'], c:1 }
        ]}
      }
    ]
  },

  {
    id: 'ninacut-saga',
    title: 'NinaCut Saga 5373',
    subtitle: 'Mesa de Recorte Profissional',
    desc: 'Aprenda a montar e operar a NinaCut Saga 5373: display touch, criação de arquivos, alinhamento de câmera e configuração de presets.',
    icon: 'fa-table-cells',
    gradient: 'linear-gradient(135deg,#9E6396,#F79E77)',
    img: 'images/image-30.png',
    modules: [
      {
        id: 'm1', title: 'Módulo 1 — Montagem e Primeiros Passos',
        desc: 'Montagem e familiarização com o display.',
        lessons: [
          { id:'l1', title:'Como Realizar a Montagem da sua NinaCut Saga 5373', url:'https://www.youtube.com/watch?v=jFnIYl48Jsw' },
          { id:'l2', title:'Como Utilizar o Display do Equipamento na NinaCut Saga 5373', url:'https://drive.google.com/file/d/1SUMlqPLrZRwk6bjEBYXGKF0MJWS60Get/view?usp=sharing' }
        ],
        resources: [
          { title:'Manual Técnico — Saga Roll', url:'https://drive.google.com/file/d/1tTiGYfmGyhqfjQbTfhyPqg9ZpEtQWASD/view' }
        ],
        quiz: { questions: [
          { q:'A NinaCut Saga 5373 possui velocidade de até:', opts:['500 mm/s','700 mm/s','1.000 mm/s','1.200 mm/s'], c:3 },
          { q:'Qual tipo de tela possui a NinaCut Saga 5373?', opts:['Painel de botões físicos','Tela touch screen de 5"','Tela LCD sem toque','Controle remoto'], c:1 },
          { q:'A NinaCut Saga utiliza qual sistema de fixação do material?', opts:['Grampos laterais','Adsorção a vácuo silenciosa','Fita adesiva','Rolete simples'], c:1 },
          { q:'Quais formas de conectividade possui a NinaCut Saga?', opts:['Apenas USB','USB, WiFi e rede','Apenas WiFi','Apenas Ethernet'], c:1 },
          { q:'Qual é a espessura máxima de corte da NinaCut 1613T (modelo industrial)?', opts:['0,5mm','1mm','2mm','5mm'], c:1 }
        ]}
      },
      {
        id: 'm2', title: 'Módulo 2 — Operação e Envio de Cortes',
        desc: 'Criação de arquivos, envio e configuração de presets.',
        lessons: [
          { id:'l3', title:'Como Criar Arquivos Utilizando sua NinaCut Saga 5373', url:'https://drive.google.com/file/d/1SUMlqPLrZRwk6bjEBYXGKF0MJWS60Get/view?usp=sharing' },
          { id:'l4', title:'Como Enviar o Corte na sua NinaCut Saga 5373', url:'https://drive.google.com/file/d/1OsBtJgjjV8rHtzqzN-XniOEoXlKkGvB6/view?usp=sharing' },
          { id:'l5', title:'Como Configurar Presets na sua NinaCut Saga 5373', url:'https://drive.google.com/file/d/1UhihMVSMC1V-8zy4jvv7Obtx9r6ZpURF/view?usp=sharing' }
        ],
        quiz: { questions: [
          { q:'O que são "presets" na NinaCut Saga?', opts:['Arquivos de firmware','Configurações salvas de força e velocidade por tipo de material','Arquivos de corte em nuvem','Padrões de cores'], c:1 },
          { q:'Qual tipo de arquivos são criados para a NinaCut Saga?', opts:['Arquivos de impressão (PDF)','Arquivos de corte vetoriais (PLT, AI, etc.)','Arquivos de gravação laser','Planilhas de configuração'], c:1 },
          { q:'A NinaCut Saga 5373 cria:', opts:['Apenas impressões','Displays, rótulos, adesivos e peças personalizadas','Apenas gravações','Apenas embalagens'], c:1 },
          { q:'O envio do corte na NinaCut pode ser feito via:', opts:['Somente pendrive','USB, WiFi, rede ou pendrive','Somente WiFi','Somente cabo serial'], c:1 },
          { q:'Qual velocidade de corte possui a NinaCut 1613T (modelo industrial)?', opts:['200 mm/s','500 mm/s','700 mm/s','1.200 mm/s'], c:1 }
        ]}
      },
      {
        id: 'm3', title: 'Módulo 3 — Calibração de Câmera',
        desc: 'Alinhamento preciso de câmera para corte contorno.',
        lessons: [
          { id:'l6', title:'Como Realizar o Alinhamento de Câmera na NinaCut Saga', url:'https://www.youtube.com/watch?v=dgrPzMmKXbQ' }
        ],
        quiz: { questions: [
          { q:'O alinhamento de câmera na NinaCut garante:', opts:['Mais velocidade de corte','Que o corte siga com precisão o contorno das marcas de registro impressas','Que o equipamento conecte ao WiFi','Aumento da força de corte'], c:1 },
          { q:'Quando deve ser feito o alinhamento de câmera?', opts:['Nunca é necessário','Na instalação inicial e sempre que houver imprecisão nos cortes contorno','Somente quando a câmera quebrar','Diariamente, sem exceção'], c:1 },
          { q:'A NinaCut Saga utiliza qual tipo de leitura para marcas de registro?', opts:['Sensor óptico infravermelho','Câmera digital','Sensor ultrassônico','Leitura manual'], c:1 },
          { q:'A NinaCut 1613T é indicada para qual segmento?', opts:['Uso doméstico','Setor industrial e comunicação visual profissional','Escolas e hobbystas','Somente para papel'], c:1 },
          { q:'Ferramentas disponíveis na NinaCut 1613T incluem:', opts:['Apenas faca reta','UCT, EOT e caneta para meio corte e corte total','Apenas laser','Apenas vinco'], c:1 }
        ]}
      }
    ]
  },

  {
    id: 'refiladora-t1',
    title: 'Refiladora T1',
    subtitle: 'Acabamento de Impressão',
    desc: 'Operate a Refiladora T1 com precisão: painel, material, lâminas, câmera e corte. Do carregamento da bobina ao corte final.',
    icon: 'fa-ruler-combined',
    gradient: 'linear-gradient(135deg,#F79E77,#9E6396)',
    img: 'images/image-41.png',
    modules: [
      {
        id: 'm1', title: 'Módulo 1 — Setup e Painel',
        desc: 'Primeiros passos e familiarização com o painel.',
        lessons: [
          { id:'l1', title:'Primeiros Passos para Utilizar a Refiladora T1', url:'https://drive.google.com/file/d/12Yo-6y2buof3md6e3h6A8PHSs-ERQ4U-/view?usp=sharing' },
          { id:'l2', title:'Como Utilizar o Painel do Equipamento na Refiladora T1', url:'https://drive.google.com/file/d/1OEovo8llOEi6_Z2elAu-UBC-u3qDNU3B/view?usp=sharing' }
        ],
        resources: [
          { title:'Manual Refiladora T1', url:'https://drive.google.com/file/d/1Bacp8i3NyLyLdjCVN7XR4DUY8SpXyAmZ/view' }
        ],
        quiz: { questions: [
          { q:'Qual a largura máxima de corte da Refiladora T1?', opts:['100cm','120cm','140cm','160cm'], c:3 },
          { q:'Qual tipo de leitura a Refiladora T1 utiliza para alinhamento?', opts:['Sensor infravermelho','Câmera','Sensor ultrassônico','Laser'], c:1 },
          { q:'Qual motor equipa a Refiladora T1?', opts:['Motor de passo','Motor servo','Motor CC','Motor brushless'], c:1 },
          { q:'Qual a velocidade máxima da Refiladora T1?', opts:['8m/min','12m/min','18m/min','25m/min'], c:2 },
          { q:'A Refiladora T1 pode cortar quais tipos de materiais?', opts:['Apenas papel','Adesivos vinílicos, lonas e tecidos canvas','Apenas acrílico','Apenas MDF'], c:1 }
        ]}
      },
      {
        id: 'm2', title: 'Módulo 2 — Carregamento e Operação',
        desc: 'Colocar material, debobinador, lâminas e início do corte.',
        lessons: [
          { id:'l3', title:'Como Utilizar o Debobinador na Refiladora T1', url:'https://drive.google.com/file/d/1ZpOmqe7BFbEpzNNOCjpIKDKuBFR7f_gq/view?usp=sharing' },
          { id:'l4', title:'Como Colocar o Material na Refiladora T1', url:'https://drive.google.com/file/d/1PMKXvelLdVEJeNRl5FwHOvYogq9uhv9A/view?usp=sharing' },
          { id:'l5', title:'Como Passar o Material na Refiladora T1', url:'https://drive.google.com/file/d/1gxIPs0da3Ogy7Ux-woNN5cICyGb9Qwtb/view?usp=sharing' },
          { id:'l6', title:'Dicas para Ajustar o Material na Refiladora T1', url:'https://drive.google.com/file/d/1gaRQ-_Kgc7qLEVJkT75D0TgFZJrS_s0r/view?usp=sharing' }
        ],
        quiz: { questions: [
          { q:'O debobinador na Refiladora T1 tem a função de:', opts:['Fazer o corte','Segurar e liberar a bobina de material uniformemente','Regular velocidade','Calibrar lâminas'], c:1 },
          { q:'Ao colocar o material na Refiladora T1, é importante garantir:', opts:['Que o material esteja dobrado','Alinhamento reto e sem dobras para corte preciso','Que o material esteja molhado','Que a velocidade esteja máxima'], c:1 },
          { q:'A Refiladora T1 possui sensores de correção X e Y para:', opts:['Aumentar velocidade','Detectar e corrigir desvios de alinhamento durante o corte','Economizar material','Atualizar firmware'], c:1 },
          { q:'Qual sistema garante cortes de dupla precisão na T1?', opts:['Laser de alinhamento','Discos de corte duplo com sensores de correção X e Y','Câmera de alta resolução','Sistema de pressão pneumática'], c:1 },
          { q:'A Refiladora T2, em comparação com a T1, possui:', opts:['Menos recursos','Maior robustez, sistema de movimentação mais preciso e largura até 320cm','Menor largura de corte','Menos sensores'], c:1 }
        ]}
      },
      {
        id: 'm3', title: 'Módulo 3 — Ajustes Finos e Corte Final',
        desc: 'Câmera, posicionamento de lâminas e dicas de produção.',
        lessons: [
          { id:'l7', title:'Como Ajustar a Câmera da Refiladora T1', url:'https://drive.google.com/file/d/1VeKTieiGzjQTXneYx_q7KzzQtbtWErxs/view?usp=sharing' },
          { id:'l8', title:'Como Posicionar as Lâminas na Refiladora T1', url:'https://drive.google.com/file/d/1ZDKTVoDXU_KyCiEWAt4L7lncdQs-ZCq7/view?usp=sharing' },
          { id:'l9', title:'Como Iniciar o Corte na Refiladora T1', url:'https://drive.google.com/file/d/1MNw_HpSST2AsCjtu5UFnjwyEenTJLcSu/view?usp=sharing' },
          { id:'l10', title:'Dicas Finais para Utilizar a Refiladora T1', url:'https://drive.google.com/file/d/1e_4T2L2LuKzEUj9iuG2EgLvlNtJyFVrB/view?usp=sharing' }
        ],
        quiz: { questions: [
          { q:'O posicionamento correto das lâminas na T1 afeta diretamente:', opts:['A cor do corte','A qualidade e precisão do acabamento','A temperatura do equipamento','A velocidade de conexão WiFi'], c:1 },
          { q:'O ajuste da câmera na Refiladora T1 garante:', opts:['Mais velocidade','Leitura precisa do contorno para corte alinhado à impressão','Mais força de corte','Conexão de rede'], c:1 },
          { q:'Antes de iniciar o corte na T1, deve-se verificar:', opts:['Apenas a velocidade','Material alinhado, câmera calibrada e lâminas posicionadas corretamente','Apenas a temperatura','Somente o arquivo'], c:1 },
          { q:'Qual certificado a Refiladora T1 pode ser comparada em qualidade?', opts:['Apenas entrada de mercado','Equipamento profissional para gráficas rápidas e comunicação visual','Apenas uso doméstico','Somente para testes'], c:1 },
          { q:'O sensor de correção X na Refiladora T1 serve para:', opts:['Detectar o início do material','Reconhecimento de cores e alinhamento horizontal preciso','Regular a força das lâminas','Controlar a velocidade'], c:1 }
        ]}
      }
    ]
  },

  {
    id: 'guilhotinas',
    title: 'Guilhotinas',
    subtitle: 'Acabamento Profissional',
    desc: 'Opere com segurança a Guilhotina 49cm: montagem, ajustes iniciais, alinhamento, troca de lâmina e resolução de erros.',
    icon: 'fa-square-root-variable',
    gradient: 'linear-gradient(135deg,#F58979,#F79E77)',
    img: 'images/image-39.png',
    modules: [
      {
        id: 'm1', title: 'Módulo 1 — Instalação e Operação',
        desc: 'Montagem, ajustes iniciais e funcionalidades do painel.',
        lessons: [
          { id:'l1', title:'Como Realizar a Montagem da Nova Guilhotina 49cm', url:'https://drive.google.com/file/d/1l-NICUv-V_n4t8Z-oeiYw8P66hLed8K4/view?usp=sharing' },
          { id:'l2', title:'Como Fazer os Ajustes Iniciais na Guilhotina 49cm', url:'https://www.youtube.com/watch?v=y5UiPcIFQec' },
          { id:'l3', title:'Confira Todas as Funcionalidades do Painel da Guilhotina', url:'https://www.youtube.com/watch?v=mNkx2qS8GSQ' },
          { id:'l4', title:'Como Fazer o Alinhamento de Corte na Guilhotina', url:'https://www.youtube.com/watch?v=mYq9ey1cjZo' },
          { id:'l5', title:'Como Realizar a Montagem da Nova Guilhotina A3', url:'https://drive.google.com/file/d/1Zm900ymxQkma_yk2COJadwfJcg3nErdT/view?usp=sharing' },
          { id:'l6', title:'Como Utilizar a Nova Guilhotina A3', url:'https://drive.google.com/file/d/18Dim2A5aCEIdv8T_OO6aPe9EuIwEmqNX/view?usp=sharing' }
        ],
        resources: [
          { title:'Manual Guilhotina A3', url:'https://drive.google.com/file/d/1aGvBLzel8upa1oamAF9a95SOS48P8HDO/view' }
        ],
        quiz: { questions: [
          { q:'Qual o primeiro passo após montar a guilhotina?', opts:['Trocar a lâmina imediatamente','Realizar os ajustes iniciais e alinhamento de corte','Conectar ao WiFi','Instalar software'], c:1 },
          { q:'O alinhamento de corte na guilhotina garante:', opts:['Mais velocidade de corte','Que a lâmina corte exatamente na marcação desejada','Que a guilhotina economize energia','Longevidade da lâmina'], c:1 },
          { q:'Qual é a largura de corte da guilhotina compacta A3?', opts:['20cm','30cm','42cm','68cm'], c:2 },
          { q:'O painel da guilhotina Bannerjet permite:', opts:['Apenas ligar e desligar','Configurar quantidade de cortes, posição e outros parâmetros de operação','Conectar ao WiFi','Gravar vídeos'], c:1 },
          { q:'A guilhotina hidráulica Bannerjet possui largura de corte de:', opts:['42cm','55cm','68cm','100cm'], c:2 }
        ]}
      },
      {
        id: 'm2', title: 'Módulo 2 — Manutenção e Erros',
        desc: 'Troca de lâmina e resolução do Erro 6.',
        lessons: [
          { id:'l7', title:'Como Trocar a Lâmina da Guilhotina', url:'https://www.youtube.com/watch?v=zhto0ziCACE' },
          { id:'l8', title:'Como Corrigir o Erro 6 na Guilhotina', url:'https://www.youtube.com/watch?v=3xq1qLaJSXk' }
        ],
        quiz: { questions: [
          { q:'Quando deve ser trocada a lâmina da guilhotina?', opts:['Nunca precisa ser trocada','Quando os cortes ficam com rebarbas, irregulares ou com esforço excessivo','A cada 10 cortes','Somente quando quebrar'], c:1 },
          { q:'O Erro 6 na guilhotina indica:', opts:['Problema de voltagem','Problema no sensor de posição, travamento ou lâmina fora do lugar','Superaquecimento','Lâmina nova detectada'], c:1 },
          { q:'Ao trocar a lâmina da guilhotina, é essencial:', opts:['Usar a lâmina de qualquer marca','Desligar o equipamento e usar EPI de proteção antes de manusear a lâmina','Deixar o equipamento ligado para não perder configurações','Não desapertar todos os parafusos'], c:1 },
          { q:'Como resolver o Erro 6 na guilhotina?', opts:['Comprar nova guilhotina','Verificar sensor de posição, remover obstruções e recalibrar conforme procedimento do manual','Apenas desligar e ligar','Reinstalar o software'], c:1 },
          { q:'A guilhotina elétrica Bannerjet possui largura de corte de:', opts:['30cm','42cm','55cm','68cm'], c:1 }
        ]}
      }
    ]
  },

  {
    id: 'laminadoras',
    title: 'Laminadoras',
    subtitle: 'Termolaminadora Pro · L1 · L2',
    desc: 'Plastifique documentos e aplique laminação fria ou quente com a Termolaminadora Pro e as Laminadoras L1 e L2. Entenda as diferenças e domine cada modelo.',
    icon: 'fa-layer-group',
    gradient: 'linear-gradient(135deg,#9E6396,#F2778D)',
    img: 'images/image-31.png',
    modules: [
      {
        id: 'm1', title: 'Módulo 1 — Termolaminadora Pro',
        desc: 'Montagem, operação e ajuste de correia.',
        lessons: [
          { id:'l1', title:'Como Realizar a Montagem da Termolaminadora Pro', url:'https://www.youtube.com/watch?v=WnuRq5e-EjA' },
          { id:'l2', title:'Como Utilizar a Termolaminadora Pro', url:'https://www.youtube.com/watch?v=GfoKwAAND6s' },
          { id:'l3', title:'Como Ajustar a Correia da Termolaminadora Pro', url:'https://drive.google.com/file/d/18Uzj3SYtuAld9jeA-yXggWX7PddYBOUE/view' },
          { id:'l4', title:'Como Utilizar o Equipamento Termo A3', url:'https://www.youtube.com/watch?v=gNkuUEGT04w' },
          { id:'l5', title:'Como Fazer a Troca de Cilindro no Termo A3', url:'https://drive.google.com/file/d/1EzDjp2wMD7Fkag6lZ8Xyc6saR3bYCVKS/view' }
        ],
        quiz: { questions: [
          { q:'O que é uma termolaminadora?', opts:['Uma máquina para cortar papel com precisão','Uma máquina para plastificar documentos aplicando película plástica com calor','Uma impressora de lona','Uma máquina para gravar metal'], c:1 },
          { q:'Para que serve a laminação com a Termolaminadora?', opts:['Aumentar espessura do papel','Proteger documentos contra água, sujeira e rasgos','Gravar informações no papel','Fazer corte e vinco'], c:1 },
          { q:'Qual é a temperatura máxima da Termolaminadora Pro Bannerjet?', opts:['60°C','80°C','120°C','130°C'], c:3 },
          { q:'A Termolaminadora Bannerjet se diferencia de modelos convencionais por:', opts:['Ser mais barata','Estrutura reforçada com eixos de ferro, aquecimento estável e produção contínua','Ser menor','Não precisar de manutenção'], c:1 },
          { q:'A Termolaminadora Pro suporta materiais de até qual espessura?', opts:['0,5mm','1,0mm','1,2mm','2,0mm'], c:2 }
        ]}
      },
      {
        id: 'm2', title: 'Módulo 2 — Laminadoras L1 e L2',
        desc: 'Diferenças entre L1 e L2, montagem e operação.',
        lessons: [
          { id:'l6', title:'Como Realizar a Montagem da Laminadora L1', url:'https://www.youtube.com/watch?v=CLCgV9NwhgQ' },
          { id:'l7', title:'Como Utilizar a Laminadora L1', url:'https://www.youtube.com/watch?v=xIJXslIBDUQ' }
        ],
        quiz: { questions: [
          { q:'Qual a principal diferença entre a L1 e a L2?', opts:['A L1 é maior','L1 é para adesivo transparente (60°C) e L2 para BOPP a quente (120°C)','A L2 é mais barata','Não há diferença prática'], c:1 },
          { q:'Para laminação com filme BOPP, qual temperatura é necessária?', opts:['60°C','80°C','100°C','120°C'], c:3 },
          { q:'A Laminadora L1 trabalha com qual temperatura?', opts:['120°C','100°C','80°C','60°C'], c:3 },
          { q:'A Laminadora L2 é voltada para laminação de:', opts:['Apenas adesivos','Papel e materiais com filme BOPP a quente','Apenas acrílico','Metal e MDF'], c:1 },
          { q:'Um problema comum nas laminadoras convencionais (que a Bannerjet resolve) é:', opts:['Ser muito rápida','Bolhas e falhas por aquecimento instável','Ser muito grande','Consumo excessivo de energia'], c:1 }
        ]}
      }
    ]
  },

  {
    id: 'softwares',
    title: 'Softwares',
    subtitle: 'SignMaster · CameraCut · EZCAD',
    desc: 'Domine os softwares essenciais da Bannerjet: instale, configure e utilize o SignMaster, CameraCut e EZCAD para extrair o máximo dos seus equipamentos.',
    icon: 'fa-display',
    gradient: 'linear-gradient(135deg,#F2778D,#F79E77)',
    img: 'images/image-28.png',
    modules: [
      {
        id: 'm1', title: 'Módulo 1 — SignMaster',
        desc: 'Instalação, licença, driver, criação de arquivos e recursos avançados.',
        lessons: [
          { id:'l1', title:'Como Instalar o SignMaster', url:'https://www.youtube.com/watch?v=epm7I-GJXTI' },
          { id:'l2', title:'Como Ativar sua Licença Utilizando o Site Oficial do SignMaster', url:'https://drive.google.com/file/d/1sdWftKvvSbm6K6j3BopUPuUD6IusC9c8/view?usp=sharing' },
          { id:'l3', title:'Como Instalar o Driver Utilizando o SignMaster', url:'https://www.youtube.com/watch?v=EBKYF4wCJoE' },
          { id:'l4', title:'Como Conectar WiFi e USB Utilizando o SignMaster', url:'https://www.youtube.com/watch?v=iK1UKG5Y4UE' },
          { id:'l5', title:'Como Criar seu Arquivo de Corte Utilizando o SignMaster', url:'https://www.youtube.com/watch?v=PT79pkAeLuU' },
          { id:'l6', title:'Como Fazer a Calibração do Corte com Compensação de Lâmina', url:'https://www.youtube.com/watch?v=1ZsmAF0NZyk' },
          { id:'l7', title:'Como Fazer Corte e Vinco Utilizando o SignMaster', url:'https://drive.google.com/file/d/1cC7woXbPjhUB1z8vyO9OENm3LSUqqAJA/view?usp=sharing' },
          { id:'l8', title:'Como Criar Caixinhas sem Ferramenta de Vinco no SignMaster', url:'https://drive.google.com/file/d/1lVKsVCE7rITrAgoF0EXXo3LCNO--wmaN/view?usp=sharing' },
          { id:'l9', title:'Como Salvar seu Projeto Como Arquivo PLT ou CUT no SignMaster', url:'https://drive.google.com/file/d/1m20JmAVmy5H8GP-qIW3wDNfkAEGZsALL/view?usp=sharing' },
          { id:'l10', title:'Como Ajustar a Sangria do Corte nos seus Arquivos do SignMaster', url:'https://drive.google.com/file/d/1MMLD005gkw_LL8LJ97XmvP5J23EWMbfX/view?usp=sharing' },
          { id:'l11', title:'Como Fazer o Corte com QR Code Via Pendrive no SignMaster', url:'https://www.youtube.com/watch?v=TnUZSizTucE' },
          { id:'l12', title:'Como Desativar a Licença do SignMaster', url:'https://www.youtube.com/watch?v=-Vi-1bscyfA' }
        ],
        resources: [
          { title:'Manual Plugin BannerCut para CorelDRAW', url:'https://drive.google.com/file/d/14w5yuyDp-VRWX7U6HN0EKbvPFNYIlEtG/view' }
        ],
        quiz: { questions: [
          { q:'O SignMaster é um software de:', opts:['Edição de imagens rasterizadas','Criação de arquivos de corte para plotters','Impressão de lona','Gravação a laser'], c:1 },
          { q:'Como salvar um arquivo no SignMaster para uso via pendrive?', opts:['Exportar como PDF','Exportar como PLT ou CUT','Salvar como JPG','Exportar como DXF'], c:1 },
          { q:'A "compensação de lâmina" no SignMaster serve para:', opts:['Ajustar pressão da lâmina','Calibrar corte compensando o raio da ponta da lâmina em curvas','Regular velocidade','Definir material'], c:1 },
          { q:'Como desativar uma licença do SignMaster?', opts:['Desinstalar o programa','Através do processo de desativação no menu de licença do software','Formatar o computador','Não é possível desativar'], c:1 },
          { q:'O Plugin SignMaster para CorelDRAW permite:', opts:['Editar imagens vetoriais','Transformar a plotter em refiladora e enviar cortes direto do CorelDRAW','Criar efeitos 3D','Imprimir em lona'], c:1 },
          { q:'O QR Code no SignMaster serve para:', opts:['Identificar o operador','Enviar arquivos de corte via pendrive com leitura automática da câmera','Gerar relatórios','Configurar a câmera'], c:1 },
          { q:'A sangria (bleed) no SignMaster é ajustada para:', opts:['Aumentar a força','Adicionar margem extra ao arquivo garantindo corte sem borda branca','Compensar a velocidade','Ajustar o offset'], c:1 }
        ]}
      },
      {
        id: 'm2', title: 'Módulo 2 — CameraCut',
        desc: 'Instalação, plugins CorelDRAW / Illustrator, corte e recursos avançados.',
        lessons: [
          { id:'l13', title:'Como Instalar o CameraCut e seus Plugins', url:'https://www.youtube.com/watch?v=YdHiY5nbu9E' },
          { id:'l14', title:'Como Habilitar o Plugin do CameraCut no CorelDRAW', url:'https://drive.google.com/file/d/1-S3338w-B1UyHAj7oFJ-FPaR78SCHz1o/view?usp=sharing' },
          { id:'l15', title:'Como Habilitar o Plugin do CameraCut no Illustrator', url:'https://drive.google.com/file/d/1DiD7cgSge85W4X1CdG5IW_9VfXEEpSUF/view?usp=sharing' },
          { id:'l16', title:'Como Conectar o CameraCut na Plotter Via WiFi e USB', url:'https://www.youtube.com/watch?v=shZCQu6UFaY' },
          { id:'l17', title:'Como Fazer o Corte Direto Utilizando o CameraCut', url:'https://drive.google.com/file/d/1d4non8wu4SbDRsbHKdpzdu0D6-L5IK7f/view?usp=drive_link' },
          { id:'l18', title:'Como Criar Arquivo de Caixinha com Corte e Vinco no CameraCut', url:'https://drive.google.com/file/d/1bzr2FnT1T8Z6EB0hVxoMn7uJwRKObIEB/view?usp=sharing' },
          { id:'l19', title:'Como Criar Corte Pontilhado e Serrilhado no CameraCut', url:'https://drive.google.com/file/d/1xl1f8ZbHdleGQwLQb_5UhpKHHgAqYHku/view?usp=sharing' },
          { id:'l20', title:'Como Criar um Arquivo com Meio Corte e Corte Total no CameraCut', url:'https://drive.google.com/file/d/1PNbu67i4KRFvze12u47FxVloQRqAhgGg/view?usp=sharing' },
          { id:'l21', title:'Como Ajustar a Sangria do Corte nos Arquivos do CameraCut', url:'https://drive.google.com/file/d/1W5s63UN-jmOqixEtmCzDauLTA6ijRX0Y/view?usp=sharing' },
          { id:'l22', title:'Como Fazer o Upgrade para a Versão Pro do CameraCut', url:'https://drive.google.com/file/d/1vHeyBq5jjtHFrZHu176a4PoA_IFkTAAN/view?usp=sharing' },
          { id:'l23', title:'Como Alterar o Idioma do CameraCut de Chinês para Inglês', url:'https://drive.google.com/file/d/1xmDfuLziRVrDe9jmxJcxzfMooXWNNbDU/view' },
          { id:'l24', title:'Como Desativar e Desinstalar o CameraCut', url:'https://www.youtube.com/watch?v=eQ47nc050Pg' }
        ],
        quiz: { questions: [
          { q:'Qual linguagem pode ser selecionada no CameraCut?', opts:['Apenas Chinês','Apenas Português','Inglês ou Chinês','Apenas Inglês'], c:2 },
          { q:'Como fazer upgrade para a versão Pro do CameraCut?', opts:['Reinstalando o software','Pelo processo de upgrade de licença dentro do próprio software','Comprando novo equipamento','Não é possível'], c:1 },
          { q:'O QR Code no CameraCut serve para:', opts:['Identificar o operador','Enviar arquivos de corte via WiFi com leitura automática da câmera','Gerar relatórios de produção','Configurar câmera'], c:1 },
          { q:'O CameraCut suporta plugins para:', opts:['Apenas CorelDRAW','CorelDRAW e Illustrator','Apenas Photoshop','Apenas Illustrator'], c:1 },
          { q:'A diferença entre "meio corte" e "corte total" no CameraCut é:', opts:['Meio corte é mais rápido','Meio corte corta parte da espessura (útil para stickers), corte total corta completamente','Corte total usa mais força sempre','Não há diferença'], c:1 },
          { q:'O corte pontilhado (dashed lines) no CameraCut é usado para:', opts:['Aumentar velocidade','Criar linhas de dobra ou separação sem cortar completamente','Reduzir força','Calibrar câmera'], c:1 },
          { q:'Para criar caixinhas com corte e vinco no CameraCut, é necessário:', opts:['Somente linhas de corte total','Combinação de linhas de corte total e vinco/dobra definidas em layers diferentes','Apenas linhas de vinco','Não é possível criar caixinhas'], c:1 }
        ]}
      },
      {
        id: 'm3', title: 'Módulo 3 — CutArtist e Plugin para CorelDRAW',
        desc: 'CutArtist: instalação, funcionalidades, presets e corte em matriz.',
        lessons: [
          { id:'l25', title:'Como Instalar o CutArtist e o Plugin no CorelDRAW', url:'https://drive.google.com/file/d/105v4mqNaK8jtvZtVRHhmSBezB26m4mSJ/view?usp=sharing' },
          { id:'l26', title:'Aprenda as Funcionalidades Básicas do CutArtist', url:'https://drive.google.com/file/d/1AmKr3_-dQFLW1dJ8h7BEOaBZIshd_Rtj/view?usp=sharing' },
          { id:'l27', title:'Como Criar Arquivos de Corte Utilizando o Plugin do CutArtist no CorelDRAW', url:'https://drive.google.com/file/d/1DzIohAA5gbL0pVuPzUsR-achHjhVvp3w/view?usp=sharing' },
          { id:'l28', title:'Como Criar Arquivos de Caixinhas Utilizando o CutArtist', url:'https://drive.google.com/file/d/1zJX_3hRUddj65D2o2dtZx8AFURX4Ue3D/view?usp=sharing' },
          { id:'l29', title:'Como Configurar Presets do seu Corte no CutArtist', url:'https://drive.google.com/file/d/11_UkiIk8rB8qnxCc6d_oxRakldwb_MIR/view?usp=sharing' },
          { id:'l30', title:'Como Fazer o Corte em Matriz Utilizando o CutArtist', url:'https://drive.google.com/file/d/1jMIsAURlV37jHumk8z6B9XWqKVnq7OqEs/view?usp=sharing' },
          { id:'l31', title:'Como Instalar o Plugin SignMaster no CorelDRAW', url:'https://www.youtube.com/watch?v=hxA48kaS0BA' },
          { id:'l32', title:'Como Transformar sua Plotter em Refiladora com o Plugin SignMaster', url:'https://www.youtube.com/watch?v=ngAh0HreV7I' }
        ],
        quiz: { questions: [
          { q:'O CutArtist é utilizado principalmente com qual plotter?', opts:['Linha A3','Linha C/V','Modelo G1','Refiladora T1'], c:2 },
          { q:'O que são "presets" no CutArtist?', opts:['Arquivos de firmware','Configurações salvas de corte (força, velocidade) por tipo de material','Padrões de cores','Arquivos de atualização'], c:1 },
          { q:'O corte em Matriz no CutArtist permite:', opts:['Cortar apenas uma peça por vez','Organizar e cortar múltiplas peças em série numa mesma sessão','Fazer gravação a laser','Somente corte de vinil'], c:1 },
          { q:'O Plugin SignMaster para CorelDRAW permite transformar a plotter em:', opts:['Impressora UV','Refiladora, cortando por comprimento com sensor de borda','Fibra Laser','Guilhotina automática'], c:1 },
          { q:'Como exportar arquivos do Silhouette Studio para uso no SignMaster?', opts:['Salvar como PDF e converter','Exportar diretamente em formato compatível (SVG/DXF) e importar no SignMaster','Não é possível','Copiar e colar'], c:1 }
        ]}
      }
    ]
  }
];

/* ============================================================
   EMBED URL HELPER
============================================================ */
function getYouTubeId(url) {
  if (!url) return null;
  if (url.includes('youtube.com/watch')) {
    try { return new URL(url).searchParams.get('v'); } catch { return null; }
  }
  if (url.includes('youtube.com/shorts/')) return url.split('/shorts/')[1].split('?')[0];
  if (url.includes('youtu.be/')) return url.split('youtu.be/')[1].split('?')[0];
  return null;
}

function getEmbedUrl(url) {
  if (!url) return '';
  const ytId = getYouTubeId(url);
  if (ytId) return `https://www.youtube.com/embed/${ytId}?rel=0&autoplay=1&enablejsapi=1`;
  if (url.includes('drive.google.com/file/d/')) {
    const m = url.match(/\/d\/([^\/\?]+)/);
    return m ? `https://drive.google.com/file/d/${m[1]}/preview` : url;
  }
  return url;
}

function isYT(url) { return url.includes('youtube.com') || url.includes('youtu.be'); }
function isDrive(url) { return url.includes('drive.google.com'); }

/* Renderiza a área de vídeo — thumbnail clicável para YT, iframe direto para Drive */
function renderVideoArea(lesson) {
  const url = lesson.url;
  const safeTitle = lesson.title.replace(/'/g, '&#39;').replace(/"/g, '&quot;');

  if (isYT(url)) {
    const vid = getYouTubeId(url);
    if (!vid) return renderVideoDriveOrFallback(url);
    const thumb = `https://img.youtube.com/vi/${vid}/maxresdefault.jpg`;
    const thumbFallback = `https://img.youtube.com/vi/${vid}/hqdefault.jpg`;
    const safeUrl = url.replace(/'/g, '%27');
    return `
    <div class="ct-video-area" id="varea-${vid}">
      <div class="ct-yt-thumb" onclick="playYTInline('${vid}','${safeUrl}')">
        <img src="${thumb}" onerror="this.src='${thumbFallback}'" alt="${safeTitle}" class="ct-thumb-img">
        <div class="ct-play-overlay">
          <div class="ct-play-btn"><i class="fa-solid fa-play"></i></div>
          <span class="ct-play-hint">Clique para reproduzir</span>
        </div>
      </div>
    </div>`;
  }

  return renderVideoDriveOrFallback(url);
}

function renderVideoDriveOrFallback(url) {
  if (isDrive(url)) {
    const m = url.match(/\/d\/([^\/\?]+)/);
    const embedUrl = m ? `https://drive.google.com/file/d/${m[1]}/preview` : url;
    return `
    <div class="ct-video-area">
      <div class="ct-video-wrap">
        <iframe src="${embedUrl}" allowfullscreen allow="autoplay; encrypted-media"></iframe>
      </div>
    </div>`;
  }
  return `<div class="ct-video-area" style="background:#000;min-height:120px"></div>`;
}

function playYTInline(videoId, originalUrl) {
  const container = document.getElementById('varea-' + videoId);
  if (!container) return;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  container.innerHTML = `
  <div class="ct-video-wrap">
    <iframe src="${embedUrl}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
  </div>`;
}

/* ============================================================
   PROGRESS
============================================================ */
const PKEY = 'bj-course-v3';

function getP() { try { return JSON.parse(localStorage.getItem(PKEY)) || {}; } catch { return {}; } }
function saveP(p) { localStorage.setItem(PKEY, JSON.stringify(p)); }

function markLesson(cid, mid, lid) {
  const p = getP();
  if (!p[cid]) p[cid] = {};
  if (!p[cid][mid]) p[cid][mid] = { done: [], score: null };
  if (!p[cid][mid].done.includes(lid)) p[cid][mid].done.push(lid);
  saveP(p);
}

function setScore(cid, mid, score) {
  const p = getP();
  if (!p[cid]) p[cid] = {};
  if (!p[cid][mid]) p[cid][mid] = { done: [], score: null };
  if (p[cid][mid].score === null || score > p[cid][mid].score) p[cid][mid].score = score;
  saveP(p);
}

function lessonDone(cid, mid, lid) { return (getP()[cid]?.[mid]?.done || []).includes(lid); }
function modScore(cid, mid) { return getP()[cid]?.[mid]?.score ?? null; }

function modUnlocked(cid, idx) {
  if (idx === 0) return true;
  const c = COURSES.find(x => x.id === cid);
  if (!c) return false;
  const s = modScore(cid, c.modules[idx - 1].id);
  return s !== null && s >= 100;
}

function courseComplete(cid) {
  const c = COURSES.find(x => x.id === cid);
  if (!c) return false;
  return c.modules.every(m => { const s = modScore(cid, m.id); return s !== null && s >= 100; });
}

function allCoursesComplete() {
  return COURSE_ORDER.every(cid => courseComplete(cid));
}

function globalFinalScore() { return modScore('__global__', '__final__'); }
function globalFinalPassed() { const s = globalFinalScore(); return s !== null && s >= 70; }

const COURSE_ORDER = ['linha-a3','linha-profissional','fibra-laser','ninacut-saga','refiladora-t1','guilhotinas','laminadoras','softwares'];

function courseUnlocked(cid) {
  const idx = COURSE_ORDER.indexOf(cid);
  if (idx <= 0) return true;
  return courseComplete(COURSE_ORDER[idx - 1]);
}

function courseProgress(cid) {
  const c = COURSES.find(x => x.id === cid);
  if (!c) return 0;
  const total = c.modules.length;
  const done = c.modules.filter(m => { const s = modScore(cid, m.id); return s !== null && s >= 100; }).length;
  return total ? Math.round((done / total) * 100) : 0;
}

/* ============================================================
   APP STATE
============================================================ */
const S = { view: 'catalog', cid: null, mid: null, lid: null };

function goto(view, cid, mid, lid) {
  if (view === 'course' && cid && !courseUnlocked(cid)) return;
  S.view = view; S.cid = cid || null; S.mid = mid || null; S.lid = lid || null;
  render();
  window.scrollTo(0, 0);
}

/* ============================================================
   RENDER
============================================================ */
function render() {
  const app = document.getElementById('app');
  const fab = document.getElementById('prog-fab');
  if (S.view === 'catalog') {
    app.innerHTML = renderCatalog();
    if (fab) fab.style.display = '';
  } else if (S.view === 'course') {
    app.innerHTML = renderPlayer();
    bindPlayer();
    if (fab) fab.style.display = 'none';
  }
}

/* ─── CATALOG ─────────────────────────────────────────── */
function renderCatalog() {
  const cards = COURSES.map(c => {
    const unlocked = courseUnlocked(c.id);
    const pct = courseProgress(c.id);
    const done = courseComplete(c.id);
    const totalL = c.modules.reduce((a, m) => a + m.lessons.length, 0);

    if (!unlocked) {
      const prevIdx = COURSE_ORDER.indexOf(c.id) - 1;
      const prevTitle = prevIdx >= 0 ? (COURSES.find(x => x.id === COURSE_ORDER[prevIdx])?.title || '') : '';
      return `
      <div class="machine-card ct-course-card ct-course-locked">
        <div class="ct-course-img">
          <img src="${c.img}" alt="${c.title}" class="ct-course-photo">
          <div class="ct-lock-overlay"><i class="fa-solid fa-lock"></i></div>
        </div>
        <div class="card-body">
          <div class="ct-card-cat">${c.subtitle}</div>
          <div class="card-name">${c.title}</div>
          <div class="card-desc">${c.desc}</div>
          <div class="ct-card-meta-row">
            <span><i class="fa-solid fa-book-open"></i> ${c.modules.length} módulos</span>
            <span><i class="fa-solid fa-circle-play"></i> ${totalL} aulas</span>
          </div>
          <div class="ct-locked-msg"><i class="fa-solid fa-lock"></i> Conclua <strong>${prevTitle}</strong> para desbloquear</div>
        </div>
      </div>`;
    }

    const btnLabel = done ? '🎓 Ver Certificado' : pct > 0 ? 'Continuar Curso' : 'Iniciar Curso';
    const action = done
      ? `openCertFrom('${c.id}')`
      : `goto('course','${c.id}','${c.modules[0].id}','${c.modules[0].lessons[0].id}')`;
    return `
    <div class="machine-card ct-course-card" onclick="${action}">
      <div class="ct-course-img" onclick="event.stopPropagation();${action}">
        <img src="${c.img}" alt="${c.title}" class="ct-course-photo">
      </div>
      <div class="card-body" onclick="event.stopPropagation();${action}">
        <div class="ct-card-cat">${c.subtitle}</div>
        <div class="card-name">${c.title}</div>
        <div class="card-desc">${c.desc}</div>
        <div class="ct-card-meta-row">
          <span><i class="fa-solid fa-book-open"></i> ${c.modules.length} módulos</span>
          <span><i class="fa-solid fa-circle-play"></i> ${totalL} aulas</span>
        </div>
        ${pct > 0 ? `<div class="ct-progress-bar" style="margin:0 0 10px"><div class="ct-progress-fill" style="width:${pct}%"></div></div>` : ''}
        <button class="ct-start-btn" onclick="event.stopPropagation();${action}">${btnLabel}</button>
      </div>
    </div>`;
  }).join('');

  return `
  <div class="ct-hero">
    <div class="container ct-hero-inner">
<h1>Curso Técnico <span class="gradient-text">Bannerjet</span></h1>
      <p>Aprenda a operar, configurar e manter cada equipamento da linha Bannerjet Group. Módulos práticos, avaliações e certificado por equipamento.</p>
    </div>
  </div>
  <div class="ct-catalog">
    <div class="container">
      <div style="margin-bottom:28px">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
          <div class="section-bar"></div>
          <h2 class="section-title">Escolha seu Curso</h2>
        </div>
        <p style="font-size:13px;color:var(--text-3);margin:0;padding-left:2px"><i class="fa-solid fa-lock" style="font-size:11px;margin-right:5px"></i>Os cursos são liberados em sequência — conclua cada um para desbloquear o próximo.</p>
      </div>
      <div class="ct-catalog-grid">${cards}</div>

      ${(() => {
        const fPassed = globalFinalPassed();
        const fScore  = globalFinalScore();
        const canTake = allCoursesComplete();
        if (fPassed) return `
        <div class="ct-final-section ct-final-done">
          <div class="ct-final-trophy"><i class="fa-solid fa-trophy"></i></div>
          <div class="ct-final-body">
            <div class="ct-final-title">🎓 Parabéns — Você está formado!</div>
            <div class="ct-final-desc">Você concluiu todos os cursos e passou na Prova Final com 100%. Formação completa na plataforma Bannerjet Group.</div>
          </div>
        </div>`;
        if (canTake) return `
        <div class="ct-final-section ct-final-available">
          <div class="ct-final-icon"><i class="fa-solid fa-graduation-cap"></i></div>
          <div class="ct-final-body">
            <div class="ct-final-title">🏁 Prova Final Disponível!</div>
            <div class="ct-final-desc">${fScore !== null ? `Sua última tentativa foi de ${Math.round(fScore)}%. É necessário 100% para se formar. ` : 'Você concluiu todos os cursos! '}Faça a Prova Final com todas as questões de todos os cursos para obter sua formação.</div>
            <button class="ct-final-btn" onclick="openFinalQuiz()">Clique aqui para começar a Prova Final</button>
          </div>
        </div>`;
        const total = COURSE_ORDER.length;
        const done  = COURSE_ORDER.filter(cid => courseComplete(cid)).length;
        return `
        <div class="ct-final-section ct-final-locked">
          <div class="ct-final-icon"><i class="fa-solid fa-lock"></i></div>
          <div class="ct-final-body">
            <div class="ct-final-title">Prova Final — Bloqueada</div>
            <div class="ct-final-desc">Conclua todos os ${total} cursos para desbloquear a Prova Final. Progresso: ${done} de ${total} cursos concluídos.</div>
          </div>
        </div>`;
      })()}
    </div>
  </div>`;
}

/* ─── PLAYER ──────────────────────────────────────────── */
function renderPlayer() {
  const course = COURSES.find(c => c.id === S.cid);
  if (!course) return renderCatalog();

  const mod = course.modules.find(m => m.id === S.mid) || course.modules[0];
  const lesson = mod.lessons.find(l => l.id === S.lid) || mod.lessons[0];
  const pct = courseProgress(S.cid);
  const modIdx = course.modules.indexOf(mod);

  // Build sidebar modules
  const sideModules = course.modules.map((m, i) => {
    const unlocked = modUnlocked(S.cid, i);
    const score = modScore(S.cid, m.id);
    const allDone = score !== null && score >= 100;
    const open = m.id === S.mid;

    const scoreChip = score !== null
      ? `<span class="ct-module-score${score >= 100 ? '' : ' fail'}">${Math.round(score)}%</span>` : '';

    const numClass = allDone ? 'done' : unlocked ? '' : 'locked';

    const lessonItems = m.lessons.map(l => {
      const done = lessonDone(S.cid, m.id, l.id);
      const active = l.id === S.lid && m.id === S.mid;
      return `
      <div class="ct-lesson-item${active ? ' active' : ''}" onclick="navLesson('${m.id}','${l.id}')">
        <div class="ct-lesson-check${done ? ' done' : active ? ' active-dot' : ''}">
          ${done ? '<i class="fa-solid fa-check"></i>' : ''}
        </div>
        <span class="ct-lesson-item-title${active ? ' active' : ''}">${l.title}</span>
        <i class="fa-solid ${isYT(l.url) ? 'fa-play' : 'fa-file-video'} ct-lesson-type-icon"></i>
      </div>`;
    }).join('');

    const resourceItems = (m.resources || []).map(r => `
      <div class="ct-lesson-item" onclick="window.open('${r.url}','_blank')">
        <div class="ct-lesson-check"><i class="fa-solid fa-file-pdf" style="color:#CA8A04;font-size:9px"></i></div>
        <span class="ct-lesson-item-title">${r.title}</span>
        <i class="fa-solid fa-external-link ct-lesson-type-icon"></i>
      </div>`).join('');

    const quizRow = unlocked ? `
      <div class="ct-quiz-row" onclick="openQuiz('${m.id}')">
        <div class="ct-quiz-row-icon"><i class="fa-solid fa-clipboard-question"></i></div>
        <span class="ct-quiz-row-title">Avaliação do Módulo ${i + 1} ${score !== null ? (score >= 100 ? '✓' : '✗') : ''}</span>
        ${scoreChip}
      </div>` : `<div class="ct-locked-overlay"><i class="fa-solid fa-lock"></i> Complete o módulo anterior</div>`;

    return `
    <div class="ct-module">
      <div class="ct-module-header" onclick="toggleMod('${m.id}')">
        <div class="ct-module-num ${numClass}">${allDone ? '<i class="fa-solid fa-check" style="font-size:10px"></i>' : unlocked ? (i+1) : '<i class="fa-solid fa-lock" style="font-size:9px"></i>'}</div>
        <div class="ct-module-info">
          <div class="ct-module-title${!unlocked ? ' locked-text' : ''}">${m.title}</div>
          <div class="ct-module-meta">
            <span class="ct-module-meta-item">${m.lessons.length} aulas</span>
            ${scoreChip}
          </div>
        </div>
        <i class="fa-solid fa-chevron-right ct-module-chevron${open ? ' open' : ''}"></i>
      </div>
      <div class="ct-lessons-list${open ? ' open' : ''}">
        ${unlocked ? lessonItems + resourceItems + quizRow : `<div class="ct-locked-overlay"><i class="fa-solid fa-lock"></i> Desbloqueie completando o módulo anterior.</div>`}
      </div>
    </div>`;
  }).join('');

  const finalRow = '';

  // Navigation
  const allLessons = course.modules.flatMap(m => m.lessons.map(l => ({ mid: m.id, lid: l.id })));
  const curIdx = allLessons.findIndex(x => x.mid === S.mid && x.lid === S.lid);
  const hasPrev = curIdx > 0;
  const hasNext = curIdx < allLessons.length - 1;
  const isLastInMod = mod.lessons[mod.lessons.length - 1].id === S.lid;
  const isModUnlock = modUnlocked(S.cid, modIdx);
  const curScore = modScore(S.cid, S.mid);

  const navRight = isLastInMod && isModUnlock
    ? `<button class="ct-nav-btn-quiz" onclick="openQuiz('${S.mid}')">
         <i class="fa-solid fa-clipboard-question"></i>
         ${curScore !== null ? `Refazer Avaliação (${Math.round(curScore)}%)` : 'Fazer Avaliação do Módulo'}
       </button>`
    : hasNext
      ? `<button class="ct-nav-btn primary" onclick="navNext()"><i class="fa-solid fa-chevron-right"></i> Próxima Aula</button>`
      : '';

  const certBanner = courseComplete(S.cid) ? `
    <div class="ct-cert-banner">
      <div class="ct-cert-banner-icon">🎓</div>
      <div><h4>Curso Concluído!</h4><p>Você completou todos os módulos. Gere seu certificado agora.</p></div>
      <button class="ct-cert-banner-btn" onclick="openCert()">Gerar Certificado</button>
    </div>` : '';

  const badgeLabel = isYT(lesson.url) ? 'YouTube' : isDrive(lesson.url) ? 'Google Drive' : 'Vídeo';
  const badgeClass = isYT(lesson.url) ? 'yt' : isDrive(lesson.url) ? 'drive' : '';

  return `
  <div class="ct-player">
    <div class="ct-sidebar">
      <div class="ct-sidebar-header">
        <div class="ct-sidebar-back" onclick="goto('catalog')">
          <i class="fa-solid fa-arrow-left"></i> Todos os cursos
        </div>
        <div class="ct-sidebar-title">${course.title}</div>
        <div class="ct-sidebar-sub">${course.subtitle}</div>
      </div>
      <div class="ct-overall-progress">
        <div class="ct-overall-progress-label"><span>Progresso geral</span><span>${pct}%</span></div>
        <div class="ct-progress-bar"><div class="ct-progress-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="ct-sidebar-scroll" id="sidebar-scroll">${sideModules}${finalRow}</div>
    </div>
    <div class="ct-main">
      ${renderVideoArea(lesson)}
      <div class="ct-content-area">
        ${certBanner}
        <div class="ct-breadcrumb">
          <span>${course.title}</span>
          <i class="fa-solid fa-chevron-right" style="font-size:9px"></i>
          <span>${mod.title.replace(/Módulo \d+ — /, '')}</span>
        </div>
        <h2 class="ct-lesson-title">${lesson.title}</h2>
        <span class="ct-lesson-badge ${badgeClass}">
          <i class="fa-solid ${isYT(lesson.url) ? 'fa-play' : 'fa-file-video'}"></i> ${badgeLabel}
        </span>
        <a href="${lesson.url}" target="_blank" class="ct-open-external">
          <i class="fa-solid fa-external-link-alt"></i> Abrir em nova aba
        </a>
        ${(mod.resources && mod.resources.length && isLastInMod) ? `
        <div class="ct-resources">
          <h4><i class="fa-solid fa-file-pdf" style="color:#CA8A04;margin-right:6px"></i>Manuais e Documentos deste Módulo</h4>
          ${mod.resources.map(r => `<a href="${r.url}" target="_blank" class="ct-resource-item"><i class="fa-solid fa-arrow-up-right-from-square"></i>${r.title}</a>`).join('')}
        </div>` : ''}
      </div>
      <div class="ct-nav-footer">
        <button class="ct-nav-btn" onclick="navPrev()" ${!hasPrev ? 'disabled' : ''}>
          <i class="fa-solid fa-chevron-left"></i> Anterior
        </button>
        <button class="ct-complete-btn" id="complete-btn" onclick="completeLesson()">
          ${lessonDone(S.cid, S.mid, S.lid) ? '<i class="fa-solid fa-circle-check"></i> Concluída' : '<i class="fa-regular fa-circle-check"></i> Marcar como concluída'}
        </button>
        ${navRight}
      </div>
    </div>
  </div>`;
}

function bindPlayer() {
  // auto-scroll sidebar to active
  setTimeout(() => {
    const active = document.querySelector('.ct-lesson-item.active');
    if (active) active.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, 100);
}

/* ─── PLAYER ACTIONS ──────────────────────────────────── */
function toggleMod(mid) {
  const course = COURSES.find(c => c.id === S.cid);
  const idx = course.modules.findIndex(m => m.id === mid);
  if (!modUnlocked(S.cid, idx)) return;
  const lists = document.querySelectorAll('.ct-lessons-list');
  const chevrons = document.querySelectorAll('.ct-module-chevron');
  const headers = document.querySelectorAll('.ct-module-header');
  headers.forEach((h, i) => {
    if (h.getAttribute('onclick') === `toggleMod('${mid}')`) {
      lists[i].classList.toggle('open');
      chevrons[i].classList.toggle('open');
    }
  });
}

function navLesson(mid, lid) {
  const course = COURSES.find(c => c.id === S.cid);
  const modIdx = course.modules.findIndex(m => m.id === mid);
  if (!modUnlocked(S.cid, modIdx)) return;
  S.mid = mid; S.lid = lid;
  goto('course', S.cid, S.mid, S.lid);
}

function navNext() {
  const course = COURSES.find(c => c.id === S.cid);
  const all = course.modules.flatMap(m => m.lessons.map(l => ({ mid: m.id, lid: l.id })));
  const i = all.findIndex(x => x.mid === S.mid && x.lid === S.lid);
  if (i < all.length - 1) {
    const next = all[i + 1];
    const modIdx = course.modules.findIndex(m => m.id === next.mid);
    if (!modUnlocked(S.cid, modIdx)) return;
    markLesson(S.cid, S.mid, S.lid);
    goto('course', S.cid, next.mid, next.lid);
  }
}

function navPrev() {
  const course = COURSES.find(c => c.id === S.cid);
  const all = course.modules.flatMap(m => m.lessons.map(l => ({ mid: m.id, lid: l.id })));
  const i = all.findIndex(x => x.mid === S.mid && x.lid === S.lid);
  if (i > 0) goto('course', S.cid, all[i-1].mid, all[i-1].lid);
}

function completeLesson() {
  markLesson(S.cid, S.mid, S.lid);
  const btn = document.getElementById('complete-btn');
  if (btn) {
    btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Concluída';
    btn.style.background = 'rgba(34,197,94,0.15)';
  }
}

/* ============================================================
   QUIZ
============================================================ */
let qState = { cid: null, mid: null, isFinal: false, questions: [], qIdx: 0, answers: [], submitted: false };

function openQuiz(mid) {
  const course = COURSES.find(c => c.id === S.cid);
  const mod = course.modules.find(m => m.id === mid);
  if (!mod) return;
  const qs = mod.quiz.questions;
  qState = { cid: S.cid, mid, isFinal: false, questions: qs, qIdx: 0, answers: new Array(qs.length).fill(null), submitted: false };
  renderQuiz();
  document.getElementById('quiz-modal').classList.remove('hidden');
}

function openFinalQuiz() {
  if (!allCoursesComplete()) return;
  const allQs = COURSES.flatMap(c =>
    c.modules.flatMap(m =>
      m.quiz.questions.map(q => ({ ...q, _mod: c.title + ' — ' + m.title }))
    )
  );
  qState = { cid: '__global__', mid: '__final__', isFinal: true, questions: allQs, qIdx: 0, answers: new Array(allQs.length).fill(null), submitted: false };
  renderQuiz();
  document.getElementById('quiz-modal').classList.remove('hidden');
}

function closeQuiz() {
  document.getElementById('quiz-modal').classList.add('hidden');
  if (qState.submitted && !qState.isFinal) goto('course', S.cid, S.mid, S.lid);
  if (qState.submitted && qState.isFinal) render();
}

function renderQuiz() {
  const course = COURSES.find(c => c.id === qState.cid);
  const qs    = qState.questions;
  const q     = qs[qState.qIdx];
  const total = qs.length;

  const title    = qState.isFinal ? 'Prova Final — Bannerjet Group' : 'Avaliação — ' + (course?.modules.find(m => m.id === qState.mid)?.title.replace(/Módulo \d+ — /, '') || '');
  const subtitle = qState.isFinal ? 'Nota mínima: 70% para se formar.' : 'Nota mínima: 100% para avançar ao próximo módulo';
  const modTag   = (qState.isFinal && q._mod) ? `<div class="quiz-mod-tag">${q._mod}</div>` : '';

  const letters = ['A','B','C','D'];
  const opts = q.opts.map((opt, i) => {
    const sel = qState.answers[qState.qIdx] === i;
    return `<div class="quiz-opt${sel ? ' selected' : ''}" onclick="selectOpt(${i})">
      <div class="quiz-opt-letter">${letters[i]}</div>
      <span class="quiz-opt-text">${opt}</span>
    </div>`;
  }).join('');

  document.getElementById('quiz-box').innerHTML = `
  <div class="quiz-header${qState.isFinal ? ' quiz-header-final' : ''}">
    <div class="quiz-title">${title}</div>
    <div class="quiz-subtitle">${subtitle}</div>
  </div>
  <div class="quiz-progress">
    <span>Questão ${qState.qIdx + 1} de ${total}</span>
    <span>${Math.round(((qState.qIdx) / total) * 100)}% respondido</span>
  </div>
  <div class="quiz-body">
    <div class="quiz-q-num">Questão ${qState.qIdx + 1}${modTag}</div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">${opts}</div>
  </div>
  <div class="quiz-footer">
    <button class="quiz-btn secondary" onclick="closeQuiz()">Cancelar</button>
    ${qState.qIdx > 0 ? `<button class="quiz-btn secondary" onclick="quizPrev()">Anterior</button>` : ''}
    ${qState.qIdx < total - 1
      ? `<button class="quiz-btn primary" onclick="quizNext()" ${qState.answers[qState.qIdx] === null ? 'disabled' : ''}>Próxima</button>`
      : `<button class="quiz-btn primary" onclick="submitQuiz()" ${qState.answers[qState.qIdx] === null ? 'disabled' : ''}>Finalizar</button>`
    }
  </div>`;
}

function selectOpt(i) {
  qState.answers[qState.qIdx] = i;
  renderQuiz();
}

function quizNext() {
  if (qState.answers[qState.qIdx] === null) return;
  qState.qIdx++;
  renderQuiz();
}

function quizPrev() {
  if (qState.qIdx > 0) { qState.qIdx--; renderQuiz(); }
}

function submitQuiz() {
  const qs = qState.questions;
  let correct = 0;
  qState.answers.forEach((a, i) => { if (a === qs[i].c) correct++; });
  const score = (correct / qs.length) * 100;
  const pass  = qState.isFinal ? score >= 70 : score >= 100;
  qState.submitted = true;
  qState.score = score;
  setScore(qState.cid, qState.mid, score);

  const cid    = qState.cid;
  const isFinal = qState.isFinal;
  let subMsg = '';
  let extraBtn = '';

  if (isFinal) {
    if (pass) {
      subMsg   = 'Parabéns! Você acertou todas as questões e está formado na plataforma Bannerjet!';
      extraBtn = `<button class="quiz-btn primary ct-final-cert-btn" onclick="closeQuiz();render()">🎓 Ver Formatura</button>`;
    } else {
      subMsg = `Você acertou ${correct} de ${qs.length} questões. É necessário acertar <strong>100%</strong> para se formar. Revise os cursos e tente novamente.`;
    }
  } else {
    if (pass) {
      subMsg = allModulesPassed(cid)
        ? '🏁 Todos os módulos concluídos! A <strong>Prova Final</strong> está disponível no menu do curso.'
        : 'Próximo módulo desbloqueado!';
    } else {
      subMsg = 'Você precisa de 100% de acerto para avançar. Revise o módulo e tente novamente.';
    }
  }

  document.getElementById('quiz-box').innerHTML = `
  <div class="quiz-result">
    <div class="quiz-result-icon">${pass ? '🎉' : '📚'}</div>
    <div class="quiz-result-score ${pass ? 'pass' : 'fail'}">${Math.round(score)}%</div>
    <div class="quiz-result-msg">${pass ? 'Aprovado!' : 'Não aprovado'}</div>
    <div class="quiz-result-sub">${correct} de ${qs.length} questões corretas.<br>${subMsg}</div>
    <div class="quiz-result-btns">
      <button class="quiz-btn secondary" onclick="showGabarito()">📋 Ver Gabarito</button>
      ${!pass ? `<button class="quiz-btn secondary" onclick="retryQuiz()">Tentar Novamente</button>` : ''}
      <button class="quiz-btn primary" onclick="closeQuiz()">${pass ? 'Continuar' : 'Fechar'}</button>
      ${extraBtn}
    </div>
  </div>`;
}

function retryQuiz() {
  qState.qIdx = 0;
  qState.answers = new Array(qState.questions.length).fill(null);
  qState.submitted = false;
  renderQuiz();
}

function showGabarito() {
  const course = COURSES.find(c => c.id === qState.cid);
  const qs = qState.questions;
  const pass = qState.isFinal ? qState.score >= 70 : qState.score >= 100;

  const rows = qs.map((q, i) => {
    const answered = qState.answers[i];
    const isRight = answered === q.c;
    return `
    <div class="gab-row ${isRight ? 'gab-correct' : 'gab-wrong'}">
      <div class="gab-row-header">
        <div class="gab-num">${i + 1}</div>
        <span class="gab-verdict">${isRight ? '✓ Correta' : '✗ Errada'}</span>
      </div>
      <div class="gab-question">${q.q}</div>
      ${!isRight ? `<div class="gab-answer-row"><span class="gab-label wrong-label">Sua resposta:</span><span>${answered !== null ? q.opts[answered] : 'Não respondida'}</span></div>` : ''}
      <div class="gab-answer-row"><span class="gab-label correct-label">Resposta certa:</span><span>${q.opts[q.c]}</span></div>
    </div>`;
  }).join('');

  document.getElementById('quiz-box').innerHTML = `
  <div class="gab-container">
    <div class="gab-header">
      <div class="quiz-result-score ${pass ? 'pass' : 'fail'}" style="font-size:36px;margin-bottom:4px">${Math.round(qState.score)}%</div>
      <div class="quiz-result-msg" style="margin-bottom:4px">${qState.isFinal ? 'Prova Final — Bannerjet Group' : (course?.modules.find(m => m.id === qState.mid)?.title || '')}</div>
      <div style="font-size:13px;color:var(--text-2)">${qs.filter((_,i)=>qState.answers[i]===qs[i].c).length} de ${qs.length} questões corretas</div>
    </div>
    <div class="gab-list">${rows}</div>
    <div class="quiz-result-btns" style="padding-bottom:4px">
      ${!pass ? `<button class="quiz-btn secondary" onclick="retryQuiz()">Tentar Novamente</button>` : ''}
      <button class="quiz-btn primary" onclick="closeQuiz()">${pass ? 'Continuar' : 'Fechar'}</button>
      ${pass && qState.isFinal ? `<button class="quiz-btn primary ct-final-cert-btn" onclick="closeQuiz();setTimeout(()=>openCertFrom('${qState.cid}'),100)">🎓 Gerar Certificado</button>` : ''}
    </div>
  </div>`;
}

/* ============================================================
   CERTIFICATE
============================================================ */
let certCid = null;

function openCertFrom(cid) { certCid = cid; openCert(); }

function openCert() {
  const cid = certCid || S.cid;
  const course = COURSES.find(c => c.id === cid);
  if (!course) return;
  certCid = cid;
  document.getElementById('cert-box').innerHTML = `
  <div class="cert-name-screen">
    <div class="cert-name-title">🎓 Gerar Certificado</div>
    <div class="cert-name-sub">Informe seu nome completo como deve aparecer no certificado de <strong>${course.title} — ${course.subtitle}</strong>.</div>
    <input class="cert-name-input" id="cert-name-input" type="text" placeholder="Seu nome completo" maxlength="60">
    <div class="cert-name-btns">
      <button class="quiz-btn secondary" onclick="closeCert()">Cancelar</button>
      <button class="quiz-btn primary" onclick="generateCert()">Gerar Certificado</button>
    </div>
  </div>`;
  document.getElementById('cert-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('cert-name-input')?.focus(), 100);
}

function closeCert() {
  certCid = null;
  document.getElementById('cert-modal').classList.add('hidden');
}

function generateCert() {
  const name = (document.getElementById('cert-name-input')?.value || '').trim();
  if (!name) { document.getElementById('cert-name-input').style.borderColor = '#EF4444'; return; }
  const course = COURSES.find(c => c.id === (certCid || S.cid));
  const logo = new Image();
  logo.crossOrigin = 'anonymous';
  logo.onload  = () => _drawCertCanvas(name, course, logo);
  logo.onerror = () => _drawCertCanvas(name, course, null);
  logo.src = 'images/Bannerjet-Group-logo-White.png?nocache=' + Date.now();
}

function _drawCertCanvas(name, course, logo) {
  const canvas = document.createElement('canvas');
  canvas.width = 1200; canvas.height = 848;
  const ctx = canvas.getContext('2d');

  // BG
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 1200, 848);

  // Gradient decorative blocks
  const grd = ctx.createLinearGradient(0, 0, 1200, 848);
  grd.addColorStop(0, '#F79E77'); grd.addColorStop(.33, '#F58979');
  grd.addColorStop(.66, '#F2778D'); grd.addColorStop(1, '#9E6396');

  // Border
  ctx.strokeStyle = grd; ctx.lineWidth = 14;
  ctx.strokeRect(14, 14, 1172, 820);
  ctx.strokeStyle = '#E8E6E2'; ctx.lineWidth = 1.5;
  ctx.strokeRect(28, 28, 1144, 792);

  // Top accent band
  ctx.fillStyle = grd; ctx.fillRect(28, 28, 1144, 8);

  // Header area
  ctx.fillStyle = '#111111';
  ctx.font = 'bold 38px "Segoe UI", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('BANNERJET GROUP', 600, 118);

  ctx.fillStyle = '#888';
  ctx.font = '16px "Segoe UI", Arial, sans-serif';
  ctx.fillText('Central Técnica — Plataforma de Ensino', 600, 143);

  // Divider
  ctx.strokeStyle = '#E8E6E2'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(80, 165); ctx.lineTo(1120, 165); ctx.stroke();

  // Cert title
  ctx.fillStyle = grd;
  ctx.font = 'bold 48px "Segoe UI", Arial, sans-serif';
  ctx.fillText('CERTIFICADO DE CONCLUSÃO', 600, 248);

  // Body
  ctx.fillStyle = '#444';
  ctx.font = '22px "Segoe UI", Arial, sans-serif';
  ctx.fillText('Certificamos que', 600, 328);

  // Name
  ctx.fillStyle = '#111';
  ctx.font = 'bold 54px "Segoe UI", Arial, sans-serif';
  ctx.fillText(name.toUpperCase(), 600, 412);

  // Name underline (gradient)
  const nw = ctx.measureText(name.toUpperCase()).width;
  const ug = ctx.createLinearGradient(600 - nw/2, 0, 600 + nw/2, 0);
  ug.addColorStop(0, '#F79E77'); ug.addColorStop(1, '#9E6396');
  ctx.strokeStyle = ug; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(600 - nw/2, 428); ctx.lineTo(600 + nw/2, 428); ctx.stroke();

  // Course text
  ctx.fillStyle = '#555';
  ctx.font = '22px "Segoe UI", Arial, sans-serif';
  ctx.fillText('concluiu com êxito o curso técnico:', 600, 490);

  ctx.fillStyle = '#F2778D';
  ctx.font = 'bold 36px "Segoe UI", Arial, sans-serif';
  ctx.fillText(`${course.title} — ${course.subtitle}`, 600, 550);

  ctx.fillStyle = '#777';
  ctx.font = '18px "Segoe UI", Arial, sans-serif';
  ctx.fillText(`Incluindo ${course.modules.length} módulos com avaliações e nota mínima de 100%.`, 600, 590);

  // Date
  const today = new Date().toLocaleDateString('pt-BR', { year:'numeric', month:'long', day:'numeric' });
  ctx.fillStyle = '#888';
  ctx.font = '16px "Segoe UI", Arial, sans-serif';
  ctx.fillText(`Emitido em ${today}`, 600, 650);

  // Bottom divider
  ctx.strokeStyle = '#E8E6E2'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(80, 680); ctx.lineTo(1120, 680); ctx.stroke();

  // Centered footer brand
  ctx.fillStyle = '#BBBBBB';
  ctx.font = '13px "Segoe UI", Arial, sans-serif';
  ctx.fillText('Bannerjet Group — Central Técnica', 600, 715);

  // Bottom band
  ctx.fillStyle = grd;
  ctx.fillRect(28, 812, 1144, 8);

  // Show in modal
  let dataUrl;
  try {
    dataUrl = canvas.toDataURL('image/png');
  } catch (e) {
    // Canvas tainted by logo image — redraw without it and retry
    if (logo) { _drawCertCanvas(name, course, null); return; }
    dataUrl = '';
  }
  document.getElementById('cert-box').innerHTML = `
  <div class="cert-canvas-wrapper"><img src="${dataUrl}" style="width:100%;height:auto;display:block;border-radius:inherit"></div>
  <div class="cert-actions">
    <div class="cert-actions-left">${course.title} — ${name}</div>
    <div style="display:flex;gap:8px">
      <button class="quiz-btn secondary" onclick="closeCert()">Fechar</button>
      <button class="quiz-btn primary" onclick="downloadCert()">
        <i class="fa-solid fa-download"></i> Baixar PNG
      </button>
    </div>
  </div>`;

  window._certCanvas = canvas;
  window._certName = name;
  window._certCourse = course.title;
}

function downloadCert() {
  if (!window._certCanvas) return;
  const a = document.createElement('a');
  a.href = window._certCanvas.toDataURL('image/png');
  a.download = `Certificado_${window._certCourse}_${window._certName}.png`.replace(/\s+/g, '_');
  a.click();
}

/* ============================================================
   PROGRESS PANEL
============================================================ */
function toggleProgressPanel() {
  const p = document.getElementById('progress-panel');
  if (p.classList.contains('open')) closeProgressPanel();
  else openProgressPanel();
}
function openProgressPanel() {
  document.getElementById('prog-body').innerHTML = renderProgressContent();
  document.getElementById('progress-panel').classList.add('open');
}
function closeProgressPanel() {
  document.getElementById('progress-panel').classList.remove('open');
}

function renderProgressContent() {
  const totalMods = COURSES.reduce((a, c) => a + c.modules.length, 0);
  const doneMods  = COURSES.reduce((a, c) =>
    a + c.modules.filter(m => modScore(c.id, m.id) >= 100).length, 0);
  const doneCourses = COURSES.filter(c => courseComplete(c.id));

  const stats = `
  <div class="ct-prog-stats">
    <div class="ct-prog-stat">
      <div class="ct-prog-stat-val">${doneCourses.length}<span class="ct-prog-stat-of">/${COURSES.length}</span></div>
      <div class="ct-prog-stat-lbl">Cursos<br>concluídos</div>
    </div>
    <div class="ct-prog-stat">
      <div class="ct-prog-stat-val">${doneMods}<span class="ct-prog-stat-of">/${totalMods}</span></div>
      <div class="ct-prog-stat-lbl">Módulos<br>aprovados</div>
    </div>
    <div class="ct-prog-stat">
      <div class="ct-prog-stat-val">${doneCourses.length}</div>
      <div class="ct-prog-stat-lbl">Certificados<br>conquistados</div>
    </div>
  </div>`;

  const certsHtml = doneCourses.length > 0 ? `
  <div class="ct-prog-section">
    <div class="ct-prog-sec-title"><i class="fa-solid fa-award"></i> Certificados Conquistados</div>
    <div class="ct-cert-gallery">
      ${doneCourses.map(c => `
      <div class="ct-cert-card">
        <div class="ct-cert-mini-band"></div>
        <div class="ct-cert-mini-body">
          <div class="ct-cert-mini-brand">Bannerjet Group</div>
          <div class="ct-cert-mini-divider"></div>
          <div class="ct-cert-mini-type">CERTIFICADO<br>DE CONCLUSÃO</div>
          <div class="ct-cert-mini-seal"><i class="fa-solid fa-graduation-cap"></i></div>
          <div class="ct-cert-mini-course">${c.title}</div>
        </div>
        <div class="ct-cert-mini-band"></div>
        <button class="ct-cert-dl-btn" onclick="event.stopPropagation();openCertFrom('${c.id}')">
          <i class="fa-solid fa-download"></i> Baixar
        </button>
      </div>`).join('')}
    </div>
  </div>` : '';

  const coursesHtml = `
  <div class="ct-prog-section">
    <div class="ct-prog-sec-title"><i class="fa-solid fa-list-check"></i> Progresso por Curso</div>
    ${COURSES.map(c => {
      const pct  = Math.round(courseProgress(c.id));
      const done = courseComplete(c.id);
      const chips = c.modules.map((m, i) => {
        const sc     = modScore(c.id, m.id);
        const locked = !modUnlocked(c.id, i);
        const passed = sc !== null && sc >= 100;
        const failed = sc !== null && sc < 100;
        const cls    = passed ? 'ok' : failed ? 'fail' : locked ? 'lock' : '';
        const ico    = passed ? 'fa-check' : failed ? 'fa-xmark' : locked ? 'fa-lock' : 'fa-minus';
        return `<div class="ct-prog-chip-mod ${cls}">
          <i class="fa-solid ${ico}"></i> M${i + 1}
          ${sc !== null ? `<span>${Math.round(sc)}%</span>` : ''}
        </div>`;
      }).join('');
      return `
      <div class="ct-prog-ccard" onclick="goto('course','${c.id}','${c.modules[0].id}','${c.modules[0].lessons[0].id}');closeProgressPanel()">
        <div class="ct-prog-ccard-top">
          <div class="ct-prog-ccard-icon">
            <i class="fa-solid ${c.icon}"></i>
          </div>
          <div class="ct-prog-ccard-info">
            <div class="ct-prog-ccard-name">${c.title}</div>
            <div class="ct-prog-ccard-sub">${c.subtitle}</div>
          </div>
          ${done
            ? '<div class="ct-prog-status-chip done"><i class="fa-solid fa-graduation-cap"></i> Concluído</div>'
            : pct > 0
              ? `<div class="ct-prog-status-chip prog">${pct}%</div>`
              : '<div class="ct-prog-status-chip new">Novo</div>'}
        </div>
        <div class="ct-prog-pbar"><div class="ct-prog-pbar-fill" style="width:${pct}%"></div></div>
        <div class="ct-prog-mods">${chips}</div>
      </div>`;
    }).join('')}
  </div>`;

  return stats + certsHtml + coursesHtml;
}

/* ============================================================
   MODAL BACKDROP CLOSE
============================================================ */
document.getElementById('quiz-modal').querySelector('.bj-modal-backdrop').addEventListener('click', closeQuiz);
document.getElementById('cert-modal').querySelector('.bj-modal-backdrop').addEventListener('click', closeCert);

/* ============================================================
   DEV MODE  (Ctrl+Shift+D = unlock all | Ctrl+Shift+X = reset)
============================================================ */
function _devToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:#111;color:#fff;padding:10px 22px;border-radius:10px;font-size:13px;font-weight:600;z-index:99999;pointer-events:none;box-shadow:0 4px 20px rgba(0,0,0,0.35);transition:opacity 0.4s';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 420); }, 2600);
}

function devUnlockAll() {
  const p = getP();
  COURSES.forEach(c => {
    if (!p[c.id]) p[c.id] = {};
    c.modules.forEach(m => {
      p[c.id][m.id] = { done: m.lessons.map(l => l.id), score: 100 };
    });
    // __final__ não é definido → prova final fica pendente para você testar o fluxo
  });
  saveP(p);
  render();
  _devToast('🔓 Dev: módulos completos — entre no curso para ver a Prova Final');
}

function devUnlockFinal() {
  const p = getP();
  COURSES.forEach(c => {
    if (!p[c.id]) p[c.id] = {};
    c.modules.forEach(m => {
      p[c.id][m.id] = { done: m.lessons.map(l => l.id), score: 100 };
    });
  });
  if (!p['__global__']) p['__global__'] = {};
  p['__global__']['__final__'] = { done: [], score: 100 };
  saveP(p);
  render();
  _devToast('🏆 Dev: todos os cursos e prova final global concluídos');
}

function devReset() {
  saveP({});
  render();
  _devToast('🗑️ Dev: progresso resetado');
}

document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.shiftKey && e.key === 'D') { e.preventDefault(); devUnlockAll(); }
  if (e.ctrlKey && e.shiftKey && e.key === 'F') { e.preventDefault(); devUnlockFinal(); }
  if (e.ctrlKey && e.shiftKey && e.key === 'X') { e.preventDefault(); devReset(); }
});

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', render);
