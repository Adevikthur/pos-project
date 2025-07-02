import FoodCategory from './FoodCategory';

export default {
  title: 'Components/FoodCategory',
  component: FoodCategory,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    onCategorySelect: { action: 'category selected' },
  },
};

const Template = (args) => <FoodCategory {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories: [
    { id: 'pizza', name: 'Pizza' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'salads', name: 'Salads' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'desserts', name: 'Desserts' },
  ],
  selectedCategory: { id: 'pizza', name: 'Pizza' },
};

export const WithLongCategoryNames = Template.bind({});
WithLongCategoryNames.args = {
  categories: [
    { id: 'pizza', name: 'Margherita Pizza' },
    { id: 'burgers', name: 'Gourmet Burgers' },
    { id: 'pasta', name: 'Italian Pasta' },
    { id: 'salads', name: 'Fresh Salads' },
    { id: 'drinks', name: 'Refreshing Drinks' },
    { id: 'desserts', name: 'Sweet Desserts' },
  ],
  selectedCategory: { id: 'pizza', name: 'Margherita Pizza' },
};

export const NoSelectedCategory = Template.bind({});
NoSelectedCategory.args = {
  categories: [
    { id: 'pizza', name: 'Pizza' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'salads', name: 'Salads' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'desserts', name: 'Desserts' },
  ],
  selectedCategory: null,
}; 