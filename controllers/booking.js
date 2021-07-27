const { User, Package, Booking, Response } = require('../models')

async function getBooking(req, res) {
    const booking = await Booking.findByPk(req.params.id)
    if (booking === null) {
        Response.status = 'fail'
        Response.data = 'Not found!'
        return res.status(404).json(Response)
    }

    const user = await User.findByPk(booking.userId)
    const package = await Package.findByPk(booking.package_id)
    Response.status = 'success'
    Response.data = {
        id: booking.id,
        price: booking.price,
        value: booking.value,
        booking_date: booking.booking_date,
        travel_date: booking.travel_date,
        payment: booking.payment,
        status: booking.status,
        user: {
            id: user.id,
            name: user.name,
            sname: user.sname,
            phone: user.phone,
            username: user.username,
            password: user.password
        },
        package: {
            id: package.id,
            name: package.name,
            price: package.price,
            value: package.value,
            img: package.img,
            des: package.des
        }
    }
    return res.status(200).json(Response)
}

async function getBookings(req, res) {
    const bookings = await Booking.findAll()
    if (bookings === null) {
        Response.status = 'fail'
        Response.data = 'Not found'
        return res.status(404).json(Response)
    }
    let ArrayBooking = []
    for (const i of bookings) {
        const user = await User.findByPk(i.user_id)
        const package = await Package.findByPk(i.package_id)
        Response.status = 'success'
        Response.data = {
            id: i.id,
            price: i.price,
            value: i.value,
            booking_date: i.booking_date,
            travel_date: i.travel_date,
            payment: i.payment,
            status: i.status,
            user: {
                id: user.id,
                name: user.name,
                sname: user.sname,
                phone: user.phone,
                username: user.username,
                password: user.password
            },
            package: {
                id: package.id,
                name: package.name,
                price: package.price,
                value: package.value,
                img: package.img,
                des: package.des
            }
        }
        ArrayBooking.push(Response.data)
    }
    return res.status(200).json(ArrayBooking)
}

async function addBooking(req, res) {
    const {
        value,
        price,
        bookingDate,
        travelDate,

        payment,
        status,
        packageId,
        userId
    } = req.body
    try {
        const result = await Booking.create({
            value: value,
            price: price,
            booking_date: bookingDate,
            travel_date: travelDate,
            payment: payment,
            status: status,
            package_id: packageId,
            user_id: userId
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

async function deleteBooking(req, res) {
    const booking = await Booking.findByPk(req.params.id)
    if (booking === null) {
        Response.status = 'fail'
        Response.data = 'Not found!'
        return res.status(404).json(Response)
    } else {
        await Booking.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(204).send()
    }
}

module.exports = {
    getBooking,
    getBookings,
    addBooking,

    deleteBooking
}
