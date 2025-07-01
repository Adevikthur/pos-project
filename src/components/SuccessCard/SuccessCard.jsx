import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    padding: 48px 32px;
  }
`;

const SuccessIcon = styled.div`
  font-size: 64px;
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    font-size: 80px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
  
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Message = styled.p`
  font-size: 16px;
  color: #6b7280;
  margin: 0 0 32px 0;
  line-height: 1.5;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const OrderNumber = styled.div`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 32px;
`;

const OrderNumberLabel = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
`;

const OrderNumberValue = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  font-family: monospace;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const SuccessCard = ({ 
  title = "Your order has been successfully placed!",
  message = "Thank you for your order. We'll start preparing it right away and you'll receive a confirmation email shortly.",
  orderNumber,
  onViewReceipt,
  onContinueShopping,
  showContinueButton = true,
  ...props 
}) => {
  return (
    <CardContainer {...props}>
      <SuccessIcon>✅</SuccessIcon>
      
      <Title>{title}</Title>
      
      <Message>{message}</Message>
      
      {orderNumber && (
        <OrderNumber>
          <OrderNumberLabel>Order Number</OrderNumberLabel>
          <OrderNumberValue>{orderNumber}</OrderNumberValue>
        </OrderNumber>
      )}
      
      <ButtonContainer>
        <button
          onClick={onViewReceipt}
          style={{
            padding: '16px 32px',
            backgroundColor: '#EC575C',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#d14a4f'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#EC575C'}
          onFocus={(e) => e.target.style.backgroundColor = '#d14a4f'}
          onBlur={(e) => e.target.style.backgroundColor = '#EC575C'}
        >
          View Receipt
        </button>
        
        {showContinueButton && onContinueShopping && (
          <button
            onClick={onContinueShopping}
            style={{
              padding: '16px 32px',
              backgroundColor: 'transparent',
              color: '#EC575C',
              border: '2px solid #EC575C',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#EC575C';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#EC575C';
            }}
            onFocus={(e) => {
              e.target.style.backgroundColor = '#EC575C';
              e.target.style.color = 'white';
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#EC575C';
            }}
          >
            Continue Shopping
          </button>
        )}
      </ButtonContainer>
    </CardContainer>
  );
};

SuccessCard.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  orderNumber: PropTypes.string,
  onViewReceipt: PropTypes.func,
  onContinueShopping: PropTypes.func,
  showContinueButton: PropTypes.bool,
};

export default SuccessCard; 