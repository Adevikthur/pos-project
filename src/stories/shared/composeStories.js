// Utility function to compose stories from shared variants
export const composeStory = (baseStory, variants = {}, overrides = {}) => {
  return {
    ...baseStory,
    args: {
      ...baseStory.args,
      ...variants,
      ...overrides,
    },
  };
};

// Compose multiple stories from a base story and multiple variants
export const composeStories = (baseStory, variantsMap) => {
  const stories = {};

  Object.entries(variantsMap).forEach(([name, variant]) => {
    stories[name] = composeStory(baseStory, variant);
  });

  return stories;
};

// Create a story with merged configurations
export const createStoryWithConfig = (baseStory, config, variant = {}) => {
  return composeStory(baseStory, variant, config);
};

// Create responsive stories for different viewports
export const createResponsiveStories = (baseStory, variantsMap) => {
  const stories = {};

  Object.entries(variantsMap).forEach(([name, variant]) => {
    stories[name] = composeStory(baseStory, variant);

    // Add mobile version
    stories[`${name}Mobile`] = composeStory(baseStory, variant, {
      ...variant,
      parameters: {
        viewport: {
          defaultViewport: "mobile1",
        },
      },
    });

    // Add desktop version
    stories[`${name}Desktop`] = composeStory(baseStory, variant, {
      ...variant,
      parameters: {
        viewport: {
          defaultViewport: "desktop",
        },
      },
    });
  });

  return stories;
};

// Create interactive stories with actions
export const createInteractiveStories = (
  baseStory,
  variantsMap,
  actions = {}
) => {
  const stories = {};

  Object.entries(variantsMap).forEach(([name, variant]) => {
    stories[name] = composeStory(baseStory, variant, {
      ...actions,
    });
  });

  return stories;
};
