// utils/sortCharacters.js
export function sortCharacters(characters, sortBy, order) {
    return characters.sort((a, b) => {
        if (sortBy === "name") {
            if (order === "asc") {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        } else if (sortBy === "modified") {
            if (order === "asc") {
                return new Date(a.modified) - new Date(b.modified);
            } else {
                return new Date(b.modified) - new Date(a.modified);
            }
        }
        return 0;
    });
}