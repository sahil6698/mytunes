const express= require('express');



const errorController=require('../controller/error');

const errorRouter=express.Router();

errorRouter.get('*',errorController.getError);

module.exports={
    errorRouter
};