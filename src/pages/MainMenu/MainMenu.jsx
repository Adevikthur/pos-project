import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FoodCard from '../../components/FoodCard/FoodCard';
import FoodCategory from '../../components/FoodCategory/FoodCategory';
import OverlayModal from '../../components/OverlayModal/OverlayModal';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import CustomizationDropdown from '../../components/CustomizationDropdown/CustomizationDropdown';
import Button from '../../components/Button/Button';
import { foodCategories, getFoodByCategory, getFoodById, foodItems } from '../../data/mockData';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0;
  
  @media (min-width: 768px) {
    padding: 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const CategorySection = styled.section`
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 0;
  
  @media (min-width: 768px) {
    padding: 24px 0;
  }
`;

const FoodSection = styled.section`
  padding: 24px 20px;
  
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 24px 0;
  
  @media (min-width: 768px) {
    font-size: 28px;
    margin: 0 0 32px 0;
  }
`;

const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

const ModalSection = styled.div`
  margin-bottom: 24px;
`;

const ModalSectionTitle = styled.h3`
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

const NoResults = styled.div`
  text-align: center;
  padding: 48px 20px;
  color: #6b7280;
  
  h3 {
    font-size: 20px;
    margin: 0 0 8px 0;
  }
  
  p {
    font-size: 16px;
    margin: 0;
  }
`;

const MainMenu = ({ basketItems = [], onAddToBasket, onBasketClick, onLogoClick }) => {
  const [selectedCategory, setSelectedCategory] = useState(foodCategories[0]); // Default to first category
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [customization, setCustomization] = useState(null);
  const [glutenFree, setGlutenFree] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFood, setFilteredFood] = useState([]);

  // Update filtered food when category or search changes
  useEffect(() => {
    let food = [];
    
    if (searchQuery.trim()) {
      // Search across ALL food items, not just selected category
      food = foodItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      // Show items from selected category when no search
      food = getFoodByCategory(selectedCategory.id);
    }
    
    setFilteredFood(food);
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Clear search when changing categories (unless there's an active search)
    if (!searchQuery.trim()) {
      setSearchQuery('');
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
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
        onSearch={handleSearch}
      />
      
      <MainContent>
        <ContentWrapper>
          <CategorySection>
            <FoodCategory
              categories={foodCategories}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
          </CategorySection>
          
          <FoodSection>
            <SectionTitle>
              {searchQuery ? `Search results for "${searchQuery}"` : selectedCategory?.name}
            </SectionTitle>
            
            {filteredFood.length > 0 ? (
              <FoodGrid>
                {filteredFood.map((food) => (
                  <FoodCard
                    key={food.id}
                    food={food}
                    onClick={() => handleFoodClick(food)}
                  />
                ))}
              </FoodGrid>
            ) : (
              <NoResults>
                <h3>No items found</h3>
                <p>
                  {searchQuery 
                    ? `No items match your search for "${searchQuery}"`
                    : `No items available in ${selectedCategory?.name}`
                  }
                </p>
              </NoResults>
            )}
          </FoodSection>
        </ContentWrapper>
      </MainContent>
      
      <Footer />
      
      <OverlayModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        food={selectedFood}
      >
        {selectedFood && (
          <>
            {selectedFood.customizations && selectedFood.customizations.length > 0 && (
              <ModalSection>
                <ModalSectionTitle>Customization</ModalSectionTitle>
                <CustomizationDropdown
                  options={selectedFood.customizations}
                  value={customization}
                  onChange={setCustomization}
                />
              </ModalSection>
            )}
            
            <ModalSection>
              <ModalSectionTitle>Quantity</ModalSectionTitle>
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
              />
            </ModalSection>
            
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
            
            <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
              <Button
                variant="secondary"
                onClick={handleCloseModal}
                style={{ flex: 1 }}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleAddToBasket}
                style={{ flex: 1 }}
              >
                Add to Basket - ${(selectedFood.price * quantity).toFixed(2)}
              </Button>
            </div>
          </>
        )}
      </OverlayModal>
    </PageContainer>
  );
};

export default MainMenu; 