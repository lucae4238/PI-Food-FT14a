const axios = require('axios').default;
const  {API_KEY} = process.env;


async function recipeName (name){
    try {
        let result =   await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true&number=100`)
        let resolve = []
        if(result.data.results){

            result.data.results.map( item => {
                let obj = {
                    name: item.title,
                    id: item.id,
                    image: item.image,
                    summary: item.summary,
                    dishTypes: item.dishTypes,
                    diets: item.diets,
                    healthScore:  item.healthScore,
                    score: item.spoonacularScore,
                    steps: item.analyzedInstructions
                }
                resolve.push(obj)
            })
            return resolve
        }
    } catch (error) {
        console.log('error en el axios', error)
    }

}

async function recipeId (id){
    let item =   await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
    let data = item.data
    console.log(data)
    let obj = {
name: data.title,
id: data.id,
image: data.image,
summary: data.summary,
dishTypes: data.dishTypes,
diets: data.diets,
healthScore:  data.healthScore,
score: data.spoonacularScore,
steps: data.analyzedInstructions

    }
       return obj;
}



module.exports = {
recipeName, recipeId
}