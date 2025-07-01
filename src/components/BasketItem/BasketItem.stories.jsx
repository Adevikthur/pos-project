import BasketItem from './BasketItem';

export default {
  title: 'Components/BasketItem',
  component: BasketItem,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onQuantityChange: { action: 'quantity changed' },
    onRemove: { action: 'item removed' },
  },
};

const mockItems = {
  pizza: {
    id: '1',
    name: 'Margherita Pizza',
    price: 14.99,
    quantity: 2,
    emoji: '🍕',
    customization: 'Thin Crust, Extra Cheese',
    glutenFree: false,
  },
  burger: {
    id: '2',
    name: 'Classic Cheeseburger',
    price: 12.99,
    quantity: 1,
    emoji: '🍔',
    customization: 'Medium Rare, No Onions',
    glutenFree: false,
  },
  salad: {
    id: '3',
    name: 'Caesar Salad',
    price: 9.99,
    quantity: 1,
    emoji: '🥗',
    customization: 'Light Dressing',
    glutenFree: true,
  },
  longName: {
    id: '4',
    name: 'Super Deluxe Ultimate Supreme Pizza with Extra Everything and Premium Toppings',
    price: 29.99,
    quantity: 3,
    emoji: '🍕',
    customization: 'Extra Large, Stuffed Crust, All Toppings',
    glutenFree: false,
  },
  singleQuantity: {
    id: '5',
    name: 'Pepperoni Pizza',
    price: 16.99,
    quantity: 1,
    emoji: '🍕',
    customization: 'Thick Crust',
    glutenFree: false,
  },
};

export const Default = {
  args: {
    item: mockItems.pizza,
  },
};

export const SingleQuantity = {
  args: {
    item: mockItems.singleQuantity,
  },
};

export const WithGlutenFree = {
  args: {
    item: mockItems.salad,
  },
};

export const LongName = {
  args: {
    item: mockItems.longName,
  },
};

export const MultipleItems = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <BasketItem item={mockItems.pizza} />
      <BasketItem item={mockItems.burger} />
      <BasketItem item={mockItems.salad} />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Mobile = {
  args: {
    item: mockItems.pizza,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Desktop = {
  args: {
    item: mockItems.pizza,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}; 