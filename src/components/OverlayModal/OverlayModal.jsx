import { useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  
  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  animation: slideIn 0.3s ease;
  
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
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
    width: 16px;
    height: 16px;
    fill: #6b7280;
  }
`;

const ModalScrollContainer = styled.div`
  max-height: 90vh;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ModalHeader = styled.div`
  padding: 24px 24px 0 24px;
`;

const FoodImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f3f4f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    height: 180px;
  }
`;

const FoodTitle = styled.h2`
  font-size: 24px;
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
  font-size: 20px;
  font-weight: 700;
  color: #EC575C;
  margin-bottom: 24px;
`;

const ModalBody = styled.div`
  padding: 0 24px 24px 24px;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 12px 0;
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 12px 0;
  
  &:hover {
    color: #EC575C;
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #EC575C;
  cursor: pointer;
`;

const CheckboxText = styled.span`
  font-size: 16px;
  color: #374151;
`;

const OverlayModal = ({ 
  isOpen, 
  onClose, 
  food, 
  children,
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
        
        {food && (
          <ModalHeader>
            <FoodImage>
              {food.image ? (
                <img src={food.image} alt={food.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
              ) : (
                <span>{food.emoji || '🍕'}</span>
              )}
            </FoodImage>
            <FoodTitle>{food.name}</FoodTitle>
            <FoodDescription>{food.description}</FoodDescription>
            <FoodPrice>${food.price.toFixed(2)}</FoodPrice>
          </ModalHeader>
        )}
        
        <ModalScrollContainer>
          <ModalBody>
            {children}
          </ModalBody>
        </ModalScrollContainer>
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
};

export default OverlayModal; 