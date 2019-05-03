const fs= require('fs');
const path=require('path');


const getHome=(req,res,next)=>{
        res.render('index');
};

const getMusic=(req,res,next)=>{
    const fileId=req.query.id;

    const filePath=path.format({
        dir:'public/music',
        base:fileId
    })
    if(fs.existsSync(filePath)){
        const rstream=fs.createReadStream(filePath);
        rstream.pipe(res);
    }
    else{
        res.render('404');
    }
};
const getDownload=(req,res,next)=>{
    const fileId=req.query.id;

    const filePath=path.format({
        dir:'public/music',
        base:fileId
    })
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