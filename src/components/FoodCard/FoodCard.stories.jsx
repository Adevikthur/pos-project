import FoodCard from './FoodCard';
import { foodCardVariants, foodCardStates, foodCardConfigs } from '../../stories/shared/foodCardVariants';
import { composeStories, createResponsiveStories, createInteractiveStories } from '../../stories/shared/composeStories';

export default {
  title: 'Components/FoodCard',
  component: FoodCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'food card clicked' },
  },
};

// Base story template
const baseStory = {
  args: {
    food: foodCardVariants.pizza,
  },
};

// Individual food card stories using shared variants
export const Pizza = {
  args: {
    food: foodCardVariants.pizza,
  },
};

export const Burger = {
  args: {
    food: foodCardVariants.burger,
  },
};

export const Pasta = {
  args: {
    food: foodCardVariants.pasta,
  },
};

export const Salad = {
  args: {
    food: foodCardVariants.salad,
  },
};

export const Drink = {
  args: {
    food: foodCardVariants.drink,
  },
};

export const Dessert = {
  args: {
    food: foodCardVariants.dessert,
  },
};

// Long name variant for testing text overflow
export const LongName = {
  args: {
    food: {
      ...foodCardVariants.pizza,
      name: 'Super Deluxe Ultimate Supreme Pizza with Extra Everything and Premium Toppings',
      description: 'This is a very long description that should be truncated to show how the card handles overflow text in both the title and description areas',
      price: 29.99,
    },
  },
};

// Multiple cards showcase
export const MultipleCards = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
      gap: '20px',
      maxWidth: '900px'
    }}>
      <FoodCard food={foodCardVariants.pizza} />
      <FoodCard food={foodCardVariants.burger} />
      <FoodCard food={foodCardVariants.pasta} />
      <FoodCard food={foodCardVariants.salad} />
      <FoodCard food={foodCardVariants.drink} />
      <FoodCard food={foodCardVariants.dessert} />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Responsive stories
export const Mobile = {
  args: {
    food: foodCardVariants.pizza,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet = {
  args: {
    food: foodCardVariants.pizza,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop = {
  args: {
    food: foodCardVariants.pizza,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

// Interactive stories with actions
export const InteractiveCards = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
      gap: '20px',
      maxWidth: '900px'
    }}>
      <FoodCard 
        food={foodCardVariants.pizza} 
        onClick={() => console.log('Pizza clicked')}
      />
      <FoodCard 
        food={foodCardVariants.burger} 
        onClick={() => console.log('Burger clicked')}
      />
      <FoodCard 
        food={foodCardVariants.pasta} 
        onClick={() => console.log('Pasta clicked')}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Compose stories using the utility functions
export const ComposedVariants = {
  ...composeStories(baseStory, foodCardVariants),
};

// Create responsive versions of all variants
export const ResponsiveVariants = {
  ...createResponsiveStories(baseStory, foodCardVariants),
};

// Create interactive versions with actions
export const InteractiveVariants = {
  ...createInteractiveStories(baseStory, foodCardVariants, {
    onClick: () => console.log('Food card clicked'),
  }),
};

// State-based stories
export const OutOfStock = {
  args: {
    food: {
      ...foodCardVariants.pizza,
      ...foodCardStates.outOfStock,
    },
  },
};

export const Popular = {
  args: {
    food: {
      ...foodCardVariants.burger,
      ...foodCardStates.popular,
    },
  },
};

export const New = {
  args: {
    food: {
      ...foodCardVariants.pasta,
      ...foodCardStates.new,
    },
  },
};

export const Discounted = {
  args: {
    food: {
      ...foodCardVariants.salad,
      ...foodCardStates.discounted,
    },
  },
}; 