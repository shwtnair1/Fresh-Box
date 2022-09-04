import React from 'react';
import styles from './RecipeCard.module.css';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Text from '../../components/Text';
import SelectedFooter from '../CardFooter/SelectedFooter/SelectedFooter';
import UnselectedFooter from '../CardFooter/UnselectedFooter/UnselectedFooter';

function RecipeCard({
  id,
  image,
  name,
  headline,
  selected,
  handleAddRecipe,
  handleRemoveRecipe,
  minRecipesSelected,
  maxRecipesSelected,
  selectionLimit,
}) {
  return (
    <Flex className={styles.recipeCard}>
      <Box className={styles.image}>
        <img src={image} alt={name} width="100%" />
      </Box>
      <Box className={styles.recipeText}>
        <Text className={styles.title}>{name}</Text>
        <Text className={styles.description}>{headline}</Text>
      </Box>
      <Flex className={styles.footer}>
        {selected > 0 ? (
          <SelectedFooter
            data-testid="selected-footer"
            recipeId={id}
            handleAddRecipe={handleAddRecipe}
            handleRemoveRecipe={handleRemoveRecipe}
            noOfSelectedItems={selected}
            maxRecipesSelected={maxRecipesSelected}
            selectionLimit={selectionLimit}
          />
        ) : (
          <UnselectedFooter
            data-testid="unselected-footer"
            recipeId={id}
            handleAddRecipe={handleAddRecipe}
            minRecipesSelected={minRecipesSelected}
            maxRecipesSelected={maxRecipesSelected}
          />
        )}
      </Flex>
    </Flex>
  );
}

export default RecipeCard;
