const getError=(req,res,next)=>{
    res.render('404.ejs');
}

module.exports={
    getError
}