import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { NumberOfCharacters } from "../components/numberofcharacters";
import { CharactersList } from "../components/CharactersList";
import { getSortedCharacters } from "../api/characters-api";

export default function CharactersPage() {
    const characters = useLoaderData();
    const navigate = useNavigate();
    const [sortBy, setSortBy] = useState("name");
    const [order, setOrder] = useState("asc");

    useEffect(() => {
        document.title = "Marvel App";
    }, []);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        updateURL(e.target.value, order);
    };

    const handleOrderChange = (e) => {
        setOrder(e.target.value);
        updateURL(sortBy, e.target.value);
    };

    const updateURL = (sortBy, order) => {
        navigate(`?sortBy=${sortBy}&order=${order}`);
    };

    const sortedCharacters = getSortedCharacters(sortBy, order);

    return (
        <div>
            <h2>Marvel Characters</h2>
            <div>
                <label>
                    Sort by:
                    <select value={sortBy} onChange={handleSortChange}>
                        <option value="name">Name</option>
                        <option value="modified">Date Modified</option>
                    </select>
                </label>
                <label>
                    Order:
                    <select value={order} onChange={handleOrderChange}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
            </div>
            <CharactersList characters={sortedCharacters} />
            <NumberOfCharacters characters={sortedCharacters} />
        </div>
    );
}