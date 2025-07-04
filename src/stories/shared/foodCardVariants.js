// Shared food card variants that can be composed and reused
// These match the actual FoodCard component props from src/components/FoodCard/FoodCard.jsx
export const foodCardVariants = {
  pizza: {
    id: "1",
    name: "Margherita Pizza",
    price: 12.99,
    description: "Classic tomato sauce with mozzarella cheese",
    categoryId: "pizza",
  },
  burger: {
    id: "2",
    name: "Classic Burger",
    price: 9.99,
    description: "Juicy beef patty with fresh vegetables",
    categoryId: "burgers",
  },
  pasta: {
    id: "3",
    name: "Spaghetti Carbonara",
    price: 11.99,
    description: "Creamy pasta with bacon and parmesan",
    categoryId: "pasta",
  },
  salad: {
    id: "4",
    name: "Caesar Salad",
    price: 8.99,
    description: "Fresh romaine lettuce with caesar dressing",
    categoryId: "salads",
  },
  drink: {
    id: "5",
    name: "Fresh Lemonade",
    price: 3.99,
    description: "Refreshing homemade lemonade",
    categoryId: "drinks",
  },
  dessert: {
    id: "6",
    name: "Chocolate Cake",
    price: 6.99,
    description: "Rich chocolate cake with vanilla frosting",
    categoryId: "desserts",
  },
};

// Food card states
export const foodCardStates = {
  inStock: {
    // FoodCard doesn't have available/outOfStock props, so we'll use badge
    badge: "Available",
  },
  outOfStock: {
    badge: "Out of Stock",
  },
  popular: {
    badge: "Most Popular",
  },
  new: {
    badge: "New",
  },
  vegetarian: {
    badge: "Vegetarian",
  },
  discounted: {
    // FoodCard doesn't have originalPrice/discount props, so we'll use badge
    badge: "20% Off",
  },
};

// Food card configurations for different contexts
export const foodCardConfigs = {
  compact: {
    // FoodCard doesn't have showDescription/showBadges props
    // These would be handled at the component level
  },
  detailed: {
    // FoodCard doesn't have showNutrition props
    // These would be handled at the component level
  },
  mobile: {
    // FoodCard doesn't have compact props
    // These would be handled at the component level
  },
  desktop: {
    // FoodCard doesn't have compact props
    // These would be handled at the component level
  },
};
