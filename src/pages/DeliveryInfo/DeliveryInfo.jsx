import { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Button from '../../components/Button/Button';

// Import payment icons
import mastercardIcon from '../../assets/icons/master card.svg';
import visaIcon from '../../assets/icons/visa.svg';
import paypalIcon from '../../assets/icons/paypal.svg';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const EditButton = styled(Button)`
  font-size: 16px;
  padding: 12px 24px;
  background-color: rgba(242, 5, 5, 0.1);
  border: none;
  white-space: nowrap;
  width: 100%;
  
  @media (min-width: 768px) {
    width: auto;
    padding: 8px 24px;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 12px;
  
  @media (min-width: 768px) {
    padding: 16px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainContentGroup = styled.div`
  max-width: 100%;
  
  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 24px 0;
  
  @media (min-width: 768px) {
    font-size: 36px;
    margin: 0 0 32px 0;
  }
`;

const DeliveryLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
  }
`;

const DeliverySection = styled.div`
  flex: 1;
  width: 100%;
  
  @media (min-width: 768px) {
    width: 600px;
  }
`;

const SummarySection = styled.div`
  @media (min-width: 1024px) {
    width: 40%;
    position: sticky;
    top: 100px;
    align-self: flex-start;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    padding: 32px;
    margin-bottom: 24px;
  }
`;

const FormTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 20px 0;
  
  @media (min-width: 768px) {
    font-size: 20px;
    margin: 0 0 24px 0;
  }
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }
`;

const AddressInfo = styled.div`
  flex: 1;
  padding: 12px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  height: fit-content;
  
  @media (min-width: 768px) {
    padding: 16px;
  }
`;

const AddressName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #111827;
  margin-bottom: 6px;
  
  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const AddressDetails = styled.div`
  color: #6b7280;
  line-height: 1.5;
  font-size: 13px;
  
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const AddressInstructions = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #e5e7eb;
  font-size: 13px;
  color: #6b7280;
  
  @media (min-width: 768px) {
    margin-top: 12px;
    padding-top: 12px;
    font-size: 14px;
  }
`;

const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media (min-width: 768px) {
    flex-direction: row;
  gap: 16px;
  }
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  
  @media (min-width: 768px) {
    width: fit-content;
    padding: 16px;
  }
  
  &:hover {
    border-color: #EC575C;
    background-color: #fef7f7;
  }
`;

const PaymentOptionSelected = styled(PaymentOption)`
  border-color: #EC575C;
  background-color: #fef7f7;
`;

const PaymentRadio = styled.input`
  display: none;
`;

const PaymentIcon = styled.img`
  width: 60px;
  height: 36px;
  object-fit: contain;
`;

const MastercardIcon = styled.img`
  width: 40px;
  height: 22px;
  object-fit: contain;
  
  @media (min-width: 768px) {
    width: 56px;
    height: 30px;
  }
`;

const VisaIcon = styled.img`
  width: 40px;
  height: 22px;
  object-fit: contain;
  
  @media (min-width: 768px) {
    width: 96px;
    height: 30px;
  }
`;

const PayPalIcon = styled.img`
  width: 64px;
  height: 16px;
  object-fit: contain;
  
  @media (min-width: 768px) {
    width: 120px;
    height: 30px;
  }
`;

const PaymentText = styled.div`
  text-align: center;
`;

const PaymentTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #111827;
`;

const PaymentDescription = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-top: 2px;
`;

// Address Modal Styles
const AddressModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
  
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const AddressModalContent = styled.div`
  background-color: white;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideIn 0.3s ease;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AddressModalHeader = styled.div`
  padding: 16px 16px 0 16px;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
  
  @media (min-width: 768px) {
    padding: 24px 24px 0 24px;
  }
`;

const AddressModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 20px 0;
  
  @media (min-width: 768px) {
    font-size: 24px;
    margin: 0 0 24px 0;
  }
`;

const AddressModalCloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #6b7280;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`;

const AddressModalBody = styled.div`
  padding: 16px;
  
  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const AddressModalFooter = styled.div`
  padding: 0 16px 16px 16px;
  display: flex;
  gap: 10px;
  
  @media (min-width: 768px) {
    padding: 0 24px 24px 24px;
    gap: 12px;
  }
