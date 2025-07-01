import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
  padding: 32px 20px;
  margin-top: auto;
  
  @media (min-width: 768px) {
    padding: 48px 32px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterLink = styled.a`
  color: #6b7280;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
  
  &:hover {
    color: #EC575C;
  }
  
  &:focus {
    outline: 2px solid #EC575C;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const FooterText = styled.p`
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #e5e7eb;
  margin-top: 32px;
  padding-top: 24px;
  text-align: center;
  
  @media (min-width: 768px) {
    margin-top: 48px;
    padding-top: 32px;
  }
`;

const Copyright = styled.p`
  color: #9ca3af;
  font-size: 12px;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Us</FooterTitle>
          <FooterText>
            We're passionate about serving delicious food with exceptional service. 
            Our commitment to quality and customer satisfaction drives everything we do.
          </FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink href="#" tabIndex={0}>Menu</FooterLink>
            <FooterLink href="#" tabIndex={0}>Order Online</FooterLink>
            <FooterLink href="#" tabIndex={0}>Locations</FooterLink>
            <FooterLink href="#" tabIndex={0}>Catering</FooterLink>
            <FooterLink href="#" tabIndex={0}>Gift Cards</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact & Support</FooterTitle>
          <FooterLinks>
            <FooterLink href="tel:+1234567890" tabIndex={0}>📞 (123) 456-7890</FooterLink>
            <FooterLink href="mailto:info@possystem.com" tabIndex={0}>✉️ info@possystem.com</FooterLink>
            <FooterLink href="#" tabIndex={0}>📋 Careers</FooterLink>
            <FooterLink href="#" tabIndex={0}>❓ FAQ</FooterLink>
            <FooterLink href="#" tabIndex={0}>📝 Feedback</FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>
          © 2024 POS System. All rights reserved. | Privacy Policy | Terms of Service
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 