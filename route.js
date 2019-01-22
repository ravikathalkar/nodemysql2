const express=require('express');
const router=express.Router();
var db=require('./dbconfig');

console.log('in route file');
// /let post=[{'id':1,'title':'post 1'},{'id':2,'title':'post 2'}];

router.get('/',function(req,res){
    console.log('in func');
    db.query("SELECT * FROM basic_user"),function(err,results){
        if (err) throw err
        console.log(err);
        res.send(results);
        console.log(results);
        res.status(200);
    }
})

router.post('/', function (req, res) {
    res.send('Got a POST request')
})

router.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

router.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})


module.exports = router;