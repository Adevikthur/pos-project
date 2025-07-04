import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FoodCard from '../../components/FoodCard/FoodCard';
import FoodCategory from '../../components/FoodCategory/FoodCategory';
import OverlayModal from '../../components/OverlayModal/OverlayModal';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';

import Button from '../../components/Button/Button';
import { foodCategories, getFoodByCategory, getFoodById, foodItems } from '../../data/mockData';

// Import SVG icons
import minusIcon from '../../assets/icons/minus.svg';
import plusIcon from '../../assets/icons/plus.svg';
import radiobuttonOnIcon from '../../assets/icons/radiobutton-on.svg';
import radiobuttonOffIcon from '../../assets/icons/radiobutton-off.svg';
import chevronBigDownIcon from '../../assets/icons/chevron_big_down.svg';

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
  padding: 0 20px;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    padding: 0 32px;
  }
`;

const CategorySection = styled.section`
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 0;
  margin: 0 -20px;
  
  @media (min-width: 768px) {
    padding: 24px 0;
    margin: 0 -32px;
  }
`;

const FoodSection = styled.section`
  padding: 24px 0;
  
  @media (min-width: 768px) {
    padding: 32px 0;
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

// Modal styled components
const QuantitySection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ModalSectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  color: white;
  width: fit-content;
`;

const QuantityButton = styled.button`
  background: white;
  border: 2px solid #EC575C;
  color: #EC575C;
  cursor: pointer;
  padding: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  img {
    width: 20px;
    height: 20px;
  }
`;

const MinusButton = styled(QuantityButton)`
  border-radius: 8px 0 0 8px;
  border-right: none;
  height: 40px;
`;

const PlusButton = styled(QuantityButton)`
  border-radius: 0 8px 8px 0;
  border-left: none;
  height: 40px;
`;

const QuantityDisplay = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #5C5C5C;
  min-width: 40px;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: white;
  border: 2px solid #EC575C;
`;

const SectionDivider = styled.div`
  height: 4px;
  width: 100%;
  background-color: #F3F5F5;
  margin: 24px 0;
  border-radius: 4px;
`;

const GlutenFreeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GlutenFreeLeft = styled.div`
  flex: 1;
`;

const GlutenFreeTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
`;

const GlutenFreeDescription = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
`;

const GlutenFreeCheckbox = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const CustomizationSection = styled.div`
  margin-bottom: 16px;
  padding: 0 0 16px 0;
`;

const CustomizationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 16px 0;
  border-bottom: 1px solid #e5e7eb;
`;

const CustomizationTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: #111827;
  margin: 0;
`;

const CustomizationChevron = styled.img`
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  filter: brightness(0) saturate(100%) invert(47%) sepia(8%) saturate(1234%) hue-rotate(202deg) brightness(91%) contrast(86%);
`;

const CustomizationContent = styled.div`
  padding-top: 16px;
`;

const CustomizationOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-child {
    border-bottom: none;
  }
`;

const OptionLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const OptionName = styled.span`
  font-size: 14px;
  color: #374151;
  font-weight: 500;
`;

const OptionPrice = styled.span`
  font-size: 14px;
  color: #7D7E85;
  font-weight: 600;
`;

const PriceAndCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const OptionCheckbox = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
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
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);

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
    setIsCustomizationOpen(false);
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
        image: selectedFood.image,
        customization: customization ? customization.label : null,
        glutenFree: glutenFree,
        specialInstructions: glutenFree ? 'Gluten Free preparation requested' : null,
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
        onAddToBasket={handleAddToBasket}
        quantity={quantity}
      >
        {selectedFood && (
          <>
            {/* Quantity Section */}
            <QuantitySection>
              <ModalSectionTitle>
                <span>Quantity</span>
              </ModalSectionTitle>
              <QuantityContainer>
                <MinusButton 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <img src={minusIcon} alt="Decrease quantity" />
                </MinusButton>
                <QuantityDisplay>{quantity}</QuantityDisplay>
                <PlusButton 
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <img src={plusIcon} alt="Increase quantity" />
                </PlusButton>
              </QuantityContainer>
            </QuantitySection>
        
                        {selectedFood.containsGluten && <SectionDivider />}
            
            {/* Gluten Free Section - Only show for foods that contain gluten */}
            {selectedFood.containsGluten && (
              <GlutenFreeSection>
                <GlutenFreeLeft>
                  <GlutenFreeTitle>Gluten Free</GlutenFreeTitle>
                  <GlutenFreeDescription>
                    {selectedFood.name === 'Pizza Margherita' ? 'Bacon and beer simmering of soda oil sprinkled on it' :
                     selectedFood.name === 'Pepperoni Pizza' ? 'Crispy pepperoni with special seasoning blend' :
                     selectedFood.name === 'Classic Cheeseburger' ? 'Premium beef with secret sauce blend' :
                     'Special preparation with premium ingredients'}
                  </GlutenFreeDescription>
                </GlutenFreeLeft>
                <GlutenFreeCheckbox
                  src={glutenFree ? radiobuttonOnIcon : radiobuttonOffIcon}
                  alt={glutenFree ? "Gluten Free selected" : "Gluten Free not selected"}
                  onClick={() => setGlutenFree(!glutenFree)}
                />
              </GlutenFreeSection>
            )}
            
            <SectionDivider />
            
            {/* Customization Section */}
            {selectedFood.customizations && selectedFood.customizations.length > 0 && (
              <CustomizationSection>
                <CustomizationHeader onClick={() => setIsCustomizationOpen(!isCustomizationOpen)}>
                  <CustomizationTitle>Customize</CustomizationTitle>
                  <CustomizationChevron 
                    isOpen={isCustomizationOpen} 
                    src={chevronBigDownIcon} 
                    alt="Toggle customization"
                  />
                </CustomizationHeader>
                
                {isCustomizationOpen && (
                  <CustomizationContent>
                    {selectedFood.customizations.map((option) => (
                      <CustomizationOption key={option.value}>
                       
                        <OptionName>{option.label}</OptionName>

            <PriceAndCheckbox>
                          <OptionPrice>+${option.price ? option.price.toFixed(2) : '0.00'}</OptionPrice>
                          <OptionCheckbox
                            src={(customization && customization.value === option.value) ? radiobuttonOnIcon : radiobuttonOffIcon}
                            alt={(customization && customization.value === option.value) ? `${option.label} selected` : `${option.label} not selected`}
                            onClick={() => {
                              if (customization && customization.value === option.value) {
                                setCustomization(null);
                              } else {
                                setCustomization(option);
                              }
                            }}
                          />
                  </PriceAndCheckbox>
                        {/* <OptionLeft>
                       
                        </OptionLeft> */}

                      </CustomizationOption>
                    ))}
                  </CustomizationContent>
                )}
              </CustomizationSection>
            )}
          </>
        )}
      </OverlayModal>
    </PageContainer>
  );
};

export default MainMenu; 