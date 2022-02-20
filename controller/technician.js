const ErrorResponse = require('../ultil/errorRespose')
const asyncHandler = require('../middleware/async')
const Technicians = require('../models/Technicians')
const Logsystem = require('../models/Logsystem')

//@desc  Get All Technicians
//@route  GET /api/v1/technician
//@access  Private/admin

exports.getTechs = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults)
});

//@desc  Craete A new technician on the Server
//@route  POST /api/v1/technician
//@access  Private/admin

exports.createTechs = asyncHandler(async (req, res, next) => {
    const tech = await Technicians.create(req.body)

    res.status(201).json({
        success: true,
        data: tech
    })
});

//@desc  Delete Technician
//@route  DELETE /api/v1/technician/:id
//@access  Private/admin

exports.deleteTech = asyncHandler(async (req, res, next) => {
     await Technicians.findByIdAndRemove(req.params.id)

    res.status(200).json({
        success: true,
        data: 'Technician Deleted'
    })
})