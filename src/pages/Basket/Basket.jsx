import { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BasketItem from '../../components/BasketItem/BasketItem';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Button from '../../components/Button/Button';

// Import SVG icons
import chevronBigDownIcon from '../../assets/icons/chevron_big_down.svg';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 16px 12px;
  
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainContentGroup = styled.div`
  max-width: 600px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 24px 0;
  
  @media (min-width: 768px) {
    font-size: 36px;
    margin: 0 0 32px 0;
  }
`;

const BasketLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
  }
`;

const BasketSection = styled.div`
  flex: 1;
  width: 100%;
  
`;

const SummarySection = styled.div`
  @media (min-width: 1024px) {
    width: 40%;
    position: sticky;
    top: 100px;
    align-self: flex-start;
  }
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 12px 0;
  
  @media (min-width: 768px) {
    font-size: 20px;
  margin: 0 0 16px 0;
  }
`;

const BasketItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
  gap: 16px;
    width: 600px;
  margin-bottom: 32px;
  }
`;

const EmptyBasket = styled.div`
  text-align: center;
  padding: 60px 20px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
`;

const EmptyIcon = styled.div`
  font-size: 64px;
  margin-bottom: 16px;
`;

const EmptyTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
`;

const EmptyText = styled.p`
  font-size: 16px;
  color: #6b7280;
  margin: 0 0 24px 0;
`;

const SpecialInstructionsContainer = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
  
  @media (min-width: 768px) {
    gap: 8px;
  padding: 24px;
  }
`;

const InstructionsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const InstructionsTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ToggleIcon = styled.img`
  width: 18px;
  height: 18px;
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  filter: brightness(0) saturate(100%) invert(47%) sepia(8%) saturate(1234%) hue-rotate(202deg) brightness(91%) contrast(86%);
  
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const InstructionsTextarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  
  &:focus {
    outline: 2px solid #EC575C;
    outline-offset: 2px;
  }
  
  @media (min-width: 768px) {
    min-height: 100px;
    padding: 12px;
    font-size: 16px;
  }
`;

const PlaceholderText = styled.div`
  color: #9ca3af;
  font-size: 14px;
  margin-top: 8px;
`;

const Basket = ({ 
  basketItems = [], 
  onQuantityChange, 
  onRemoveItem, 
  onCheckout,
  onLogoClick,
  onBackToMenu,
  specialInstructions = '',
  onSpecialInstructionsChange,
}) => {
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

  const subtotal = basketItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleToggleInstructions = () => {
    setIsInstructionsOpen(!isInstructionsOpen);
  };

  const handleInstructionsChange = (e) => {
    if (onSpecialInstructionsChange) {
      onSpecialInstructionsChange(e.target.value);
    }
  };

  if (basketItems.length === 0) {
    return (
      <PageContainer>
        <Header onLogoClick={onLogoClick} />
        
        <MainContent>
          <ContentWrapper>
            <PageTitle>Your Basket</PageTitle>
            
            <EmptyBasket>
              <EmptyIcon>🛒</EmptyIcon>
              <EmptyTitle>Your basket is empty</EmptyTitle>
              <EmptyText>Add some delicious items to get started!</EmptyText>
              <Button onClick={onBackToMenu}>
                Browse Menu
              </Button>
            </EmptyBasket>
          </ContentWrapper>
        </MainContent>
        
        <Footer />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header onLogoClick={onLogoClick} />
      
      <MainContent>
        <ContentWrapper>
          <BasketLayout>
            <MainContentGroup>
              <PageTitle>Your Basket</PageTitle>
              
            <BasketSection>
              <SectionTitle>Order Items</SectionTitle>
              
              <BasketItemsContainer>
                {basketItems.map((item) => (
                  <BasketItem
                    key={item.id}
                    item={item}
                    onQuantityChange={onQuantityChange}
                    onRemove={onRemoveItem}
                  />
                ))}
              </BasketItemsContainer>
              
              <SpecialInstructionsContainer>
                <InstructionsHeader onClick={handleToggleInstructions}>
                  <InstructionsTitle>Special Instructions</InstructionsTitle>
                  <ToggleIcon 
                    isOpen={isInstructionsOpen} 
                    src={chevronBigDownIcon} 
                    alt="Toggle instructions"
                  />
                </InstructionsHeader>
                
                {isInstructionsOpen && (
                  <>
                    <InstructionsTextarea
                      value={specialInstructions}
                      onChange={handleInstructionsChange}
                      placeholder="Add any special instructions for your order (e.g., allergies, cooking preferences, delivery notes)..."
                    />
                    <PlaceholderText>
                      Optional: Let us know about any special requests or dietary requirements
                    </PlaceholderText>
                  </>
                )}
              </SpecialInstructionsContainer>
            </BasketSection>
            </MainContentGroup>
            
            <SummarySection>
              <OrderSummary
                items={basketItems}
                subtotal={subtotal}
                tax={tax}
                total={total}
                deliveryFee={0}
                onCheckout={onCheckout}
                checkoutButtonText="Proceed to Checkout"
              />
            </SummarySection>
          </BasketLayout>
        </ContentWrapper>
      </MainContent>
      
      <Footer />
    </PageContainer>
  );
};

export default Basket; 