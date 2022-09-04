import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const data = {
  id: '5f4e821d531e677602591a9b',
  productName: 'Classic Box',
  headline: 'WEEK OF OCTOBER 12TH',
  min: 3,
  max: 8,
  baseRecipePrice: 1798,
  shippingPrice: 1298,
  recipes: [
    {
      id: '5f4d4a7e62fb0224951e7ec4',
      name: 'Chicken Sausage & Spinach Ravioli',
      slug: 'chicken-sausage-spinach-ravioli',
      headline: 'with Tomato & Lemon',
      image:
        'https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/5f4d4a7e62fb0224951e7ec4-2fe03fc2.jpg',
      selected: 1,
      selectionLimit: 1,
      extraCharge: 0,
      yields: 2,
    },
    {
      id: '5f4d4aa9f4508b34e9680613',
      name: 'Gouda Vibes Burgers',
      slug: 'gouda-vibes-burgers',
      headline: 'with Tomato Onion Jam & Potato Wedges',
      image:
        'https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/gouda-vibes-burgers-e3f56d7e.jpg',
      selected: 1,
      selectionLimit: null,
      extraCharge: 0,
      yields: 2,
    },
    {
      id: '5f4d4e62e85668628873add2',
      name: 'Sweet Soy Glazed Steak Tacos',
      slug: 'sweet-soy-glazed-steak-tacos',
      headline: 'with Spicy Slaw, Marinated Cucumber & Peanuts',
      image:
        'https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/sweet-soy-glazed-steak-tacos-c5c4cb4f.jpg',
      selected: 0,
      selectionLimit: null,
      extraCharge: 0,
      yields: 2,
    },
  ],
};

