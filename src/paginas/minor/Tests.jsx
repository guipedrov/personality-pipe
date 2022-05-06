import React, { useEffect } from "react";
import "./minor.css";
import Headings from "../../components/Headings";
import Rodape from "../../components/Rodape";
import lanterns from "../../assets/images/bg/lanterns.png";
import logo from "../../assets/images/pp-figure-2.png";
import { Link } from "react-router-dom";
import the16 from "../../assets/images/the16.png";
import tc from "../../assets/images/tc.png";
import hm from "../../assets/images/hm.png";
import idr from "../../assets/images/idr.png";
import { HMobiledataSharp } from "@mui/icons-material";

function Tests() {

  return (
    <div className="minor-wrapper">
      <Headings
        title={"Testes"}
        description={"Testes gratuitos sugeridos pelo Personality Pipe"}
        height={"20em"}
        imagebg={lanterns}
        colorbg=""
        color={"#ffffff"}
        boxed={true}
      />
      <div className="minor-container">

        <div className="wide-box-w-title tests">
          <div>
            <div>Com o objetivo de descobrir qual a sua personalidade dentro de uma dada tipologia, um primeiro passo interessante pode ser 
              fazer um <em>teste de personalidade</em>. O resultado pode ser confirmado através de um breve estudo feito em seguida ou levemente 
              alterado, 
              tendo servido ao menos como um indicador de um escopo um pouco menor da personalidade classificada, por exemplo, um tipo "parecido", 
              ou um conjunto de traços persistente.</div>
          </div>
        </div>

        <div className="minor-titles">Testes</div>
        <div className="wide-box tests">
          <div>
            <div>Atenção! <em>Testes de personalidade</em> são frequentemente apontados como um caminho incerto para descobrir nossa personalidade. Isso 
            porque, quando respondemos sobre nós mesmos, podemos seguir tendências obscuras ou opiniões sobre certo/errado, ou mesmo não conhecer 
            quem somos em dadas situações, o que nos levaria a optar pela resposta incompatível com a vida real. Em empresas e certas organizações, 
            profissionais de RH realizam verdadeiras análises psicológicas afim de apontar a personalidade de um colaborador. 
            Não é um trabalho necessariamente fácil. Portanto, um bom conselho seria buscar sempre a resposta "real" para nós mesmos ao responder 
            tais testes e prosseguir um estudo, ainda que breve, do tipo de personalidade apontado e das características que o compõe.</div>
          </div>
        </div>
        <div className="box-grid tests">
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={tc} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>Typology Central</div>
            <div style={{fontStyle: 'italic', color: '#454545', padding: '0 0.2rem 0 0.2rem'}}>Teste de personalidade "4 letras". Em inglês. Boa opção entre testes curtos ou para validações.</div>
            <div style={{color: '#FF7043', fontWeight: '600', paddingTop: '0.6rem', fontSize: '1.2em'}}><a style={{textDecoration: 'none', color: 'inherit'}} href="https://jung.test.typologycentral.com/">Acessar</a></div>
          </div>
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={the16} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>16 Personalities</div>
            <div style={{fontStyle: 'italic', color: '#454545', padding: '0 0.2rem 0 0.2rem'}}>Teste de personalidade "4 letras". O mais popular da internet, agrega serviços pagos. Útil para aqueles que procuram um primeiro contato com a tipologia Myers-Briggs e não tem qualquer resultado anterior.</div>
            <div style={{color: '#FF7043', fontWeight: '600', paddingTop: '0.6rem', fontSize: '1.2em'}}><a style={{textDecoration: 'none', color: 'inherit'}} href="https://www.16personalities.com/br/teste-de-personalidade">Acessar</a></div>                    
          </div>
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={hm} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>HumanMetrics</div>
            <div style={{fontStyle: 'italic', color: '#454545'}}>"Teste de personalidade "4 letras". Teste de tamanho "médio", pontual, detalhado e menos genérico do que outros semelhantes.</div>
            <div style={{color: '#FF7043', fontWeight: '600',  paddingTop: '0.6rem',  fontSize: '1.2em'}}><a style={{textDecoration: 'none', color: 'inherit'}} href="https://www.humanmetrics.com/personality">Acessar</a></div>
          </div>
          <div>
            <div style={{paddingTop: '1em'}}><img style={{height: '4em'}} src={idr} alt="" /></div>
            <div style={{fontSize: '1.4em', fontWeight: '600'}}>IDRlabs</div>
            <div style={{fontStyle: 'italic', color: '#454545', padding: '0 0.2rem 0 0.2rem'}}>Teste de personalidade "4 letras". Vamos dizer que você esteja em dúvida quanto a outros resultados e prefira uma prova real ou mesmo um primeiro teste baseado em dicotomias, então o teste do IDR Labs será a melhor opção.</div>
            <div style={{color: '#FF7043', fontWeight: '600', paddingTop: '0.6rem',  fontSize: '1.2em'}}><a style={{textDecoration: 'none', color: 'inherit'}} href="https://www.idrlabs.com/pt/teste.php">Acessar</a></div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Tests