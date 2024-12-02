import React from 'react';
import DateFormat from './DateFormat';

const CharacterDetail = ({ character }) => {
    const { description, thumbnail, modified } = character;

    return (
        <div>
            {thumbnail && (
                <img
                    src={`${thumbnail.path}/standard_large.${thumbnail.extension}`}
                    alt={character.name}
                />
            )}
            <p>{description || "No description available."}</p>
            <p>{modified ? <DateFormat isoDate={modified} /> : "No modification date available."}</p>
        </div>
    );
};

export default CharacterDetail;