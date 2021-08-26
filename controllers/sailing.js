const { Boat, Driver, Booking, Sailing, Response } = require('../models')

async function getSailing(req, res) {
    const sailing = await Sailing.findByPk(req.params.id)
    if (sailing === null) {
        Response.status = 'fail'
        Response.data = 'Not found!'
        return res.status(404).json(Response)
    }
    const driver = await Driver.findByPk(sailing.driver_id)
    const boat = await Boat.findByPk(sailing.boat_id)
    const booking = await Booking.findByPk(sailing.booking_id)
    Response.status = 'success'
    Response.data = {
        id: sailing.id,
        depart_date: sailing.depart_date,
        return_date: sailing.return_date,
        driver: {
            id: driver.id,
            name: driver.name,
            sname: driver.sname,
            phone: driver.phone,
        },
        boat: {
            id: boat.id,
            name: boat.name,
            img: boat.img,
            type: boat.type,
            value: boat.value,
        },
        booking: {
            id: booking.id,
            price: booking.price,
            value: booking.value,
            booking_date: booking.booking_date,
            travel_date: booking.travel_date,
            payment: booking.payment,
            status: booking.status,
        },
    }
    return res.status(200).json(Response)
}

async function getSailings(req, res) {
    const sailings = await Sailing.findAll()
    if (sailings === null) {
        Response.status = 'fail'
        Response.data = 'Not found!'
        return res.status(404).json(Response)
    }
    const ArraySailing = []
    for (const i of sailings) {
        const driver = await Driver.findByPk(i.driver_id)
        const boat = await Boat.findByPk(i.boat_id)
        const booking = await Booking.findByPk(i.booking_id)
        Response.status = 'success'
        Response.data = {
            id: i.id,
            depart_date: i.depart_date,
            return_date: i.return_date,
            driver: {
                id: driver.id,
                name: driver.name,
                sname: driver.sname,
                phone: driver.phone,
            },
            boat: {
                id: boat.id,
                name: boat.name,
                img: boat.img,
                type: boat.type,
                value: boat.value,
            },
            booking: {
                id: booking.id,
                price: booking.price,
                value: booking.value,
                booking_date: booking.booking_date,
                travel_date: booking.travel_date,
                payment: booking.payment,
                status: booking.status,
            },
        }
        ArraySailing.push(Response.data)
    }
    return res.status(200).json(ArraySailing)
}
async function addSailing(req, res) {
    const { depart_date, return_date, driver_id, boat_id, booking_id } =
        req.body
    try {
        const result = await Sailing.create({
            depart_date: depart_date,
            return_date: return_date,
            driver_id: driver_id,
            boat_id: boat_id,
            booking_id: booking_id,
        })
        Response.status = 'success'
        Response.data = result.dataValues
        res.status(200).send(Response)
    } catch (error) {
        Response.status = 'fail'
        Response.data = error.errors
        return res.status(400).json(Response)
    }
}

async function editSailing(req, res) {
    const { departDate, returnDate, driverId, boatId, bookingId, id } = req.body
    try {
        const result = await Sailing.update(
            {
                depart_date: departDate,
                return_date: returnDate,
                driver_id: driverId,
                boat_id: boatId,
                booking_id: bookingId,
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
        Response.data = error.errors
        return res.status(400).json(Response)
    }
}

async function deleteSailing(req, res) {
    const sailing = await Sailing.findByPk(req.params.id)
    if (sailing === null) {
        Response.status = 'fail'
        Response.data = 'Not found!'
        return res.status(404).json(Response)
    } else {
        await Sailing.destroy({
            where: {
                id: req.params.id,
            },
        })
        res.status(204).send()
    }
}

module.exports = {
    getSailing,
    getSailings,
    addSailing,
    editSailing,
    deleteSailing,
}
