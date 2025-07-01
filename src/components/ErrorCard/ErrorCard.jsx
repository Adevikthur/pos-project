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

const ErrorIcon = styled.div`
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

const ErrorDetails = styled.div`
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 32px;
  text-align: left;
`;

const ErrorDetailsTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #dc2626;
  margin-bottom: 8px;
`;

const ErrorDetailsText = styled.div`
  font-size: 14px;
  color: #7f1d1d;
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

const ErrorCard = ({ 
  title = "Something went wrong",
  message = "Your phone number is not valid. Please check your information and try again.",
  errorDetails,
  onRetry,
  onGoBack,
  showGoBackButton = true,
  retryButtonText = "Order Again",
  goBackButtonText = "Go Back",
  ...props 
}) => {
  return (
    <CardContainer {...props}>
      <ErrorIcon>❌</ErrorIcon>
      
      <Title>{title}</Title>
      
      <Message>{message}</Message>
      
      {errorDetails && (
        <ErrorDetails>
          <ErrorDetailsTitle>Error Details</ErrorDetailsTitle>
          <ErrorDetailsText>{errorDetails}</ErrorDetailsText>
        </ErrorDetails>
      )}
      
      <ButtonContainer>
        <button
          onClick={onRetry}
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
          {retryButtonText}
        </button>
        
        {showGoBackButton && onGoBack && (
          <button
            onClick={onGoBack}
            style={{
              padding: '16px 32px',
              backgroundColor: 'transparent',
              color: '#6b7280',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
              e.target.style.borderColor = '#d1d5db';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.borderColor = '#e5e7eb';
            }}
            onFocus={(e) => {
              e.target.style.backgroundColor = '#f3f4f6';
              e.target.style.borderColor = '#d1d5db';
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.borderColor = '#e5e7eb';
            }}
          >
            {goBackButtonText}
          </button>
        )}
      </ButtonContainer>
    </CardContainer>
  );
};

ErrorCard.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  errorDetails: PropTypes.string,
  onRetry: PropTypes.func,
  onGoBack: PropTypes.func,
  showGoBackButton: PropTypes.bool,
  retryButtonText: PropTypes.string,
  goBackButtonText: PropTypes.string,
};

export default ErrorCard; 