import { useState } from 'react';
import QuantitySelector from './QuantitySelector';

export default {
  title: 'Components/QuantitySelector',
  component: QuantitySelector,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onQuantityChange: { action: 'quantity changed' },
  },
};

export const Default = {
  render: () => {
    const [quantity, setQuantity] = useState(1);
    return (
      <QuantitySelector 
        quantity={quantity} 
        onQuantityChange={setQuantity}
      />
    );
  },
};

export const WithInitialValue = {
  render: () => {
    const [quantity, setQuantity] = useState(5);
    return (
      <QuantitySelector 
        quantity={quantity} 
        onQuantityChange={setQuantity}
      />
    );
  },
};

export const WithCustomLimits = {
  render: () => {
    const [quantity, setQuantity] = useState(3);
    return (
      <QuantitySelector 
        quantity={quantity} 
        min={2}
        max={10}
        onQuantityChange={setQuantity}
      />
    );
  },
};

export const Disabled = {
  args: {
    quantity: 1,
    disabled: true,
  },
};

export const AtMinimum = {
  args: {
    quantity: 1,
    min: 1,
  },
};

export const AtMaximum = {
  args: {
    quantity: 99,
    max: 99,
  },
};

export const Mobile = {
  render: () => {
    const [quantity, setQuantity] = useState(1);
    return (
      <QuantitySelector 
        quantity={quantity} 
        onQuantityChange={setQuantity}
      />
    );
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Desktop = {
  render: () => {
    const [quantity, setQuantity] = useState(1);
    return (
      <QuantitySelector 
        quantity={quantity} 
        onQuantityChange={setQuantity}
      />
    );
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}; 