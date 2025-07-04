import MainMenu from './MainMenu';
import { buttonVariants, buttonConfigs } from '../../stories/shared/buttonVariants';
import { foodCardVariants, foodCardStates } from '../../stories/shared/foodCardVariants';
import { basketItemVariants, basketItemStates } from '../../stories/shared/basketItemVariants';
import { composeStories, createResponsiveStories } from '../../stories/shared/composeStories';

export default {
  title: 'Pages/MainMenu',
  component: MainMenu,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onAddToBasket: { action: 'add to basket' },
    onBasketClick: { action: 'basket clicked' },
    onLogoClick: { action: 'logo clicked' },
  },
};

// Base story template
const baseStory = {
  args: {
    basketItems: [],
  },
};

// Default main menu with empty basket
export const Default = {
  args: {
    basketItems: [],
  },
};

// Main menu with items in basket
export const WithBasketItems = {
  args: {
    basketItems: [
      basketItemVariants.pizza,
      basketItemVariants.burger,
    ],
  },
};

// Main menu with popular items
export const WithPopularItems = {
  args: {
    basketItems: [],
  },
  render: (args) => {
    // This demonstrates how you could modify the food data to show popular items
    const popularFoodData = [
      {
        ...foodCardVariants.pizza,
        ...foodCardStates.popular,
      },
      {
        ...foodCardVariants.burger,
        ...foodCardStates.new,
      },
      {
        ...foodCardVariants.pasta,
        ...foodCardStates.discounted,
      },
    ];
    
    return <MainMenu {...args} />;
  },
};

// Main menu with high quantity items
export const WithHighQuantityItems = {
  args: {
    basketItems: [
      {
        ...basketItemVariants.drink,
        ...basketItemStates.highQuantity, // Quantity: 10
      },
      {
        ...basketItemVariants.pizza,
        ...basketItemStates.multiple, // Quantity: 3
      },
    ],
  },
};

// Main menu with customizations
export const WithCustomizedItems = {
  args: {
    basketItems: [
      {
        ...basketItemVariants.burger,
        ...basketItemStates.withCustomizations,
      },
      {
        ...basketItemVariants.pasta,
        ...basketItemStates.withCustomizations,
      },
    ],
  },
};

// Responsive stories
export const Mobile = {
  args: {
    basketItems: [basketItemVariants.pizza],
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet = {
  args: {
    basketItems: [basketItemVariants.pizza, basketItemVariants.burger],
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop = {
  args: {
    basketItems: [
      basketItemVariants.pizza,
      basketItemVariants.burger,
      basketItemVariants.pasta,
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

// Interactive stories with actions
export const Interactive = {
  args: {
    basketItems: [basketItemVariants.pizza],
  },
  render: (args) => (
    <MainMenu 
      {...args}
      onAddToBasket={(item) => console.log('Added to basket:', item)}
      onBasketClick={() => console.log('Basket clicked')}
      onLogoClick={() => console.log('Logo clicked')}
    />
  ),
};

// Compose stories using the utility functions
export const ComposedVariants = {
  ...composeStories(baseStory, {
    empty: { basketItems: [] },
    singleItem: { basketItems: [basketItemVariants.pizza] },
    multipleItems: { 
      basketItems: [
        basketItemVariants.pizza,
        basketItemVariants.burger,
        basketItemVariants.pasta,
      ]
    },
  }),
};

// Create responsive versions of all variants
export const ResponsiveVariants = {
  ...createResponsiveStories(baseStory, {
    empty: { basketItems: [] },
    withItems: { 
      basketItems: [
        basketItemVariants.pizza,
        basketItemVariants.burger,
      ]
    },
  }),
};

// Example showing the power of composition
export const ComposableExample = {
  render: () => (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h3>This demonstrates the power of composable stories:</h3>
      <p>All the stories above use shared variants from:</p>
      <ul>
        <li><code>buttonVariants</code> - for consistent button styling</li>
        <li><code>foodCardVariants</code> - for consistent food card data</li>
        <li><code>basketItemVariants</code> - for consistent basket item data</li>
      </ul>
      
      <p>If you change any variant (e.g., <code>basketItemVariants.pizza</code>), 
      it will update in all stories that use it!</p>
      
      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: 'white', borderRadius: '8px' }}>
        <h4>Example: Current Pizza Variant</h4>
        <pre style={{ fontSize: '12px', overflow: 'auto' }}>
          {JSON.stringify(basketItemVariants.pizza, null, 2)}
        </pre>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}; 