const { Raft, Response } = require('../models')
const Upload = require('./upload')

async function getRaft(req, res) {
    const raft = await Raft.findByPk(req.params.id)
    if (raft === null) {
        Response.status = 'fail'
        Response.data = 'Not found!'
        return res.status(404).json(Response)
    } else {
        Response.status = 'success'
        Response.data = raft
        res.send(Response)
    }
}

async function getRafts(req, res) {
    const rafts = await Raft.findAll()
    Response.status = 'success'
    Response.data = rafts
    res.send(Response)
}

async function addRaft(req, res) {
    const { name, des } = req.body
    const file = req.file
    try {
        const img = await Upload(file)
        const result = await Raft.create({
            name: name,
            img: img,
            des: des,
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

async function editRaft(req, res) {
    const { name, des, id } = req.body
    const file = req.file
    try {
        const img = await Upload(file)
        const result = await Raft.update(
            {
                name: name,
                img: img,
                des: des,
            },
            {
                where: {
                    id: id,
                },
            }
        )
        Response.status = 'success'
        Response.data = result.dataValues
        res.send(Response)
    } catch (error) {
        Response.status = 'fail'
        Response.data = error.errors[0]
        return res.status(400).json(Response)
    }
}

async function deleteRaft(req, res) {
    const raft = await Raft.findByPk(req.params.id)
    if (raft === null) {
        Response.status = 'fail'
        Response.data = 'Not found!'
        return res.status(404).json(Response)
    } else {
        await Raft.destroy({
            where: {
                id: req.params.id,
            },
        })
        res.status(204).send()
    }
}

module.exports = { getRaft, getRafts, addRaft, editRaft, deleteRaft }
