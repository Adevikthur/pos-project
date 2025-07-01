import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 48px;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: 2px solid #EC575C;
    outline-offset: 2px;
  }
  
  ${props => props.variant === 'primary' && `
    background-color: #EC575C;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #d14a4f;
      transform: translateY(-1px);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `}
  
  ${props => props.variant === 'secondary' && `
    background-color: transparent;
    color: #EC575C;
    border: 2px solid #EC575C;
    
    &:hover:not(:disabled) {
      background-color: #EC575C;
      color: white;
      transform: translateY(-1px);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `}
  
  ${props => props.size === 'small' && `
    padding: 8px 16px;
    font-size: 14px;
    min-height: 36px;
  `}
  
  ${props => props.size === 'large' && `
    padding: 16px 32px;
    font-size: 18px;
    min-height: 56px;
  `}
`;

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const handleClick = (e) => {
    if (onClick && !disabled) {
      onClick(e);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };

  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      type={type}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button; 