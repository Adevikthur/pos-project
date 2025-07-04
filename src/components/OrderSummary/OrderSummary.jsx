import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Import SVG icons
import checkOutlineShoppingBagIcon from '../../assets/icons/check-outline-shopping-bag.svg';
import clockIcon from '../../assets/icons/clock.svg';
import locationOutlineIcon from '../../assets/icons/location_outline.svg';
import creditCardIcon from '../../assets/icons/credit-card.svg';

const SummaryContainer = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  max-width: 100%;
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    gap: 24px;
    padding: 32px;
    max-width: 440px;
  }
`;

const SummaryTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const DeliveryInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 1023px) {
    display: none;
  }
`;

const DeliveryInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DeliveryInfoIcon = styled.img`
  width: 20px;
  height: 20px;
  filter: brightness(0) saturate(100%) invert(47%) sepia(8%) saturate(1234%) hue-rotate(202deg) brightness(91%) contrast(86%);
`;

const DeliveryInfoText = styled.span`
  font-size: 16px;
  color: #374151;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #e5e7eb;
  margin: 0;
`;

const PricingGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: 768px) {
    gap: 20px;
  }
`;

const PricingItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (min-width: 768px) {
    gap: 16px;
  }
`;

const PricingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PricingLabel = styled.span`
  font-size: 14px;
  color: #374151;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const PricingValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const TotalRow = styled(PricingRow)`
  border-top: none;
`;

const TotalLabel = styled(PricingLabel)`
  font-size: 18px;
  font-weight: 700;
  color: #374151;
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const TotalValue = styled(PricingValue)`
  font-size: 18px;
  font-weight: 700;
  color: #374151;
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const CheckoutButton = styled.button`
  width: 100%;
  background-color: #EC575C;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  
  &:hover {
    background-color: #d14a4f;
  }
  
  &:focus {
    outline: 2px solid #EC575C;
    outline-offset: 2px;
  }
  
  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
  
  @media (min-width: 768px) {
    padding: 12px 16px;
    font-size: 16px;
    gap: 8px;
  }
`;

const ButtonIcon = styled.img`
  width: 18px;
  height: 18px;
  filter: brightness(0) saturate(100%) invert(1);
  
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 32px 16px;
  color: #6b7280;
  
  @media (min-width: 768px) {
    padding: 40px 20px;
  }
`;

const EmptyIcon = styled.div`
  font-size: 40px;
  margin-bottom: 12px;
  
  @media (min-width: 768px) {
  font-size: 48px;
  margin-bottom: 16px;
  }
`;

const EmptyText = styled.p`
  font-size: 14px;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const OrderSummary = ({ 
  items = [], 
  subtotal = 0, 
  tax = 0, 
  total = 0,
  taxRate = 0.08,
  deliveryFee = 0,
  onCheckout,
  checkoutButtonText = 'Proceed to Checkout',
  showCheckoutButton = true,
  deliveryTime = 'Sat, Nov 13 ∙ 3:00 - 3:30',
  locationComments = 'Ring doorbell and drop off at the door',
  ...props 
}) => {
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  const calculatedTax = subtotal * taxRate;
  const calculatedTotal = subtotal + calculatedTax + deliveryFee;

  const displayTax = tax || calculatedTax;
  const displayTotal = total || calculatedTotal;
  const displayDeliveryFee = deliveryFee;

  if (items.length === 0) {
    return (
      <SummaryContainer {...props}>
        <SummaryTitle>Order Summary</SummaryTitle>
        <EmptyState>
          <EmptyIcon>🛒</EmptyIcon>
          <EmptyText>Your basket is empty</EmptyText>
        </EmptyState>
      </SummaryContainer>
    );
  }

  return (
    <SummaryContainer {...props}>
      <SummaryTitle>Order Summary</SummaryTitle>
      
      <DeliveryInfoGroup>
        <DeliveryInfoItem>
          <DeliveryInfoIcon src={checkOutlineShoppingBagIcon} alt="Items" />
          <DeliveryInfoText>
            {itemCount === 1 ? '1 item' : `${itemCount} items`}
          </DeliveryInfoText>
        </DeliveryInfoItem>
        
        <DeliveryInfoItem>
          <DeliveryInfoIcon src={clockIcon} alt="Delivery time" />
          <DeliveryInfoText>{deliveryTime}</DeliveryInfoText>
        </DeliveryInfoItem>
        
        <DeliveryInfoItem>
          <DeliveryInfoIcon src={locationOutlineIcon} alt="Location" />
          <DeliveryInfoText>{locationComments}</DeliveryInfoText>
        </DeliveryInfoItem>
      </DeliveryInfoGroup>
      
      <Divider />
      
      <PricingGroup>
        <PricingItems>
          <PricingRow>
            <PricingLabel>Subtotal</PricingLabel>
            <PricingValue>${subtotal.toFixed(2)}</PricingValue>
          </PricingRow>
      
          <PricingRow>
            <PricingLabel>Delivery</PricingLabel>
            <PricingValue>${displayDeliveryFee.toFixed(2)}</PricingValue>
          </PricingRow>
          
          <PricingRow>
            <PricingLabel>Tax (VAT)</PricingLabel>
            <PricingValue>${displayTax.toFixed(2)}</PricingValue>
          </PricingRow>
          
          <PricingRow>
            <PricingLabel>Promotions</PricingLabel>
            <PricingValue>-$0.00</PricingValue>
          </PricingRow>
        </PricingItems>
        
        <Divider />
      
      <TotalRow>
        <TotalLabel>Total</TotalLabel>
        <TotalValue>${displayTotal.toFixed(2)}</TotalValue>
      </TotalRow>
      
        {onCheckout && (
          <CheckoutButton 
            onClick={onCheckout}
            disabled={!showCheckoutButton}
          >
            <ButtonIcon src={creditCardIcon} alt="Checkout" />
            {checkoutButtonText}
          </CheckoutButton>
      )}
      </PricingGroup>
    </SummaryContainer>
  );
};

OrderSummary.propTypes = {
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
  total: PropTypes.number,
  taxRate: PropTypes.number,
  deliveryFee: PropTypes.number,
  onCheckout: PropTypes.func,
  checkoutButtonText: PropTypes.string,
  showCheckoutButton: PropTypes.bool,
  deliveryTime: PropTypes.string,
  locationComments: PropTypes.string,
};

export default OrderSummary; 