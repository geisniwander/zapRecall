import styled from "styled-components";
import cards from "./cardObjects";
import good from "../assets/img/icone_certo.png";
import wrong from "../assets/img/icone_erro.png";
import mid from "../assets/img/icone_quase.png";

export default function Concluded({ completed, icons }) {
  function Icons() {
    return icons.map((n) => (
      <img
        key={n}
        alt="icon"
        src={n === "c" ? good : n === "i" ? wrong : mid}
        data-test={
          n === "c" ? "zap-icon" : n === "i" ? "no-icon" : "partial-icon"
        }
      />
    ));
  }

  return (
    <QConcluded>
      <div data-test="footer">
        {completed}/{cards.length} Concluídos
        <ContainerIcons>
          <Icons />
        </ContainerIcons>
      </div>
    </QConcluded>
  );
}
const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  img {
    margin: 10%;
  }
`;
const QConcluded = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

  .container-botoes {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  }
`;
