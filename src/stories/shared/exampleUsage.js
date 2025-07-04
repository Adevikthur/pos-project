// Example: How to use composable stories in your components
// This demonstrates the power of the pattern your boss mentioned

import { buttonVariants, buttonConfigs } from "./buttonVariants";
import { foodCardVariants, foodCardStates } from "./foodCardVariants";
import { basketItemVariants, basketItemStates } from "./basketItemVariants";
import { composeStories, createResponsiveStories } from "./composeStories";

// Example 1: Using shared variants in a page component
export const createMainMenuPage = () => {
  return {
    title: "Pages/MainMenu",
    render: () => (
      <div>
        {/* Using shared food card variants */}
        <div className="food-grid">
          <FoodCard food={foodCardVariants.pizza} />
          <FoodCard food={foodCardVariants.burger} />
          <FoodCard food={foodCardVariants.pasta} />
        </div>

        {/* Using shared button variants */}
        <div className="actions">
          <Button {...buttonVariants.primary}>Add to Cart</Button>
          <Button {...buttonVariants.secondary}>View Details</Button>
        </div>
      </div>
    ),
  };
};

// Example 2: Using shared variants in a basket page
export const createBasketPage = () => {
  return {
    title: "Pages/Basket",
    render: () => (
      <div>
        {/* Using shared basket item variants */}
        <div className="basket-items">
          <BasketItem item={basketItemVariants.pizza} />
          <BasketItem item={basketItemVariants.burger} />
          <BasketItem item={basketItemVariants.pasta} />
        </div>

        {/* Using shared button variants */}
        <div className="checkout-actions">
          <Button {...buttonVariants.primary}>Proceed to Checkout</Button>
          <Button {...buttonVariants.secondary}>Continue Shopping</Button>
        </div>
      </div>
    ),
  };
};

// Example 3: Creating a story that composes multiple shared variants
export const createOrderSummaryStory = () => {
  return {
    title: "Components/OrderSummary",
    render: () => (
      <div>
        <h2>Order Summary</h2>

        {/* Using shared basket item variants */}
        <div className="order-items">
          <BasketItem
            item={{
              ...basketItemVariants.pizza,
              ...basketItemStates.multiple, // Quantity: 3
            }}
          />
          <BasketItem
            item={{
              ...basketItemVariants.burger,
              ...basketItemStates.withCustomizations, // With customizations
            }}
          />
        </div>

        {/* Using shared button variants */}
        <div className="order-actions">
          <Button {...buttonVariants.primary}>Confirm Order</Button>
          <Button {...buttonVariants.secondary}>Edit Order</Button>
        </div>
      </div>
    ),
  };
};

// Example 4: Creating responsive stories using shared variants
export const createResponsiveMainMenu = () => {
  const baseStory = {
    render: () => (
      <div>
        <FoodCard food={foodCardVariants.pizza} />
        <Button {...buttonVariants.primary}>Add to Cart</Button>
      </div>
    ),
  };

  return {
    title: "Pages/MainMenu/Responsive",
    ...createResponsiveStories(baseStory, {
      mobile: { compact: true },
      desktop: { compact: false },
    }),
  };
};

// Example 5: Creating interactive stories with shared variants
export const createInteractiveMainMenu = () => {
  return {
    title: "Pages/MainMenu/Interactive",
    render: () => (
      <div>
        <FoodCard
          food={foodCardVariants.pizza}
          onClick={() => console.log("Pizza added to cart")}
        />
        <Button
          {...buttonVariants.primary}
          onClick={() => console.log("Checkout clicked")}
        >
          Checkout
        </Button>
      </div>
    ),
  };
};

// Example 6: Creating state-based stories using shared variants
export const createStateBasedStories = () => {
  return {
    title: "Components/FoodCard/States",
    stories: {
      // Using shared food card variants with different states
      "Pizza - Popular": {
        render: () => (
          <FoodCard
            food={{
              ...foodCardVariants.pizza,
              ...foodCardStates.popular,
            }}
          />
        ),
      },
      "Burger - New": {
        render: () => (
          <FoodCard
            food={{
              ...foodCardVariants.burger,
              ...foodCardStates.new,
            }}
          />
        ),
      },
      "Salad - Discounted": {
        render: () => (
          <FoodCard
            food={{
              ...foodCardVariants.salad,
              ...foodCardStates.discounted,
            }}
          />
        ),
      },
    },
  };
};

// Example 7: Creating a story that shows the power of composition
// If you need to change the "primary" button style, you only change it in buttonVariants.primary
// and it will update everywhere it's used
export const createComposableExample = () => {
  return {
    title: "Examples/ComposablePattern",
    render: () => (
      <div style={{ padding: "20px" }}>
        <h3>This demonstrates the power of composable stories:</h3>
        <p>
          If you change buttonVariants.primary, it updates everywhere below:
        </p>

        <div style={{ margin: "20px 0" }}>
          <h4>Main Menu Page:</h4>
          <Button {...buttonVariants.primary}>Add to Cart</Button>
        </div>

        <div style={{ margin: "20px 0" }}>
          <h4>Basket Page:</h4>
          <Button {...buttonVariants.primary}>Proceed to Checkout</Button>
        </div>

        <div style={{ margin: "20px 0" }}>
          <h4>Order Summary:</h4>
          <Button {...buttonVariants.primary}>Confirm Order</Button>
        </div>

        <p style={{ marginTop: "20px", color: "#666" }}>
          All buttons above use the same buttonVariants.primary configuration.
          Change it once, and it updates everywhere!
        </p>
      </div>
    ),
  };
};
