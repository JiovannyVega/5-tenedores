import React from 'react'
import { ScrollView } from 'react-native'
import { Text, Button, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { screen } from "../../../utils"
import { styles } from "./UserGuestScreen.styles"

export function UserGuestScreen() {

    const navigation = useNavigation();

    const goToLoguin = () => {
        navigation.navigate(screen.account.login);
    }

    return (
        <ScrollView centerContent={true} style={styles.content}>
            <Image
                source={require("../../../../assets/img/user-guest.png")}
                style={styles.image}
            />
            <Text style={styles.title}>Consultar tu perfil</Text>
            <Text style={styles.description}>
                ¿Como describirías tu mejor restaurante? Busca y visualiza los mejores
                restaurantes de una forma sencilla, vota cual te ha gustado más y
                comenta como ha sido tu experiencia.
            </Text>
            <Button
                title="Ver tu perfil"
                onPress={goToLoguin}
                buttonStyle={styles.btnStyle}
            />
        </ScrollView>
    )
}