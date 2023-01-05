const characterRouter = require('express').Router();
const Character = require('../models/Character');
const Locale = require('../models/Locale');
const Organization = require('../models/Organization');

//create

characterRouter.post('/', async (req, res) => {
    const character = req.body
    if(!character.name || !req.body || Object.keys(req.body).length === 0){
        res.status(400).json({message: "Bad request missing character information"})
        return
    }
    try {
        await Character.create(req.body)
        return res.status(201).json({message: 'Character created with success'})
    } catch (error) {
        res.status(500).json({ error: error})
    }

});

//read

characterRouter.get('/', async (req, res) => {
    try {
        const character = await Character.findAll({include: [Locale, Organization]})
        return res.status(201).json(character)
    } catch (error) {
        res.status(500).json({ error: error})
    }
});

characterRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const character = await Character.findOne({ 
            where: { 
                id: id
            }, 
            include: [Locale, Organization]
        })

        if(!character){
            return res.status(400).json({error: "Bad request character not found"})
        }

        return res.status(200).json(character)
    } catch (error) {
        res.status(500).json({ error: error})
    }
});


//update (PUT, PATCH)
characterRouter.put('/:id', async (req,res) => {
    const id = req.params.id
    if(!req.body || Object.keys(req.body).length === 0){
        return res.status(400).json({error: "Bad request missing character information"})
    }
    try {
        const character = await Character.findOne({ 
            where: { 
                id: id
            }
        })
        if(!character){
            return res.status(404).json({error: "Character not found"})
        }

        character.update(req.body);

        await character.save();        

        res.status(201).json({message: 'Character updated with success'})
        return 
    } catch (error) {
        res.status(500).json({ error: error})
    }

});

//Delete

characterRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const character = await Character.findOne({ 
            where: { 
                id: id
            }
        })

        if(!character){
            res.status(400).json({message: "Bad request character not found"})
            return
        }
        await character.destroy()
          res.status(200).json({message: 'Character Deleted with success'})
    } catch (error) {
        res.status(400).json({ error: error})
    }
});


module.exports = characterRouter