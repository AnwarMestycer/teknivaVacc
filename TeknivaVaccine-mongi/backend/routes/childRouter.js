
const {CreateChildController,getAllChildController,UpdateChildController,DeleteChildController,SendMailToParentcontroller,SendSMSToParentcontroller, 
    SearchChildByIdController,SearchChildByDateController,SearchChildByExDateController,SearchWeeklyController,getAllParentPhoneController
 } = require('../controllers/childController')
const ProviderRoutes = require('express').Router()

//crud child
//get all childs
ProviderRoutes.get('/childs',getAllChildController)
//Create child
ProviderRoutes.post('/addchild',CreateChildController)
//update child
ProviderRoutes.patch('/upchild/:id_child',UpdateChildController)
//delete child
ProviderRoutes.delete('/delchild/:id_child',DeleteChildController)

//-----------------------------------------------------
//send sms to parent
ProviderRoutes.post('/sms',SendSMSToParentcontroller)
//send email to parent
ProviderRoutes.post('/email',SendMailToParentcontroller)
//-----------------------------------------------------
//search vaccin by child id
ProviderRoutes.get('/vchild/:id_child',SearchChildByIdController)
//get vaccin by date
ProviderRoutes.get('/vchild',SearchChildByDateController)
//get vaccin by expected date

ProviderRoutes.get('/vchildex',SearchChildByExDateController)
//---------------------------------------------
//search by weekly vaccination
ProviderRoutes.get('/vaccin/:vaccin_journey',SearchWeeklyController)
//----------------------------------------------
//get all parent phones
ProviderRoutes.get('/parentphones',getAllParentPhoneController)
//export route module to index file
module.exports = ProviderRoutes