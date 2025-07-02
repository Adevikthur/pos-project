import { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Button from '../../components/Button/Button';
import OverlayModal from '../../components/OverlayModal/OverlayModal';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 24px 20px;
  
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 32px 0;
  
  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const DeliveryLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const DeliverySection = styled.div`
  flex: 1;
  
  @media (min-width: 1024px) {
    max-width: 60%;
  }
`;

const SummarySection = styled.div`
  @media (min-width: 1024px) {
    max-width: 40%;
    position: sticky;
    top: 100px;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const FormTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 24px 0;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FieldLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`;

const FieldInput = styled.input`
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: 2px solid #EC575C;
    outline-offset: 2px;
    border-color: #EC575C;
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const FieldSelect = styled.select`
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: 2px solid #EC575C;
    outline-offset: 2px;
    border-color: #EC575C;
  }
`;

const FullWidthField = styled(FormField)`
  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;

const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
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

const PaymentIcon = styled.span`
  font-size: 24px;
`;

const PaymentText = styled.div`
  flex: 1;
`;

const PaymentTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #111827;
`;

const PaymentDescription = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-top: 2px;
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
  const [formData, setFormData] = useState({
    firstName: deliveryInfo.firstName || '',
    lastName: deliveryInfo.lastName || '',
    email: deliveryInfo.email || '',
    phone: deliveryInfo.phone || '',
    address: deliveryInfo.address || '',
    city: deliveryInfo.city || '',
    state: deliveryInfo.state || '',
    zipCode: deliveryInfo.zipCode || '',
    deliveryInstructions: deliveryInfo.deliveryInstructions || '',
  });
  
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [addressFormData, setAddressFormData] = useState({
    address: formData.address || '',
    city: formData.city || '',
    state: formData.state || '',
    zipCode: formData.zipCode || '',
    deliveryInstructions: formData.deliveryInstructions || '',
  });

  const subtotal = basketItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const deliveryFee = 3.99;
  const total = subtotal + tax + deliveryFee;

  const handleInputChange = (field, value) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    if (onDeliveryInfoChange) {
      onDeliveryInfoChange(newFormData);
    }
  };

  const handlePaymentMethodChange = (method) => {
    if (onPaymentMethodChange) {
      onPaymentMethodChange(method);
    }
  };

  const handlePlaceOrder = () => {
    if (onPlaceOrder) {
      onPlaceOrder({
        deliveryInfo: formData,
        paymentMethod,
        orderTotal: total,
      });
    }
  };

  const handleOpenAddressModal = () => {
    setAddressFormData({
      address: formData.address || '',
      city: formData.city || '',
      state: formData.state || '',
      zipCode: formData.zipCode || '',
      deliveryInstructions: formData.deliveryInstructions || '',
    });
    setIsAddressModalOpen(true);
  };

  const handleCloseAddressModal = () => {
    setIsAddressModalOpen(false);
  };

  const handleAddressFormChange = (field, value) => {
    setAddressFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveAddress = () => {
    const newFormData = { ...formData, ...addressFormData };
    setFormData(newFormData);
    if (onDeliveryInfoChange) {
      onDeliveryInfoChange(newFormData);
    }
    setIsAddressModalOpen(false);
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && 
                     formData.phone && formData.address && formData.city && 
                     formData.state && formData.zipCode && paymentMethod;

  return (
    <PageContainer>
      <Header onLogoClick={onLogoClick} />
      
      <MainContent>
        <ContentWrapper>
          <PageTitle>Delivery Information</PageTitle>
          
          <DeliveryLayout>
            <DeliverySection>
              <FormContainer>
                <FormTitle>Contact Information</FormTitle>
                <FormGrid>
                  <FormField>
                    <FieldLabel htmlFor="firstName">First Name *</FieldLabel>
                    <FieldInput
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Enter your first name"
                      required
                    />
                  </FormField>
                  
                  <FormField>
                    <FieldLabel htmlFor="lastName">Last Name *</FieldLabel>
                    <FieldInput
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Enter your last name"
                      required
                    />
                  </FormField>
                  
                  <FormField>
                    <FieldLabel htmlFor="email">Email Address *</FieldLabel>
                    <FieldInput
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </FormField>
                  
                  <FormField>
                    <FieldLabel htmlFor="phone">Phone Number *</FieldLabel>
                    <FieldInput
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </FormField>
                </FormGrid>
              </FormContainer>
              
              <FormContainer>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <FormTitle>Delivery Address</FormTitle>
                  <Button
                    variant="secondary"
                    onClick={handleOpenAddressModal}
                    style={{ fontSize: '14px', padding: '8px 16px' }}
                  >
                    {formData.address ? 'Edit Address' : 'Add Address'}
                  </Button>
                </div>
                
                {formData.address ? (
                  <div style={{ 
                    padding: '16px', 
                    backgroundColor: '#f9fafb', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '8px',
                    marginBottom: '16px'
                  }}>
                    <div style={{ fontWeight: '500', marginBottom: '8px' }}>
                      {formData.firstName} {formData.lastName}
                    </div>
                    <div style={{ color: '#6b7280', lineHeight: '1.5' }}>
                      {formData.address}<br />
                      {formData.city}, {formData.state} {formData.zipCode}
                      {formData.deliveryInstructions && (
                        <>
                          <br />
                          <strong>Instructions:</strong> {formData.deliveryInstructions}
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <div style={{ 
                    padding: '16px', 
                    backgroundColor: '#fef7f7', 
                    border: '1px solid #fecaca', 
                    borderRadius: '8px',
                    color: '#dc2626',
                    textAlign: 'center'
                  }}>
                    No delivery address set. Please add an address to continue.
                  </div>
                )}
              </FormContainer>
              
              <FormContainer>
                <FormTitle>Payment Method</FormTitle>
                <PaymentMethodContainer>
                  {paymentMethod === 'card' ? (
                    <PaymentOptionSelected>
                      <PaymentRadio
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={() => handlePaymentMethodChange('card')}
                      />
                      <PaymentIcon>💳</PaymentIcon>
                      <PaymentText>
                        <PaymentTitle>Credit/Debit Card</PaymentTitle>
                        <PaymentDescription>Pay securely with your card</PaymentDescription>
                      </PaymentText>
                    </PaymentOptionSelected>
                  ) : (
                    <PaymentOption>
                      <PaymentRadio
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={() => handlePaymentMethodChange('card')}
                      />
                      <PaymentIcon>💳</PaymentIcon>
                      <PaymentText>
                        <PaymentTitle>Credit/Debit Card</PaymentTitle>
                        <PaymentDescription>Pay securely with your card</PaymentDescription>
                      </PaymentText>
                    </PaymentOption>
                  )}
                  
                  {paymentMethod === 'cash' ? (
                    <PaymentOptionSelected>
                      <PaymentRadio
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={paymentMethod === 'cash'}
                        onChange={() => handlePaymentMethodChange('cash')}
                      />
                      <PaymentIcon>💵</PaymentIcon>
                      <PaymentText>
                        <PaymentTitle>Cash on Delivery</PaymentTitle>
                        <PaymentDescription>Pay with cash when your order arrives</PaymentDescription>
                      </PaymentText>
                    </PaymentOptionSelected>
                  ) : (
                    <PaymentOption>
                      <PaymentRadio
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={paymentMethod === 'cash'}
                        onChange={() => handlePaymentMethodChange('cash')}
                      />
                      <PaymentIcon>💵</PaymentIcon>
                      <PaymentText>
                        <PaymentTitle>Cash on Delivery</PaymentTitle>
                        <PaymentDescription>Pay with cash when your order arrives</PaymentDescription>
                      </PaymentText>
                    </PaymentOption>
                  )}
                  
                  {paymentMethod === 'digital' ? (
                    <PaymentOptionSelected>
                      <PaymentRadio
                        type="radio"
                        name="paymentMethod"
                        value="digital"
                        checked={paymentMethod === 'digital'}
                        onChange={() => handlePaymentMethodChange('digital')}
                      />
                      <PaymentIcon>📱</PaymentIcon>
                      <PaymentText>
                        <PaymentTitle>Digital Wallet</PaymentTitle>
                        <PaymentDescription>Pay with Apple Pay, Google Pay, or PayPal</PaymentDescription>
                      </PaymentText>
                    </PaymentOptionSelected>
                  ) : (
                    <PaymentOption>
                      <PaymentRadio
                        type="radio"
                        name="paymentMethod"
                        value="digital"
                        checked={paymentMethod === 'digital'}
                        onChange={() => handlePaymentMethodChange('digital')}
                      />
                      <PaymentIcon>📱</PaymentIcon>
                      <PaymentText>
                        <PaymentTitle>Digital Wallet</PaymentTitle>
                        <PaymentDescription>Pay with Apple Pay, Google Pay, or PayPal</PaymentDescription>
                      </PaymentText>
                    </PaymentOption>
                  )}
                </PaymentMethodContainer>
              </FormContainer>
            </DeliverySection>
            
            <SummarySection>
              <OrderSummary
                items={basketItems}
                subtotal={subtotal}
                tax={tax}
                total={total}
                onCheckout={handlePlaceOrder}
                checkoutButtonText="Place Order"
                showCheckoutButton={isFormValid}
              />
            </SummarySection>
          </DeliveryLayout>
        </ContentWrapper>
      </MainContent>
      
      <Footer />
      
      <OverlayModal 
        isOpen={isAddressModalOpen} 
        onClose={handleCloseAddressModal}
      >
        <div style={{ padding: '24px', maxWidth: '500px', width: '100%' }}>
          <h2 style={{ margin: '0 0 24px 0', fontSize: '24px', fontWeight: '600' }}>
            {formData.address ? 'Edit Delivery Address' : 'Add Delivery Address'}
          </h2>
          
          <div style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                Street Address *
              </label>
              <input
                type="text"
                value={addressFormData.address}
                onChange={(e) => handleAddressFormChange('address', e.target.value)}
                placeholder="Enter your street address"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
                required
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                  City *
                </label>
                <input
                  type="text"
                  value={addressFormData.city}
                  onChange={(e) => handleAddressFormChange('city', e.target.value)}
                  placeholder="Enter your city"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  required
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                  State *
                </label>
                <select
                  value={addressFormData.state}
                  onChange={(e) => handleAddressFormChange('state', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '16px',
                    backgroundColor: 'white'
                  }}
                  required
                >
                  <option value="">Select State</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                  <option value="FL">Florida</option>
                  <option value="IL">Illinois</option>
                </select>
              </div>
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                ZIP Code *
              </label>
              <input
                type="text"
                value={addressFormData.zipCode}
                onChange={(e) => handleAddressFormChange('zipCode', e.target.value)}
                placeholder="Enter ZIP code"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
                required
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                Delivery Instructions
              </label>
              <input
                type="text"
                value={addressFormData.deliveryInstructions}
                onChange={(e) => handleAddressFormChange('deliveryInstructions', e.target.value)}
                placeholder="Any special delivery instructions (optional)"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
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
              disabled={!addressFormData.address || !addressFormData.city || !addressFormData.state || !addressFormData.zipCode}
            >
              Save Address
            </Button>
          </div>
        </div>
      </OverlayModal>
    </PageContainer>
  );
};

export default DeliveryInfo; 