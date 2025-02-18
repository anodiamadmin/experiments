export const MAX_PADDING: number = 30;
export const MIN_PADDING: number = 0;
export const defaultButtonPadding: number = 10;
export const defaultTextInputPadding: number = 10;
export const defaultPadding: number = 0;

export const MAX_MARGIN: number = 100;
export const defaultMargin: number = 0;

export const MIN_BORDER_RADIUS: number = 0;
export const MAX_BORDER_RADIUS: number = 50;
export const defaultBorderRadius: number = 10;

export const MIN_BORDER_WIDTH: number = 0;
export const MAX_BORDER_WIDTH: number = 4;
export const defaultButtonBorderWidth: number = 1.5;
export const defaultBorderWidth: number = 1;

export const VALID_FONTS = ['Anodiam-Regular', 'Anodiam-Bold', 'Anodiam-Light'] as const;
export const defaultFont: typeof VALID_FONTS[number] = VALID_FONTS[0];

export const VALID_FONT_WEIGHTS = [
  '100', '200', '300', '400', '500', '600', '700', '800', '900',
  'thin', 'ultralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'heavy'
] as const;
export const boldFontWeight: typeof VALID_FONT_WEIGHTS[number] = 'bold';
export const defaultFontWeight: typeof VALID_FONT_WEIGHTS[number] = 'normal';

export const MAX_FONT_SIZE: number = 32;
export const MIN_FONT_SIZE: number = 8;
export const MIN_VISIBLE_FONT_SIZE: number = 4;
export const defaultBottomNavFontSize: number = 12;
export const defaultButtonFontSize: number = 16;
export const defaultFontSize: number = 14;

export const VALID_TEXT_DECORATION_LINES = ['none', 'underline', 'line-through', 'underline line-through'] as const;
export const defaultTextDecorationLine: typeof VALID_TEXT_DECORATION_LINES[number] = 'none';
export const hyperlinkTextDecoration: typeof VALID_TEXT_DECORATION_LINES[number] = 'underline';

export const VALID_TEXT_ALIGNS = ['auto', 'left', 'right', 'center', 'justify'] as const;
export const textAlignDefault: typeof VALID_TEXT_ALIGNS[number] = 'center';

export const VALID_ALIGN_ITEMS = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'] as const;
export const alignItemsDefault: typeof VALID_ALIGN_ITEMS[number] = 'center';

export const VALID_JUSTIFY_CONTENTS = [
  'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'
] as const;
export const justifyContentDefault: typeof VALID_JUSTIFY_CONTENTS[number] = 'center';

export const MAX_ICON_SIZE: number = 50;
export const MIN_ICON_SIZE: number = 11;
export const defaultIconSize: number = 24;

export const MICRO_TEXT_LENGTH: number = 2;
export const MAX_VERY_SHORT_TEXT_LENGTH: number = 16;
export const MAX_SHORT_TEXT_LENGTH: number = 32;
export const MAX_TEXT_LENGTH: number = 64;
export const MAX_LARGE_TEXT_LENGTH: number = 128;
export const MAX_VERY_LARGE_TEXT_LENGTH: number = 256;
export const MAX_EXTRA_LARGE_TEXT_LENGTH: number = 512;
export const MAX_ULTRA_LARGE_TEXT_LENGTH: number = 1024;

export const VALID_FONT_STYLES = ['normal', 'italic'] as const;
export const defaultFontStyle: typeof VALID_FONT_STYLES[number] = 'normal';

export const maxTabs: number = 6;
export const MIN_ALLOWED_TABS: number = 2;

export interface TabStructure {
  name: string;
  label: string;
  icon: string;
  iconType: string;
}

export const tabStructure: TabStructure = { name: '', label: '', icon: '', iconType: '' };

export const defaultTabs: TabStructure[] = [
  { name: 'SocialMedia', label: 'Social Media', icon: 'video-image', iconType: 'MaterialCommunityIcons' },
  { name: 'MyTrips', label: 'My Trips', icon: 'unicorn', iconType: 'MaterialCommunityIcons' },
  { name: 'Business', label: 'My Business', icon: 'search-dollar', iconType: 'FontAwesome5' },
  { name: 'Profile', label: 'Profile', icon: 'person-pin', iconType: 'MaterialIcons' }
];

export const defaultBottomNavHeight: number = 60;
export const MAX_BOTTOM_NAV_HEIGHT: number = 100;
export const MIN_BOTTOM_NAV_HEIGHT: number = 30;
export const defaultBigIconIndex: number = 1;
export const defaultPreSelectedIndex: number = 1;

export const defaultLabelText: string = 'Label-Anodiam';

export const VALID_BUTTON_TYPES = ['primary', 'secondary', 'hyperlink'] as const;
export const defaultButtonType: typeof VALID_BUTTON_TYPES[number] = VALID_BUTTON_TYPES[0];

export const defaultButtonText: string = 'Button-Anodiam';

export const defaultPasswordStrength: number = 0;
export const MIN_PASSWORD_STRENGTH: number = 0;
export const MAX_PASSWORD_STRENGTH: number = 5;
export const MIN_PASSWORD_LENGTH: number = 6;

export const defaultTextInputLabel: string = 'TextInput-Anodiam';
export const defaultValidationText: string = ' ';
export const defaultMandatoryStarText: string = '*';

export const textInputTypes = ['none', 'password', 'create-password', 'email', 'numeric'] as const;
export const defaultTextInputType: typeof textInputTypes[number] = 'none';

export const defaultTextInputLabels: string[] = [
  defaultTextInputLabel,
  'Password',
  'Password',
  'Email',
  'Numeric'
];

export const defaultConfirmPasswordRequired: boolean = true;

export const defaultGapVertical: number = 15;
export const MIN_GAP_VERTICAL: number = 0;

export const AllowableAnodiamComponents = [
  'BottomNavAnodiam',
  'ButtonAnodiam',
  'LabelAnodiam',
  'passwordStrengthMeter',
  'TextInputAnodiam',
  'TextInputDescAnodiam'
] as const;

export const BottomNavAnodiamProps = [
  'activeColor',
  'greyColor',
  'backgroundColor',
  'rippleColor',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'padding',
  'iconSize',
  'bottomNavHeight',
  'bottomNavTabLabel'
] as const;

export const ButtonAnodiamProps = [
  'buttonType',
  'buttonText',
  'color',
  'borderColor',
  'backgroundColor',
  'padding',
  'margin',
  'borderRadius',
  'borderWidth',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'textDecorationLine',
  'textAlign',
  'justifyContent',
  'alignItems'
] as const;

export const LabelAnodiamProps = [
  'labelText',
  'color',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'fontStyle',
  'textDecorationLine',
  'padding',
  'margin',
  'textAlign',
  'justifyContent',
  'alignItems'
] as const;

export const passwordStrengthMeterProps = ['passwordStrength'] as const;

export const TextInputAnodiamProps = [
  'textInputType',
  'textInputLabel',
  'fontFamily',
  'fontSize',
  'validationText',
  'validationTextColor',
  'placeholder',
  'color',
  'inputColor',
  'placeholderTextColor',
  'validationFontSize',
  'borderRadius',
  'borderWidth',
  'padding',
  'maxLength',
  'gapVertical'
] as const;

export const TextInputDescAnodiamProps = [
  'color',
  'textInputLabel',
  'validationText',
  'fontFamily',
  'fontSize',
  'validationTextColor',
  'validationFontSize'
] as const;