`;

const FormField = styled.div`
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const FormLabel = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 6px;
  
  @media (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: 2px solid #EC575C;
    outline-offset: 2px;
    border-color: #EC575C;
  }
  
  &::placeholder {
    color: #9ca3af;
  }
  
  @media (min-width: 768px) {
    padding: 12px 16px;
    font-size: 16px;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background-color: white;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: 2px solid #EC575C;
    outline-offset: 2px;
    border-color: #EC575C;
  }
  
  @media (min-width: 768px) {
    padding: 12px 16px;
    font-size: 16px;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  
  @media (min-width: 768px) {
    gap: 16px;
  }
`;

const DeliveryInfo = ({ 
  basketItems = [], 
  onPlaceOrder,
  onLogoClick,
  onBackToBasket,
  deliveryInfo = {},
  onDeliveryInfoChange,
  paymentMethod = '',
  onPaymentMethodChange,
}) => {
  // Updated mockup data
  const defaultAddress = {
    firstName: 'Dupe',
    lastName: 'Thompson',
    address: '3543, Garki',
    city: 'Abuja',
    state: 'NY',
    zipCode: '10001',
    deliveryInstructions: 'Please ring doorbell and leave at front door',
  };

  const [currentAddress, setCurrentAddress] = useState({
    ...defaultAddress,
    ...deliveryInfo
  });
  
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [addressFormData, setAddressFormData] = useState(currentAddress);

  const subtotal = basketItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const deliveryFee = 3.99;
  const total = subtotal + tax + deliveryFee;

  const handlePaymentMethodChange = (method) => {
    if (onPaymentMethodChange) {
      onPaymentMethodChange(method);
    }
  };

  const handlePlaceOrder = () => {
    if (onPlaceOrder) {
      onPlaceOrder({
        deliveryInfo: currentAddress,
        paymentMethod,
        orderTotal: total,
      });
    }
  };

  const handleOpenAddressModal = () => {
    setAddressFormData(currentAddress);
    setIsAddressModalOpen(true);
  };

  const handleCloseAddressModal = () => {
    setIsAddressModalOpen(false);
  };

  const handleAddressFormChange = (field, value) => {
    setAddressFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveAddress = () => {
    const newAddress = { ...addressFormData };
    setCurrentAddress(newAddress);
    if (onDeliveryInfoChange) {
      onDeliveryInfoChange(newAddress);
    }
    setIsAddressModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseAddressModal();
    }
  };

  const isFormValid = paymentMethod;

  return (
    <PageContainer>
      <Header onLogoClick={onLogoClick} />
      
      <MainContent>
        <ContentWrapper>
          <DeliveryLayout>
            <MainContentGroup>
              <PageTitle>Delivery Information</PageTitle>
                  
              <DeliverySection>
              <FormContainer>
                <AddressContainer>
                  <AddressInfo>
                    <AddressName>
                      {currentAddress.firstName} {currentAddress.lastName}
                    </AddressName>
                    <AddressDetails>
                      {currentAddress.address}<br />
                      {currentAddress.city}, {currentAddress.state} {currentAddress.zipCode}
                    </AddressDetails>
                    {currentAddress.deliveryInstructions && (
                      <AddressInstructions>
                        <strong>Instructions:</strong> {currentAddress.deliveryInstructions}
                      </AddressInstructions>
                    )}
                  </AddressInfo>
                  <EditButton
                    variant="secondary"
                    onClick={handleOpenAddressModal}
                  >
                    Edit
                  </EditButton>
                </AddressContainer>
              </FormContainer>
              
              <FormContainer>
                <FormTitle>Payment Method</FormTitle>
                <PaymentMethodContainer>
                  {paymentMethod === 'mastercard' ? (
                    <PaymentOptionSelected>
                      <PaymentRadio
                        type="radio"
                        name="paymentMethod"
                        value="mastercard"
                        checked={paymentMethod === 'mastercard'}
                        onChange={() => handlePaymentMethodChange('mastercard')}
                      />
                      <MastercardIcon src={mastercardIcon} alt="Mastercard" />
                    </PaymentOptionSelected>
                  ) : (
                    <PaymentOption>
                      <PaymentRadio
                        type="radio"
                        name="paymentMethod"
                        value="mastercard"
                        checked={paymentMethod === 'mastercard'}
                        onChange={() => handlePaymentMethodChange('mastercard')}
                      />
                      <MastercardIcon src={mastercardIcon} alt="Mastercard" />
                    </PaymentOption>
                  )}
                  
                  {paymentMethod === 'visa' ? (
                    <PaymentOptionSelected>
                      <PaymentRadio
                        type="radio"
                        name="paymentMethod"
                        value="visa"
                        checked={paymentMethod === 'visa'}
                        onChange={() => handlePaymentMethodChange('visa')}
                      />
                      <VisaIcon src={visaIcon} alt="Visa" />
                    </PaymentOptionSelected>
                  ) : (
                    <PaymentOption>
                      <PaymentRadio
                        type="radio"
                        name="paymentMethod"
                        value="visa"
                        checked={paymentMethod === 'visa'}
                        onChange={() => handlePaymentMethodChange('visa')}
                      />
                      <VisaIcon src={visaIcon} alt="Visa" />
                    </PaymentOption>
                  )}
                  
                  {paymentMethod === 'paypal' ? (
                    <PaymentOptionSelected>
                      <PaymentRadio
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={() => handlePaymentMethodChange('paypal')}
                      />
                      <PayPalIcon src={paypalIcon} alt="PayPal" />
                    </PaymentOptionSelected>
                  ) : (
                    <PaymentOption>
                      <PaymentRadio
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={() => handlePaymentMethodChange('paypal')}
                      />
                      <PayPalIcon src={paypalIcon} alt="PayPal" />
                    </PaymentOption>
                  )}
                </PaymentMethodContainer>
              </FormContainer>
            </DeliverySection>
            </MainContentGroup>
            
            <SummarySection>
              <OrderSummary
                items={basketItems}
                subtotal={subtotal}
                tax={tax}
                total={total}
                deliveryFee={2.99}
                onCheckout={handlePlaceOrder}
                checkoutButtonText="Place Order"
                showCheckoutButton={isFormValid}
              />
            </SummarySection>
          </DeliveryLayout>
        </ContentWrapper>
      </MainContent>
      
      <Footer />
      
      {/* Custom Address Modal */}
      {isAddressModalOpen && (
        <AddressModalOverlay onClick={handleOverlayClick}>
          <AddressModalContent>
            <AddressModalHeader>
              <AddressModalTitle>Edit Delivery Address</AddressModalTitle>
              <AddressModalCloseButton onClick={handleCloseAddressModal}>
                ×
              </AddressModalCloseButton>
            </AddressModalHeader>
            
            <AddressModalBody>
              <FormGrid>
                <FormField>
                  <FormLabel>First Name *</FormLabel>
                  <FormInput
                    type="text"
                    value={addressFormData.firstName}
                    onChange={(e) => handleAddressFormChange('firstName', e.target.value)}
                    placeholder="Enter first name"
                    required
                  />
                </FormField>
                
                <FormField>
                  <FormLabel>Last Name *</FormLabel>
                  <FormInput
                    type="text"
                    value={addressFormData.lastName}
                    onChange={(e) => handleAddressFormChange('lastName', e.target.value)}
                    placeholder="Enter last name"
                    required
                  />
                </FormField>
              </FormGrid>
              
              <FormField>
                <FormLabel>Street Address *</FormLabel>
                <FormInput
                  type="text"
                  value={addressFormData.address}
                  onChange={(e) => handleAddressFormChange('address', e.target.value)}
                  placeholder="Enter your street address"
                  required
                />
              </FormField>
              
              <FormGrid>
                <FormField>
                  <FormLabel>City *</FormLabel>
                  <FormInput
                    type="text"
                    value={addressFormData.city}
                    onChange={(e) => handleAddressFormChange('city', e.target.value)}
                    placeholder="Enter your city"
                    required
                  />
                </FormField>
                
                <FormField>
                  <FormLabel>State *</FormLabel>
                  <FormSelect
                    value={addressFormData.state}
                    onChange={(e) => handleAddressFormChange('state', e.target.value)}
                    required
                  >
                    <option value="">Select State</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                    <option value="IL">Illinois</option>
                  </FormSelect>
                </FormField>
              </FormGrid>
              
              <FormField>
                <FormLabel>ZIP Code *</FormLabel>
                <FormInput
                  type="text"
                  value={addressFormData.zipCode}
                  onChange={(e) => handleAddressFormChange('zipCode', e.target.value)}
                  placeholder="Enter ZIP code"
                  required
                />
              </FormField>
              
              <FormField>
                <FormLabel>Delivery Instructions</FormLabel>
                <FormInput
                  type="text"
                  value={addressFormData.deliveryInstructions}
                  onChange={(e) => handleAddressFormChange('deliveryInstructions', e.target.value)}
                  placeholder="Any special delivery instructions (optional)"
                />
              </FormField>
            </AddressModalBody>
            
            <AddressModalFooter>
              <Button
                variant="secondary"
                onClick={handleCloseAddressModal}
                style={{ flex: 1 }}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleSaveAddress}
                style={{ flex: 1 }}
                disabled={!addressFormData.firstName || !addressFormData.lastName || !addressFormData.address || !addressFormData.city || !addressFormData.state || !addressFormData.zipCode}
              >
                Save Address
              </Button>
            </AddressModalFooter>
          </AddressModalContent>
        </AddressModalOverlay>
      )}
    </PageContainer>
  );
};

export default DeliveryInfo; 