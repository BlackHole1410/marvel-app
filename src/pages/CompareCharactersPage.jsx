import React, { useEffect, useState } from 'react';
import { getCharacters } from '../api/characters-api';
import CharacterRadarGraph from '../components/CharacterRadarGraph';

const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    const [characters, setCharacters] = useState([]);
    const [options, setOptions] = useState([]);
    const [option1, setOption1] = useState({});
    const [option2, setOption2] = useState({});

    useEffect(() => {
        const fetchCharacters = async () => {
            const charactersData = await getCharacters();
            setCharacters(charactersData);

            // transform the characters to array of label/value objects
            const options = charactersData.map((character, index) => ({
                value: index,
                label: character.name,
            }));
            setOptions(options);

            // set the default options to "Captain America" and "Beast"
            setOption1(options.find(option => option.label === "Captain America") || {});
            setOption2(options.find(option => option.label === "Beast") || {});
        };

        fetchCharacters();
    }, []);

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
                    {characters.map((character, index) => (
                        <option key={index} value={index}>
                            {character.name}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    data-testid='select-character-2'
                    value={option2.value}
                    onChange={(event) => setOption2(options[event.target.value])}
                >
                    {characters.map((character, index) => (
                        <option key={index} value={index}>
                            {character.name}
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