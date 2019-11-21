// const ingredientCheck = function(bakery, recipes) {
//   let match;
//   let ingredients = recipes.ingredients;
//   for (let i = 0; i < ingredients.length; i++){
//     for (let j = 0; j < bakery.length; j++){
//       if (bakery[j] == recipe.ingredients) match = bakery[j];
//     }
//   }
// }

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for(let recipe of recipes){
    let ingredientA = recipe.ingredients[0];
    console.log(ingredientA)
    let ingredientB = recipe.ingredients[1];
    console.log(ingredientB)

    if(bakeryA.includes(ingredientA) && bakeryB.includes(ingredientB) || (bakeryA.includes(ingredientB)) && (bakeryB.includes(ingredientA))){
      return recipe.name;
    }
  }
}

const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard']
const bakeryB = ['milk', 'butter', 'cream cheese']
const recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
]
