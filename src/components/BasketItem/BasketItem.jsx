import { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: white;
  
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const ItemImage = styled.div`
  width: 64px;
  height: 64px;
  background-color: #f3f4f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ItemName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
  line-height: 1.3;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ItemCustomization = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const ItemPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #EC575C;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

const QuantityDisplay = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  min-width: 30px;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 18px;
    min-width: 40px;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid #e5e7eb;
  background-color: white;
  border-radius: 6px;
  font-size: 16px;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: #EC575C;
    border-color: #EC575C;
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
  
  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }
`;

const DeleteButton = styled(ActionButton)`
  color: grey;
  border: none;
  background-color: #F3F5F5;
  padding: 8px;
  
  &:hover:not(:disabled) {
    background-color: #ef4444;
    border-color: #ef4444;
    color: white;
  }
  
  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`;

const SpecialInstructionsContainer = styled.div`
  padding: 12px;
  border-top: 1px solid #e5e7eb;
  background-color: #F3F5F5;
  border-radius: 8px;
`;

const InstructionsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px 0;
`;

const InstructionsTitle = styled.span`
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
`;

const ChevronIcon = styled.img`
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  filter: brightness(0) saturate(100%) invert(47%) sepia(8%) saturate(1234%) hue-rotate(202deg) brightness(91%) contrast(86%);
`;

const InstructionsContent = styled.div`
  font-size: 14px;
  color: #374151;
  line-height: 1.4;
  padding: 8px 0;
`;

const BasketItem = ({ 
  item, 
  onQuantityChange, 
  onRemove,
  ...props 
}) => {
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

  const handleIncrement = () => {
    if (onQuantityChange) {
      onQuantityChange(item.id, item.quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (onQuantityChange && item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(item.id);
    }
  };

  const handleToggleInstructions = () => {
    setIsInstructionsOpen(!isInstructionsOpen);
  };

  const totalPrice = item.price * item.quantity;
  
  // Check if item has special instructions
  const hasSpecialInstructions = item.customization || item.glutenFree || item.specialInstructions;

  return (
    <ItemContainer {...props}>
      <ItemImage>
        {item.image ? (
          <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
        ) : (
          <span>{item.emoji || '🍕'}</span>
        )}
      </ItemImage>
      
      <ItemContent>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>${totalPrice.toFixed(2)}</ItemPrice>
        
        {hasSpecialInstructions && (
          <SpecialInstructionsContainer>
            <InstructionsHeader onClick={handleToggleInstructions}>
              <InstructionsTitle>Special Instructions</InstructionsTitle>
              <ChevronIcon 
                isOpen={isInstructionsOpen} 
                src="/src/assets/icons/chevron_big_down.svg" 
                alt="Toggle instructions"
              />
            </InstructionsHeader>
            
            {isInstructionsOpen && (
              <InstructionsContent>
                {item.customization && (
                  <div>Customization: {item.customization}</div>
                )}
               
                {item.specialInstructions && (
                  <div>{item.specialInstructions}</div>
                )}
              </InstructionsContent>
            )}
          </SpecialInstructionsContainer>
        )}
      </ItemContent>
      
      <ItemActions>
        <ActionButton
          onClick={handleDecrement}
          disabled={item.quantity <= 1}
          aria-label="Decrease quantity"
        >
          -
        </ActionButton>
        
        <QuantityDisplay aria-live="polite">
          {item.quantity}
        </QuantityDisplay>
        
        <ActionButton
          onClick={handleIncrement}
          aria-label="Increase quantity"
        >
          +
        </ActionButton>
        
        <DeleteButton
          onClick={handleRemove}
          aria-label="Remove item"
        >
          <svg viewBox="0 0 24 24">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
          </svg>
        </DeleteButton>
      </ItemActions>
    </ItemContainer>
  );
};

BasketItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string,
    emoji: PropTypes.string,
    customization: PropTypes.string,
    glutenFree: PropTypes.bool,
    specialInstructions: PropTypes.string,
  }).isRequired,
  onQuantityChange: PropTypes.func,
  onRemove: PropTypes.func,
};

export default BasketItem; 