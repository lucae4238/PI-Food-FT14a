const axios = require("axios").default;
const { API_KEY } = process.env;

async function recipeName(name) {
  try {
    let result = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true&number=100`
    );
    let resolve = [];
    if (result.data.results) {
      result.data.results.map((item) => {
        let obj = {
          name: item.title,
          id: item.id,
          image: item.image,
          score: item.spoonacularScore,
          diets: item.diets,
        };
        resolve.push(obj);
      });
      return resolve;
    }
  } catch (error) {
    console.log("error en el axios");
  }
}

async function recipeId(id) {
  let item = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
  );
  let data = item.data;

  
  const dietList = [...data.diets];
  data.vegetarian && dietList.push("vegetarian");
  data.vegan && dietList.push("vegan");
  data.glutenFree && dietList.push("gluten free");

  let filtered = [...new Set(dietList)];

  let stepsFormated = [];
  data.analyzedInstructions.map((item) => {
    let nested = [];
    

    
    item.steps.map((step) => {
      // nested.push({ number: step.number, step: step.step });
      nested.push([step.number,step.step])
      // stepsFormated.push(step.step)
    });
    stepsFormated.push([item.name,nested]);

    // let big = { name: item.name, steps: nested };
    return nested;
  });

  const text = data.summary.replace(/<[^>]+>/g, '');

  let obj = {
    name: data.title,
    id: data.id,
    image: data.image,
    summary: text,
    dishTypes: data.dishTypes,
    diets: filtered,
    healthScore: data.healthScore,
    score: data.spoonacularScore,
    steps: stepsFormated
  };


  return obj;
}

module.exports = {
  recipeName,
  recipeId,
};
