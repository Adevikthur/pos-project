import { useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 0;
  
  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const ModalContent = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: slideIn 0.3s ease;
  
  @media (min-width: 768px) {
    border-radius: 16px;
    max-width: 600px;
    max-height: 90vh;
    width: 100%;
    height: auto;
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: white;
  border: 1px solid #e5e7eb;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  
  &:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
    transform: scale(1.05);
  }
  
  &:focus {
    outline: 2px solid #EC575C;
    outline-offset: 2px;
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: #6b7280;
    
    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;

const ModalScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FoodImageContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f3f4f6;
  overflow: hidden;
  position: relative;
  
  @media (min-width: 768px) {
    height: 240px;
    border-radius: 12px 12px 0 0;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FoodInfoContainer = styled.div`
  padding: 20px;
  
  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const FoodTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
`;

const FoodDescription = styled.p`
  font-size: 16px;
  color: #6b7280;
  margin: 0 0 16px 0;
  line-height: 1.5;
`;

const FoodPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #EC575C;
  margin-bottom: 24px;
`;

const AddToBasketContainer = styled.div`
  padding: 16px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e5e7eb;
  background-color: white;
  margin-top: auto;
  
  @media (min-width: 768px) {
    padding: 12px 120px;
    border-radius: 0 0 12px 12px;
  }
`;

const AddToBasketButton = styled.button`
  width: 100%;
  padding: 16px 24px;
  background-color: #EC575C;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #d1454a;
  }
  
  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const ButtonLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ButtonRight = styled.div`
  font-weight: 700;
`;

const OverlayModal = ({ 
  isOpen, 
  onClose, 
  food, 
  children,
  onAddToBasket,
  quantity = 1,
  ...props 
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick} {...props}>
      <ModalContent>
        <CloseButton 
          onClick={onClose}
          aria-label="Close modal"
          tabIndex={0}
        >
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </CloseButton>
        
        <ModalScrollContainer>
          {food && (
            <>
              <FoodImageContainer>
                {food.image ? (
                  <img src={food.image} alt={food.name} />
                ) : (
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    height: '100%',
                    fontSize: '64px'
                  }}>
                    {food.emoji || '🍕'}
                  </div>
                )}
              </FoodImageContainer>
              
              <FoodInfoContainer>
                <FoodTitle>{food.name}</FoodTitle>
                <FoodDescription>{food.description}</FoodDescription>
                <FoodPrice>${food.price.toFixed(2)}</FoodPrice>
                
                {children}
              </FoodInfoContainer>
            </>
          )}
        </ModalScrollContainer>
        
        <AddToBasketContainer>
          <AddToBasketButton onClick={onAddToBasket}>
            <ButtonLeft>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              <span>Add to Basket</span>
            </ButtonLeft>
            <ButtonRight>
              ${food ? (food.price * quantity).toFixed(2) : '0.00'}
            </ButtonRight>
          </AddToBasketButton>
        </AddToBasketContainer>
      </ModalContent>
    </Overlay>
  );
};

OverlayModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  food: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    emoji: PropTypes.string,
  }),
  children: PropTypes.node,
  onAddToBasket: PropTypes.func,
  quantity: PropTypes.number,
};

export default OverlayModal; 