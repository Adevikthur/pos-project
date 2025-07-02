import { useState, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Import images and icons
import pizzaIcon from '../../assets/icons/pizza.svg';
import burgerIcon from '../../assets/icons/burger.svg';
import noodlesIcon from '../../assets/icons/noodles.svg';
import drinksIcon from '../../assets/icons/drinks.svg';
import milkshakeIcon from '../../assets/icons/milkshake.svg';
import roastChickenIcon from '../../assets/icons/roast-chicken.svg';
import faderIcon from '../../assets/icons/Fader.svg';
import shortLeftIcon from '../../assets/icons/short_left.svg';

import pizzaImage from '../../assets/images/pizza.png';
import burgerImage from '../../assets/images/burger.png';
import noodlesImage from '../../assets/images/noodles.png';
import drinksImage from '../../assets/images/drinks.png';
import dessertsImage from '../../assets/images/desserts.png';
import chickenImage from '../../assets/images/chicken.png';

const CategoryContainer = styled.div`
  position: relative;
  margin: 0 20px;
  
  @media (min-width: 768px) {
    margin: 0 32px;
  }
`;

const CategoryScrollContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (min-width: 768px) {
    gap: 8px;
  }
`;

const CategoryCard = styled.div`
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  overflow: hidden;
  
  /* Mobile styles */
  width: 72px;
  height: 72px;
  background-color: ${props => props.isSelected ? '#EC575C' : '#FF6F5D'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: ${props => props.isSelected ? '2px solid #EC575C' : 'none'};
  
  @media (min-width: 768px) {
    /* Desktop styles */
    width: 172px;
    height: 72px;
    background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
    background-size: cover;
    background-position: center;
    background-color: ${props => props.backgroundImage ? 'transparent' : '#f3f4f6'};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: ${props => props.isSelected ? '3px solid #EC575C' : 'none'};
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:focus-within {
    outline: 2px solid #EC575C;
    outline-offset: 2px;
  }
`;

const DesktopCategoryCard = styled(CategoryCard)`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
  }
`;

const CategoryIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    display: none;
  }
  
  img {
    width: 100%;
    height: 100%;
    filter: brightness(0) invert(1);
  }
`;

const CategoryName = styled.span`
  font-weight: bold;
  color: white;
  font-size: 10px;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 16px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    text-transform: none;
  }
`;

const MobileCategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileCategoryTitle = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: #374151;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.2;
`;

const Fader = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  background: linear-gradient(to right, transparent, white);
  pointer-events: none;
  z-index: 2;
  display: ${props => props.show ? 'block' : 'none'};
  
  @media (min-width: 768px) {
    width: 60px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: ${props => props.show ? 'flex' : 'none'};
  
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    right: 12px;
  }
  
  img {
    width: 16px;
    height: 16px;
  }
`;

const FoodCategory = ({ categories, selectedCategory, onCategorySelect }) => {
  const scrollContainerRef = useRef(null);
  const [showFader, setShowFader] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const isScrollable = scrollWidth > clientWidth;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;
      
      setShowFader(isScrollable && !isAtEnd);
      setShowScrollIndicator(isScrollable && !isAtEnd);
    }
  };

  const handleScrollToEnd = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollWidth,
        behavior: 'smooth'
      });
    }
  };

  const getCategoryIcon = (categoryId) => {
    const iconMap = {
      pizza: pizzaIcon,
      burgers: burgerIcon,
      pasta: noodlesIcon,
      drinks: drinksIcon,
      desserts: milkshakeIcon,
      salads: roastChickenIcon
    };
    return iconMap[categoryId] || pizzaIcon;
  };

  const getCategoryBackground = (categoryId) => {
    const backgroundMap = {
      pizza: pizzaImage,
      burgers: burgerImage,
      pasta: noodlesImage,
      drinks: drinksImage,
      desserts: dessertsImage,
      salads: chickenImage
    };
    return backgroundMap[categoryId] || burgerImage;
  };

  return (
    <CategoryContainer>
      <CategoryScrollContainer
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onLoad={handleScroll}
      >
        {categories.map((category) => (
          <div key={category.id}>
            {/* Mobile: Icon container with title below */}
            <MobileCategoryItem onClick={() => onCategorySelect(category)}>
              <CategoryCard
                backgroundImage={getCategoryBackground(category.id)}
                isSelected={selectedCategory?.id === category.id}
                tabIndex={0}
                role="button"
                aria-label={`Select ${category.name} category`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onCategorySelect(category);
                  }
                }}
              >
                <CategoryIcon>
                  <img src={getCategoryIcon(category.id)} alt={category.name} />
                </CategoryIcon>
              </CategoryCard>
            </MobileCategoryItem>
            
            {/* Desktop: Full card with background and title */}
            <DesktopCategoryCard
              backgroundImage={getCategoryBackground(category.id)}
              isSelected={selectedCategory?.id === category.id}
              onClick={() => onCategorySelect(category)}
              tabIndex={0}
              role="button"
              aria-label={`Select ${category.name} category`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onCategorySelect(category);
                }
              }}
            >
              <CategoryName>{category.name}</CategoryName>
            </DesktopCategoryCard>
          </div>
        ))}
      </CategoryScrollContainer>
      
      <Fader show={showFader}>
        <img src={faderIcon} alt="" />
      </Fader>
      
      <ScrollIndicator show={showScrollIndicator} onClick={handleScrollToEnd}>
        <img src={shortLeftIcon} alt="Scroll right" />
      </ScrollIndicator>
    </CategoryContainer>
  );
};

FoodCategory.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedCategory: PropTypes.object,
  onCategorySelect: PropTypes.func.isRequired,
};

export default FoodCategory; 