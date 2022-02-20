const express = require('express')
const { 
        createTechs,
        getTechs,
        deleteTech
} = require('../controller/technician')
const Technicians = require('../models/Technicians') 


const router = express.Router({mergeParams: true})

//const { protect, authorize } = require('../middleware/auth') 
const advancedResults = require('../middleware/advancedResult')        

//router.use(protect)
//router.use(authorize('admin'))

router
.route('/')
//.get(advancedResults(User), getUsers)   
.post(createTechs)
.get(advancedResults(Technicians), getTechs)

router
.route('/:id')
.delete(deleteTech)

module.exports = router;