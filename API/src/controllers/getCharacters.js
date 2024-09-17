const { Character } = require('../db'); // Adjust the path if necessary

const characters = [
  {
    name: "Harry Potter",
    image: "https://i.dailymail.co.uk/i/pix/2014/05/27/article-2640636-1E3F4AD200000578-793_306x480.jpg"
  }
];

const createCharacters = async (character) => {
  try {
    const createdCharacter = await Character.create({
      name: character.name,
      image: character.image
    });
    return createdCharacter;
  } catch (error) {
    console.error('Error creating character:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

const getCharacters = async (req, res) => {
  try {
    let dbCharacters = await Character.findAll();
    if (dbCharacters.length === 0) {
      for (const character of characters) {
        await createCharacters(character);
      }
      dbCharacters = await Character.findAll(); // Re-fetch after creating
    }
    res.status(200).json(dbCharacters);
  } catch (error) {
    console.error('Error fetching characters:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = getCharacters;
