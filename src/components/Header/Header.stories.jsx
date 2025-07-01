import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onBasketClick: { action: 'basket clicked' },
    onLogoClick: { action: 'logo clicked' },
  },
};

export const Default = {
  args: {
    basketCount: 0,
  },
};

export const WithBasketItems = {
  args: {
    basketCount: 3,
  },
};

export const ManyBasketItems = {
  args: {
    basketCount: 12,
  },
};

export const Mobile = {
  args: {
    basketCount: 2,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet = {
  args: {
    basketCount: 5,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop = {
  args: {
    basketCount: 8,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}; 