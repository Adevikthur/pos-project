import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Import icons
import creditCardIcon from '../../assets/icons/credit-card.svg';
import locationOutlineIcon from '../../assets/icons/location_outline.svg';
import clockIcon from '../../assets/icons/clock.svg';

const ModalOverlay = styled.div`
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
  padding: 20px;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
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

const ModalHeader = styled.div`
  padding: 24px 24px 0 24px;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
`;

const OrderNumberDisplay = styled.div`
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 16px;
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`;

const OrderInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #6b7280;
`;

const OrderInfoIcon = styled.img`
  width: 16px;
  height: 16px;
  filter: brightness(0) saturate(100%) invert(47%) sepia(8%) saturate(1234%) hue-rotate(202deg) brightness(91%) contrast(86%);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: #6b7280;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

const ModalBody = styled.div`
  padding: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #111827;
  margin-bottom: 4px;
`;

const ItemQuantity = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

const ItemPrice = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #e5e7eb;
  margin: 24px 0;
`;

const PricingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PricingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PricingLabel = styled.span`
  font-size: 16px;
  color: #374151;
`;

const PricingValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

const TotalRow = styled(PricingRow)`
  border-top: 1px solid #e5e7eb;
  padding-top: 16px;
  margin-top: 8px;
`;

const TotalLabel = styled(PricingLabel)`
  font-size: 18px;
  font-weight: 700;
  color: #374151;
`;

const TotalValue = styled(PricingValue)`
  font-size: 18px;
  font-weight: 700;
  color: #374151;
`;

const ReceiptModal = ({
  isOpen,
  onClose,
  orderNumber,
  items = [],
  subtotal = 0,
  tax = 0,
  deliveryFee = 0,
  total = 0,
  deliveryTime = 'Sat, Nov 13 ∙ 3:00 - 3:30',
  deliveryAddress = 'Deliver to front desk',
  paymentMethod = 'Credit Card',
  orderDate = new Date().toLocaleDateString(),
  ...props
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick} {...props}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Order Receipt</ModalTitle>
          
          {orderNumber && (
            <OrderNumberDisplay>
              Order #{orderNumber}
            </OrderNumberDisplay>
          )}
          
          <OrderInfo>
            <OrderInfoRow>
              <OrderInfoIcon src={clockIcon} alt="Order date" />
              <span>Order Date: {orderDate}</span>
            </OrderInfoRow>
            <OrderInfoRow>
              <OrderInfoIcon src={locationOutlineIcon} alt="Delivery" />
              <span>{deliveryAddress}</span>
            </OrderInfoRow>
            <OrderInfoRow>
              <OrderInfoIcon src={creditCardIcon} alt="Payment" />
              <span>Paid with {paymentMethod}</span>
            </OrderInfoRow>
          </OrderInfo>
          
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        
        <ModalBody>
          <SectionTitle>Order Items</SectionTitle>
          
          <ItemsList>
            {items.map((item) => (
              <ItemRow key={item.id}>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemQuantity>Qty: {item.quantity}</ItemQuantity>
                </ItemInfo>
                <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
              </ItemRow>
            ))}
          </ItemsList>
          
          <Divider />
          
          <PricingSection>
            <PricingRow>
              <PricingLabel>Subtotal</PricingLabel>
              <PricingValue>${subtotal.toFixed(2)}</PricingValue>
            </PricingRow>
            
            <PricingRow>
              <PricingLabel>Delivery</PricingLabel>
              <PricingValue>${deliveryFee.toFixed(2)}</PricingValue>
            </PricingRow>
            
            <PricingRow>
              <PricingLabel>Tax (VAT)</PricingLabel>
              <PricingValue>${tax.toFixed(2)}</PricingValue>
            </PricingRow>
            
            <TotalRow>
              <TotalLabel>Total</TotalLabel>
              <TotalValue>${total.toFixed(2)}</TotalValue>
            </TotalRow>
          </PricingSection>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

ReceiptModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  orderNumber: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
  subtotal: PropTypes.number,
  tax: PropTypes.number,
  deliveryFee: PropTypes.number,
  total: PropTypes.number,
  deliveryTime: PropTypes.string,
  deliveryAddress: PropTypes.string,
  paymentMethod: PropTypes.string,
  orderDate: PropTypes.string,
};

export default ReceiptModal; 