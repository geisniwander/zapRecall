import styled from "styled-components";
import Back from "./Back";
import Front from "./Front";
import play from "../assets/img/seta_play.png";
import flip from "../assets/img/seta_virar.png";
import { useState } from "react";

export default function Card() {
  const cards = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão da linguagem JavaScript",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  const [front,setFront]=useState(true);
  const [isClosed,setIsClosed]=useState(true);
  const [qOpen,setQOpen]=useState(-1);
  const [qFront,setQFront]=useState(-1);
  const [qBack,setQBack] = useState(-1);
  function openQuestion(i){
    setQOpen(i);
    console.log(qOpen)
  }
  return (
    <>
      {cards.map((c, i) => (
        <>
        {qOpen!==i ?
          <ClosedQuestion key={i} >
            Pergunta {i + 1} 
            <img alt="play" src={play} onClick={()=>openQuestion(i)}/>
          </ClosedQuestion>
        : 
        qFront!==i ?   
          <OpenQuestion>
            <Front key={c.question} question={c.question} />
            <img alt="flip" src={flip} onClick={()=> setQFront(i)}/>
          </OpenQuestion>
        :
          <OpenQuestion>
            <Back key={c.answer} answer={c.answer} />
          </OpenQuestion>
    }
        </>
      ))}
    </>
  );
}

const ClosedQuestion = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

const OpenQuestion = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const Hidden = styled.div`
  display: none !important;
`
