import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
  },
};

export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Small = {
  args: {
    children: 'Small Button',
    size: 'small',
  },
};

export const Large = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

export const FullWidth = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Disabled = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="large">Large</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  ),
};

export const Mobile = {
  args: {
    children: 'Mobile Button',
    fullWidth: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Desktop = {
  args: {
    children: 'Desktop Button',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}; 