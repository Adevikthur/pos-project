import { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FoodCard from '../../components/FoodCard/FoodCard';
import OverlayModal from '../../components/OverlayModal/OverlayModal';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import CustomizationDropdown from '../../components/CustomizationDropdown/CustomizationDropdown';
import Button from '../../components/Button/Button';
import { foodCategories, getFoodByCategory, getFoodById } from '../../data/mockData';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 24px 20px;
  
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 32px 0;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
`;

const CategoryCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    border-color: #EC575C;
  }
  
  &:focus-within {
    outline: 2px solid #EC575C;
    outline-offset: 2px;
  }
`;

const CategoryEmoji = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const CategoryName = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
`;

const CategoryDescription = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
`;

const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

const ModalSection = styled.div`
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

const MainMenu = ({ basketItems = [], onAddToBasket, onBasketClick, onLogoClick }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [customization, setCustomization] = useState(null);
  const [glutenFree, setGlutenFree] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleFoodClick = (food) => {
    setSelectedFood(food);
    setQuantity(1);
    setCustomization(null);
    setGlutenFree(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
  };

  const handleAddToBasket = () => {
    if (selectedFood && onAddToBasket) {
      const basketItem = {
        id: `${selectedFood.id}-${Date.now()}`, // Unique ID for basket
        name: selectedFood.name,
        price: selectedFood.price,
        quantity: quantity,
        emoji: selectedFood.emoji,
        customization: customization ? customization.label : null,
        glutenFree: glutenFree,
      };
      
      onAddToBasket(basketItem);
      handleCloseModal();
    }
  };

  const basketCount = basketItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <PageContainer>
      <Header 
        basketCount={basketCount}
        onBasketClick={onBasketClick}
        onLogoClick={onLogoClick}
      />
      
      <MainContent>
        <ContentWrapper>
          <PageTitle>What would you like to order today?</PageTitle>
          
          {!selectedCategory ? (
            <CategoryGrid>
              {foodCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Browse ${category.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCategoryClick(category);
                    }
                  }}
                >
                  <CategoryEmoji>{category.emoji}</CategoryEmoji>
                  <CategoryName>{category.name}</CategoryName>
                  <CategoryDescription>{category.description}</CategoryDescription>
                </CategoryCard>
              ))}
            </CategoryGrid>
          ) : (
            <>
              <div style={{ marginBottom: '24px' }}>
                <button
                  onClick={() => setSelectedCategory(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#EC575C',
                    fontSize: '16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  ← Back to Categories
                </button>
              </div>
              
              <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>
                {selectedCategory.name}
              </h2>
              
              <FoodGrid>
                {getFoodByCategory(selectedCategory.id).map((food) => (
                  <FoodCard
                    key={food.id}
                    food={food}
                    onClick={handleFoodClick}
                  />
                ))}
              </FoodGrid>
            </>
          )}
        </ContentWrapper>
      </MainContent>
      
      <Footer />
      
      <OverlayModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        food={selectedFood}
      >
        <ModalSection>
          <SectionTitle>Quantity</SectionTitle>
          <QuantitySelector
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
        </ModalSection>
        
        {selectedFood?.customizations && (
          <ModalSection>
            <SectionTitle>Customization</SectionTitle>
            <CustomizationDropdown
              options={selectedFood.customizations}
              selectedOption={customization}
              onOptionSelect={setCustomization}
              placeholder="Select customization..."
            />
          </ModalSection>
        )}
        
        <ModalSection>
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={glutenFree}
              onChange={(e) => setGlutenFree(e.target.checked)}
            />
            <CheckboxText>Gluten Free</CheckboxText>
          </CheckboxContainer>
        </ModalSection>
        
        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <Button variant="secondary" onClick={handleCloseModal} style={{ flex: 1 }}>
            Cancel
          </Button>
          <Button onClick={handleAddToBasket} style={{ flex: 1 }}>
            Add to Basket
          </Button>
        </div>
      </OverlayModal>
    </PageContainer>
  );
};

export default MainMenu; 