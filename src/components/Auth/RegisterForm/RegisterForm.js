import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { useFormik } from "formik"
import { initialValues, validationSchema } from './RegisterForm.data'
import { styles } from './RegisterForm.styles'

export function RegisterForm() {

    const [showPassword, setShowPassword] = useState(false)

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log("Formulario enviado")
            console.log(formValue)
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
            />
        </View>
    )
}