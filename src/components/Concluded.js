import styled from "styled-components";
import cards from "./cardObjects";

export default function Concluded({ completed }) {
  return <QConcluded>
    <div data-test="footer">   
    {completed}/{cards.length} Concluídos
    </div>
    </QConcluded>;
}

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
