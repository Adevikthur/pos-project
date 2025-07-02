import styled from '@emotion/styled';
import logoImage from '../../assets/images/logo@2x.png';

const FooterContainer = styled.footer`
  background-color: #111827;
  color: white;
  padding: 48px 20px 24px;
  
  @media (min-width: 768px) {
    padding: 64px 32px 32px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 48px;
  }
`;

const LogoSection = styled.div`
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    max-width: 200px;
  }
`;

const Logo = styled.img`
  width: 154px;
  height: 56px;
  filter: grayscale(100%) brightness(0) invert(1);
  margin-bottom: 16px;
`;

const LogoDescription = styled.p`
  font-size: 14px;
  color: #9ca3af;
  line-height: 1.5;
  margin: 0;
`;

const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 64px;
  }
`;

const NavGroup = styled.div`
  min-width: 160px;
`;

const NavTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 8px;
`;

const NavLink = styled.a`
  color: #9ca3af;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
  
  &:hover {
    color: white;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #374151;
  margin: 32px 0;
`;

const ThirdSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  color: #9ca3af;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #9ca3af;
  
  a {
    color: #9ca3af;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: white;
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #374151;
  color: #9ca3af;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #4b5563;
    color: white;
  }
  
  svg {
    width: 16px;
    height: 16px;
    filter: grayscale(100%) brightness(0) invert(0.6);
  }
  
  &:hover svg {
    filter: grayscale(100%) brightness(0) invert(1);
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FirstSection>
          <LogoSection>
            <Logo src={logoImage} alt="POSKITCHEN Logo" />
            <LogoDescription>
              Your trusted partner for delicious meals delivered right to your doorstep. 
              Quality ingredients, exceptional service, unforgettable taste.
            </LogoDescription>
          </LogoSection>
          
          <NavigationSection>
            <NavGroup>
              <NavTitle>Company</NavTitle>
              <NavList>
                <NavItem><NavLink href="#">Login</NavLink></NavItem>
                <NavItem><NavLink href="#">Sign up</NavLink></NavItem>
                <NavItem><NavLink href="#">Blog</NavLink></NavItem>
                <NavItem><NavLink href="#">Career</NavLink></NavItem>
              </NavList>
            </NavGroup>
            
            <NavGroup>
              <NavTitle>Contact Us</NavTitle>
              <NavList>
                <NavItem><NavLink href="tel:+2341236456">+234 123 6456 (Ghana)</NavLink></NavItem>
                <NavItem><NavLink href="tel:+134567763445">+1 345 6776 3445 (USA)</NavLink></NavItem>
                <NavItem><NavLink href="mailto:helpdesk@poskitchen.com">helpdesk@poskitchen.com</NavLink></NavItem>
              </NavList>
            </NavGroup>
            
            <NavGroup>
              <NavTitle>Get Help</NavTitle>
              <NavList>
                <NavItem><NavLink href="#">Read FAQ</NavLink></NavItem>
                <NavItem><NavLink href="#">Career</NavLink></NavItem>
              </NavList>
            </NavGroup>
          </NavigationSection>
        </FirstSection>
        
        <Divider />
        
        <ThirdSection>
          <Copyright>
            © POSKITCHEN {currentYear}
          </Copyright>
          
          <LegalLinks>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
          </LegalLinks>
          
          <SocialMedia>
            <SocialIcon href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </SocialIcon>
            
            <SocialIcon href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </SocialIcon>
            
            <SocialIcon href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
              </svg>
            </SocialIcon>
          </SocialMedia>
        </ThirdSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 