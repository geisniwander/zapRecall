import styled from "styled-components";

export default function BackButton({
  index,
  setCompleted,
  corrects,
  setCorrects,
  kCorrects,
  setKCorrects,
  incorrects,
  setIncorrects,
  setQOpen,
  completed,
}) {
  function correct(i) {
    setCorrects(corrects + i);
  }
  function kCorrect(i) {
    setKCorrects(kCorrects + i);
  }
  function incorrect(i) {
    setIncorrects(incorrects + i);
  }

  function clicked(i, s) {
    setQOpen(-1);
    setCompleted(completed + 1);
  }
  return (
    <DivButtons>
      <Buttons
        color="#FF3030"
        onClick={() => {
          incorrect(index);
          clicked();
        }}
      >
        Não lembrei
      </Buttons>
      <Buttons
        color="#FF922E"
        onClick={() => {
          kCorrect(index);
          clicked();
        }}
      >
        Quase não lembrei
      </Buttons>
      <Buttons
        color="#2FBE34"
        onClick={() => {
          correct(index);
          clicked();
        }}
      >
        Zap!
      </Buttons>
    </DivButtons>
  );
}
/* Você vai precisar trocar a cor dos botões e alguns textos!
  CINZA = "#333333" 
*/
const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Buttons = styled.div`
  width: 85px;
  height: 38px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${(props) => props.color};
  border-radius: 5px;
  padding: 5px;
`;
