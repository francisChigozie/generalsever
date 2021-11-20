const ErrorResponse = require('../ultil/errorRespose')
const asyncHandler = require('../middleware/async')
const User = require('../models/User')
const Frankfurtcontact = require('../models/Frankfurtcontact')

//@desc  Get All Contacts
//@route  GET /api/v1/frankfurtcontact
//@access  Private/admin

exports.getFrankfurtcontact = asyncHandler(async (req, res, next) => {
    const frankfurtcontact = await Frankfurtcontact.find()

    res.status(200).json({
        success: true,
        data: frankfurtcontact
    })
})

//@desc  Get A Single  User
//@route  GET /api/v1/auth/users/:id
//@access  Private/admin

exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id)

    res.status(200).json({
        success: true,
        data: user
    })
})

//@desc  Craete A User
//@route  POST /api/v1/auth/users
//@access  Private/admin

exports.createFrankfurtcontact = asyncHandler(async (req, res, next) => {
    const frankfurtcontact = await Frankfurtcontact.create(req.body)

    res.status(201).json({
        success: true,
        data: frankfurtcontact
    })
})

//@desc  Update User
//@route  PUT/api/v1/auth/users/:id
//@access  Private/admin

exports.updateUser = asyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        data: user
    })
})

//@desc  Delete User
//@route  DELETE /api/v1/auth/users/:id
//@access  Private/admin

exports.deleteUser = asyncHandler(async (req, res, next) => {
     const user = await User.findByIdAndDelete(req.params.id)

     await user.remove()

    res.status(200).json({
        success: true,
        data: 'User Deleted'
    })
})