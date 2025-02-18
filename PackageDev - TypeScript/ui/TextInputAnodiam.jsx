import { View, TextInput, useColorScheme, TouchableOpacity, Text } from 'react-native'
import { Colors } from './resources/Colors'
import TextInputDescAnodiam from "./TextInputDescAnodiam"
import { textInputStyles } from "../ui/utils/Styles"
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import PasswordStrengthMeter from "./PasswordStrengthMeter"
import * as validation from '../ui/utils/Validation';
import * as constants from '../ui/utils/ConstantsAnodiam'

const TextInputAnodiam = (props) => {
    const [email, setEmail] = useState("");
    const colorScheme = useColorScheme();
    const fileName = 'TextInputAnodiam'
    // textInput Specific Props
    const textInputType = constants.textInputTypes.includes(props.textInputType) ? props.textInputType : constants.defaultTextInputType
    const textInputLabel = props.textInputLabel || constants.defaultTextInputLabels[constants.textInputTypes.indexOf(textInputType)]
    const mandatory = props.mandatory || false
    const confirmPasswordRequired = props.confirmPasswordRequired===undefined? constants.defaultConfirmPasswordRequired : props.confirmPasswordRequired
    const fontFamily = props.fontFamily || constants.defaultFont
    const fontSize = props.fontSize || constants.defaultButtonFontSize
    const [validationText, setValidationText] = useState(props.validationText || 
                                            mandatory? constants.defaultMandatoryStarText : constants.defaultValidationText)
    const validationTextColor = props.validationTextColor || Colors.RED
    const placeholder = props.placeholder || 'Enter: ' + (textInputLabel.length > 20 ? textInputLabel.substring(0, 18) + "..." : textInputLabel)
    const color = props.color || Colors.ANODIAM
    const inputColor = props.inputColor || (colorScheme === 'dark' ? Colors.dark.ANODIAM_DARKER : Colors.light.ANODIAM_DARKER)
    const placeholderTextColor = props.placeholderTextColor || Colors.GREY
    const validationFontSize = props.validationFontSize || constants.defaultFontSize
    const borderRadius = props.borderRadius || constants.defaultBorderRadius
    const borderWidth = props.borderWidth || constants.defaultBorderWidth
    const padding = props.padding || constants.defaultTextInputPadding
    const maxLength = props.maxLength || constants.MAX_TEXT_LENGTH
    const gapVertical = props.gapVertical || constants.defaultGapVertical
    validation.validateProps(fileName, {textInputType, textInputLabel, fontFamily, fontSize, 
                                        validationText, validationTextColor, placeholder, color, inputColor,
                                        validationFontSize, placeholderTextColor,
                                        borderRadius, borderWidth, padding, maxLength, gapVertical })
    const emailValidation =(emailId) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailId) && emailId) {
            setValidationText('Invalid email format.')
        } else {
            setValidationText(props.validationText || mandatory? constants.defaultMandatoryStarText : constants.defaultValidationText)
        }
        props.validateApplicationLogic(emailId)
    }
    const styles = textInputStyles(borderRadius, borderWidth, padding, color, inputColor)
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {setPasswordVisible((prevState) => !prevState)}
    const passwordVisibility = (
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
            <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={fontSize*1.5} color={inputColor} />
        </TouchableOpacity>
    )
    const [createPassword, setCreatePassword] = useState('')
    const [createPswdStrength, setCreatePswdStrength] = useState(0)
    const calculatePasswordStrength = (createPswd) => {
        if (!createPswd || createPswd.trim() === "") { return ("")}
        let criteriaMet = 0;
        if (/[a-z]/.test(createPswd)) { criteriaMet += 1 }
        if (/[A-Z]/.test(createPswd)) { criteriaMet += 1 }
        if (/[0-9]/.test(createPswd)) { criteriaMet += 1 }
        if (/[!@#$%^&*()_+={}|:;"'<>,.?/\\₹£¥€₩฿₿₫₺؋֏៛₾₦₱₲₭₮]/.test(createPswd)) { criteriaMet += 1 }
        if (createPswd.length >= constants.MIN_PASSWORD_LENGTH) { criteriaMet += 1 }
        return(criteriaMet)
    }
    const confPswdSuccess = (passwordStrength, confirmPassword) => {
        if(passwordStrength>=5 && confirmPassword.length>=constants.MIN_PASSWORD_LENGTH) {
            setConfPswdValidationText(`✔    `)
            setConfPswdValidationTextColor(Colors.GREEN)
            setConfPswdValidationFontSize(validationFontSize*1.5)
        } else {
            setConfPswdValidationText('')
        }
    }
    const confPswdFailure = (passwordStrength, confirmPassword) => {
        if(passwordStrength>=5 && confirmPassword.length>=constants.MIN_PASSWORD_LENGTH) {
            setConfPswdValidationText(`❌ passwords don't match`)
            setConfPswdValidationTextColor(validationTextColor)
            setConfPswdValidationFontSize(validationFontSize)
        } else {
            setConfPswdValidationText('')
        }
    }
    const createPswdTextChange = (createPswd) => {
        setCreatePassword(createPswd);
        const passwordStrength = calculatePasswordStrength(createPswd);
        setCreatePswdStrength(passwordStrength);
        if (passwordStrength >= 5) {
            setValidationText('');
            confirmPassword===createPswd ? confPswdSuccess(passwordStrength, confirmPassword) : confPswdFailure(passwordStrength, confirmPassword)
        }
    }
    const createPswdOnBlur = () => {
        if (createPswdStrength < 5 && createPassword!=='') {
            setValidationText(`Minimum ${constants.MIN_PASSWORD_LENGTH} characters: lowercase, uppercase,\n numeric & special chars.`);
        } else {
            setValidationText('');
        }
    }
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confPswdValidationText, setConfPswdValidationText] = useState('')
    const [confPswdValidationTextColor, setConfPswdValidationTextColor] = useState(validationTextColor)
    const [confPswdValidationFontSize, setConfPswdValidationFontSize] = useState(fontSize)
    const confPswdOnBlur = () => {
        if(createPswdStrength>=5) {
            confirmPassword===createPassword ? confPswdSuccess(createPswdStrength, confirmPassword) : confPswdFailure(createPswdStrength, confirmPassword)
        }
    }
    const confPswdTextChange = (confPswd) => {
        setConfirmPassword(confPswd)
        if(createPswdStrength>=5) {
            confPswd===createPassword ? confPswdSuccess(createPswdStrength, confPswd) : confPswdFailure(createPswdStrength, confPswd)
        }
        if(confPswd<constants.MIN_PASSWORD_LENGTH) {
            setConfPswdValidationText('')
        }
    }
    let content
    switch (textInputType) {
        case 'password':
            content = (
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput}
                        secureTextEntry={!isPasswordVisible}
                        cursorColor={color}
                        placeholder={placeholder} 
                        placeholderTextColor={placeholderTextColor}
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={maxLength}
                        onBlur={props.onBlurTxtIpAnodiam}/>
                    {passwordVisibility}
                </View>
            )
            break;
        case 'create-password':
            content = (
                <View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.textInput}
                            secureTextEntry={!isPasswordVisible}
                            cursorColor={color}
                            placeholder={placeholder}
                            placeholderTextColor={placeholderTextColor}
                            autoCapitalize="none"
                            autoCorrect={false}
                            maxLength={maxLength}
                            onBlur={createPswdOnBlur}
                            onChangeText={createPswdTextChange}/>
                        {passwordVisibility}
                    </View>
                    {createPswdStrength? <PasswordStrengthMeter createPswdStrength={createPswdStrength}/> : ''}
                    {confirmPasswordRequired ?
                        <View style={{marginTop: gapVertical}}>
                            <TextInputDescAnodiam textInputLabel={'Confirm Password'} fontSizeontFamily={fontFamily} fontSize={fontSize} color={color}
                                        validationText={confPswdValidationText}
                                        validationTextColor={confPswdValidationTextColor}
                                        validationFontSize={confPswdValidationFontSize}/>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.textInput}
                                    secureTextEntry={!isPasswordVisible}
                                    cursorColor={color}
                                    placeholder={'Confirm Password'} 
                                    placeholderTextColor={placeholderTextColor}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    maxLength={maxLength}
                                    onBlur={confPswdOnBlur}
                                    onChangeText={confPswdTextChange} />
                            </View>
                        </View>
                        : ''}
                </View>
            )
            break;
        case 'email':
            content = (
                <TextInput style={styles.textInput}
                    cursorColor={color}
                    placeholder={placeholder} 
                    placeholderTextColor={placeholderTextColor}   
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress" // Enable autofill for email (ios specific)
                    autoComplete="email"
                    maxLength={maxLength}
                    onChangeText={(text) => setEmail(text)}
                    onBlur={() => emailValidation(email)}/>
                )
            break;
        case 'numeric':
            content = (
                <TextInput style={[styles.textInput, {textAlign: 'right'}]}
                    keyboardType={"numeric"}
                    inputMode="numeric"
                    cursorColor={color}
                    placeholder={placeholder} 
                    placeholderTextColor={placeholderTextColor}
                    maxLength={maxLength}
                    onBlur={props.onBlurTxtIpAnodiam}
                    onChangeText={props.onChngTxtIpAnodiam}/>
            )
            break;
        default:
            content = (
                <TextInput style={styles.textInput}
                    cursorColor={color}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.GRAY}
                    maxLength={maxLength}
                    onBlur={props.onBlurTxtIpAnodiam}
                    onChangeText={props.onChngTxtIpAnodiam}/>
            )
        }
    return (
        <View>
            <TextInputDescAnodiam textInputLabel={textInputLabel} validationText={validationText} fontFamily={fontFamily} fontSize={fontSize} color={color} validationTextColor={validationTextColor} validationFontSize={validationFontSize} />
            {content}
        </View>
    )
}

export default TextInputAnodiam