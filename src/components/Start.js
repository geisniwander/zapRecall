import logo from "../assets/img/logo.png";
import styled from "styled-components";

export default function Start({setStart}){
    return (
        <StartScreen>
            <img alt="logo" src={logo} />
            <h1>ZapRecall</h1>
            <button onClick={()=>setStart(true)}>Iniciar Recall!</button>
        </StartScreen>
    );
}

const StartScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background-color: #fb6b6b;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  img{
    width:136px;
  }
  button{
    margin-top:3%;
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #D70900;
  }
  h1 {
    margin-top:2%;
    font-family: "Righteous", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
  }
`;