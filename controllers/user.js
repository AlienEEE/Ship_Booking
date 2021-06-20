const { User, Response } = require('../models')

async function getUser(req, res) {
    const user = await User.findByPk(req.params.id)
    if (driver === null) {
        Response.status = 'fail'
        Response.data = 'Not found!'
        return res.status(404).json(Response)
    } else {
        Response.status = 'success'
        Response.data = user
        res.send(Response)
    }
}

async function getUsers(req, res) {
    const users = await User.findAll()
    Response.status = 'success'
    Response.data = users
    res.send(Response)
}

async function addUser(req, res) {
    const { name, sname, phone, username, password } = req.body
    try {
        const result = await User.create({
            name: name,
            sname: sname,
            phone: phone,
            username: username,
            password: password,
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

async function editUser(req, res) {
    const { name, sname, phone, username, password, id } = req.body
    try {
        const result = await User.update(
            {
                name: name,
                sname: sname,
                phone: phone,
                username: username,
                password: password,
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

async function deleteUser(req, res) {
    const user = await User.findByPk(req.params.id)
    if (user === null) {
        Response.status = 'fail'
        Response.data = 'Not found!'
        return res.status(404).json(Response)
    } else {
        await User.destroy({
            where: {
                id: req.params.id,
            },
        })
        res.status(204).send()
    }
}

module.exports = { getUser, getUsers, addUser, editUser, deleteUser }
