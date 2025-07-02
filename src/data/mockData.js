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
      { value: "thin", label: "Thin Crust", price: 0 },
      { value: "thick", label: "Thick Crust", price: 0 },
      { value: "stuffed", label: "Stuffed Crust", price: 2.99 },
      { value: "gluten-free", label: "Gluten Free Crust", price: 3.99 },
    ],
    image: "/src/assets/images/pizza-margherita.png",
  },
  {
    id: "pizza-2",
    categoryId: "pizza",
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with melted cheese and tomato sauce",
    price: 16.99,
    emoji: "🍕",
    customizations: [
      { value: "thin", label: "Thin Crust", price: 0 },
      { value: "thick", label: "Thick Crust", price: 0 },
      { value: "stuffed", label: "Stuffed Crust", price: 2.99 },
      { value: "gluten-free", label: "Gluten Free Crust", price: 3.99 },
    ],
    image: "/src/assets/images/pizza.png",
  },
  {
    id: "pizza-3",
    categoryId: "pizza",
    name: "Supreme Pizza",
    description:
      "Loaded with pepperoni, sausage, mushrooms, bell peppers, and onions",
    price: 19.99,
    emoji: "🍕",
    image: "/src/assets/images/pizza.png",
    customizations: [
      { value: "thin", label: "Thin Crust", price: 0 },
      { value: "thick", label: "Thick Crust", price: 0 },
      { value: "stuffed", label: "Stuffed Crust", price: 2.99 },
      { value: "gluten-free", label: "Gluten Free Crust", price: 3.99 },
    ],
  },
  {
    id: "pizza-4",
    categoryId: "pizza",
    name: "BBQ Chicken Pizza",
    description: "BBQ sauce, grilled chicken, red onions, and cilantro",
    price: 18.99,
    emoji: "🍕",
    image: "/src/assets/images/pizza.png",
    customizations: [
      { value: "thin", label: "Thin Crust", price: 0 },
      { value: "thick", label: "Thick Crust", price: 0 },
      { value: "stuffed", label: "Stuffed Crust", price: 2.99 },
      { value: "gluten-free", label: "Gluten Free Crust", price: 3.99 },
    ],
  },
  {
    id: "pizza-5",
    categoryId: "pizza",
    name: "Hawaiian Pizza",
    description: "Ham, pineapple, and mozzarella cheese",
    price: 17.99,
    emoji: "🍕",
    image: "/src/assets/images/pizza.png",
    customizations: [
      { value: "thin", label: "Thin Crust", price: 0 },
      { value: "thick", label: "Thick Crust", price: 0 },
      { value: "stuffed", label: "Stuffed Crust", price: 2.99 },
      { value: "gluten-free", label: "Gluten Free Crust", price: 3.99 },
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
    image: "/src/assets/images/burger-classic.png",
  },
  {
    id: "burger-2",
    categoryId: "burgers",
    name: "Bacon Deluxe Burger",
    description:
      "Beef patty with crispy bacon, cheddar cheese, and caramelized onions",
    price: 15.99,
    emoji: "🍔",
    image: "/src/assets/images/burger-chicken.png",
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
  {
    id: "burger-4",
    categoryId: "burgers",
    name: "Mushroom Swiss Burger",
    description: "Beef patty with sautéed mushrooms and Swiss cheese",
    price: 14.99,
    emoji: "🍔",
    customizations: [
      { value: "rare", label: "Rare" },
      { value: "medium-rare", label: "Medium Rare" },
      { value: "medium", label: "Medium" },
      { value: "well-done", label: "Well Done" },
    ],
  },
  {
    id: "burger-5",
    categoryId: "burgers",
    name: "Double Stack Burger",
    description: "Two beef patties with double cheese and all the fixings",
    price: 18.99,
    emoji: "🍔",
    customizations: [
      { value: "rare", label: "Rare" },
      { value: "medium-rare", label: "Medium Rare" },
      { value: "medium", label: "Medium" },
      { value: "well-done", label: "Well Done" },
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
    image: "/src/assets/images/noodles-ramen.png",
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
    image: "/src/assets/images/noodles-chowmein.png",
    customizations: [
      { value: "al-dente", label: "Al Dente" },
      { value: "soft", label: "Soft" },
      { value: "extra-sauce", label: "Extra Sauce" },
    ],
  },
  {
    id: "pasta-3",
    categoryId: "pasta",
    name: "Penne Arrabbiata",
    description: "Spicy tomato sauce with garlic and red chili peppers",
    price: 14.99,
    emoji: "🍝",
    badge: "Vegetarian",
    customizations: [
      { value: "al-dente", label: "Al Dente" },
      { value: "soft", label: "Soft" },
      { value: "extra-sauce", label: "Extra Sauce" },
    ],
  },
  {
    id: "pasta-4",
    categoryId: "pasta",
    name: "Linguine with Clams",
    description: "Fresh clams in white wine sauce with garlic and parsley",
    price: 18.99,
    emoji: "🍝",
    customizations: [
      { value: "al-dente", label: "Al Dente" },
      { value: "soft", label: "Soft" },
      { value: "extra-sauce", label: "Extra Sauce" },
    ],
  },
  {
    id: "pasta-5",
    categoryId: "pasta",
    name: "Lasagna Bolognese",
    description: "Layers of pasta with rich meat sauce and melted cheese",
    price: 17.99,
    emoji: "🍝",
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
  {
    id: "salad-3",
    categoryId: "salads",
    name: "Cobb Salad",
    description:
      "Mixed greens with chicken, bacon, eggs, avocado, and blue cheese",
    price: 13.99,
    emoji: "🥗",
    customizations: [
      { value: "light-dressing", label: "Light Dressing" },
      { value: "extra-dressing", label: "Extra Dressing" },
      { value: "no-bacon", label: "No Bacon" },
    ],
  },
  {
    id: "salad-4",
    categoryId: "salads",
    name: "Asian Noodle Salad",
    description: "Rice noodles with vegetables, peanuts, and sesame dressing",
    price: 12.99,
    emoji: "🥗",
    badge: "Vegetarian",
    customizations: [
      { value: "light-dressing", label: "Light Dressing" },
      { value: "extra-dressing", label: "Extra Dressing" },
      { value: "no-peanuts", label: "No Peanuts" },
    ],
  },
  {
    id: "salad-5",
    categoryId: "salads",
    name: "Mediterranean Salad",
    description: "Mixed greens with tomatoes, cucumbers, olives, and feta",
    price: 10.99,
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
      { value: "regular", label: "Regular" },
      { value: "diet", label: "Diet" },
      { value: "zero", label: "Zero Sugar" },
    ],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
  },
  {
    id: "drink-2",
    categoryId: "drinks",
    name: "Fresh Lemonade",
    description: "Homemade lemonade with fresh lemons and mint",
    price: 3.99,
    emoji: "🥤",
    badge: "Vegetarian",
    customizations: [
      { value: "regular", label: "Regular" },
      { value: "strawberry", label: "Strawberry" },
      { value: "mint", label: "Extra Mint" },
    ],
  },
  {
    id: "drink-3",
    categoryId: "drinks",
    name: "Iced Coffee",
    description: "Cold brewed coffee with cream and sugar",
    price: 4.99,
    emoji: "🥤",
    customizations: [
      { value: "regular", label: "Regular" },
      { value: "vanilla", label: "Vanilla" },
      { value: "caramel", label: "Caramel" },
    ],
  },
  {
    id: "drink-4",
    categoryId: "drinks",
    name: "Smoothie Bowl",
    description: "Acai berry smoothie with granola and fresh fruits",
    price: 8.99,
    emoji: "🥤",
    badge: "Vegetarian",
    customizations: [
      { value: "acai", label: "Acai" },
      { value: "strawberry", label: "Strawberry" },
      { value: "mango", label: "Mango" },
    ],
  },
  {
    id: "drink-5",
    categoryId: "drinks",
    name: "Sparkling Water",
    description: "Premium sparkling water with natural flavors",
    price: 2.49,
    emoji: "🥤",
    badge: "Vegetarian",
    customizations: [
      { value: "lime", label: "Lime" },
      { value: "lemon", label: "Lemon" },
      { value: "plain", label: "Plain" },
    ],
  },

  // Desserts
  {
    id: "dessert-1",
    categoryId: "desserts",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    price: 8.99,
    emoji: "🍰",
    badge: "Vegetarian",
    customizations: [
      { value: "vanilla-ice-cream", label: "Vanilla Ice Cream" },
      { value: "chocolate-ice-cream", label: "Chocolate Ice Cream" },
      { value: "strawberry-ice-cream", label: "Strawberry Ice Cream" },
    ],
  },
  {
    id: "dessert-2",
    categoryId: "desserts",
    name: "New York Cheesecake",
    description: "Creamy cheesecake with berry compote",
    price: 7.99,
    emoji: "🍰",
    badge: "Vegetarian",
    customizations: [
      { value: "strawberry", label: "Strawberry" },
      { value: "blueberry", label: "Blueberry" },
      { value: "plain", label: "Plain" },
    ],
  },
  {
    id: "dessert-3",
    categoryId: "desserts",
    name: "Tiramisu",
    description:
      "Italian dessert with coffee-soaked ladyfingers and mascarpone",
    price: 9.99,
    emoji: "🍰",
    badge: "Vegetarian",
    customizations: [
      { value: "regular", label: "Regular" },
      { value: "extra-coffee", label: "Extra Coffee" },
      { value: "light-coffee", label: "Light Coffee" },
    ],
  },
  {
    id: "dessert-4",
    categoryId: "desserts",
    name: "Apple Pie",
    description: "Warm apple pie with cinnamon and vanilla ice cream",
    price: 6.99,
    emoji: "🍰",
    badge: "Vegetarian",
    customizations: [
      { value: "vanilla-ice-cream", label: "Vanilla Ice Cream" },
      { value: "caramel-sauce", label: "Caramel Sauce" },
      { value: "plain", label: "Plain" },
    ],
  },
  {
    id: "dessert-5",
    categoryId: "desserts",
    name: "Ice Cream Sundae",
    description: "Three scoops of ice cream with toppings and whipped cream",
    price: 7.99,
    emoji: "🍰",
    badge: "Vegetarian",
    customizations: [
      { value: "vanilla", label: "Vanilla" },
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
    ],
  },
];

export const getFoodByCategory = (categoryId) => {
  return foodItems.filter((item) => item.categoryId === categoryId);
};

export const getFoodById = (id) => {
  return foodItems.find((item) => item.id === id);
};
