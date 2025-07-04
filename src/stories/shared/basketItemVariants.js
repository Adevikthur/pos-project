// Shared basket item variants that can be composed and reused
// These match the actual BasketItem component props from src/components/BasketItem/BasketItem.jsx
export const basketItemVariants = {
  pizza: {
    id: "1",
    name: "Margherita Pizza",
    price: 12.99,
    quantity: 1,
    categoryId: "pizza",
    customizations: [],
  },
  burger: {
    id: "2",
    name: "Classic Burger",
    price: 9.99,
    quantity: 2,
    categoryId: "burgers",
    customizations: ["Extra cheese", "No onions"],
  },
  pasta: {
    id: "3",
    name: "Spaghetti Carbonara",
    price: 11.99,
    quantity: 1,
    categoryId: "pasta",
    customizations: ["Extra bacon"],
  },
  drink: {
    id: "4",
    name: "Fresh Lemonade",
    price: 3.99,
    quantity: 3,
    categoryId: "drinks",
    customizations: [],
  },
};

// Basket item states
export const basketItemStates = {
  single: {
    quantity: 1,
  },
  multiple: {
    quantity: 3,
  },
  withCustomizations: {
    customizations: ["Extra cheese", "No onions", "Spicy sauce"],
  },
  withoutCustomizations: {
    customizations: [],
  },
  highQuantity: {
    quantity: 10,
  },
};

// Basket item configurations for different contexts
export const basketItemConfigs = {
  compact: {
    // BasketItem doesn't have showImage/showCustomizations props
    // These would be handled at the component level
  },
  detailed: {
    // BasketItem doesn't have showCategory props
    // These would be handled at the component level
  },
  mobile: {
    // BasketItem doesn't have compact props
    // These would be handled at the component level
  },
  desktop: {
    // BasketItem doesn't have compact props
    // These would be handled at the component level
  },
};
