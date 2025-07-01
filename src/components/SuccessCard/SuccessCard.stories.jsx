import SuccessCard from './SuccessCard';

export default {
  title: 'Components/SuccessCard',
  component: SuccessCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onViewReceipt: { action: 'view receipt clicked' },
    onContinueShopping: { action: 'continue shopping clicked' },
  },
};

export const Default = {
  args: {
    orderNumber: 'ORD-2024-001234',
  },
};

export const WithoutOrderNumber = {
  args: {},
};

export const CustomTitle = {
  args: {
    title: 'Payment Successful!',
    message: 'Your payment has been processed successfully. Your order is now confirmed.',
    orderNumber: 'PAY-2024-005678',
  },
};

export const WithoutContinueButton = {
  args: {
    orderNumber: 'ORD-2024-009876',
    showContinueButton: false,
  },
};

export const Mobile = {
  args: {
    orderNumber: 'ORD-2024-001234',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Desktop = {
  args: {
    orderNumber: 'ORD-2024-001234',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}; 