import { View, TextInput, useColorScheme, TouchableOpacity } from 'react-native'
import { Colors } from '@/constants/Colors'
import TextInputDescAnodiam from "./TextInputDescAnodiam"
import { textInputStyles } from "./styles"
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

const TextInputAnodiam = (props) => {
    const colorScheme = useColorScheme();
    const textInputType = props.textInputType || 'text'
    const labelText = props.labelText
    const fontFamily = props.fontFamily || 'Anodiam-Regular'
    const fontSize = props.fontSize || 16
    const validationText = props.validationText || 
                ((textInputType==='confirm-password' && props.pswdConfirmed===true)?
                (<View>
                    <Ionicons name='checkmark' color={Colors.GREEN} size={fontSize*1.5} marginLeft={-40}/>
                </View>) : '')
    const color = props.color || Colors.ANODIAM
    const placeholder = props.placeholder || textInputType==='confirm-password' ? 'Confirm Password' :
                     'Enter: ' + (labelText.length > 30 ? labelText.substring(0, 30) + "..." : labelText)
    const inputColor = props.inputColor || (colorScheme === 'dark' ? Colors.dark.ANODIAM_DARKER : Colors.light.ANODIAM_DARKER)
    const validationTextColor = props.validationTextColor
    const validationFontSize = props.validationFontSize
    const borderRadius = props.borderRadius || 12
    const borderWidth = props.borderWidth || 1
    const padding = props.padding || 13
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {setPasswordVisible((prevState) => !prevState)}
    const styles = textInputStyles(borderRadius, borderWidth, padding, color, inputColor)
    const passwordVisibility = (
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
            <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={fontSize*1.5} color={inputColor} />
        </TouchableOpacity>
    )
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
                        autoCorrect={false} // Disable autocorrect
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
                        autoCorrect={false} // Disable autocorrect
                        onChangeText={props.onChngTxtIpAnodiam}/>
                    {passwordVisibility}
                </View>
            )
            break;
        case 'create-password':
            content = (
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput}
                        secureTextEntry={!isPasswordVisible}
                        cursorColor={color}
                        placeholder={placeholder}
                        placeholderTextColor={Colors.GRAY}
                        autoCapitalize="none"
                        autoCorrect={false} // Disable autocorrect
                        onChangeText={props.onChngTxtIpAnodiam}/>
                    {passwordVisibility}
                </View>
            )
            break;
        case 'email':
            content = (
                <TextInput style={styles.textInput}
                    cursorColor={color}
                    placeholder={placeholder} 
                    placeholderTextColor={Colors.GRAY}   
                    keyboardType="email-address" // Email-specific keyboard
                    autoCapitalize="none" // Prevent capitalization
                    autoCorrect={false} // Disable autocorrect
                    textContentType="emailAddress" // Enable autofill for email (ios specific)
                    autoComplete="email"//cross platform
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
                    onChangeText={props.onChngTxtIpAnodiam}/>
            )
            break;
        default:
            content = (
                <TextInput style={styles.textInput}
                    cursorColor={color}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.GRAY}
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