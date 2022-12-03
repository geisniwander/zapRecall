import styled from "styled-components";
import Back from "./Back";
import Front from "./Front";
import play from "../assets/img/seta_play.png";
import good from "../assets/img/icone_certo.png";
import wrong from "../assets/img/icone_erro.png";
import mid from "../assets/img/icone_quase.png";
import flip from "../assets/img/seta_virar.png";
import { useState } from "react";
import cards from "./cardObjects";

export default function Card({ completed, setCompleted }) {
  const [qOpen, setQOpen] = useState(-1);
  const [qFront, setQFront] = useState(-1);
  const [corrects, setCorrects] = useState("");
  const [kCorrects, setKCorrects] = useState("");
  const [incorrects, setIncorrects] = useState("");
  function openQuestion(i) {
    setQOpen(i);
  }

  function color(index) {
    if (corrects.includes(index)) {
      return "green";
    } else if (incorrects.includes(index)) {
      return "red";
    } else if (kCorrects.includes(index)) {
      return "orange";
    } else {
      return "black";
    }
  }

  function situation(index) {
    if (
      corrects.includes(index) ||
      incorrects.includes(index) ||
      kCorrects.includes(index)
    ) {
      return "line-through";
    }
  }

  function Image(props) {
    if (corrects.includes(props.index)) {
      return <img alt="play" src={good} data-test="zap-icon"/>;
    } else if (incorrects.includes(props.index)) {
      return <img alt="play" src={wrong} data-test="no-icon"/>;
    } else if (kCorrects.includes(props.index)) {
      return <img alt="play" src={mid} data-test="partial-icon" />;
    } else {
      return (
        <img alt="play" src={play} onClick={() => openQuestion(props.index)} data-test="play-btn" />
      );
    }
  }

  return (
    <div data-test="flashcard">
      {cards.map((c, i) => (
        <>
          {qOpen !== i ? (
            <ClosedQuestion
              key={i}
              color={() => color(i)}
              situation={() => situation(i)}
            >
              <p data-test="flashcard-text">Pergunta {i + 1}</p>
              <Image index={i} />
            </ClosedQuestion>
          ) : qFront !== i ? (
            <OpenQuestion>
              <Front key={c.question} question={c.question} />
              <img alt="flip" src={flip} onClick={() => setQFront(i)} data-test="turn-btn"/>
            </OpenQuestion>
          ) : (
            <OpenQuestion>
              <Back
                key={c.index}
                index={c.index}
                answer={c.answer}
                corrects={corrects}
                setCorrects={setCorrects}
                kCorrects={kCorrects}
                setKCorrects={setKCorrects}
                incorrects={incorrects}
                setIncorrects={setIncorrects}
                setQOpen={setQOpen}
                completed={completed}
                setCompleted={setCompleted}
              />
            </OpenQuestion>
          )}
        </>
      ))}
    </div>
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
    color: ${(props) => props.color};
    text-decoration: ${(props) => props.situation};
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
