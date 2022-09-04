import styles from './UnselectedFooter.module.css';
import Flex from '../../../components/Flex';
import Button from '../../../components/Button/Button';

function UnselectedFooter({
  handleAddRecipe,
  recipeId,
  minRecipesSelected,
  maxRecipesSelected,
}) {
  return (
    <Flex className={styles.unselectedFooter}>
      <Button
        data-testid="add-button"
        className={styles.button}
        onClick={() => handleAddRecipe(recipeId)}
        disabled={maxRecipesSelected}
      >
        {minRecipesSelected ? 'Add Extra Meal' : 'Add'}
      </Button>
    </Flex>
  );
}

export default UnselectedFooter;
