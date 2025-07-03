// Session storage utility for persisting user data

const STORAGE_KEYS = {
  BASKET_ITEMS: "pos_basket_items",
  DELIVERY_INFO: "pos_delivery_info",
  PAYMENT_METHOD: "pos_payment_method",
  SPECIAL_INSTRUCTIONS: "pos_special_instructions",
};

// Basket items management
export const saveBasketItems = (items) => {
  try {
    localStorage.setItem(STORAGE_KEYS.BASKET_ITEMS, JSON.stringify(items));
  } catch (error) {
    console.error("Error saving basket items to localStorage:", error);
  }
};

export const loadBasketItems = () => {
  try {
    const items = localStorage.getItem(STORAGE_KEYS.BASKET_ITEMS);
    return items ? JSON.parse(items) : [];
  } catch (error) {
    console.error("Error loading basket items from localStorage:", error);
    return [];
  }
};

export const clearBasketItems = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.BASKET_ITEMS);
  } catch (error) {
    console.error("Error clearing basket items from localStorage:", error);
  }
};

// Delivery info management
export const saveDeliveryInfo = (deliveryInfo) => {
  try {
    localStorage.setItem(
      STORAGE_KEYS.DELIVERY_INFO,
      JSON.stringify(deliveryInfo)
    );
  } catch (error) {
    console.error("Error saving delivery info to localStorage:", error);
  }
};

export const loadDeliveryInfo = () => {
  try {
    const deliveryInfo = localStorage.getItem(STORAGE_KEYS.DELIVERY_INFO);
    return deliveryInfo ? JSON.parse(deliveryInfo) : {};
  } catch (error) {
    console.error("Error loading delivery info from localStorage:", error);
    return {};
  }
};

export const clearDeliveryInfo = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.DELIVERY_INFO);
  } catch (error) {
    console.error("Error clearing delivery info from localStorage:", error);
  }
};

// Payment method management
export const savePaymentMethod = (paymentMethod) => {
  try {
    localStorage.setItem(STORAGE_KEYS.PAYMENT_METHOD, paymentMethod);
  } catch (error) {
    console.error("Error saving payment method to localStorage:", error);
  }
};

export const loadPaymentMethod = () => {
  try {
    return localStorage.getItem(STORAGE_KEYS.PAYMENT_METHOD) || "";
  } catch (error) {
    console.error("Error loading payment method from localStorage:", error);
    return "";
  }
};

export const clearPaymentMethod = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.PAYMENT_METHOD);
  } catch (error) {
    console.error("Error clearing payment method from localStorage:", error);
  }
};

// Special instructions management
export const saveSpecialInstructions = (instructions) => {
  try {
    localStorage.setItem(STORAGE_KEYS.SPECIAL_INSTRUCTIONS, instructions);
  } catch (error) {
    console.error("Error saving special instructions to localStorage:", error);
  }
};

export const loadSpecialInstructions = () => {
  try {
    return localStorage.getItem(STORAGE_KEYS.SPECIAL_INSTRUCTIONS) || "";
  } catch (error) {
    console.error(
      "Error loading special instructions from localStorage:",
      error
    );
    return "";
  }
};

export const clearSpecialInstructions = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.SPECIAL_INSTRUCTIONS);
  } catch (error) {
    console.error(
      "Error clearing special instructions from localStorage:",
      error
    );
  }
};

// Clear all session data (useful after successful order)
export const clearAllSessionData = () => {
  try {
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error("Error clearing all session data from localStorage:", error);
  }
};

// Load all session data at once
export const loadAllSessionData = () => {
  return {
    basketItems: loadBasketItems(),
    deliveryInfo: loadDeliveryInfo(),
    paymentMethod: loadPaymentMethod(),
    specialInstructions: loadSpecialInstructions(),
  };
};
