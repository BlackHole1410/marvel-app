import React, { useEffect, useState } from 'react';
import { getCharacters } from '../api/characters-api';
import CharacterRadarGraph from '../components/CharacterRadarGraph';

const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const charactersData = getCharacters();
            setCharacters(charactersData);
        };

        fetchCharacters();
    }, []);

    // transform the characters to array of label/value objects
    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
    }));

    // set the default options to the first two characters
    const [option1, setOption1] = useState(options[0] || {});
    const [option2, setOption2] = useState(options[1] || {});

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    const selectedCharacter1 = characters[option1.value] || {};
    const selectedCharacter2 = characters[option2.value] || {};

    return (
        <>
            <h2>Compare characters</h2>

            <p style={centerStyle}>
                <select
                    data-testid='select-character-1'
                    value={option1.value}
                    onChange={(event) => setOption1(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    data-testid='select-character-2'
                    value={option2.value}
                    onChange={(event) => setOption2(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>

            <p style={centerStyle}>
                {selectedCharacter1.name} vs {selectedCharacter2.name}
            </p>

            <CharacterRadarGraph character1={selectedCharacter1} character2={selectedCharacter2} />
        </>
    );
};

export default CompareCharactersPage;