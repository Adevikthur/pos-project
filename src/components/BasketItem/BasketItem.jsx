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
  width: 60px;
  height: 60px;
  background-color: #f3f4f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 32px;
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
  color: #ef4444;
  border-color: #fecaca;
  
  &:hover:not(:disabled) {
    background-color: #ef4444;
    border-color: #ef4444;
    color: white;
  }
`;

const BasketItem = ({ 
  item, 
  onQuantityChange, 
  onRemove,
  ...props 
}) => {
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

  const totalPrice = item.price * item.quantity;

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
        {item.customization && (
          <ItemCustomization>{item.customization}</ItemCustomization>
        )}
        {item.glutenFree && (
          <ItemCustomization>🌾 Gluten Free</ItemCustomization>
        )}
        <ItemPrice>${totalPrice.toFixed(2)}</ItemPrice>
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
          🗑️
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
  }).isRequired,
  onQuantityChange: PropTypes.func,
  onRemove: PropTypes.func,
};

export default BasketItem; 