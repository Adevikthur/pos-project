import styled from '@emotion/styled';
import logoImage from '/onepot-logo-red.svg'

const FooterContainer = styled.footer`
  background-color: #F3F5F5;
  color: #374151;
  padding: 48px 20px 24px;
  margin-top: 100px;
  
  @media (min-width: 768px) {
    padding: 64px 32px 32px;
    margin-top: 100px;
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
    max-width:200px;
  }
`;

const Logo = styled.img`
  width:200px;
  height: 70px;
  filter: brightness(0) saturate(100%) invert(76%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(76%) contrast(76%);
  margin-bottom: 16px;
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
  color: #374151;
  margin: 0 0 16px 0;
  text-transform: none;
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
  color: #6b7280;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
  
  &:hover {
    color: #374151;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #d1d5db;
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

const Copyright = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const SocialLink = styled.a`
  color: #6b7280;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #374151;
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FirstSection>
          <LogoSection>
            <Logo src={logoImage} alt="OnePot Kitchen Logo" />
          </LogoSection>
          
          <NavigationSection>
            <NavGroup>
              <NavTitle>Company</NavTitle>
              <NavList>
                <NavItem><NavLink href="#">About Us</NavLink></NavItem>
                <NavItem><NavLink href="#">Careers</NavLink></NavItem>
                <NavItem><NavLink href="#">Press</NavLink></NavItem>
                <NavItem><NavLink href="#">Blog</NavLink></NavItem>
              </NavList>
            </NavGroup>
            
            <NavGroup>
              <NavTitle>Support</NavTitle>
              <NavList>
                <NavItem><NavLink href="#">Help Center</NavLink></NavItem>
                <NavItem><NavLink href="#">Contact Us</NavLink></NavItem>
                <NavItem><NavLink href="#">Privacy Policy</NavLink></NavItem>
                <NavItem><NavLink href="#">Terms of Service</NavLink></NavItem>
              </NavList>
            </NavGroup>
        
            <NavGroup>
              <NavTitle>Services</NavTitle>
              <NavList>
                <NavItem><NavLink href="#">Restaurant Kitchen</NavLink></NavItem>
                <NavItem><NavLink href="#">Retail Kitchen</NavLink></NavItem>
                <NavItem><NavLink href="#">Online Ordering</NavLink></NavItem>
                <NavItem><NavLink href="#">Analytics</NavLink></NavItem>
              </NavList>
            </NavGroup>
            
            <NavGroup>
              <NavTitle>Resources</NavTitle>
              <NavList>
                <NavItem><NavLink href="#">Documentation</NavLink></NavItem>
                <NavItem><NavLink href="#">API Reference</NavLink></NavItem>
                <NavItem><NavLink href="#">Integrations</NavLink></NavItem>
                <NavItem><NavLink href="#">Pricing</NavLink></NavItem>
              </NavList>
            </NavGroup>
          </NavigationSection>
        </FirstSection>
        
        <Divider />
        
        <ThirdSection>
          <Copyright>
            © 2025 OnePot Kitchen. All rights reserved.
          </Copyright>
          
          <SocialLinks>
            <SocialLink href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </SocialLink>
            <SocialLink href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
              </svg>
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialLink>
          </SocialLinks>
        </ThirdSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 