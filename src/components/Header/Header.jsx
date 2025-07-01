import { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #EC575C;
  
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const Navigation = styled.nav`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

const NavItem = styled.div`
  position: relative;
  cursor: pointer;
  padding: 8px 0;
  font-weight: 500;
  color: #374151;
  transition: color 0.2s ease;
  
  &:hover {
    color: #EC575C;
  }
`;

const DeliveryDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  min-width: 200px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isOpen ? '0' : '-8px'});
  transition: all 0.2s ease;
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 8px 0;
  color: #374151;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #EC575C;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 24px;
  color: #374151;
  cursor: pointer;
  padding: 8px;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const BasketIcon = styled.div`
  position: relative;
  cursor: pointer;
  padding: 8px;
  color: #374151;
  transition: color 0.2s ease;
  
  &:hover {
    color: #EC575C;
  }
`;

const BasketCount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #EC575C;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;

const Header = ({ basketCount = 0, onBasketClick, onLogoClick }) => {
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);

  const handleDeliveryMouseEnter = () => {
    setIsDeliveryOpen(true);
  };

  const handleDeliveryMouseLeave = () => {
    setIsDeliveryOpen(false);
  };

  const handleDeliveryClick = (option) => {
    console.log('Delivery option selected:', option);
    setIsDeliveryOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={onLogoClick} tabIndex={0} role="button" aria-label="Go to home">
          🍕 POS System
        </Logo>
        
        <Navigation>
          <NavItem
            onMouseEnter={handleDeliveryMouseEnter}
            onMouseLeave={handleDeliveryMouseLeave}
            tabIndex={0}
            role="button"
            aria-label="Delivery options"
            aria-expanded={isDeliveryOpen}
          >
            Delivery
            <DeliveryDropdown isOpen={isDeliveryOpen}>
              <DropdownItem onClick={() => handleDeliveryClick('pickup')}>
                🚶 Pickup
              </DropdownItem>
              <DropdownItem onClick={() => handleDeliveryClick('delivery')}>
                🚚 Delivery
              </DropdownItem>
              <DropdownItem onClick={() => handleDeliveryClick('dine-in')}>
                🍽️ Dine In
              </DropdownItem>
            </DeliveryDropdown>
          </NavItem>
          
          <NavItem tabIndex={0} role="button" aria-label="About us">
            About
          </NavItem>
          
          <NavItem tabIndex={0} role="button" aria-label="Contact us">
            Contact
          </NavItem>
        </Navigation>
        
        <BasketIcon onClick={onBasketClick} tabIndex={0} role="button" aria-label="View basket">
          🛒
          {basketCount > 0 && <BasketCount>{basketCount}</BasketCount>}
        </BasketIcon>
        
        <MobileMenuButton tabIndex={0} aria-label="Open mobile menu">
          ☰
        </MobileMenuButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

Header.propTypes = {
  basketCount: PropTypes.number,
  onBasketClick: PropTypes.func,
  onLogoClick: PropTypes.func,
};

export default Header; 