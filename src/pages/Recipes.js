import React from 'react';
import Flex from '../components/Flex';
import Box from '../components/Box';
import RecipeList from '../modules/RecipeList/RecipeList';
const Recipes = () => (
  <Flex flexdirection="column">
    <Box textalign="center">
      <h1>Select Your Recipes</h1>
      <p>
        Choose from an ever-changing mix of meat, fish, Beyond Meat and
        health-conscious offerings.
      </p>
    </Box>
    <Box>
      <RecipeList />
    </Box>
  </Flex>
);

export default Recipes;
