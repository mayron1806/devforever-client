import { FormEvent, useContext } from 'react';
import { ColorContext } from '../../context/color';
import * as C from "./style";

function SearchBar() {
  const mainColor = useContext(ColorContext);
  
  const SendSearch = (e: FormEvent)=>{
    e.preventDefault();
  }
  
  return (
    <C.Container onSubmit={SendSearch}>
        <C.Input />
        <C.Button mainColor={mainColor}/>
    </C.Container>
  )
}

export default SearchBar