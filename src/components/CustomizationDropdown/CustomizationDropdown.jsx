import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Import SVG icons
import chevronBigDownIcon from '../../assets/icons/chevron_big_down.svg';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #EC575C;
  }
  
  &:focus {
    outline: 2px solid #EC575C;
    outline-offset: 2px;
  }
  
  &[aria-expanded="true"] {
    border-color: #EC575C;
  }
`;

const SelectedText = styled.span`
  color: ${props => props.hasSelection ? '#111827' : '#9ca3af'};
`;

const Arrow = styled.img`
  width: 12px;
  height: 12px;
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  filter: brightness(0) saturate(100%) invert(47%) sepia(8%) saturate(1234%) hue-rotate(202deg) brightness(91%) contrast(86%);
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-top: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isOpen ? '0' : '-8px'});
  transition: all 0.2s ease;
`;

const Option = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f9fafb;
  }
  
  &:focus {
    background-color: #f3f4f6;
    outline: none;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }
  
  ${props => props.isSelected && `
    background-color: #EC575C;
    color: white;
    
    &:hover {
      background-color: #d14a4f;
    }
  `}
`;

const CustomizationDropdown = ({ 
  options = [], 
  placeholder = 'Select customization...',
  selectedOption,
  onOptionSelect,
  disabled = false,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (option) => {
    if (onOptionSelect) {
      onOptionSelect(option);
    }
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedText = selectedOption ? selectedOption.label : placeholder;

  return (
    <Container ref={containerRef} {...props}>
      <SelectButton
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={placeholder}
        tabIndex={disabled ? -1 : 0}
      >
        <SelectedText hasSelection={!!selectedOption}>
          {selectedText}
        </SelectedText>
        <Arrow 
          isOpen={isOpen} 
          src={chevronBigDownIcon} 
          alt="Toggle dropdown"
        />
      </SelectButton>
      
      <Dropdown isOpen={isOpen} role="listbox">
        {options.map((option) => (
          <Option
            key={option.value}
            onClick={() => handleOptionClick(option)}
            isSelected={selectedOption?.value === option.value}
            tabIndex={isOpen ? 0 : -1}
            role="option"
            aria-selected={selectedOption?.value === option.value}
          >
            {option.label}
          </Option>
        ))}
      </Dropdown>
    </Container>
  );
};

CustomizationDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  placeholder: PropTypes.string,
  selectedOption: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  onOptionSelect: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CustomizationDropdown; 