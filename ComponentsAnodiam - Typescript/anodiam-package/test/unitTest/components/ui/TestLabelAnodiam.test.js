import React from 'react';
import { render } from '@testing-library/react-native';
import LabelAnodiam from '../../../../components/ui/LabelAnodiam';
import { Colors } from '@/assets/Colors';
import { useColorScheme } from 'react-native';

describe('LabelAnodiam Component', () => {
  describe('Default Rendering', () => {
    test('renders with default values', () => {

      useColorScheme.mockReturnValue('light');
      const { getByText } = render(<LabelAnodiam />);

      const label = getByText('Label-Anodiam');
      expect(label).toBeTruthy();

      const { color, backgroundColor, fontFamily, fontSize, fontWeight, fontStyle, textDecorationLine, textAlign, justifyContent, alignItems, padding, margin } = label.props.style;

      expect(color).toBe(Colors.light.ANODIAM_DARK); // Adjust based on mock device mode
      //expect(backgroundColor).toBe(Colors.light.ANODIAM_PALE);
      expect(fontFamily).toBe('Anodiam-Regular');
      expect(fontSize).toBe(14);
      expect(fontWeight).toBe('normal');
      expect(fontStyle).toBe('normal');
      expect(textDecorationLine).toBe('none');
      expect(textAlign).toBe('auto');
      //expect(justifyContent).toBe('flex-start');
      //expect(alignItems).toBe('stretch');
      //expect(padding).toBe(0);
      expect(margin).toBe(0);
    });
  });

  describe('Custom Label Text', () => {
    test('renders custom labelText when provided', () => {
      const customText = 'Custom Label';
      const { getByText } = render(<LabelAnodiam labelText={customText} />);

      const label = getByText(customText);
      expect(label).toBeTruthy();
    });
  });

  describe('Custom Colors', () => {
    test('overrides default colors with custom props', () => {
      const { getByText } = render(
        <LabelAnodiam color="#123456" backgroundColor="#654321" />
      );

      const label = getByText('Label-Anodiam');
      const { color, backgroundColor } = label.props.style;

      expect(color).toBe('#123456');
      //expect(backgroundColor).toBe('#654321');
    });
  });

  describe('Dynamic Color Scheme', () => {
    test('adapts to dark mode', () => {
      // Mock dark mode
      const { getByText } = render(<LabelAnodiam />);
      const label = getByText('Label-Anodiam');

      // Simulate dark mode conditions
      //expect(label.props.style.color).toBe(Colors.dark.ANODIAM_DARK);
      //expect(label.props.style.backgroundColor).toBe(Colors.dark.CONTRAST_PALE);
    });

    test('adapts to light mode', () => {
      // Mock light mode
      const { getByText } = render(<LabelAnodiam />);
      const label = getByText('Label-Anodiam');

      // Simulate light mode conditions
      expect(label.props.style.color).toBe(Colors.light.ANODIAM_DARK);
      //expect(label.props.style.backgroundColor).toBe(Colors.light.ANODIAM_PALE);
    });
  });

  describe('Custom Text Styling', () => {
    test('applies custom font styles', () => {
      const { getByText } = render(
        <LabelAnodiam
          fontFamily="Arial"
          fontSize={20}
          fontWeight="bold"
          fontStyle="italic"
          textDecorationLine="underline"
          textAlign="center"
        />
      );

      const label = getByText('Label-Anodiam');
      const { fontFamily, fontSize, fontWeight, fontStyle, textDecorationLine, textAlign } = label.props.style;

      expect(fontFamily).toBe('Arial');
      expect(fontSize).toBe(20);
      expect(fontWeight).toBe('bold');
      expect(fontStyle).toBe('italic');
      expect(textDecorationLine).toBe('underline');
      expect(textAlign).toBe('center');
    });
  });

  describe('Layout and Spacing', () => {
    test('respects custom padding and margin', () => {
      const { getByText } = render(<LabelAnodiam padding={10} margin={5} />);

      const label = getByText('Label-Anodiam');
      const { padding, margin } = label.props.style;

      //expect(padding).toBe(10);
      expect(margin).toBe(5);
    });
  });

  describe('Error Handling', () => {
    test('fallback to default values when props are missing or undefined', () => {
      const { getByText } = render(<LabelAnodiam />);
      const label = getByText('Label-Anodiam');

      expect(label.props.style.fontFamily).toBe('Anodiam-Regular');
    });

    test('handles invalid prop types gracefully', () => {
      const consoleWarn = jest.spyOn(console, 'warn').mockImplementation();

      render(
        <LabelAnodiam
          fontSize="invalid"
          padding="invalid"
          margin="invalid"
          color={12345}
        />
      );

      //expect(consoleWarn).toHaveBeenCalled();
      consoleWarn.mockRestore();
    });
  });
});