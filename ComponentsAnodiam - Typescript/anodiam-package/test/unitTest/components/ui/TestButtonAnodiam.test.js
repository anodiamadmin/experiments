import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonAnodiam from '../../../../components/ui/ButtonAnodiam';
import { Colors } from '@/assets/Colors';
import { useColorScheme } from 'react-native';

// jest.mock('react-native', () => {
//   const originalModule = jest.requireActual('react-native');
//   return {
//     ...originalModule,
//     useColorScheme: jest.fn(),
//   };
// });

describe('ButtonAnodiam Component', () => {
  describe('Default Rendering', () => {
    test('renders with default values', () => {
      useColorScheme.mockReturnValue('light');
      const { getByText } = render(<ButtonAnodiam />);

      const button = getByText('Button-Anodiam');
      expect(button).toBeTruthy();

      const { backgroundColor, borderColor } = button.parent.props.style;

      expect(backgroundColor).toBe(Colors.ANODIAM);
      expect(borderColor).toBe(Colors.WHITE);
    });
  });

  describe('Custom Button Text', () => {
    test('renders custom buttonText when provided', () => {
      const customText = 'Custom Button';
      const { getByText } = render(<ButtonAnodiam buttonText={customText} />);

      const button = getByText(customText);
      expect(button).toBeTruthy();
    });
  });

  describe('Button Styles', () => {
    test('applies correct styles for primary button in light mode', () => {
      useColorScheme.mockReturnValue('light');
      const { getByText } = render(<ButtonAnodiam buttonType="primary" />);

      const button = getByText('Button-Anodiam');
      const { backgroundColor, borderColor } = button.parent.props.style;

      expect(backgroundColor).toBe(Colors.ANODIAM);
      expect(borderColor).toBe(Colors.WHITE);
    });

    test('applies correct styles for secondary button in light mode', () => {
      useColorScheme.mockReturnValue('light');
      const { getByText } = render(<ButtonAnodiam buttonType="secondary" />);

      const button = getByText('Button-Anodiam');
      const { backgroundColor } = button.parent.props.style;

      expect(backgroundColor).toBe(Colors.light.ANODIAM_LIGHTEST);
    });

    test('applies correct styles for hyperlink button in light mode', () => {
      useColorScheme.mockReturnValue('light');
      const { getByText } = render(<ButtonAnodiam buttonType="hyperlink" />);

      const button = getByText('Button-Anodiam');
      expect(button.parent.props.style.borderWidth).toBe(0);
    });

    test('adapts styles to dark mode for primary button', () => {
      useColorScheme.mockReturnValue('dark');
      const { getByText } = render(<ButtonAnodiam buttonType="primary" />);

      const button = getByText('Button-Anodiam');
      const { backgroundColor, borderColor } = button.parent.props.style;

      expect(backgroundColor).toBe(Colors.ANODIAM);
      expect(borderColor).toBe(Colors.dark.CONTRAST_PALE);
    });
  });

  describe('Interactions', () => {
    test('triggers onPrsBtnAnodiam function when button is pressed', () => {
      useColorScheme.mockReturnValue('light');
      const mockOnPress = jest.fn();
      const { getByText } = render(<ButtonAnodiam onPrsBtnAnodiam={mockOnPress} />);

      const button = getByText('Button-Anodiam');
      fireEvent.press(button);
      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });
  });

  describe('Error Handling', () => {
    test('fallbacks to default values when props are missing or undefined', () => {
      const { getByText } = render(<ButtonAnodiam />);
      const button = getByText('Button-Anodiam');

      expect(button.parent.props.style.backgroundColor).toBe(Colors.ANODIAM);
    });

    test('handles invalid prop types gracefully', () => {
      const consoleWarn = jest.spyOn(console, 'warn').mockImplementation();

      render(<ButtonAnodiam buttonType={12345} />);
      expect(consoleWarn).toHaveBeenCalled();
      consoleWarn.mockRestore();
    });
  });
});
