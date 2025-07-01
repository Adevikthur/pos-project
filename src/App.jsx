import { useState } from 'react'
import styled from '@emotion/styled'
import MainMenu from './pages/MainMenu/MainMenu'
import Basket from './pages/Basket/Basket'
import DeliveryInfo from './pages/DeliveryInfo/DeliveryInfo'
import Success from './pages/Success/Success'
import Error from './pages/Error/Error'

const AppContainer = styled.div`
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

// Simple routing system
const ROUTES = {
  MENU: 'menu',
  BASKET: 'basket',
  DELIVERY: 'delivery',
  SUCCESS: 'success',
  ERROR: 'error',
}

const App = () => {
  const [currentRoute, setCurrentRoute] = useState(ROUTES.MENU)
  const [basketItems, setBasketItems] = useState([])
  const [specialInstructions, setSpecialInstructions] = useState('')
  const [deliveryInfo, setDeliveryInfo] = useState({})
  const [paymentMethod, setPaymentMethod] = useState('')
  const [orderNumber, setOrderNumber] = useState('')
  const [errorInfo, setErrorInfo] = useState({})

  const handleAddToBasket = (item) => {
    setBasketItems(prev => [...prev, item])
  }

  const handleQuantityChange = (itemId, newQuantity) => {
    setBasketItems(prev => 
      prev.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const handleRemoveItem = (itemId) => {
    setBasketItems(prev => prev.filter(item => item.id !== itemId))
  }

  const handleBasketClick = () => {
    setCurrentRoute(ROUTES.BASKET)
  }

  const handleLogoClick = () => {
    setCurrentRoute(ROUTES.MENU)
  }

  const handleCheckout = () => {
    setCurrentRoute(ROUTES.DELIVERY)
  }

  const handleBackToMenu = () => {
    setCurrentRoute(ROUTES.MENU)
  }

  const handlePlaceOrder = (orderData) => {
    // Simulate order processing
    console.log('Placing order:', orderData)
    
    // Simulate success/failure
    const isSuccess = Math.random() > 0.1 // 90% success rate
    
    if (isSuccess) {
      const newOrderNumber = `ORD-${Date.now().toString().slice(-6)}`
      setOrderNumber(newOrderNumber)
      setCurrentRoute(ROUTES.SUCCESS)
      
      // Clear basket after successful order
      setBasketItems([])
      setSpecialInstructions('')
      setDeliveryInfo({})
      setPaymentMethod('')
    } else {
      setErrorInfo({
        title: 'Order Failed',
        message: 'We were unable to process your order. Please try again.',
        errorDetails: 'Payment processing error. Please check your payment method and try again.',
      })
      setCurrentRoute(ROUTES.ERROR)
    }
  }

  const handleViewReceipt = () => {
    // In a real app, this would open a receipt modal or navigate to receipt page
    console.log('Viewing receipt for order:', orderNumber)
    alert(`Receipt for order ${orderNumber} would be displayed here.`)
  }

  const handleContinueShopping = () => {
    setCurrentRoute(ROUTES.MENU)
  }

  const handleRetry = () => {
    setCurrentRoute(ROUTES.DELIVERY)
  }

  const handleGoBack = () => {
    setCurrentRoute(ROUTES.DELIVERY)
  }

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case ROUTES.MENU:
        return (
          <MainMenu
            basketItems={basketItems}
            onAddToBasket={handleAddToBasket}
            onBasketClick={handleBasketClick}
            onLogoClick={handleLogoClick}
          />
        )
      
      case ROUTES.BASKET:
        return (
          <Basket
            basketItems={basketItems}
            onQuantityChange={handleQuantityChange}
            onRemoveItem={handleRemoveItem}
            onCheckout={handleCheckout}
            onLogoClick={handleLogoClick}
            onBackToMenu={handleBackToMenu}
            specialInstructions={specialInstructions}
            onSpecialInstructionsChange={setSpecialInstructions}
          />
        )
      
      case ROUTES.DELIVERY:
        return (
          <DeliveryInfo
            basketItems={basketItems}
            onPlaceOrder={handlePlaceOrder}
            onLogoClick={handleLogoClick}
            deliveryInfo={deliveryInfo}
            onDeliveryInfoChange={setDeliveryInfo}
            paymentMethod={paymentMethod}
            onPaymentMethodChange={setPaymentMethod}
          />
        )
      
      case ROUTES.SUCCESS:
        return (
          <Success
            orderNumber={orderNumber}
            onViewReceipt={handleViewReceipt}
            onContinueShopping={handleContinueShopping}
            onLogoClick={handleLogoClick}
          />
        )
      
      case ROUTES.ERROR:
        return (
          <Error
            title={errorInfo.title}
            message={errorInfo.message}
            errorDetails={errorInfo.errorDetails}
            onRetry={handleRetry}
            onGoBack={handleGoBack}
            onLogoClick={handleLogoClick}
          />
        )
      
      default:
        return (
          <MainMenu
            basketItems={basketItems}
            onAddToBasket={handleAddToBasket}
            onBasketClick={handleBasketClick}
            onLogoClick={handleLogoClick}
          />
        )
    }
  }

  return (
    <AppContainer>
      {renderCurrentPage()}
    </AppContainer>
  )
}

export default App
