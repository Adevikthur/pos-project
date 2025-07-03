import OrderSummary from './OrderSummary';

export default {
  title: 'Components/OrderSummary',
  component: OrderSummary,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onCheckout: { action: 'checkout clicked' },
  },
};

const mockItems = [
  {
    id: '1',
    name: 'Margherita Pizza',
    price: 14.99,
    quantity: 2,
  },
  {
    id: '2',
    name: 'Classic Cheeseburger',
    price: 12.99,
    quantity: 1,
  },
  {
    id: '3',
    name: 'Caesar Salad',
    price: 9.99,
    quantity: 1,
  },
];

const singleItem = [
  {
    id: '1',
    name: 'Margherita Pizza',
    price: 14.99,
    quantity: 1,
  },
];

const manyItems = [
  ...mockItems,
  {
    id: '4',
    name: 'Pepperoni Pizza',
    price: 16.99,
    quantity: 3,
  },
  {
    id: '5',
    name: 'Chicken Wings',
    price: 13.99,
    quantity: 2,
  },
  {
    id: '6',
    name: 'French Fries',
    price: 4.99,
    quantity: 4,
  },
];

export const Default = {
  args: {
    items: mockItems,
    deliveryFee: 2.99,
    deliveryTime: 'Sat, Nov 13 ∙ 3:00 - 3:30',
    locationComments: 'This is a placeholder, so just leave it be',
  },
};

export const Empty = {
  args: {
    items: [],
  },
};

export const SingleItem = {
  args: {
    items: singleItem,
    deliveryFee: 2.99,
    deliveryTime: 'Today ∙ 2:00 - 2:30',
    locationComments: 'This is a placeholder, so just leave it be',
  },
};

export const ManyItems = {
  args: {
    items: manyItems,
    deliveryFee: 2.99,
    deliveryTime: 'Sun, Nov 14 ∙ 4:00 - 4:30',
    locationComments: 'This is a placeholder, so just leave it be',
  },
};

export const WithoutCheckoutButton = {
  args: {
    items: mockItems,
    showCheckoutButton: false,
    deliveryFee: 2.99,
    deliveryTime: 'Sat, Nov 13 ∙ 3:00 - 3:30',
    locationComments: 'This is a placeholder, so just leave it be',
  },
};

export const PlaceOrder = {
  args: {
    items: mockItems,
    checkoutButtonText: 'Place Order',
    deliveryFee: 2.99,
    deliveryTime: 'Sat, Nov 13 ∙ 3:00 - 3:30',
    locationComments: 'This is a placeholder, so just leave it be',
  },
};

export const CustomTaxRate = {
  args: {
    items: mockItems,
    taxRate: 0.12,
    deliveryFee: 2.99,
    deliveryTime: 'Sat, Nov 13 ∙ 3:00 - 3:30',
    locationComments: 'This is a placeholder, so just leave it be',
  },
};

export const FreeDelivery = {
  args: {
    items: mockItems,
    deliveryFee: 0,
    deliveryTime: 'Sat, Nov 13 ∙ 3:00 - 3:30',
    locationComments: 'This is a placeholder, so just leave it be',
  },
};

export const Mobile = {
  args: {
    items: mockItems,
    deliveryFee: 2.99,
    deliveryTime: 'Sat, Nov 13 ∙ 3:00 - 3:30',
    locationComments: 'This is a placeholder, so just leave it be',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Desktop = {
  args: {
    items: mockItems,
    deliveryFee: 2.99,
    deliveryTime: 'Sat, Nov 13 ∙ 3:00 - 3:30',
    locationComments: 'This is a placeholder, so just leave it be',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}; 