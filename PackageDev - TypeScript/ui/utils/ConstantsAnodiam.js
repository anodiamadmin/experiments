export const MAX_PADDING = 30
export const MIN_PADDING = 0
export const defaultButtonPadding = 10
export const defaultTextInputPadding = 10
export const defaultPadding = 0

export const MAX_MARGIN = 100
export const defaultMargin = 0

export const MIN_BORDER_RADIUS = 0
export const MAX_BORDER_RADIUS = 50
export const defaultBorderRadius = 10

export const MIN_BORDER_WIDTH = 0
export const MAX_BORDER_WIDTH = 4
export const defaultButtonBorderWidth = 1.5
export const defaultBorderWidth = 1

export const VALID_FONTS = ['Anodiam-Regular', 'Anodiam-Bold', 'Anodiam-Light']
export const defaultFont = VALID_FONTS[0]

export const VALID_FONT_WEIGHTS = ['100', '200', '300', '400', '500', '600', '700', '800', '900', 
                                    'thin', 'ultralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'heavy' ]
export const boldFontWeight = 'bold'
export const defaultFontWeight = 'normal'

export const MAX_FONT_SIZE = 32
export const MIN_FONT_SIZE = 8
export const MIN_VISIBLE_FONT_SIZE = 4
export const defaultBottomNavFontSize=12
export const defaultButtonFontSize=16
export const defaultFontSize = 14

export const VALID_TEXT_DECORATION_LINES = ['none', 'underline', 'line-through', 'underline line-through']
export const defaultTextDecorationLine = 'none'
export const hyperlinkTextDecoration = 'underline'

export const VALID_TEXT_ALIGNS = ['auto', 'left', 'right', 'center', 'justify']
export const textAlignDefault = 'center'

export const VALID_ALIGN_ITEMS = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline']
export const alignItemsDefault = 'center'

export const VALID_JUSTIFY_CONTENTS = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']
export const justifyContentDefault = 'center'

export const MAX_ICON_SIZE = 50
export const MIN_ICON_SIZE = 11
export const defaultIconSize = 24

export const MICRO_TEXT_LENGTH = 2
export const MAX_VERY_SHORT_TEXT_LENGTH = 16
export const MAX_SHORT_TEXT_LENGTH = 32
export const MAX_TEXT_LENGTH = 64
export const MAX_LARGE_TEXT_LENGTH = 128
export const MAX_VERY_LARGE_TEXT_LENGTH = 256
export const MAX_EXTRA_LARGE_TEXT_LENGTH = 512
export const MAX_ULTRA_LARGE_TEXT_LENGTH = 1024

export const VALID_FONT_STYLES = ['normal', 'italic']
export const defaultFontStyle = 'normal'

export const maxTabs = 6
export const MIN_ALLOWED_TABS = 2
export const tabStructure = {name: '', label: '', icon: '', iconType: ''}
export const defaultTabs = [{ name: 'SocialMedia', label: 'Social Media', icon: 'video-image', iconType: 'MaterialCommunityIcons' },
                            { name: 'MyTrips', label: 'My Trips', icon: 'unicorn', iconType: 'MaterialCommunityIcons' },
                            { name: 'Business', label: 'My Business', icon: 'search-dollar', iconType: 'FontAwesome5' },
                            { name: 'Profile', label: 'Profile', icon: 'person-pin', iconType: 'MaterialIcons' } ]
export const defaultBottomNavHeight = 60
export const MAX_BOTTOM_NAV_HEIGHT = 100
export const MIN_BOTTOM_NAV_HEIGHT = 30
export const defaultBigIconIndex = 1
export const defaultPreSelectedIndex = 1

export const defaultLabelText = 'Label-Anodiam'

export const VALID_BUTTON_TYPES = ['primary', 'secondary', 'hyperlink']
export const defaultButtonType = VALID_BUTTON_TYPES[0]

export const defaultButtonText = 'Button-Anodiam'

export const defaultPasswordStrength = 0
export const MIN_PASSWORD_STRENGTH = 0
export const MAX_PASSWORD_STRENGTH = 5
export const MIN_PASSWORD_LENGTH = 6
    
export const defaultTextInputLabel = 'TextInput-Anodiam'
export const defaultValidationText = ' '
export const defaultMandatoryStarText = '*'

export const textInputTypes = ['none',  'password', 'create-password', 'email', 'numeric']
export const defaultTextInputType = 'none'

export const defaultTextInputLabels = [defaultTextInputLabel, 'Password', 'Password', 'Email', 'Numeric']

export const defaultConfirmPasswordRequired = true

export const defaultGapVertical = 15
export const MIN_GAP_VERTICAL = 0

export const AllowableAnodiamComponents = [ 'BottomNavAnodiam', 'ButtonAnodiam', 'LabelAnodiam',
                                    'passwordStrengthMeter', 'TextInputAnodiam', 'TextInputDescAnodiam' ]
export const BottomNavAnodiamProps = [ 'activeColor', 'greyColor', 'backgroundColor', 'rippleColor',
                                    'fontFamily', 'fontSize', 'fontWeight', 'padding', 'iconSize',
                                    'bottomNavHeight', 'bottomNavTabLabel' ]
export const ButtonAnodiamProps = [ 'buttonType', 'buttonText', 'color', 'borderColor', 'backgroundColor',
                                        'padding', 'margin', 'borderRadius', 'borderWidth', 'fontFamily',
                                        'fontSize', 'fontWeight', 'textDecorationLine', 'textAlign',
                                        'justifyContent', 'alignItems' ]
export const LabelAnodiamProps = [ 'labelText', 'color', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 
                                        'textDecorationLine', 'padding', 'margin', 'textAlign',
                                        'justifyContent', 'alignItems' ]
export const passwordStrengthMeterProps = [ 'passwordStrength' ]
export const TextInputAnodiamProps = [ 'textInputType', 'textInputLabel', 'fontFamily', 'fontSize', 
                                        'validationText', 'validationTextColor', 'placeholder', 'color', 
                                        'inputColor', 'placeholderTextColor',
                                        'validationFontSize', 'borderRadius', 'borderWidth', 'padding',
                                        'maxLength', 'gapVertical' ]
export const TextInputDescAnodiamProps = [ 'color', 'textInputLabel', 'validationText', 'fontFamily',
                                        'fontSize', 'validationTextColor', 'validationFontSize' ]
