import { FormEvent, useContext, useEffect, useState } from 'react';
import { ColorContext } from '../../context/color';
import * as C from "./style";
const mockProject = [
  'project A', 'project B', 'project C', 'project D', 'project E', 'project F'
]
const mockArticle = [
  'article A', 'article B', 'article C', 'article D', 'article E', 'article F'
]
const mockAll = [...mockProject, ...mockArticle];
type Props = {
  filter?: 'project' | 'article' | 'all'; 
};
function SearchBar({ filter = 'all' }: Props) {
  const [text, setText] = useState<string>('');
  const mainColor = useContext(ColorContext);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    let suggestionsData : string[] = [];
    switch(filter) {
      case 'article': 
        suggestionsData = mockArticle;
        break;
      case 'project':
        suggestionsData = mockProject;
        break;
      case 'all':
      default:
        suggestionsData = mockAll;
        break;
    }
    setSuggestions(suggestionsData.filter(s => s.includes(text)));
  }, [text, filter]);
  useEffect(() => console.log(suggestions), [suggestions])

  const SendSearch = (e: FormEvent)=>{
    e.preventDefault();
  }
  
  return (
    <C.Container onSubmit={SendSearch}>
      <C.Input value={text} onChange={(e) => setText(e.target.value)}/>
      <C.Button mainColor={mainColor}/>
    </C.Container>
  )
}

export default SearchBar