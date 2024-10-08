import React from 'react';
import { CharactersList } from "../components/CharactersList";
import { NumberOfCharacters } from "../components/NumberOfCharacters";
import { getCharacters } from '../api/characters-api';
import { Link } from 'react-router-dom';

// import characters from '../data/characters.json';

const CharactersPage = () => {
    // change the title of the page
    document.title = "Marvel App";

    const characters = getCharacters();

    return (
        <>
            <h2>Marvel Characters</h2>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;
export function CharacterDetail({charcacter = {}}){
    return(
            <ul id="charcacters">
                {charcacter.map((charcacter) => (
                    <li>
                        <Link to={`/characters/${charcacter.id}`}>
                            {charcacter.name}
                        </Link>
                    </li>
                ))}
        </ul>
    );
}