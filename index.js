var express = require('express');
 var app = express();
 app.use(express.json());
//  var bodyParser = require('body-parser');
//  app.use(bodyParser.json());
//  app.use(bodyParser.urlencoded({
//      extended: true
//  }));

const db = require('./dao/connect_db.js')
const controllers = require('./controller/users')

async function testConnection() {
    try {
        await  db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}


app.get('/api/user',controllers.fillAllUser);
app.get('/api/user/:userId',controllers.fillUserById);
app.post('/api/user/create_user',controllers.createUser);
app.post('/api/user/update_user',controllers.updateUser);
// app.get('/api', (req,res) => {
// res.send(arr);
// });
// app.post('/add',addDataUser);
// chỉnh port
app.listen(3000, function () {
  console.log(process.env.PORT);
});
module.exports = app;