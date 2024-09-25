// Function to fetch and return characters from the JSON file
async function getCharacters() {
    try {
        // Fetch the characters.json file
        const response = await fetch('./data/characters.json');
        
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error('Failed to fetch characters data');
        }
        
        // Parse the JSON response to JavaScript object
        const characters = await response.json();
        
        // Return the characters array
        return characters;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

// Example usage: Call the function and log the characters
getCharacters().then(characters => {
    console.log(characters);
    // characters.forEach(characters => {
    //     console.log(characters.name);
    // });
});
