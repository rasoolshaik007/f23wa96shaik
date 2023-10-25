var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    router.put( q = Math.random() * 10);
    router.put( p = Math.round(q));
    router.post(atan = Math.atan(p));
    router.post(exp = Math.exp(p));
    router.post(exmp1 = Math.expm1(p));
    
    res.send(`atan applied to ${p} is ${atan} \n exp applied to ${p} is ${exp} exmp1 applied to ${p} is ${exmp1}`);
    
});

module.exports = router;
var p;
var q;
var atan;
var exp;
var exmp1;

