const express = require('express')
const { 
  createContact
        } = require('../controller/contact')

const router = express.Router({mergeParams: true})

//const { protect, authorize } = require('../middleware/auth') 
const advancedResults = require('../middleware/advancedResult')        

//router.use(protect)
//router.use(authorize('admin'))

router
.route('/')  
.post(createContact)

module.exports = router;