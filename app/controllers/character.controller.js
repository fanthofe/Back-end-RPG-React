const characterDatamapper = require('../models/character.datamapper');

module.exports = {
    async getOneChar(req, res, next){
        const {id} = req.params;
        const character = await characterDatamapper.findById(id);

        if(!character){
            return next();
        }

        res.json(character);
    },

    async getAllChar(_, res){
        const characters = await characterDatamapper.findAll();

        return res.json(characters)
    }
}