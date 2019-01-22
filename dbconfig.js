const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
  hostname: '127.0.0.1:82',
  user: 'root',
  password:'',
  database: 'user'
});

connection.connect(function(err){
if(err){

  console.log('err'+err.stack);
  return;
}
console.log('Thread Id',connection.threadId);

});

module.exports=connection;
