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
  icons,
  setIcons
}) {
  function correct(i) {
    setCorrects(corrects + i);
    setIcons([...icons,"c"])
  }
  function kCorrect(i) {
    setKCorrects(kCorrects + i);
    setIcons([...icons,"p"])
  }
  function incorrect(i) {
    setIncorrects(incorrects + i);
    setIcons([...icons,"i"])
  }

  function clicked(i, s) {
    setQOpen(-1);
    setCompleted(completed + 1);
  }

  return (
    <DivButtons>
      <Buttons color="#FF3030">
        <button
        onClick={() => {
          incorrect(index);
          clicked();
        }}
        data-test="no-btn"
      >
        Não lembrei
    </button>
      </Buttons>
      <Buttons color="#FF922E"><button
        onClick={() => {
          kCorrect(index);
          clicked();
        }}
        data-test="partial-btn"
      >
        Quase não lembrei
    </button>
      </Buttons>
      <Buttons color="#2FBE34">
        <button
        onClick={() => {
          correct(index);
          clicked();
        }}
        data-test="zap-btn"
      >
        Zap!
        </button>
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
button{
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
  background-color: ${(props) => props.color};
  border:none;
  border-radius: 5px;
  padding: 5px;
}
`;
