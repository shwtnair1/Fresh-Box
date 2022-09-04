import styles from './SelectedFooter.module.css';
import Text from '../../../components/Text';
import Flex from '../../../components/Flex';
import Box from '../../../components/Box';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Button from '../../../components/Button/Button';

function SelectedFooter({
  handleRemoveRecipe,
  handleAddRecipe,
  recipeId,
  noOfSelectedItems,
  maxRecipesSelected,
  selectionLimit,
}) {
  return (
    <Flex className={styles.container}>
      <Box className={styles.minusIcon}>
        <Button
          id={styles.customButton}
          onClick={() => handleRemoveRecipe(recipeId)}
        >
          <FaMinus />
        </Button>
      </Box>
      <Box className={styles.textContainer}>
        <Text>{noOfSelectedItems} in your box</Text>
      </Box>
      <Box className={styles.plusIcon}>
        <Button
          id={styles.customButton}
          onClick={() => handleAddRecipe(recipeId)}
          disabled={maxRecipesSelected || selectionLimit}
        >
          <FaPlus />
        </Button>
      </Box>
    </Flex>
  );
}

export default SelectedFooter;
