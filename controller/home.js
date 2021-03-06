const fs= require('fs');
const path=require('path');


const getHome=(req,res,next)=>{
        res.render('index.ejs');
};

const getMusic=(req,res,next)=>{
    const fileId=req.query.id;

    const filePath=path.join(__dirname, '..','public','music',fileId);
    // res.sendFile(filePath)
    if(fs.existsSync(filePath)){
        const rstream=fs.createReadStream(filePath);
        rstream.pipe(res);
    }
    else{
        res.render('404.ejs');
    }
};
const getDownload=(req,res,next)=>{
    const fileId=req.query.id;

    
    const filePath=path.join(__dirname, '..','public','music',fileId);
    if(fs.existsSync(filePath)){
        res.download(filePath)
    }
    else{
        res.render('404');
    }
}


module.exports={
    getHome,
    getMusic,
    getDownload
};