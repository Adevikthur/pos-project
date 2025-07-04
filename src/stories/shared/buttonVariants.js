// Shared button variants that can be composed and reused
// These match the actual Button component props from src/components/Button/Button.jsx
export const buttonVariants = {
  primary: {
    variant: "primary",
    children: "Primary Button",
  },
  secondary: {
    variant: "secondary",
    children: "Secondary Button",
  },
  small: {
    size: "small",
    children: "Small Button",
  },
  large: {
    size: "large",
    children: "Large Button",
  },
  fullWidth: {
    fullWidth: true,
    children: "Full Width Button",
  },
  disabled: {
    disabled: true,
    children: "Disabled Button",
  },
  mobile: {
    fullWidth: true,
    children: "Mobile Button",
  },
  desktop: {
    children: "Desktop Button",
  },
};

// Common button configurations
export const buttonConfigs = {
  default: {
    variant: "primary",
    size: "medium",
  },
  mobile: {
    fullWidth: true,
    size: "medium",
  },
  compact: {
    size: "small",
  },
  prominent: {
    size: "large",
    variant: "primary",
  },
};

// Button states for different contexts
export const buttonStates = {
  loading: {
    disabled: true,
    children: "Loading...",
  },
  success: {
    variant: "primary",
    children: "Success",
  },
  error: {
    variant: "secondary",
    children: "Error",
  },
  warning: {
    variant: "secondary",
    children: "Warning",
  },
};
