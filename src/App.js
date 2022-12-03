import { useState } from "react";
import styled from "styled-components";
import Deck from "./components/Deck";
import Start from "./components/Start";

export default function App() {
const [start,setStart] = useState(false);
  return(
    <ContainerApp>
        {start ? <Deck/> : <Start setStart={setStart}/> }
    </ContainerApp>
  );

}

const ContainerApp = styled.div`
  overflow-x: hidden;
`