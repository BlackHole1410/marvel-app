import './App.css';
import characters from './data/characters.json';
import { CharactersList } from './components/CharactersList.jsx';
import { NumberOfCharacters } from './components/numberofcharacters.jsx';

function App() {
  return (
    <>
      <h1>Marvel Characters</h1>
      <CharactersList characters={characters} />
      <NumberOfCharacters characters={characters} />
    </>
  );
}

export default App;