describe('RecipesCard', () => {
  let wrapper;
  let props;

  props = {
    handleAddRecipe: jest.fn(),
    handleRemoveRecipe: jest.fn(),
  };

  it('renders selected recipe', () => {
    wrapper = shallow(
      <RecipeCard
        {...data.recipes[0]}
        {...props}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
    expect(wrapper.find({ 'data-testid': 'selected-footer' })).toHaveLength(1);
  });

  it('renders unselected recipe', () => {
    wrapper = shallow(
      <RecipeCard
        {...data.recipes[2]}
        {...props}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
    expect(wrapper.find({ 'data-testid': 'unselected-footer' })).toHaveLength(
      1
    );
  });

  it('renders  without crashing when no props passed', () => {
    wrapper = shallow(<RecipeCard />);
    expect(wrapper.find({ 'data-testid': 'unselected-footer' })).toHaveLength(
      1
    );
  });

  it("renders 'Add' text on button for unselected recipe", () => {
    wrapper = shallow(
      <RecipeCard
        {...data.recipes[2]}
        {...props}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
    let unselectedAddButton = wrapper
      .find({ 'data-testid': 'unselected-footer' })
      .dive()
      .find({ 'data-testid': 'add-button' })
      .dive();
    expect(unselectedAddButton.text()).toEqual('Add');
  });

  it("renders 'Add extra meal' text on button for unselected recipe when min recipes selected", () => {
    wrapper = shallow(
      <RecipeCard
        {...data.recipes[2]}
        {...props}
        minRecipesSelected={true}
        maxRecipesSelected={false}
      />
    );
    let unselectedAddButton = wrapper
      .find({ 'data-testid': 'unselected-footer' })
      .dive()
      .find({ 'data-testid': 'add-button' })
      .dive();
    expect(unselectedAddButton.text()).toEqual('Add Extra Meal');
  });

  it('disable button for unselected recipe when max recipes selected', () => {
    wrapper = shallow(
      <RecipeCard
        {...data.recipes[2]}
        {...props}
        minRecipesSelected={false}
        maxRecipesSelected={true}
      />
    );
    let unselectedAddButton = wrapper
      .find({ 'data-testid': 'unselected-footer' })
      .dive()
      .find({ 'data-testid': 'add-button' })
      .dive();
    expect(unselectedAddButton.prop('disabled')).toEqual(true);
  });

  it('disable button for unselected recipe when both min and max recipes selected', () => {
    wrapper = shallow(
      <RecipeCard
        {...data.recipes[2]}
        {...props}
        minRecipesSelected={true}
        maxRecipesSelected={true}
      />
    );
    let unselectedAddButton = wrapper
      .find({ 'data-testid': 'unselected-footer' })
      .dive()
      .find({ 'data-testid': 'add-button' })
      .dive();
    expect(unselectedAddButton.prop('disabled')).toEqual(true);
  });

  it('render add/remove button for selected recipes', () => {
    wrapper = shallow(
      <RecipeCard
        {...data.recipes[1]}
        {...props}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
    let selectedAddButton = wrapper
      .find({ 'data-testid': 'selected-footer' })
      .dive()
      .find({ 'data-testid': 'selection-add-button' });
    let selectedRemoveButton = wrapper
      .find({ 'data-testid': 'selected-footer' })
      .dive()
      .find({ 'data-testid': 'selection-remove-button' });
    expect(selectedAddButton).toHaveLength(1);
    expect(selectedRemoveButton).toHaveLength(1);
  });

  it('disable add button for selected recipes, if max limit for box reached', () => {
    wrapper = shallow(
      <RecipeCard
        {...data.recipes[1]}
        {...props}
        minRecipesSelected={false}
        maxRecipesSelected={true}
      />
    );
    let selectedAddButton = wrapper
      .find({ 'data-testid': 'selected-footer' })
      .dive()
      .find({ 'data-testid': 'selection-add-button' })
      .dive();
    expect(selectedAddButton.prop('disabled')).toEqual(true);
  });

  it('disable add button for selected recipes, if max limit for box reached', () => {
    wrapper = shallow(
      <RecipeCard
        {...data.recipes[1]}
        {...props}
        minRecipesSelected={false}
        maxRecipesSelected={true}
      />
    );
    let selectedAddButton = wrapper
      .find({ 'data-testid': 'selected-footer' })
      .dive()
      .find({ 'data-testid': 'selection-add-button' })
      .dive();
    expect(selectedAddButton.prop('disabled')).toEqual(true);
  });

  it('disable add button for selected recipe, if selection limit for the recipe reached', () => {
    wrapper = shallow(
      <RecipeCard
        {...data.recipes[0]}
        {...props}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
    let selectedAddButton = wrapper
      .find({ 'data-testid': 'selected-footer' })
      .dive()
      .find({ 'data-testid': 'selection-add-button' })
      .dive();
    expect(selectedAddButton.prop('disabled')).toEqual(true);
  });

  it('triggers handler to add recipe, on add button click, for unselected recipe', () => {
    wrapper = shallow(
      <RecipeCard
        {...data.recipes[2]}
        {...props}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
    let unselectedAddButton = wrapper
      .find({ 'data-testid': 'unselected-footer' })
      .dive()
      .find({ 'data-testid': 'add-button' });

    unselectedAddButton.simulate('click');
    expect(props.handleAddRecipe).toHaveBeenCalled();
  });

  it('triggers handler to add recipe, on add icon click, for selected recipe', () => {
    wrapper = shallow(
      <RecipeCard
        {...data.recipes[1]}
        {...props}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
    let selectedAddButton = wrapper
      .find({ 'data-testid': 'selected-footer' })
      .dive()
      .find({ 'data-testid': 'selection-add-button' });

    selectedAddButton.simulate('click');
    expect(props.handleAddRecipe).toHaveBeenCalled();
  });

  it('triggers handler to remove recipe, on remove icon click, for selected recipe', () => {
    wrapper = shallow(
      <RecipeCard
        {...data.recipes[1]}
        {...props}
        minRecipesSelected={false}
        maxRecipesSelected={false}
      />
    );
    let selectedRemoveButton = wrapper
      .find({ 'data-testid': 'selected-footer' })
      .dive()
      .find({ 'data-testid': 'selection-remove-button' });

    selectedRemoveButton.simulate('click');
    expect(props.handleRemoveRecipe).toHaveBeenCalled();
  });
});
