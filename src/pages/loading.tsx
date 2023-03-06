"use client"
import { useContext } from "react";
import { ColorContext } from "../context/color";
import * as C from "../components/loading/style";

function Loading() {
  const mainColor = useContext(ColorContext);
  return (
    <C.Container mainColor={mainColor}>
      <C.DotContainer>
        <C.Dot index={1}/>
        <C.Dot index={2}/>
        <C.Dot index={3}/>
        <C.Dot index={4}/>
      </C.DotContainer>
    </C.Container>
  )
}

export default Loading