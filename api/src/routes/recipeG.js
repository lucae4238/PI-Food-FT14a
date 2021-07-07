const router = require('express').Router();
const Sequelize = require('sequelize');
const { Recipe, Diet } = require('../db');
const { recipeName, recipeId } = require('./axios/recipesAxios');
const {FoCDietG} = require('./controllers/dietFoC');
const Op = Sequelize.Op;


router.get('/', async function(req,res) {
    
    let {name,page} = req.query;
    //page is for paged results, marks wich page must be shown
    let num= page !== undefined ? page : 0

    try {
        
    
    //finding in database
    let dbResult = await Recipe.findAll({where: {name: {[Op.like]: `%${name}%`}}})

    //finding in API
    let apiResult =await recipeName(name)


    //total recievies up to 100 results from API + results from DB
    let total = dbResult.concat(apiResult)

    //if theres no recipe with that name
    if(total.length === 0) return res.json({message: 'couldnt find any results'})

    //adding found diets to DB
    FoCDietG(total)

    //filtering for paged results => returns array with arrays with 9 results => [ [9], [9], [9], [9]...]
    let pageFiltered = []
for (let i = 0; i < total.length; i+=9) {
    let z = total.slice(i, (i + 9))
    pageFiltered.push(z)
}



//final result is paged results + page num
let final = pageFiltered[num]
console.log(`total.length`, total.length)
console.log(`pageFiltered.length`, pageFiltered.length)
console.log(`final.length`, final.length)


pageFiltered.length-1 < num ? res.json({message: 'results doesnt have that many pages'}) : res.json(final)
}catch (error) {
        console.log('error in get ', error)
        
    }

});


router.get('/:id/', async function(req,res){
    let {id} = req.params;
    //DB uses UUIDV1 => find if format is number or UUID

    if (id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i)){
        //if UUID search in DB, if no results send message
        let dbResult = await Recipe.findOne({where: {id: id}, include: [{model: Diet, attributes: ['name'],through: {attributes: []}}]})
       return dbResult === null ? res.json({mesage: 'error finding with id'}) : res.json(dbResult)
    }
    //format isnt UUID, find in API
    let apiResult = await recipeId(id)
    return apiResult.length === 0 ? res.json({mesage: 'error finding with id'}) : res.json(apiResult)
})

//234234234
//sdf87 -sdfad78sdf-asdf87



module.exports = router