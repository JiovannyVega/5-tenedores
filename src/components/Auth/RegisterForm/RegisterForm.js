import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { useFormik } from "formik"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from "@react-navigation/native"
import { initialValues, validationSchema } from './RegisterForm.data'
import Toast from 'react-native-toast-message'
import { styles } from './RegisterForm.styles'
import { screen } from "../../../utils"
import firebase from 'firebase/compat/app'

export function RegisterForm() {

    const [showPassword, setShowPassword] = useState(false)
    const navigation = useNavigation()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const auth = getAuth();
                await createUserWithEmailAndPassword(auth, formValue.email, formValue.password);
                navigation.navigate(screen.account.account)
            } catch (error) {
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Error al crear la cuenta",
                })
            }
        }
    })

    const showHiddenPassword = () => setShowPassword(precState => !precState)

    return (
        <View style={styles.content}>
            <Input
                placeholder='Correo electrónico'
                containerStyle={styles.input}
                rightIcon={<Icon type='material-community' name="at" iconStyle={styles.icon} />}
                onChangeText={text => formik.setFieldValue("email", text)}
                errorMessage={formik.errors.email}
            />
            <Input
                placeholder='Contraseña'
                containerStyle={styles.input}
                password={true}
                secureTextEntry={showPassword ? false : true}
                rightIcon={
                    <Icon
                        type='material-community'
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={showHiddenPassword}
                    />
                }
                onChangeText={text => formik.setFieldValue("password", text)}
                errorMessage={formik.errors.password}
            />
            <Input
                placeholder='Repetir contraseña'
                containerStyle={styles.input}
                password={true}
                secureTextEntry={showPassword ? false : true}
                rightIcon={
                    <Icon
                        type='material-community'
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={showHiddenPassword}
                    />
                }
                onChangeText={text => formik.setFieldValue("repeatPassword", text)}
                errorMessage={formik.errors.repeatPassword}
            />
            <Button
                title="Unirse"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </View>
    )
}