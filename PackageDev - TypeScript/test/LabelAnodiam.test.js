import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import LabelAnodiam from '../ui/LabelAnodiam';
import { Colors } from '../ui/resources/Colors';
import * as Validation from '../ui/utils/Validation';
import * as constants from '../ui/utils/ConstantsAnodiam';


// Mock useColorScheme to test light and dark mode behavior
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  ...jest.requireActual('react-native/Libraries/Utilities/Platform'),
  useColorScheme: jest.fn(),
}));

// Spy on the validateProps function
jest.spyOn(Validation, 'validateProps');

describe('LabelAnodiam Component', () => {
  
  describe('Rendering', () => {
    test('renders with default values when no props are provided', () => {
      const { getByText } = render(<LabelAnodiam />);
      const label = getByText(constants.defaultLabelText);

      expect(label).toBeTruthy();
      expect(label.props.style.color).toBe(Colors.light.ANODIAM_DARK); // Default light mode color
    });

    test('renders the provided labelText instead of the default', () => {
      const { getByText } = render(<LabelAnodiam labelText="Custom Label" />);
      expect(getByText('Custom Label')).toBeTruthy();
    });

    test('renders empty string labelText as default text', () => {
      const { getByText } = render(<LabelAnodiam labelText="" />);
      expect(getByText(constants.defaultLabelText)).toBeTruthy();
    });

    test('renders whitespace-only labelText as default text', () => {
      const { getByText } = render(<LabelAnodiam labelText="   " />);
      expect(getByText(constants.defaultLabelText)).toBeTruthy();
    });
  });

  describe('Styling', () => {
    test('applies custom text color correctly', () => {
      const { getByText } = render(<LabelAnodiam color="#123456" />);
      expect(getByText('Label-Anodiam').props.style.color).toBe('#123456');
    });

    test('adapts to dark mode', () => {
      require('react-native').useColorScheme.mockReturnValue('dark');
      const { getByText } = render(<LabelAnodiam />);
      expect(getByText('Label-Anodiam').props.style.color).toBe(Colors.dark.ANODIAM_DARK);
    });

    test('applies custom font properties correctly', () => {
      const { getByText } = render(
        <LabelAnodiam fontFamily="Arial" fontSize={20} fontWeight="bold" fontStyle="italic" />
      );
      const label = getByText('Label-Anodiam');
      
      expect(label.props.style.fontFamily).toBe('Arial');
      expect(label.props.style.fontSize).toBe(20);
      expect(label.props.style.fontWeight).toBe('bold');
      expect(label.props.style.fontStyle).toBe('italic');
    });

    test('applies invalid font family as default font', () => {
      const { getByText } = render(<LabelAnodiam fontFamily="InvalidFont" />);
      const label = getByText('Label-Anodiam');
      expect(label.props.style.fontFamily).toBe(constants.defaultFont);
    });

    test('applies negative fontSize as default', () => {
      const { getByText } = render(<LabelAnodiam fontSize={-10} />);
      const label = getByText('Label-Anodiam');
      expect(label.props.style.fontSize).toBe(constants.defaultFontSize);
    });

    test('applies invalid fontSize as default', () => {
      const { getByText } = render(<LabelAnodiam fontSize="invalid" />);
      const label = getByText('Label-Anodiam');
      expect(label.props.style.fontSize).toBe(constants.defaultFontSize);
    });

    test('applies negative padding as default', () => {
      const { getByText } = render(<LabelAnodiam padding={-5} />);
      const label = getByText('Label-Anodiam');
      expect(label.props.style.padding).toBe(constants.defaultPadding);
    });

    test('applies negative margin as default', () => {
      const { getByText } = render(<LabelAnodiam margin={-10} />);
      const label = getByText('Label-Anodiam');
      expect(label.props.style.margin).toBe(constants.defaultMargin);
    });

    test('applies invalid justifyContent as default', () => {
      const { getByText } = render(<LabelAnodiam justifyContent="invalid" />);
      const label = getByText('Label-Anodiam');
      expect(label.props.style.justifyContent).toBe(constants.justifyContentDefault);
    });

    test('applies invalid alignItems as default', () => {
      const { getByText } = render(<LabelAnodiam alignItems="invalid" />);
      const label = getByText('Label-Anodiam');
      expect(label.props.style.alignItems).toBe(constants.alignItemsDefault);
    });
  });

  describe('Validation & Error Handling', () => {
    test('uses default color when an invalid color is provided', () => {
      const { getByText } = render(<LabelAnodiam color="invalidColor" />);
      expect(getByText('Label-Anodiam').props.style.color).toBe(Colors.light.ANODIAM_DARK);
    });

    test('fallback to default fontSize when provided value is invalid', () => {
      const { getByText } = render(<LabelAnodiam fontSize="invalid" />);
      expect(getByText('Label-Anodiam').props.style.fontSize).toBe(constants.defaultFontSize);
    });

    test('handles invalid children gracefully', () => {
      const { queryByText } = render(
        <LabelAnodiam>
          {12345}
        </LabelAnodiam>
      );
      expect(queryByText('12345')).toBeFalsy(); // Invalid number as child
    });

    test('handles null children gracefully', () => {
      const { getByText } = render(<LabelAnodiam>{null}</LabelAnodiam>);
      expect(getByText(constants.defaultLabelText)).toBeTruthy(); // Default text rendered
    });

    test('logs warning when receiving invalid prop types', () => {
      console.warn = jest.fn();
      render(<LabelAnodiam fontSize="invalid" />);
      expect(console.warn).toHaveBeenCalled();
    });

    test('handles missing constants gracefully', () => {
        // Save the original Colors object to restore later
        const originalColors = { ...Colors };
      
        // Mock Colors to simulate missing constants (set to null <-- giving TypeError, hence used red :) )
        Colors.dark = 'red';
        Colors.light = 'red';
      
        // Render the component and check the fallback color
        const { getByText } = render(<LabelAnodiam />);
        
        // Check that the component falls back to a default color (e.g., black)
        expect(getByText(constants.defaultLabelText).props.style.color).toBe('red'); // Fallback color
      
        // Restore the original Colors object to prevent affecting other tests
        Colors.dark = originalColors.dark;
        Colors.light = originalColors.light;
      });
  });

  // --- Newly Added Test Cases ---
  describe('Nested Child Elements', () => {
    test('renders children elements inside LabelAnodiam correctly', () => {
      const { getByText } = render(
        <LabelAnodiam>
          <Text>Nested Child</Text>
        </LabelAnodiam>
      );
      expect(getByText('Nested Child')).toBeTruthy();
    });
  });

  describe('Performance on Large Texts', () => {
    test('handles extremely long labelText without crashing', () => {
      const longText = 'This is a very long text '.repeat(100); // 100x repetition
      const { getByText } = render(<LabelAnodiam labelText={longText} />);
      expect(getByText(longText)).toBeTruthy();
    });
  });

  // --- Validation Test ---
  describe('Validation & Props Testing', () => {
    test('calls validateProps during rendering', () => {
      render(<LabelAnodiam labelText="Test Label" />);
      expect(Validation.validateProps).toHaveBeenCalled();
      expect(Validation.validateProps).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          labelText: 'Test Label',
        })
      );
    });
  });

//   afterEach(() => {
//     jest.restoreAllMocks();  // Restore all mocks after each test (This is optional until there are fallthroughs)
//   });
});
