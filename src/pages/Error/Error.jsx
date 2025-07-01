import styled from '@emotion/styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ErrorCard from '../../components/ErrorCard/ErrorCard';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const Error = ({ 
  title,
  message,
  errorDetails,
  onRetry,
  onGoBack,
  onLogoClick,
}) => {
  return (
    <PageContainer>
      <Header onLogoClick={onLogoClick} />
      
      <MainContent>
        <ErrorCard
          title={title}
          message={message}
          errorDetails={errorDetails}
          onRetry={onRetry}
          onGoBack={onGoBack}
        />
      </MainContent>
      
      <Footer />
    </PageContainer>
  );
};

export default Error; 