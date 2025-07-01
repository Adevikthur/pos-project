import FoodCard from './FoodCard';

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

const mockFoods = {
  pizza: {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, tomato sauce, and basil on our signature crust',
    price: 14.99,
    emoji: '🍕',
    badge: 'Vegetarian',
  },
  burger: {
    id: '2',
    name: 'Classic Cheeseburger',
    description: 'Juicy beef patty with melted cheese, lettuce, tomato, and special sauce',
    price: 12.99,
    emoji: '🍔',
  },
  pasta: {
    id: '3',
    name: 'Spaghetti Carbonara',
    description: 'Al dente pasta with creamy sauce, pancetta, and parmesan cheese',
    price: 16.99,
    emoji: '🍝',
  },
  salad: {
    id: '4',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce with parmesan cheese, croutons, and caesar dressing',
    price: 9.99,
    emoji: '🥗',
    badge: 'Vegetarian',
  },
  longName: {
    id: '5',
    name: 'Super Deluxe Ultimate Supreme Pizza with Extra Everything and Premium Toppings',
    description: 'This is a very long description that should be truncated to show how the card handles overflow text in both the title and description areas',
    price: 29.99,
    emoji: '🍕',
    badge: 'Premium',
  },
};

export const Pizza = {
  args: {
    food: mockFoods.pizza,
  },
};

export const Burger = {
  args: {
    food: mockFoods.burger,
  },
};

export const Pasta = {
  args: {
    food: mockFoods.pasta,
  },
};

export const VegetarianSalad = {
  args: {
    food: mockFoods.salad,
  },
};

export const LongName = {
  args: {
    food: mockFoods.longName,
  },
};

export const MultipleCards = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
      gap: '20px',
      maxWidth: '900px'
    }}>
      <FoodCard food={mockFoods.pizza} />
      <FoodCard food={mockFoods.burger} />
      <FoodCard food={mockFoods.pasta} />
      <FoodCard food={mockFoods.salad} />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Mobile = {
  args: {
    food: mockFoods.pizza,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet = {
  args: {
    food: mockFoods.pizza,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop = {
  args: {
    food: mockFoods.pizza,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}; 