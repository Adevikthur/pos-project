import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Import images
import burgerImage from '../../assets/images/burger.png';
import noodlesImage from '../../assets/images/noodles.png';
import drinksImage from '../../assets/images/drinks.png';
import dessertsImage from '../../assets/images/desserts.png';
import chickenImage from '../../assets/images/chicken.png';

const CardContainer = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
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

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  
  @media (min-width: 768px) {
    height: 180px;
  }
`;

const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const FoodTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px 0;
  line-height: 1.3;
`;

const FoodDescription = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 12px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #EC575C;
`;

const Badge = styled.span`
  background-color: ${props => props.variant === 'vegetarian' ? '#10b981' : '#f59e0b'};
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 12px;
  text-transform: uppercase;
`;

const FoodCard = ({ 
  food, 
  onClick,
  ...props 
}) => {
  const getFoodImage = (food) => {
    // If food has a specific image, use it
    if (food.image) {
      return food.image;
    }
    
    // Otherwise, use category-based images
    const categoryImages = {
      pizza: burgerImage, // Using burger.png as placeholder for pizza
      burgers: burgerImage,
      pasta: noodlesImage,
      drinks: drinksImage,
      desserts: dessertsImage,
      salads: chickenImage
    };
    
    return categoryImages[food.categoryId] || burgerImage;
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(food, e);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };

  return (
    <CardContainer
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Select ${food.name} - ${food.price}`}
      {...props}
    >
      <ImageContainer>
        <FoodImage src={getFoodImage(food)} alt={food.name} />
      </ImageContainer>
      
      <CardContent>
        <FoodTitle>{food.name}</FoodTitle>
        <FoodDescription>{food.description}</FoodDescription>
        
        <CardFooter>
          <Price>${food.price.toFixed(2)}</Price>
          {food.badge && (
            <Badge variant={food.badge.toLowerCase()}>
              {food.badge}
            </Badge>
          )}
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};

FoodCard.propTypes = {
  food: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    emoji: PropTypes.string,
    badge: PropTypes.string,
    categoryId: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
};

export default FoodCard; 