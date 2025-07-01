import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {};

export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}; 