import { useState } from 'react';
import CustomizationDropdown from './CustomizationDropdown';

export default {
  title: 'Components/CustomizationDropdown',
  component: CustomizationDropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onOptionSelect: { action: 'option selected' },
  },
};

const mockOptions = [
  { value: 'small', label: 'Small Size' },
  { value: 'medium', label: 'Medium Size' },
  { value: 'large', label: 'Large Size' },
  { value: 'extra-large', label: 'Extra Large Size' },
];

const pizzaOptions = [
  { value: 'thin', label: 'Thin Crust' },
  { value: 'thick', label: 'Thick Crust' },
  { value: 'stuffed', label: 'Stuffed Crust' },
  { value: 'gluten-free', label: 'Gluten Free Crust' },
];

const drinkOptions = [
  { value: 'regular', label: 'Regular Ice' },
  { value: 'light-ice', label: 'Light Ice' },
  { value: 'no-ice', label: 'No Ice' },
  { value: 'extra-ice', label: 'Extra Ice' },
];

export const Default = {
  args: {
    options: mockOptions,
    placeholder: 'Select size...',
  },
};

export const WithSelection = {
  render: () => {
    const [selected, setSelected] = useState(mockOptions[1]);
    return (
      <CustomizationDropdown
        options={mockOptions}
        selectedOption={selected}
        onOptionSelect={setSelected}
        placeholder="Select size..."
      />
    );
  },
};

export const PizzaCustomization = {
  args: {
    options: pizzaOptions,
    placeholder: 'Select crust type...',
  },
};

export const DrinkCustomization = {
  args: {
    options: drinkOptions,
    placeholder: 'Select ice preference...',
  },
};

export const Disabled = {
  args: {
    options: mockOptions,
    placeholder: 'Select size...',
    disabled: true,
  },
};

export const EmptyOptions = {
  args: {
    options: [],
    placeholder: 'No options available...',
  },
};

export const Mobile = {
  args: {
    options: mockOptions,
    placeholder: 'Select size...',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Desktop = {
  args: {
    options: mockOptions,
    placeholder: 'Select size...',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}; 