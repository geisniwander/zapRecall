import styled from "styled-components";
import cards from "./cardObjects";
import good from "../assets/img/icone_certo.png";
import wrong from "../assets/img/icone_erro.png";
import mid from "../assets/img/icone_quase.png";
import party from "../assets/img/party.png";
import sad from "../assets/img/sad.png";

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
  function Message() {
    if (completed === cards.length) {
      if (icons.includes("i")) {
        return (
          <Msg>
            <div data-test="finish-text">
              <Title>
                <img alt="parabéns" src={sad} />
                <h2>Putzz...</h2>
              </Title>
              <Sub>
                <p>Ainda faltam alguns...</p>
                <p>Mas não desanime!</p>
              </Sub>
            </div>
          </Msg>
        );
      } else {
        return (
          <Msg>
            <div data-test="finish-text">
              <Title>
                <img alt="parabéns" src={party} />
                <h2>Parabéns!...</h2>
              </Title>
              <Sub>
                <p>Você não esqueceu de</p>
                <p>nenhum flashcard!</p>
              </Sub>
            </div>
          </Msg>
        );
      }
    }
  }

  return (
    <QConcluded>
      <div data-test="footer">
        <Message />
        <h1>
          {completed}/{cards.length} Concluídos
        </h1>
        <ContainerIcons>
          <Icons />
        </ContainerIcons>
      </div>
    </QConcluded>
  );
}
const Msg = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8%;
`;
const Title = styled.div`
display: flex;
justify-contente; center;
margin-bottom: 5%;
img{
  width: 23px;
  margin-right:5%;
}
`;
const Sub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerIcons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  img {
    margin: 5%;
  }
`;
const QConcluded = styled.div`
  width: 101%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  color: #333333;
  padding: 10px;

  h2 {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }
`;
