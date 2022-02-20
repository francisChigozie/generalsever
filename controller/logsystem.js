const ErrorResponse = require('../ultil/errorRespose')
const asyncHandler = require('../middleware/async')
const Technicians = require('../models/Technicians')
const Logsystem = require('../models/Logsystem')

//@desc  Get All Logs
//@route  GET /api/v1/logsystem
//@access  Private/admin

exports.getLogs = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults)
})

//@desc  Get A Single  Log
//@route  GET /api/v1/logsystem/:id
//@access  Private/admin

exports.getLog = asyncHandler(async (req, res, next) => {
    const logs = await Logsystem.findById(req.params.id)

    res.status(200).json({
        success: true,
        data: logs
    })
})

//@desc  Craete Log on Server
//@route  POST /api/v1/logsystem
//@access  Private/admin

exports.createLogs = asyncHandler(async (req, res, next) => {
    const logs = await Logsystem.create(req.body)

    res.status(201).json({
        success: true,
        data: logs
    })
})

//@desc  Update User
//@route  PUT/api/v1/logsystem/:id
//@access  Private/admin

exports.updateLog = asyncHandler(async (req, res, next) => {
    const log = await Logsystem.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        data: log
    })
})

//@desc  Delete User
//@route  DELETE /api/v1/logsystem/:id
//@access  Private/admin

exports.deleteLog = asyncHandler(async (req, res, next) => {
     const log = await Logsystem.findByIdAndDelete(req.params.id)

     await log.remove()

    res.status(200).json({
        success: true,
        data: 'Log Deleted'
    })
})