import ErrorCard from './ErrorCard';

export default {
  title: 'Components/ErrorCard',
  component: ErrorCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onRetry: { action: 'retry clicked' },
    onGoBack: { action: 'go back clicked' },
  },
};

export const Default = {
  args: {
    errorDetails: 'Phone number format: +1 (555) 123-4567',
  },
};

export const WithoutErrorDetails = {
  args: {},
};

export const CustomTitle = {
  args: {
    title: 'Payment Failed',
    message: 'We were unable to process your payment. Please check your card details and try again.',
    errorDetails: 'Error Code: PAY-001\nReason: Invalid card number',
  },
};

export const WithoutGoBackButton = {
  args: {
    errorDetails: 'Network timeout',
    showGoBackButton: false,
  },
};

export const CustomButtonText = {
  args: {
    title: 'Connection Error',
    message: 'Unable to connect to our servers. Please check your internet connection.',
    retryButtonText: 'Try Again',
    goBackButtonText: 'Return to Menu',
  },
};

export const Mobile = {
  args: {
    errorDetails: 'Phone number format: +1 (555) 123-4567',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Desktop = {
  args: {
    errorDetails: 'Phone number format: +1 (555) 123-4567',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}; 