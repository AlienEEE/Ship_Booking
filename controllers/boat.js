const { Boat, Response } = require('../models')
const admin = require('firebase-admin')

// Initialize firebase admin SDK
admin.initializeApp({
    credential: admin.credential.cert(process.env.SERVICE_FIREBASE),
    storageBucket: 'shipbooking-cc0a7.appspot.com',
})
// Cloud storage
const bucket = admin.storage().bucket()
//get
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
//gets
async function getBoats(req, res) {
    const boats = await Boat.findAll()
    Response.status = 'success'
    Response.data = boats
    res.send(Response)
}

//add
async function addBoat(req, res) {
    const { name, img, type, value } = req.body
    try {
        const result = await Boat.create({
            name: name,
            img: img,
            type: type,
            value: value,
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
async function editBoat(req, res) {
    const { name, img, type, value, id } = req.body
    try {
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

//delete
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

//upload
async function uploadBoat(req, res) {
    const boatId = req.params.id
    if (!req.file) {
        return res.status(400).send('Error Not found!!')
    }
    const blob = bucket.file(new Date().toString())
    // console.log(req.file.mimetype)
    const right = blob.createWriteStream({
        metadata: {
            contentType: 'image/jpeg',
        },
    })
    right.on('error', (err) => {
        console.log(err)
        return res.status(500).send('Error found!!')
    })
    right.on('finish', (finish) => {
        blob.getSignedUrl({
            action: 'read',
            expires: new Date().setDate(new Date().getYear() + 5),
        })
            .then(async (URL) => {
                await Boat.update(
                    {
                        img: URL[0],
                    },
                    {
                        where: {
                            id: boatId,
                        },
                    }
                )
                res.status(200).send('susess')
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    })
    right.end(req.file.buffer)
}

module.exports = {
    getBoat,
    getBoats,
    addBoat,
    editBoat,
    deleteBoat,
    uploadBoat,
}
