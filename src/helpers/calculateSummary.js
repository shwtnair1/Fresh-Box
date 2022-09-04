export const calculatePriceSummary = (
  recipes,
  baseRecipePrice,
  shippingPrice
) => {
  let selectedRecipes = recipes.filter((recipe) => recipe.selected > 0);
  let priceSummary = {};
  if (selectedRecipes.length > 0) {
    priceSummary.items = selectedRecipes.map((recipe) => {
      return {
        id: recipe.id,
        name: recipe.name,
        price: (baseRecipePrice + recipe.extraCharge) * recipe.selected,
        selected: recipe.selected,
      };
    });
    priceSummary.shippingPrice = shippingPrice;
  }
  return priceSummary;
};
