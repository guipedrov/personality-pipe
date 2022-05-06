import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/components.css";
import {as4letrasx as as4letras} from "./Arrays.tsx"
import {fnx as fn} from "./Arrays.tsx"
import {jungx as jung} from "./Arrays.tsx"
import Badges from "./Badges.jsx"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { grey } from '@mui/material/colors';
import arrowRight from "../assets/images/arrow-right.png"
import arrowRightBlack from "../assets/images/arrow-right-black.png"

function Subtitle({ categoryMenu, type }) {
  const [current, setCurrent] = useState("1")
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (type === "Todos") { setCurrent("9") }
    else if (type === "ENTP") { setCurrent("10") }
    else if (type === "ENTJ") { setCurrent("11") }
    else if (type === "INTP") { setCurrent("12") }
    else if (type === "INTJ") { setCurrent("13") }
    else if (type === "ESTJ") { setCurrent("14") }
    else if (type === "ESFJ") { setCurrent("15") }
    else if (type === "ISTJ") { setCurrent("16") }
    else if (type === "ISFJ") { setCurrent("17") }
    else if (type === "ESTP") { setCurrent("18") }
    else if (type === "ESFP") { setCurrent("19") }
    else if (type === "ISTP") { setCurrent("20") }
    else if (type === "ISFP") { setCurrent("21") }
    else if (type === "ENFJ") { setCurrent("22") }
    else if (type === "ENFP") { setCurrent("23") }
    else if (type === "INFJ") { setCurrent("24") }
    else if (type === "INFP") { setCurrent("25") }
  }, [])

  const local = {
    ENTP: "Os ENTPs são versáteis, de mente aberta e inquietos. Facilmente entediados, eles estão constantemente brincando com novas ideias e procurando possibilidades. Por causa de sua sede insaciável de novidade, seus interesses podem parecer ilimitados. Na comunicação, eles tendem a desenvolver conversas magnéticas, respostas bem-humoradas e são excelentes debatedores.",
    ENTJ: "Os tipos de personalidade ENTJ são conhecidos por sua forte presença intelectual e uma impressionante capacidade de atingir metas e inovar com precisão e velocidade. Eles são grandes líderes e empreendedores e são frequentemente vistos no mundo da política, dos negócios e da física. Por causa de seu forte uso do Pensamento Extrovertido, eles são decisivos, lógicos e motivados a realizar tarefas o mais rápido possível.",
    INTP: "São conhecidos por sua rica curiosidade intelectual e formas inovadoras de ver o mundo. Eles têm uma sede infinita de conhecimento e adoram experimentar novos ângulos e métodos para resolver problemas. O INTP não tem pressa em descobrir, mas leva seu tempo, explorando novas profundezas e novos ângulos por onde outros podem ter \"passado direto\". O INTP usa seu Pensamento Introvertido magistral para coletar vários dados e fatos e explorar sistemas e conceitos de ponta a ponta.",
    INTJ: "A assinatura da personalidade INTJ é a percepção profunda. Também conhecido como “o mentor”, o INTJ está naturalmente sintonizado com o “quadro geral” das coisas e não pode deixar de ver como tudo está interconectado. Sua capacidade de perceber padrões profundos e relações causais ajudou muitos a alcançar eminência em ciências, matemática, medicina entre outros avanços da história.",
    ESTJ: "Eles são conhecidos por seu comportamento trabalhador e de raciocínio rápido e sua incrível capacidade de produzir resultados rápidos com seus esforços. São frequentemente chamados de \"guardiões\", e isso ocorre porque eles acreditam fortemente na manutenção de leis, tradições, padrões ou de suas crenças. O ESTJ é uma pessoa responsável, com uma visão clara de como as coisas devem ser e um talento para liderança e organização.",
    ESFJ: "São conhecidos por seu forte senso de empatia e por seu dom para a generosidade e cuidado prático com as pessoas. Os ESFJs usam uma combinação de Sentimento Extrovertido para se relacionar facilmente, bem como a Sensação Introvertida para ter uma memória proficiente para detalhes e informações que serão úteis em situações importantes. Eles agem como interventores e são membros ativos e indispensáveis nas comunidades que integram.",
    ISTJ: "São reconhecidos por sua integridade silenciosa, sua determinação de longo prazo e seu olho afiado para detalhes. Frequentemente chamados de \"cumpridores do dever\", mantém suas palavras e cumprem suas responsabilidades. Os ISTJs podem não dizer muito, mas internamente eles coletam vários fatos do mundo ao seu redor e armazenam esses fatos cuidadosamente em sua memória. Uma memória vívida para todas as nuances e detalhes informativos.",
    ISFJ: "São lembrados por sua integridade, facilidade para a compaixão e cuidado prático. Eles são simultaneamente realistas e empáticos. Prosperam e se satisfazem ajudando seus entes queridos de maneiras úteis e engenhosas, e fazendo o que podem para melhorar suas comunidades. Geralmente não são exibidos nem buscam muita atenção para si, mas preferem agir em segundo plano. Com sua Sensação Introvertida, coletam vários detalhes pessoais sobre as situações/pessoas ao redor.",
    ESTP: "São donos de personalidades entusiasmantes e orientadas a ação. Vivem plenamente no momento. Frequentemente são chamados de \"fazedores\". Eles se dão bem conforme encontram as oportunidades que vão surgindo, tirando o máximo delas. Desfrutam de um estilo de vida acelerado com desafios novos e emocionantes a cada passo. São intensamente lógicos, mas também têm um charme despreocupado, o que faz ser divertido e emocionante estar perto deles.",
    ESFP: "São conhecidos por seu eterno otimismo, um charme entusiasmante e sua capacidade de reunir as pessoas para comunhão e celebração. Eles se satisfazem gerando alegria e diversão nas situações, seja através do humor, de uma festa ou apenas dando apoio a amigos e familiares. O ESFP tem uma excepcional Sensasão Extrovertida, sendo extremamente consciente do que está acontecendo ao seu redor, com o ambiente e com as pessoas.",
    ISTP: "São conhecidos por sua intensidade silenciosa, seu destemor e sua capacidade de pensar rapidamente em uma crise. Eles combinam um uso magistral do Pensamento Introvertido para gerar conclusões profundas e lógicas e manter-se prático e focado na tomada de decisões. Eles usam seu lado sensorial para agir rapidamente e com uma consciência detalhada de seu ambiente físico.",
    ISFP: "Os tipos de personalidade ISFP são conhecidos por sua forte empatia, compaixão e gentileza ao lidar com as pessoas. Eles têm fortes valores internos que podem não compartilhar prontamente com os outros, mas esses valores estabelecem a base para todas as suas crenças e ações. Por serem sensores, os ISFPs têm um olho afiado para a beleza e detalhes físicos no seu mundo exterior, podendo usar isso a seu favor em atividades e trabalhos.",
    ENFJ: "São conhecidos por sua capacidade única de inspirar as pessoas e trazer mudanças positivas em comunidades e culturas. Eles são intensamente perspicazes sobre a condição humana e têm um talento especial para ver o potencial único de cada indivíduo. Eles são frequentemente chamados de \"doadores\" porque acreditam fortemente em servir compassivamente a raça humana e melhorar o mundo. Dessa forma, tornam-se peças fundamentais em seus contextos.",
    ENFP: "São famosos por sua incrível capacidade de inspirar os outros e trazer à tona a beleza e a imaginação na vida cotidiana. Sua natureza intuitiva e aventureira pode gerar novas emoções e caminhos a partir \"do nada\". Juntamente com o seu olhar para as possibilidades, essas personalidades têm também um profundo amor pela humanidade e pelo próprio mundo. Se destacam em carreiras que usam criatividade, habilidades interpessoais e pensamento fora da caixa.",
    INFJ: "Essa personalidade profunda e cheia de insights combina a percepção, o intelecto e a empatia para \"ler\" as pessoas de uma maneira valiosa e até estranha. Eles parecem entendê-las intuitivamente, assim como as situações e as tramas cotidianas, e é por isso que muitos se referem a eles como \"os defensores\". Eles servem a um grupo, gerando união e sinergia e com sua Intuição Introvertida, estão sempre olhando para frente para determinar o que acontecerá no futuro.",
    INFP: "São pessoas que mantêm uma imaginação viva e sensível quanto ao mundo. Ao mesmo tempo, seus mundos internos são vastos, exuberantes e repletos de possibilidades mágicas ou transformadoras. Para o INFP, ouvir e explorar os impulsiona. Eles querem entender a si mesmos e seu caminho único nessa vida. Quando as outros falam, eles tomam algum tempo para compreender. Em vez de formular conclusões, eles dão aos outros a chance de serem realmente \"vistos\" e ouvidos.",
  }
  
  return (
    <div className="subtitle-wrapper">
      {show &&
      <div className="subtitle-container">
        <div className="sub-window">
          <div className="sub-name-and-text">
            <div className="sub-name">{type}</div>
              <div className="sub-text">{local[`${type}`]}</div>
          </div>
          <div className="sub-icon">
            <div style={{paddingLeft: '0.3rem', paddingRight: '0.2rem'}}><Badges url={categoryMenu} numCode={"100"} role={type} size={"9em"} /><Link style={{textDecoration: 'none'}} to={`/t/as4letras/${type}`} ><div className="enter-as4letras"><img style={{width: '2.2rem'}} src={arrowRight} alt="" /></div></Link></div>
          </div>
          <div className="sub-arrow"><Link style={{textDecoration: 'none'}} to={`/t/as4letras/${type}`} ><img style={{width: '1.5rem', padding: '5px 2px 0 0'}} src={arrowRightBlack} alt=""/></Link></div>
        </div>
        {/* <ArrowRightAltIcon sx={{color: grey[500], fontSize: 'large'}} style={{display: "inline", gridArea: 'setadireita', alignSelf: 'center', justifySelf: 'start'}}/> */}
      </div>}
    </div>
  );
}

export default Subtitle;
