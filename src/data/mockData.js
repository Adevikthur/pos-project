export const foodCategories = [
  {
    id: "pizza",
    name: "Pizza",
    emoji: "🍕",
    description: "Fresh, hot pizzas made to order",
  },
  {
    id: "burgers",
    name: "Burgers",
    emoji: "🍔",
    description: "Juicy burgers with premium ingredients",
  },
  {
    id: "pasta",
    name: "Pasta",
    emoji: "🍝",
    description: "Authentic Italian pasta dishes",
  },
  {
    id: "salads",
    name: "Salads",
    emoji: "🥗",
    description: "Fresh and healthy salad options",
  },
  {
    id: "drinks",
    name: "Drinks",
    emoji: "🥤",
    description: "Refreshing beverages and soft drinks",
  },
  {
    id: "desserts",
    name: "Desserts",
    emoji: "🍰",
    description: "Sweet treats and desserts",
  },
];

export const foodItems = [
  // Pizza
  {
    id: "pizza-1",
    categoryId: "pizza",
    name: "Margherita Pizza",
    description:
      "Fresh mozzarella, tomato sauce, and basil on our signature crust",
    price: 14.99,
    emoji: "🍕",
    badge: "Vegetarian",
    customizations: [
      { value: "thin", label: "Thin Crust" },
      { value: "thick", label: "Thick Crust" },
      { value: "stuffed", label: "Stuffed Crust" },
      { value: "gluten-free", label: "Gluten Free Crust" },
    ],
  },
  {
    id: "pizza-2",
    categoryId: "pizza",
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with melted cheese and tomato sauce",
    price: 16.99,
    emoji: "🍕",
    customizations: [
      { value: "thin", label: "Thin Crust" },
      { value: "thick", label: "Thick Crust" },
      { value: "stuffed", label: "Stuffed Crust" },
      { value: "gluten-free", label: "Gluten Free Crust" },
    ],
  },
  {
    id: "pizza-3",
    categoryId: "pizza",
    name: "Supreme Pizza",
    description:
      "Loaded with pepperoni, sausage, mushrooms, bell peppers, and onions",
    price: 19.99,
    emoji: "🍕",
    customizations: [
      { value: "thin", label: "Thin Crust" },
      { value: "thick", label: "Thick Crust" },
      { value: "stuffed", label: "Stuffed Crust" },
      { value: "gluten-free", label: "Gluten Free Crust" },
    ],
  },

  // Burgers
  {
    id: "burger-1",
    categoryId: "burgers",
    name: "Classic Cheeseburger",
    description:
      "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce",
    price: 12.99,
    emoji: "🍔",
    customizations: [
      { value: "rare", label: "Rare" },
      { value: "medium-rare", label: "Medium Rare" },
      { value: "medium", label: "Medium" },
      { value: "well-done", label: "Well Done" },
    ],
  },
  {
    id: "burger-2",
    categoryId: "burgers",
    name: "Bacon Deluxe Burger",
    description:
      "Beef patty with crispy bacon, cheddar cheese, and caramelized onions",
    price: 15.99,
    emoji: "🍔",
    customizations: [
      { value: "rare", label: "Rare" },
      { value: "medium-rare", label: "Medium Rare" },
      { value: "medium", label: "Medium" },
      { value: "well-done", label: "Well Done" },
    ],
  },
  {
    id: "burger-3",
    categoryId: "burgers",
    name: "Veggie Burger",
    description: "Plant-based patty with fresh vegetables and vegan cheese",
    price: 13.99,
    emoji: "🍔",
    badge: "Vegetarian",
    customizations: [
      { value: "grilled", label: "Grilled" },
      { value: "fried", label: "Fried" },
    ],
  },

  // Pasta
  {
    id: "pasta-1",
    categoryId: "pasta",
    name: "Spaghetti Carbonara",
    description:
      "Al dente pasta with creamy sauce, pancetta, and parmesan cheese",
    price: 16.99,
    emoji: "🍝",
    customizations: [
      { value: "al-dente", label: "Al Dente" },
      { value: "soft", label: "Soft" },
      { value: "extra-sauce", label: "Extra Sauce" },
    ],
  },
  {
    id: "pasta-2",
    categoryId: "pasta",
    name: "Fettuccine Alfredo",
    description: "Creamy alfredo sauce with parmesan cheese and black pepper",
    price: 15.99,
    emoji: "🍝",
    badge: "Vegetarian",
    customizations: [
      { value: "al-dente", label: "Al Dente" },
      { value: "soft", label: "Soft" },
      { value: "extra-sauce", label: "Extra Sauce" },
    ],
  },

  // Salads
  {
    id: "salad-1",
    categoryId: "salads",
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce with parmesan cheese, croutons, and caesar dressing",
    price: 9.99,
    emoji: "🥗",
    badge: "Vegetarian",
    customizations: [
      { value: "light-dressing", label: "Light Dressing" },
      { value: "extra-dressing", label: "Extra Dressing" },
      { value: "no-croutons", label: "No Croutons" },
    ],
  },
  {
    id: "salad-2",
    categoryId: "salads",
    name: "Greek Salad",
    description:
      "Fresh vegetables with feta cheese, olives, and greek dressing",
    price: 11.99,
    emoji: "🥗",
    badge: "Vegetarian",
    customizations: [
      { value: "light-dressing", label: "Light Dressing" },
      { value: "extra-dressing", label: "Extra Dressing" },
      { value: "no-olives", label: "No Olives" },
    ],
  },

  // Drinks
  {
    id: "drink-1",
    categoryId: "drinks",
    name: "Coca Cola",
    description: "Classic Coca Cola soft drink",
    price: 2.99,
    emoji: "🥤",
    customizations: [
      { value: "regular-ice", label: "Regular Ice" },
      { value: "light-ice", label: "Light Ice" },
      { value: "no-ice", label: "No Ice" },
      { value: "extra-ice", label: "Extra Ice" },
    ],
  },
  {
    id: "drink-2",
    categoryId: "drinks",
    name: "Lemonade",
    description: "Fresh squeezed lemonade",
    price: 3.99,
    emoji: "🥤",
    badge: "Vegetarian",
    customizations: [
      { value: "regular-ice", label: "Regular Ice" },
      { value: "light-ice", label: "Light Ice" },
      { value: "no-ice", label: "No Ice" },
      { value: "extra-ice", label: "Extra Ice" },
    ],
  },

  // Desserts
  {
    id: "dessert-1",
    categoryId: "desserts",
    name: "Chocolate Cake",
    description: "Rich chocolate cake with chocolate frosting",
    price: 6.99,
    emoji: "🍰",
    badge: "Vegetarian",
    customizations: [
      { value: "extra-frosting", label: "Extra Frosting" },
      { value: "no-frosting", label: "No Frosting" },
    ],
  },
  {
    id: "dessert-2",
    categoryId: "desserts",
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee and mascarpone",
    price: 7.99,
    emoji: "🍰",
    badge: "Vegetarian",
    customizations: [
      { value: "extra-coffee", label: "Extra Coffee" },
      { value: "light-coffee", label: "Light Coffee" },
    ],
  },
];

export const getFoodByCategory = (categoryId) => {
  return foodItems.filter((item) => item.categoryId === categoryId);
};

export const getFoodById = (id) => {
  return foodItems.find((item) => item.id === id);
};
