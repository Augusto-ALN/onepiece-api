const localeRouter = require('express').Router();
const Locale = require('../models/Locale');


//create

localeRouter.post('/', async (req, res) => {
    const locale = req.body
    if(!locale.name || !locale.sea || !req.body || Object.keys(req.body).length === 0){
        res.status(400).json({message: "Bad request missing locale information"})
        return
    }
    try {
        await Locale.create(req.body)
        return res.status(201).json({message: 'Locale created with success'})
    } catch (error) {
        res.status(500).json({ error: error})
    }

});

//read

localeRouter.get('/', async (req, res) => {
    try {
        const locale = await Locale.findAll()
        return res.status(201).json(locale)
    } catch (error) {
        res.status(500).json({ error: error})
    }
});

localeRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const locale = await Locale.findOne({ 
            where: { 
                id: id
            }
        })

        if(!locale){
            return res.status(400).json({error: "Bad request locale not found"})
        }

        return res.status(200).json(locale)
    } catch (error) {
        res.status(500).json({ error: error})
    }
});


//update (PUT, PATCH)
localeRouter.put('/:id', async (req,res) => {
    const id = req.params.id
    const reqLocale = req.body
    if(!reqLocale.name || !reqLocale.sea ||!req.body || Object.keys(req.body).length === 0){
        res.status(400).json({message: "Bad request missing locale information"})
        return
    }
    try {
        const locale = await Locale.findOne({ 
            where: { 
                id: id
            }
        })
        if(!locale){
            return res.status(404).json({message: "Locale not found"})
        }
        locale.update(req.body);

        await locale.save();        

        res.status(201).json({message: 'Locale updated with success'})
        return 
    } catch (error) {
        res.status(500).json({ error: error})
    }

});

//Delete

localeRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const locale = await Locale.findOne({ 
            where: { 
                id: id
            }
        })

        if(!locale){
            res.status(400).json({message: "Bad request locale not found"})
            return
        }
        await locale.destroy()
          res.status(200).json({message: 'Locale Deleted with success'})
    } catch (error) {
        res.status(400).json({ error: error})
    }
});


module.exports = localeRouter