import { useState, useEffect, useMemo } from 'react';
import styles from './RecipeList.module.css';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import RecipeCard from '../RecipeCard/RecipeCard';
import Heading from '../Heading/Heading';
import useFetchHelloFreshBox from '../../hooks/useFetchHelloFreshBox';
import { parseRawPrice } from '../../helpers/price';
import { calculatePriceSummary } from '../../helpers/calculateSummary';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const { data } = useFetchHelloFreshBox();

  useEffect(() => {
    const { recipes: fetchedRecipes } = data;

    if (fetchedRecipes) {
      setRecipes(fetchedRecipes);
    }
  }, [setRecipes, data]);

  const handleAddRecipe = (id) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, selected: recipe.selected + 1 } : recipe
      )
    );
  };

  const handleRemoveRecipe = (id) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, selected: recipe.selected - 1 } : recipe
      )
    );
  };

  // Recipe Select Count : Calculates and sets the total no. of recipes selected.
  let recipeSelectCount = recipes?.reduce(
    (total, recipe) => total + recipe.selected,
    0
  );

  // Min recipe boundary : if min recipe boundary limit of the boundary is reached
  const minRecipesSelected = recipeSelectCount >= data.min;

  //Max recipe boundary : if max recipes limit of the box is reached
  const maxRecipesSelected = recipeSelectCount === data.max;

  // price summary and total price
  const summary = useMemo(
    () =>
      calculatePriceSummary(recipes, data.baseRecipePrice, data.shippingPrice),
    [recipes, data.baseRecipePrice, data.shippingPrice]
  );

  const totalPrice = parseRawPrice(
    summary?.items?.reduce((total, item) => total + item.price, 0) +
      data.shippingPrice || 0
  );

  return (
    <Box className={styles.recipeListContainer}>
      <Heading summary={totalPrice} />
      <Flex className={styles.recipeList}>
        {recipes.map((recipe) => {
          return (
            <Flex className={styles.cardContainer} key={recipe.id}>
              <RecipeCard
                {...recipe}
                handleAddRecipe={handleAddRecipe}
                handleRemoveRecipe={handleRemoveRecipe}
                minRecipesSelected={minRecipesSelected}
                maxRecipesSelected={maxRecipesSelected}
              />
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}

export default RecipeList;
