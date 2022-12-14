import Card from "./Card";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import Concluded from "./Concluded";
import { useState } from "react";

export default function Deck() {
  const [completed, setCompleted] = useState(0);
  const [icons, setIcons] = useState([]);
  return (
    <ScreenContainer>
      <LogoContainer>
        <img alt="logo" src={logo} />
        <h1>ZapRecall</h1>
      </LogoContainer>
      <Card
        completed={completed}
        setCompleted={setCompleted}
        icons={icons}
        setIcons={setIcons}
      />
      <Concluded completed={completed} icons={icons} />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;
