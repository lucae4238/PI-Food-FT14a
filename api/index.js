//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Recipe , Diet} = require('./src/db.js');


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
})
.then(()=> {

var glutenFree = Diet.create({name: 'gluten free',})
var Ketogenic = Diet.create({name: 'ketogenic',})
var lactoVegetarian = Diet.create({name: 'lacto vegetarian',})
var ovoVegetarian = Diet.create({name: 'ovo vegetarian',})
var vegan = Diet.create({name: 'vegan',})
var pescetarian = Diet.create({name: 'pescatarian',})
var paleo = Diet.create({name: 'paleo',})
var primal = Diet.create({name: 'primal',})
var whole30 = Diet.create({name: 'whole 30',})


let isaac = 
function isaac (){

  Recipe.create({name: 'thebindingofisaac1', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac2', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac3', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac4', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac5', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac6', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac7', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac8', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac9', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac11', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac12', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac13', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac14', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac15', summary: 'asda'})
  Recipe.create({name: 'thebindingofisaac16', summary: 'asda'})
}
isaac()



Promise.all([glutenFree, Ketogenic, lactoVegetarian,ovoVegetarian,
             vegan,pescetarian,paleo,primal,whole30, isaac])
  .then(res => {
    console.log("Dietas precargadas");
  });
})
