import { sortCharacters } from "./sortCharacters";

describe("sortCharacters", () => {
    const characters = [
        { name: "Iron Man", modified: "2023-01-01T12:00:00Z" },
        { name: "Spider-Man", modified: "2023-01-02T12:00:00Z" },
        { name: "Thor", modified: "2023-01-03T12:00:00Z" },
    ];

    test("sorts characters by name in ascending order", () => {
        const sorted = sortCharacters(characters, "name", "asc");
        expect(sorted[0].name).toBe("Iron Man");
        expect(sorted[1].name).toBe("Spider-Man");
        expect(sorted[2].name).toBe("Thor");
    });

    test("sorts characters by name in descending order", () => {
        const sorted = sortCharacters(characters, "name", "desc");
        expect(sorted[0].name).toBe("Thor");
        expect(sorted[1].name).toBe("Spider-Man");
        expect(sorted[2].name).toBe("Iron Man");
    });

    test("sorts characters by modified date in ascending order", () => {
        const sorted = sortCharacters(characters, "modified", "asc");
        expect(sorted[0].modified).toBe("2023-01-01T12:00:00Z");
        expect(sorted[1].modified).toBe("2023-01-02T12:00:00Z");
        expect(sorted[2].modified).toBe("2023-01-03T12:00:00Z");
    });

    test("sorts characters by modified date in descending order", () => {
        const sorted = sortCharacters(characters, "modified", "desc");
        expect(sorted[0].modified).toBe("2023-01-03T12:00:00Z");
        expect(sorted[1].modified).toBe("2023-01-02T12:00:00Z");
        expect(sorted[2].modified).toBe("2023-01-01T12:00:00Z");
    });

    test("returns unsorted characters if sortBy is invalid", () => {
        const sorted = sortCharacters(characters, "invalid", "asc");
        expect(sorted).toEqual(characters);
    });

    test("returns unsorted characters if order is invalid", () => {
        const sorted = sortCharacters(characters, "name", "invalid");
        expect(sorted).toEqual(characters);
    });
});