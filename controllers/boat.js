const { Boat, Response } = require('../models')
const Upload = require('./upload')

async function getBoat(req, res) {
    const boat = await Boat.findByPk(req.params.id)
    if (boat === null) {
        Response.status = 'fail'
        Response.data = 'Not found!'
        return res.status(404).json(Response)
    } else {
        Response.status = 'success'
        Response.data = boat
        res.send(Response)
    }
}

async function getBoats(req, res) {
    const boats = await Boat.findAll()
    Response.status = 'success'
    Response.data = boats
    res.send(Response)
}

async function addBoat(req, res) {
    const { name, type, value } = req.body
    const file = req.file

    try {
        const img = await Upload(file)

        const result = await Boat.create({
            name: name,
            img: img,
            type: type,
            value: value,
        })

        Response.status = 'success'
        Response.data = result.dataValues

        res.status(200).send(Response)
    } catch (error) {
        Response.status = 'fail'
        Response.data = error.errors[0]

        return res.status(400).json(Response)
    }
}

async function editBoat(req, res) {
    const { name, type, value, id } = req.body
    const file = req.file
    try {
        const img = await Upload(file)
        const result = await Boat.update(
            {
                name: name,
                img: img,
                type: type,
                value: value,
            },
            {
                where: {
                    id: id,
                },
            }
        )
        Response.status = 'success'
        Response.data = result
        res.send(Response)
    } catch (error) {
        Response.status = 'fail'
        Response.data = error.errors[0]
        return res.status(400).json(Response)
    }
}

async function deleteBoat(req, res) {
    const boat = await Boat.findByPk(req.params.id)
    if (boat === null) {
        Response.status = 'fail'
        Response.data = 'Not found!'
        return res.status(404).json(Response)
    } else {
        await Boat.destroy({
            where: {
                id: req.params.id,
            },
        })
        res.status(204).send()
    }
}

module.exports = {
    getBoat,
    getBoats,
    addBoat,
    editBoat,
    deleteBoat,
}
