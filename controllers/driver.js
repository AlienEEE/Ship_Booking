const { Driver, Response } = require('../models')
//get
async function getDriver(req, res) {
    const driver = await Driver.findByPk(req.params.id)
    if (driver === null) {
        Response.status = 'fail'
        Response.data = 'Not found!'
        return res.status(404).json(Response)
    } else {
        Response.status = 'success'
        Response.data = driver
        res.send(Response)
    }
}
//gets
async function getDrivers(req, res) {
    const drivers = await Driver.findAll()
    Response.status = 'success'
    Response.data = drivers
    res.send(Response)
}
//add
async function addDriver(req, res) {
    const { name, sname, phone } = req.body
    try {
        const result = await Driver.create({
            name: name,
            sname: sname,
            phone: phone,
        })
        Response.status = 'success'
        Response.data = result.dataValues
        res.send(Response)
    } catch (error) {
        Response.status = 'fail'
        Response.data = error.errors[0]
        return res.status(400).json(Response)
    }
}
//edit
async function editDriver(req, res) {
    const { name, sname, phone, id } = req.body
    try {
        const result = await Driver.update(
            {
                name: name,
                sname: sname,
                phone: phone,
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

async function deleteDriver(req, res) {
    const driver = await Driver.findByPk(req.params.id)
    if (driver === null) {
        Response.status = 'fail'
        Response.data = 'Not found!'
        return res.status(404).json(Response)
    } else {
        await Driver.destroy({
            where: {
                id: req.params.id,
            },
        })
        res.status(204).send()
    }
}

module.exports = { getDriver, getDrivers, addDriver, editDriver, deleteDriver }
