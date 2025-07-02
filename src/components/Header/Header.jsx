import { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Import images and icons
import logoImage from '../../assets/images/logo@2x.png';
import scooterIcon from '../../assets/icons/scooter.svg';
import diningMealIcon from '../../assets/icons/dining-meal-covered 1.svg';
import takeawayIcon from '../../assets/icons/take-away.svg';
import caretDownIcon from '../../assets/icons/caret_down.svg';
import locationIcon from '../../assets/icons/location.svg';
import shoppingBagIcon from '../../assets/icons/outline-shopping-bag.svg';
import notificationIcon from '../../assets/icons/notification_dot.svg';

const HeaderContainer = styled.header`
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  
  @media (min-width: 768px) {
    padding: 20px 32px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 16px;
  
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

const Logo = styled.div`
  flex-shrink: 0;
  cursor: pointer;
  
  img {
    height: 32px;
    
    @media (min-width: 768px) {
      height: 40px;
    }
  }
`;

const HeaderCenter = styled.div`
  display: none;
  flex: 1;
  align-items: center;
  gap: 16px;
  
  @media (min-width: 768px) {
    display: flex;
  }
`;

const DeliveryDropdown = styled.div`
  position: relative;
  cursor: pointer;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #EC575C;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 8px 0;
  min-width: 200px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isOpen ? '0' : '-8px'});
  transition: all 0.2s ease;
  z-index: 10;
  margin-top: 4px;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f9fafb;
  }
  
  img {
    width: 20px;
    height: 20px;
  }
  
  span {
    font-size: 14px;
    color: #374151;
  }
`;

const AddressBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
  flex: 1;
  max-width: 300px;
  
  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
  
  span {
    font-size: 14px;
    color: #6b7280;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 40px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #EC575C;
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  
  svg {
    width: 100%;
    height: 100%;
    fill: #9ca3af;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  position: relative;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  img {
    width: 20px;
    height: 20px;
  }
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 20px;
  height: 20px;
  background-color: #EC575C;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  border: 2px solid white;
`;

const MobileSearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  
  @media (min-width: 768px) {
    display: none;
  }
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  img {
    width: 20px;
    height: 20px;
  }
`;

const MobileSearchOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: flex-start;
  justify-content: center;
  padding-top: 80px;
`;

const MobileSearchInput = styled.input`
  width: 90%;
  max-width: 400px;
  padding: 16px 20px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &:focus {
    outline: none;
  }
`;

const MobileAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  
  @media (min-width: 768px) {
    display: none;
  }
  
  img {
    width: 16px;
    height: 16px;
  }
  
  span {
    font-size: 14px;
    color: #6b7280;
  }
`;

const Header = ({ basketCount = 0, onBasketClick, onLogoClick, onSearch }) => {
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState('delivery');
  const deliveryOptions = [
    { id: 'delivery', label: 'Delivery', icon: scooterIcon },
    { id: 'dine-in', label: 'Dine In', icon: diningMealIcon },
    { id: 'takeaway', label: 'Takeaway', icon: takeawayIcon },
  ];
  const selectedOption = deliveryOptions.find(option => option.id === selectedDeliveryOption);

  const handleDeliveryMouseEnter = () => {
    setIsDeliveryOpen(true);
  };

  const handleDeliveryMouseLeave = () => {
    setIsDeliveryOpen(false);
  };

  const handleDeliveryClick = (option) => {
    setSelectedDeliveryOption(option.id);
    setIsDeliveryOpen(false);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleMobileSearchToggle = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  const handleMobileSearchClose = () => {
    setIsMobileSearchOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo onClick={onLogoClick} tabIndex={0} role="button" aria-label="Go to home">
            <img src={logoImage} alt="POS System Logo" />
          </Logo>
          
          <HeaderCenter>
            <DeliveryDropdown
              onMouseEnter={handleDeliveryMouseEnter}
              onMouseLeave={handleDeliveryMouseLeave}
              tabIndex={0}
              role="button"
              aria-label="Delivery options"
              aria-expanded={isDeliveryOpen}
            >
              <img src={selectedOption.icon} alt={selectedOption.label} />
              <span>{selectedOption.label}</span>
              <img src={caretDownIcon} alt="Dropdown" />
              
              <DropdownContent isOpen={isDeliveryOpen}>
                {deliveryOptions.map((option) => (
                  <DropdownItem 
                    key={option.id}
                    onClick={() => handleDeliveryClick(option)}
                  >
                    <img src={option.icon} alt={option.label} />
                    <span>{option.label}</span>
                  </DropdownItem>
                ))}
              </DropdownContent>
            </DeliveryDropdown>
            
            <AddressBar>
              <img src={locationIcon} alt="Location" />
              <span>123 Main Street, City, State 12345</span>
            </AddressBar>
            
            <SearchContainer>
              <SearchIcon>
                <svg viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="Search for food..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </SearchContainer>
          </HeaderCenter>
          
          <HeaderRight>
            <IconButton onClick={onBasketClick} tabIndex={0} aria-label="View basket">
              <img src={shoppingBagIcon} alt="Shopping Bag" />
              {basketCount > 0 && (
                <NotificationBadge>{basketCount}</NotificationBadge>
              )}
            </IconButton>
            
            <IconButton tabIndex={0} aria-label="Notifications">
              <img src={notificationIcon} alt="Notifications" />
            </IconButton>
            
            <MobileSearchButton 
              onClick={handleMobileSearchToggle}
              tabIndex={0}
              aria-label="Open search"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#374151" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </MobileSearchButton>
          </HeaderRight>
        </HeaderContent>
      </HeaderContainer>
      
      <MobileAddress>
        <img src={locationIcon} alt="Location" />
        <span>123 Main Street, City, State 12345</span>
      </MobileAddress>
      
      <MobileSearchOverlay isOpen={isMobileSearchOpen} onClick={handleMobileSearchClose}>
        <MobileSearchInput
          type="text"
          placeholder="Search for food..."
          value={searchQuery}
          onChange={handleSearchChange}
          onClick={(e) => e.stopPropagation()}
          autoFocus
        />
      </MobileSearchOverlay>
    </>
  );
};

Header.propTypes = {
  basketCount: PropTypes.number,
  onBasketClick: PropTypes.func,
  onLogoClick: PropTypes.func,
  onSearch: PropTypes.func,
};

export default Header; 