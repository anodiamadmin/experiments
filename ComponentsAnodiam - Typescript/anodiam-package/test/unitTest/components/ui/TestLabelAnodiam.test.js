import React from 'react';
import { render } from '@testing-library/react-native';
import { useColorScheme } from 'react-native'; // Ensure this is imported correctly
import LabelAnodiam from '../../../../components/ui/LabelAnodiam';
import { Colors } from '@/assets/Colors';
import * as validation from '../../../../components/ui/utils/Validation';

// Mock the Validation module
jest.mock('../../../../components/ui/utils/Validation', () => ({
  validateText: jest.fn(),
  validateColorProp: jest.fn(),
}));

jest.mock('react-native', () => {
  const actualReactNative = jest.requireActual('react-native');
  return {
    ...actualReactNative,
    useColorScheme: jest.fn(),
    NativeModules: {
      ...actualReactNative.NativeModules,
      SettingsManager: {},
    },
  };
});

jest.mock('react-native/Libraries/TurboModule/TurboModuleRegistry', () => ({
  get: jest.fn(),
  getEnforcing: jest.fn(() => ({
    getConstants: jest.fn(() => ({})), // Empty constants
  })),
}));



// describe('LabelAnodiam Component', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('renders correctly with default props', () => {
//     const { getByText } = render(<LabelAnodiam />);
//     const defaultText = 'Label-Anodiam';
//     expect(getByText(defaultText)).toBeTruthy();
//     expect(validation.validateText).toHaveBeenCalledWith(
//       'labelText',
//       defaultText,
//       4096,
//       'LabelAnodiam'
//     );
//     expect(validation.validateColorProp).toHaveBeenCalled();
//   });

//   it('renders custom labelText and applies custom styles', () => {
//     const customProps = {
//       labelText: 'Custom Label',
//       color: '#FF5733',
//       fontFamily: 'Custom-Font',
//       fontSize: 18,
//       fontWeight: 'bold',
//       fontStyle: 'italic',
//       textDecorationLine: 'underline',
//       padding: 10,
//       margin: 20,
//       textAlign: 'center',
//       justifyContent: 'center',
//       alignItems: 'center',
//     };

//     const { getByText } = render(<LabelAnodiam {...customProps} />);
//     const labelText = getByText('Custom Label');

//     expect(labelText).toBeTruthy();
//     expect(validation.validateText).toHaveBeenCalledWith(
//       'labelText',
//       customProps.labelText,
//       4096,
//       'LabelAnodiam'
//     );
//     expect(validation.validateColorProp).toHaveBeenCalledWith(
//       'color',
//       customProps.color,
//       expect.anything(),
//       'LabelAnodiam'
//     );
//   });

//   it('applies dark theme color scheme correctly', () => {
//     jest.mocked(useColorScheme).mockReturnValue('dark');
//     const { getByText } = render(<LabelAnodiam />);
//     const darkColor = Colors.dark.ANODIAM_DARK;

//     expect(validation.validateColorProp).toHaveBeenCalledWith(
//       'color',
//       undefined,
//       darkColor,
//       'LabelAnodiam'
//     );
//     expect(getByText('Label-Anodiam')).toBeTruthy();
//   });

//   it('applies light theme color scheme correctly', () => {
//     jest.mocked(useColorScheme).mockReturnValue('light');
//     const { getByText } = render(<LabelAnodiam />);
//     const lightColor = Colors.light.ANODIAM_DARK;

//     expect(validation.validateColorProp).toHaveBeenCalledWith(
//       'color',
//       undefined,
//       lightColor,
//       'LabelAnodiam'
//     );
//     expect(getByText('Label-Anodiam')).toBeTruthy();
//   });

//   it('renders empty text when labelText is defaultLabelText', () => {
//     const { queryByText } = render(<LabelAnodiam labelText="Label-Anodiam" />);
//     expect(queryByText('Label-Anodiam')).toBeFalsy();
//   });
// });