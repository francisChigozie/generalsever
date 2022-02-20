const express = require('express')
const { 
        createLogs,
        getLogs,
        getLog,
        updateLog,
        deleteLog
} = require('../controller/logsystem')
const Logsystem = require('../models/Logsystem') 


const router = express.Router({mergeParams: true})

//const { protect, authorize } = require('../middleware/auth') 
const advancedResults = require('../middleware/advancedResult')        

//router.use(protect)
//router.use(authorize('admin'))

router
.route('/')
//.get(advancedResults(User), getUsers)   
.post(createLogs)
.get(advancedResults(Logsystem), getLogs)

router
.route('/:id')
.get(getLog)
.put(updateLog)
.delete(deleteLog)

module.exports = router;