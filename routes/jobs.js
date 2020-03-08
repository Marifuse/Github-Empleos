var express = require("express");
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('jobs',{title:"Trabajos GitHub", subtitle:"Buscador de trabajos"})
});

module.exports=router;