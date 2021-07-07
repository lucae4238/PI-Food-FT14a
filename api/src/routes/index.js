const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeG = require('./recipeG');
const diet = require('./diets');
const recipeP = require('./recipeP');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipeG)
router.use('/types',diet)
router.use('/recipe', recipeP)



router.get('/', async function(req,res){
    res.send('start')
})



module.exports = router;
