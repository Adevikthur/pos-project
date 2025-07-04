import BasketItem from './BasketItem';
import { basketItemVariants, basketItemStates, basketItemConfigs } from '../../stories/shared/basketItemVariants';
import { composeStories, createResponsiveStories, createInteractiveStories } from '../../stories/shared/composeStories';

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

// Base story template
const baseStory = {
  args: {
    item: basketItemVariants.pizza,
  },
};

// Individual basket item stories using shared variants
export const Default = {
  args: {
    item: basketItemVariants.pizza,
  },
};

export const SingleQuantity = {
  args: {
    item: {
      ...basketItemVariants.pizza,
      ...basketItemStates.single,
    },
  },
};

export const MultipleQuantity = {
  args: {
    item: {
      ...basketItemVariants.burger,
      ...basketItemStates.multiple,
    },
  },
};

export const WithCustomizations = {
  args: {
    item: {
      ...basketItemVariants.burger,
      ...basketItemStates.withCustomizations,
    },
  },
};

export const WithoutCustomizations = {
  args: {
    item: {
      ...basketItemVariants.pizza,
      ...basketItemStates.withoutCustomizations,
    },
  },
};

export const HighQuantity = {
  args: {
    item: {
      ...basketItemVariants.drink,
      ...basketItemStates.highQuantity,
    },
  },
};

// Long name variant for testing text overflow
export const LongName = {
  args: {
    item: {
      ...basketItemVariants.pizza,
      name: 'Super Deluxe Ultimate Supreme Pizza with Extra Everything and Premium Toppings',
      customizations: ['Extra Large', 'Stuffed Crust', 'All Toppings', 'Extra Cheese', 'Extra Sauce'],
    },
  },
};

// Multiple items showcase
export const MultipleItems = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <BasketItem item={basketItemVariants.pizza} />
      <BasketItem item={basketItemVariants.burger} />
      <BasketItem item={basketItemVariants.pasta} />
      <BasketItem item={basketItemVariants.drink} />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Responsive stories
export const Mobile = {
  args: {
    item: basketItemVariants.pizza,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Desktop = {
  args: {
    item: basketItemVariants.pizza,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

// Interactive stories with actions
export const InteractiveItems = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <BasketItem 
        item={basketItemVariants.pizza}
        onQuantityChange={(id, quantity) => console.log(`Pizza quantity changed to ${quantity}`)}
        onRemove={(id) => console.log(`Pizza removed`)}
      />
      <BasketItem 
        item={basketItemVariants.burger}
        onQuantityChange={(id, quantity) => console.log(`Burger quantity changed to ${quantity}`)}
        onRemove={(id) => console.log(`Burger removed`)}
      />
      <BasketItem 
        item={basketItemVariants.pasta}
        onQuantityChange={(id, quantity) => console.log(`Pasta quantity changed to ${quantity}`)}
        onRemove={(id) => console.log(`Pasta removed`)}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Compose stories using the utility functions
export const ComposedVariants = {
  ...composeStories(baseStory, basketItemVariants),
};

// Create responsive versions of all variants
export const ResponsiveVariants = {
  ...createResponsiveStories(baseStory, basketItemVariants),
};

// Create interactive versions with actions
export const InteractiveVariants = {
  ...createInteractiveStories(baseStory, basketItemVariants, {
    onQuantityChange: (id, quantity) => console.log(`Quantity changed to ${quantity}`),
    onRemove: (id) => console.log(`Item removed`),
  }),
};

// State-based stories
export const SingleItem = {
  args: {
    item: {
      ...basketItemVariants.pizza,
      ...basketItemStates.single,
    },
  },
};

export const MultipleItemsState = {
  args: {
    item: {
      ...basketItemVariants.burger,
      ...basketItemStates.multiple,
    },
  },
};

export const WithCustomizationsState = {
  args: {
    item: {
      ...basketItemVariants.pasta,
      ...basketItemStates.withCustomizations,
    },
  },
};

export const HighQuantityState = {
  args: {
    item: {
      ...basketItemVariants.drink,
      ...basketItemStates.highQuantity,
    },
  },
}; 