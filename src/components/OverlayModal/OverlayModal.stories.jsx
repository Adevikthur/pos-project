import { useState } from 'react';
import OverlayModal from './OverlayModal';
import Button from '../Button/Button';

export default {
  title: 'Components/OverlayModal',
  component: OverlayModal,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onClose: { action: 'modal closed' },
  },
};

const mockFood = {
  id: '1',
  name: 'Margherita Pizza',
  description: 'Fresh mozzarella, tomato sauce, and basil on our signature crust. A classic Italian favorite that never disappoints.',
  price: 14.99,
  emoji: '🍕',
};

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ padding: '20px' }}>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <OverlayModal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
          food={mockFood}
        >
          <div style={{ padding: '20px 0' }}>
            <p>Modal content goes here...</p>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </OverlayModal>
      </div>
    );
  },
};

export const WithContent = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ padding: '20px' }}>
        <Button onClick={() => setIsOpen(true)}>Open Food Modal</Button>
        <OverlayModal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
          food={mockFood}
        >
          <div style={{ padding: '20px 0' }}>
            <h3>Customize Your Order</h3>
            <p>Select your preferences below:</p>
            <div style={{ marginTop: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <input type="checkbox" />
                <span>Extra Cheese (+$2.00)</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <input type="checkbox" />
                <span>Gluten Free Crust (+$3.00)</span>
              </label>
            </div>
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button onClick={() => setIsOpen(false)}>Add to Basket</Button>
            </div>
          </div>
        </OverlayModal>
      </div>
    );
  },
};

export const WithoutFood = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ padding: '20px' }}>
        <Button onClick={() => setIsOpen(true)}>Open Simple Modal</Button>
        <OverlayModal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
        >
          <div style={{ padding: '40px 20px', textAlign: 'center' }}>
            <h2>Simple Modal</h2>
            <p>This modal doesn't have food information.</p>
            <Button onClick={() => setIsOpen(false)} style={{ marginTop: '20px' }}>
              Close
            </Button>
          </div>
        </OverlayModal>
      </div>
    );
  },
};

export const Mobile = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ padding: '20px' }}>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <OverlayModal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
          food={mockFood}
        >
          <div style={{ padding: '20px 0' }}>
            <p>Mobile modal content...</p>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </OverlayModal>
      </div>
    );
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}; 