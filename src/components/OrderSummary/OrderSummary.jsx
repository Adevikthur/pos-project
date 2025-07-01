import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SummaryContainer = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  height: fit-content;
  
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const SummaryTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 24px 0;
  
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }
`;

const SummaryLabel = styled.span`
  font-size: 16px;
  color: #374151;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const SummaryValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const TotalRow = styled(SummaryRow)`
  border-top: 2px solid #e5e7eb;
  border-bottom: none;
  margin-top: 16px;
  padding-top: 20px;
`;

const TotalLabel = styled(SummaryLabel)`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const TotalValue = styled(SummaryValue)`
  font-size: 20px;
  font-weight: 700;
  color: #EC575C;
  
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const TaxRow = styled(SummaryRow)`
  padding: 8px 0;
`;

const TaxLabel = styled(SummaryLabel)`
  font-size: 14px;
  color: #6b7280;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const TaxValue = styled(SummaryValue)`
  font-size: 14px;
  color: #6b7280;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #6b7280;
`;

const EmptyIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const EmptyText = styled.p`
  font-size: 16px;
  margin: 0;
`;

const OrderSummary = ({ 
  items = [], 
  subtotal = 0, 
  tax = 0, 
  total = 0,
  taxRate = 0.08,
  onCheckout,
  checkoutButtonText = 'Proceed to Checkout',
  showCheckoutButton = true,
  ...props 
}) => {
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  const calculatedTax = subtotal * taxRate;
  const calculatedTotal = subtotal + calculatedTax;

  const displayTax = tax || calculatedTax;
  const displayTotal = total || calculatedTotal;

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
      
      <SummaryRow>
        <SummaryLabel>Items ({itemCount})</SummaryLabel>
        <SummaryValue>${subtotal.toFixed(2)}</SummaryValue>
      </SummaryRow>
      
      <TaxRow>
        <TaxLabel>Tax ({(taxRate * 100).toFixed(1)}%)</TaxLabel>
        <TaxValue>${displayTax.toFixed(2)}</TaxValue>
      </TaxRow>
      
      <TotalRow>
        <TotalLabel>Total</TotalLabel>
        <TotalValue>${displayTotal.toFixed(2)}</TotalValue>
      </TotalRow>
      
      {showCheckoutButton && onCheckout && (
        <div style={{ marginTop: '24px' }}>
          <button
            onClick={onCheckout}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: '#EC575C',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#d14a4f'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#EC575C'}
            onFocus={(e) => e.target.style.backgroundColor = '#d14a4f'}
            onBlur={(e) => e.target.style.backgroundColor = '#EC575C'}
          >
            {checkoutButtonText}
          </button>
        </div>
      )}
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
  onCheckout: PropTypes.func,
  checkoutButtonText: PropTypes.string,
  showCheckoutButton: PropTypes.bool,
};

export default OrderSummary; 