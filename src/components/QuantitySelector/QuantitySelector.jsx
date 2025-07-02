import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Import SVG icons
import plusIcon from '../../assets/icons/plus.svg';
import minusIcon from '../../assets/icons/minus.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 8px;
  width: fit-content;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: white;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: #EC575C;
    color: white;
  }
  
  &:active:not(:disabled) {
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: 2px solid #EC575C;
    outline-offset: 2px;
  }
  
  img {
    width: 16px;
    height: 16px;
    filter: brightness(0) saturate(100%) invert(47%) sepia(8%) saturate(1234%) hue-rotate(202deg) brightness(91%) contrast(86%);
    transition: filter 0.2s ease;
  }
  
  &:hover:not(:disabled) img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
  }
  
  &:disabled img {
    opacity: 0.5;
  }
`;

const QuantityDisplay = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  min-width: 40px;
  text-align: center;
  user-select: none;
`;

const QuantitySelector = ({ 
  quantity = 1, 
  min = 1, 
  max = 99,
  onQuantityChange,
  disabled = false,
  ...props 
}) => {
  const handleIncrement = () => {
    if (!disabled && quantity < max && onQuantityChange) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (!disabled && quantity > min && onQuantityChange) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
      e.preventDefault();
      handleIncrement();
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
      e.preventDefault();
      handleDecrement();
    }
  };

  return (
    <Container 
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role="group"
      aria-label="Quantity selector"
      {...props}
    >
      <Button
        onClick={handleDecrement}
        disabled={disabled || quantity <= min}
        aria-label="Decrease quantity"
      >
        <img src={minusIcon} alt="Decrease quantity" />
      </Button>
      
      <QuantityDisplay aria-live="polite">
        {quantity}
      </QuantityDisplay>
      
      <Button
        onClick={handleIncrement}
        disabled={disabled || quantity >= max}
        aria-label="Increase quantity"
      >
        <img src={plusIcon} alt="Increase quantity" />
      </Button>
    </Container>
  );
};

QuantitySelector.propTypes = {
  quantity: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onQuantityChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default QuantitySelector; 