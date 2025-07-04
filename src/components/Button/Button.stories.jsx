import Button from './Button';
import { buttonVariants, buttonConfigs, buttonStates } from '../../stories/shared/buttonVariants';
import { composeStories, createResponsiveStories, createInteractiveStories } from '../../stories/shared/composeStories';

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

// Base story template
const baseStory = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

// Compose stories from shared variants
export const Primary = {
  args: buttonVariants.primary,
};

export const Secondary = {
  args: buttonVariants.secondary,
};

export const Small = {
  args: buttonVariants.small,
};

export const Large = {
  args: buttonVariants.large,
};

export const FullWidth = {
  args: buttonVariants.fullWidth,
  parameters: {
    layout: 'padded',
  },
};

export const Disabled = {
  args: buttonVariants.disabled,
};

// Compose all button variants using the utility
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button {...buttonVariants.primary}>Primary</Button>
      <Button {...buttonVariants.secondary}>Secondary</Button>
      <Button {...buttonVariants.small}>Small</Button>
      <Button {...buttonVariants.large}>Large</Button>
      <Button {...buttonVariants.disabled}>Disabled</Button>
    </div>
  ),
};

// Responsive stories
export const Mobile = {
  args: buttonVariants.mobile,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Desktop = {
  args: buttonVariants.desktop,
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

// Interactive stories with actions
export const InteractiveButtons = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button {...buttonVariants.primary} onClick={() => console.log('Primary clicked')}>
        Primary
      </Button>
      <Button {...buttonVariants.secondary} onClick={() => console.log('Secondary clicked')}>
        Secondary
      </Button>
      <Button {...buttonVariants.disabled} onClick={() => console.log('Disabled clicked')}>
        Disabled
      </Button>
    </div>
  ),
};

// Compose stories using the utility functions
export const ComposedVariants = {
  ...composeStories(baseStory, buttonVariants),
};

// Create responsive versions of all variants
export const ResponsiveVariants = {
  ...createResponsiveStories(baseStory, buttonVariants),
};

// Create interactive versions with actions
export const InteractiveVariants = {
  ...createInteractiveStories(baseStory, buttonVariants, {
    onClick: () => console.log('Button clicked'),
  }),
}; 