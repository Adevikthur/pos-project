# POS System - React + Emotion

A modern, responsive Point of Sale (POS) system built with React, Emotion (CSS-in-JS), and Storybook. This system provides a complete ordering flow from menu selection to order completion.

## 🚀 Features

### Core Functionality

- **Main Menu Page**: Browse food categories and items with card-based layout
- **Food Selection Overlay**: Modal for customizing orders with quantity, customization options, and dietary preferences
- **Basket Management**: Add, remove, and modify items with real-time quantity updates
- **Special Instructions**: Collapsible text area for order notes and dietary requirements
- **Delivery Information**: Complete form for contact and delivery details
- **Payment Methods**: Multiple payment options (Card, Cash, Digital Wallet)
- **Order Summary**: Real-time calculation of subtotal, tax, and total
- **Success/Error Pages**: User feedback for order completion or issues

### Technical Features

- **Mobile-First Responsive Design**: Optimized for all screen sizes
- **Accessibility**: Full keyboard navigation and screen reader support
- **Component Library**: Reusable components with Storybook documentation
- **Emotion Styled Components**: CSS-in-JS with no external CSS files
- **Modern UI/UX**: Clean, intuitive interface with smooth animations

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Emotion** - CSS-in-JS styling
- **Storybook** - Component documentation and testing
- **Vite** - Fast build tool and development server
- **PropTypes** - Runtime type checking

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button/          # Button component with variants
│   ├── Header/          # Navigation header with basket
│   ├── Footer/          # Site footer
│   ├── FoodCard/        # Food item display card
│   ├── OverlayModal/    # Modal overlay component
│   ├── QuantitySelector/# Quantity increment/decrement
│   ├── CustomizationDropdown/# Food customization options
│   ├── BasketItem/      # Individual basket item
│   ├── OrderSummary/    # Order totals and checkout
│   ├── SuccessCard/     # Success page component
│   └── ErrorCard/       # Error page component
├── pages/               # Main application pages
│   ├── MainMenu/        # Food category and item selection
│   ├── Basket/          # Shopping basket management
│   ├── DeliveryInfo/    # Delivery and payment form
│   ├── Success/         # Order success page
│   └── Error/           # Error handling page
├── data/                # Mock data and utilities
│   └── mockData.js      # Food items and categories
└── App.jsx              # Main application component
```

## 🎨 Design System

### Brand Colors

- **Primary**: `#EC575C` (Coral Red)
- **Background**: `#f9fafb` (Light Gray)
- **Text**: `#111827` (Dark Gray)
- **Borders**: `#e5e7eb` (Medium Gray)

### Typography

- **Font Family**: System fonts (San Francisco, Segoe UI, etc.)
- **Font Sizes**: Responsive scale from 14px to 36px
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing

- **Base Unit**: 4px
- **Common Spacings**: 8px, 16px, 24px, 32px, 48px

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pos-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open Storybook** (in a new terminal)
   ```bash
   npm run storybook
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile**: < 768px - Single column layout, stacked components
- **Tablet**: 768px - 1024px - Two column layout, improved spacing
- **Desktop**: > 1024px - Multi-column layout, sticky elements

## 🧩 Component Library

Each component includes:

- **Storybook Stories**: Documentation and testing
- **PropTypes**: Type checking and documentation
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels, keyboard navigation
- **Emotion Styling**: CSS-in-JS with no external CSS

### Key Components

#### Button

- Variants: `primary`, `secondary`
- Sizes: `small`, `medium`, `large`
- States: `disabled`, `loading`

#### FoodCard

- Displays food items with image, name, description, price
- Badge support for dietary preferences
- Hover effects and accessibility

#### OverlayModal

- Food selection modal with customization options
- Quantity selector and dietary preferences
- Keyboard navigation and escape key support

#### BasketItem

- Individual item in shopping basket
- Quantity controls and remove functionality
- Displays customizations and dietary notes

## 🔄 Application Flow

1. **Main Menu** → Browse food categories and items
2. **Food Selection** → Choose quantity, customization, dietary preferences
3. **Basket** → Review items, add special instructions
4. **Delivery Info** → Enter contact and delivery details, select payment
5. **Success/Error** → Order confirmation or error handling

## 🎯 Key Features

### Food Categories

- Pizza, Burgers, Pasta, Salads, Drinks, Desserts
- Each category has multiple items with customizations

### Customization Options

- Size variations (Small, Medium, Large)
- Cooking preferences (Rare, Medium, Well Done)
- Dietary options (Gluten Free, Vegetarian)
- Special requests (Extra Cheese, Light Dressing)

### Payment Methods

- Credit/Debit Card
- Cash on Delivery
- Digital Wallet (Apple Pay, Google Pay, PayPal)

### Order Management

- Real-time quantity updates
- Special instructions
- Order summary with tax calculation
- Order number generation

## 🧪 Testing with Storybook

Storybook provides:

- **Component Documentation**: Props, usage examples
- **Visual Testing**: Component states and variations
- **Responsive Testing**: Different viewport sizes
- **Accessibility Testing**: ARIA compliance

### Running Stories

```bash
npm run storybook
```

Visit `http://localhost:6006` to view the component library.

## 🎨 Customization

### Adding New Food Items

Edit `src/data/mockData.js` to add new categories or items:

```javascript
{
  id: 'new-item',
  categoryId: 'pizza',
  name: 'New Pizza',
  description: 'Description here',
  price: 15.99,
  emoji: '🍕',
  customizations: [
    { value: 'option1', label: 'Option 1' }
  ]
}
```

### Styling Changes

All styles use Emotion styled components. Modify the styled components in each component file to change appearance.

### Brand Colors

Update the primary color `#EC575C` throughout the application for brand consistency.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Static Hosting

The built files in `dist/` can be deployed to:

- Netlify
- Vercel
- GitHub Pages
- AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add/update Storybook stories
5. Test responsiveness and accessibility
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:

1. Check the Storybook documentation
2. Review component PropTypes
3. Test in different viewport sizes
4. Verify accessibility with keyboard navigation

---

**Built with ❤️ using React, Emotion, and Storybook**
