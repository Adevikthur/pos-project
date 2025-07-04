# Composable Stories Pattern

This directory contains shared story variants and utilities that enable the composable stories pattern for OnePot Kitchen. This pattern allows you to create reusable component states that can be shared across multiple components and stories.

## How It Works

Instead of duplicating component configurations across multiple stories, we create shared variants that can be composed and reused.

### 1. Shared Variants

Create shared variants in dedicated files:

```javascript
// src/stories/shared/buttonVariants.js
export const buttonVariants = {
  primary: {
    variant: "primary",
    children: "Primary Button",
  },
  secondary: {
    variant: "secondary",
    children: "Secondary Button",
  },
  // ... more variants
};
```

### 2. Composable Stories

Use the shared variants in your component stories:

```javascript
// src/components/Button/Button.stories.jsx
import { buttonVariants } from "../../stories/shared/buttonVariants";

export const Primary = {
  args: buttonVariants.primary,
};

export const Secondary = {
  args: buttonVariants.secondary,
};
```

### 3. Reuse Across Components

Use the same variants in different components:

```javascript
// src/components/FoodCard/FoodCard.stories.jsx
import { buttonVariants } from "../../stories/shared/buttonVariants";

export const WithActions = {
  render: () => (
    <div>
      <FoodCard food={foodData} />
      <Button {...buttonVariants.primary}>Add to Cart</Button>
    </div>
  ),
};
```

## Benefits

1. **Single Source of Truth**: Change a variant once, and it updates everywhere
2. **Consistency**: Ensures consistent component states across your app
3. **Maintainability**: Easier to maintain and update component configurations
4. **Reusability**: Share common patterns across different components
5. **Testing**: Test component states in isolation and in combination

## File Structure

```
src/stories/shared/
├── buttonVariants.js          # Button component variants
├── foodCardVariants.js        # Food card component variants
├── basketItemVariants.js      # Basket item component variants
├── composeStories.js          # Utility functions for composing stories
├── exampleUsage.js            # Examples of how to use the pattern
└── README.md                  # This documentation
```

## Utility Functions

### composeStory(baseStory, variants, overrides)

Composes a story from a base story and variants.

### composeStories(baseStory, variantsMap)

Creates multiple stories from a base story and a map of variants.

### createResponsiveStories(baseStory, variantsMap)

Creates responsive versions of stories for different viewports.

### createInteractiveStories(baseStory, variantsMap, actions)

Creates interactive stories with predefined actions.

## Example: Changing a Button Style

Before (traditional approach):

- Update Button.stories.jsx
- Update FoodCard.stories.jsx
- Update BasketItem.stories.jsx
- Update OrderSummary.stories.jsx
- Update DeliveryInfo.stories.jsx
- ... and so on

After (composable approach):

- Update `buttonVariants.primary` in `src/stories/shared/buttonVariants.js`
- All components using this variant automatically update

## Best Practices

1. **Keep variants focused**: Each variant should represent a specific state or configuration
2. **Use descriptive names**: Name variants clearly (e.g., `primary`, `secondary`, `disabled`)
3. **Compose, don't duplicate**: Use the utility functions to compose stories rather than duplicating code
4. **Document your variants**: Add comments explaining what each variant represents
5. **Test combinations**: Create stories that test how variants work together

## Migration Guide

To migrate existing stories to this pattern:

1. Identify common component configurations
2. Extract them to shared variant files
3. Update component stories to use the shared variants
4. Use utility functions to create composed stories
5. Test that all stories still work correctly

## Example Migration

Before:

```javascript
// Button.stories.jsx
export const Primary = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

// FoodCard.stories.jsx
export const WithButton = {
  render: () => (
    <div>
      <FoodCard food={food} />
      <Button children="Primary Button" variant="primary" />
    </div>
  ),
};
```

After:

```javascript
// src/stories/shared/buttonVariants.js
export const buttonVariants = {
  primary: {
    children: "Primary Button",
    variant: "primary",
  },
};

// Button.stories.jsx
export const Primary = {
  args: buttonVariants.primary,
};

// FoodCard.stories.jsx
export const WithButton = {
  render: () => (
    <div>
      <FoodCard food={food} />
      <Button {...buttonVariants.primary} />
    </div>
  ),
};
```

Now if you need to change the primary button style, you only update `buttonVariants.primary` and it changes everywhere!
