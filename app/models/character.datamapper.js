const characters = require('../../data/characters.json');

module.exports = {
    async findById(id){
        const character = characters.find(
            (character) => character.id === parseInt(id, 10)
        );
        return character;
    },

    async findAll(){
        return characters;
    }
}