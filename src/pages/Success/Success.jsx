import styled from '@emotion/styled';
import Header from '../../components/Header/Header';
import SuccessCard from '../../components/SuccessCard/SuccessCard';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const Success = ({ 
  orderNumber,
  onViewReceipt,
  onContinueShopping,
  onLogoClick,
  orderItems = [],
  orderSubtotal = 0,
  orderTax = 0,
  orderDeliveryFee = 0,
  orderTotal = 0,
  deliveryAddress = 'Deliver to front desk',
  paymentMethod = 'Credit Card',
}) => {
  return (
    <PageContainer>
      <Header onLogoClick={onLogoClick} />
      
      <MainContent>
        <SuccessCard
          orderNumber={orderNumber}
          onViewReceipt={onViewReceipt}
          onContinueShopping={onContinueShopping}
          orderItems={orderItems}
          orderSubtotal={orderSubtotal}
          orderTax={orderTax}
          orderDeliveryFee={orderDeliveryFee}
          orderTotal={orderTotal}
          deliveryAddress={deliveryAddress}
          paymentMethod={paymentMethod}
        />
      </MainContent>
    </PageContainer>
  );
};

export default Success; 