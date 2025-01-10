import { View, TextInput, useColorScheme, TouchableOpacity, Text } from 'react-native'
import { Colors } from '@/assets/Colors'
import TextInputDescAnodiam from "./TextInputDescAnodiam"
import { textInputStyles } from "./utils/Styles"
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import PasswordStrengthMeter from "./PasswordStrengthMeter"

const TextInputAnodiam = (props) => {
    const colorScheme = useColorScheme();
    const textInputType = props.textInputType || 'text'
    const labelText = props.labelText
    const fontFamily = props.fontFamily || 'Anodiam-Regular'
    const fontSize = props.fontSize || 14
    const [validationText, setValidationText] = useState(props.validationText || 
                textInputType==='confirm-password' ?
                props.pswdConfirmed===null ? '' :
                props.pswdConfirmed===true ?
                <Ionicons name='checkmark' color={Colors.GREEN} size={fontSize*1.5} marginLeft={-40}/>
                : <View style={{flexDirection: 'row', alignItems: 'right', justifyContent: 'right'}}>
                    <Ionicons name='close' color={Colors.RED} size={fontSize*1.5}/>
                    <Text style={{color: Colors.RED, fontSize: fontSize, fontFamily: fontFamily}}>Passwords don't match.</Text>
                </View>
                : '')
    const color = props.color || Colors.ANODIAM
    const placeholder = props.placeholder || 
                    (textInputType==='confirm-password' || textInputType==='create-password') ? 
                    (labelText.length > 30 ? labelText.substring(0, 30) + "..." : labelText) :
                    ('Enter: ' + (labelText.length > 30 ? labelText.substring(0, 30) + "..." : labelText))
    const inputColor = props.inputColor || (colorScheme === 'dark' ? Colors.dark.ANODIAM_DARKER : Colors.light.ANODIAM_DARKER)
    const validationTextColor = props.validationTextColor
    const validationFontSize = props.validationFontSize
    const borderRadius = props.borderRadius || 10
    const borderWidth = props.borderWidth || 1
    const padding = props.padding || 10
    const maxLength = props.maxLength || 64
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {setPasswordVisible((prevState) => !prevState)}
    const styles = textInputStyles(borderRadius, borderWidth, padding, color, inputColor)
    const passwordVisibility = (
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
            <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={fontSize*1.5} color={inputColor} />
        </TouchableOpacity>
    )
    const [createPswdStrength, setCreatePswdStrength] = useState("")
    const calculatePasswordStrength = (createPswd) => {
        if (!createPswd || createPswd.trim() === "") { return ("")}
        let criteriaMet = 0;
        if (/[a-z]/.test(createPswd)) { criteriaMet += 1 }
        if (/[A-Z]/.test(createPswd)) { criteriaMet += 1 }
        if (/[0-9]/.test(createPswd)) { criteriaMet += 1 }
        if (/[!@#$%^&*()_+={}|:;"'<>,.?/\\₹£¥€₩฿₿₫₺؋֏៛₾₦₱₲₭₮]/.test(createPswd)) { criteriaMet += 1 }
        if (createPswd.length >= 6) { criteriaMet += 1 }
        return(criteriaMet)
    };
    const createPswdTextChange = (createPswd) => {
        setCreatePswdStrength(calculatePasswordStrength(createPswd))
        props.onChngTxtIpAnodiam(createPswd)
    }
    const createPswdOnBlur = () => {
        if (createPswdStrength < 5) {
            setValidationText("At least 6 characters\nlowercase, uppercase\nnumeric & special chars.")
        } else {
            setValidationText("")
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
                        placeholderTextColor={Colors.GRAY}
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={maxLength}
                        onBlur={props.onBlurTxtIpAnodiam}
                        onChangeText={props.onChngTxtIpAnodiam}/>
                    {passwordVisibility}
                </View>
            )
            break;
        case 'confirm-password':
            content = (
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} 
                        secureTextEntry={!isPasswordVisible}
                        cursorColor={color}
                        placeholder={placeholder}
                        placeholderTextColor={Colors.GRAY}
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={maxLength}
                        onBlur={props.onBlurTxtIpAnodiam}
                        onChangeText={props.onChngTxtIpAnodiam}/>
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
                            placeholderTextColor={Colors.GRAY}
                            autoCapitalize="none"
                            autoCorrect={false}
                            maxLength={maxLength}
                            onBlur={createPswdOnBlur}
                            onChangeText={createPswdTextChange}/>
                        {passwordVisibility}
                    </View>
                    {createPswdStrength? <PasswordStrengthMeter createPswdStrength={createPswdStrength}/> : ''}
                </View>
            )
            break;
        case 'email':
            content = (
                <TextInput style={styles.textInput}
                    cursorColor={color}
                    placeholder={placeholder} 
                    placeholderTextColor={Colors.GRAY}   
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress" // Enable autofill for email (ios specific)
                    autoComplete="email"
                    maxLength={maxLength}
                    onBlur={props.onBlurTxtIpAnodiam}
                    onChangeText={props.onChngTxtIpAnodiam}/>
                )
                break;
            case 'numeric':
            content = (
                <TextInput style={[styles.textInput, {textAlign: 'right'}]}
                    keyboardType={"numeric"}
                    inputMode="numeric"
                    cursorColor={color}
                    placeholder={placeholder} 
                    placeholderTextColor={Colors.GRAY}
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
            <TextInputDescAnodiam labelText={labelText} validationText={validationText} fontFamily={fontFamily} fontSize={fontSize} color={color} validationTextColor={validationTextColor} validationFontSize={validationFontSize} />
            {content}
        </View>
    )

}

export default TextInputAnodiam