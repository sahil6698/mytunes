const express= require('express');
const homeController=require('../controller/home');

const homeRouter=express.Router();

homeRouter.get('/',homeController.getHome);
homeRouter.get('/music',homeController.getMusic);
homeRouter.get('/download',homeController.getDownload);
module.exports={
    homeRouter
};