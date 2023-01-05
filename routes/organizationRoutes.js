const router = require('express').Router();
const Organization = require('../models/Organization');


//create

router.post('/', async (req, res) => {
    const {name} = req.body
    if(!name || !req.body || Object.keys(req.body).length === 0){
        res.status(400).json({message: "Bad request missing organization information"})
        return
    }
    try {
        await Organization.create(req.body)
        return res.status(201).json({message: 'Organization created with success'})
    } catch (error) {
        res.status(500).json({ error: error})
    }

});

//read

router.get('/', async (req, res) => {
    try {
        const organization = await Organization.findAll()
        return res.status(201).json(organization)
    } catch (error) {
        res.status(500).json({ error: error})
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const organization = await Organization.findOne({ 
            where: { 
                id: id
            }
        })

        if(!organization){
            return res.status(400).json({error: "Bad request organization not found"})
        }

        return res.status(200).json(organization)
    } catch (error) {
        res.status(500).json({ error: error})
    }
});


//update (PUT, PATCH)
router.put('/:id', async (req,res) => {
    const id = req.params.id
    const reqOrganization = req.body
    if(!reqOrganization.name || !req.body || Object.keys(req.body).length === 0){
        res.status(400).json({message: "Bad request missing Organization information"})
        return
    }
    try {
        const organization = await Organization.findOne({ 
            where: { 
                id: id
            }
        })

        if(!organization){
            return res.status(400).json({error: "Bad request organization not found"})
        }

        organization.update(req.body)

        await organization.save();        

        res.status(201).json({message: 'Organization updated with success'})
        return 
    } catch (error) {
        res.status(500).json({ error: error})
    }

});

//Delete

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const organization = await Organization.findOne({ 
            where: { 
                id: id
            }
        })

        if(!organization){
            res.status(400).json({message: "Bad request organization not found"})
            return
        }
        await organization.destroy()
          res.status(200).json({message: 'Organization Deleted with success'})
    } catch (error) {
        res.status(400).json({ error: error})
    }
});

module.exports = router