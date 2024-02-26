import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { AccountScreen } from "../screens/AccountScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { RestaurantsScreen } from "../screens/RestaurantsScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export function AppNavegation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#00a680",
            tabBarInactiveTintColor: "#646464",
            tabBarIcon: ({ color, size }) => screenOptions(route, color, size)
        })}>
            <Tab.Screen name={screen.account.tab} component={AccountScreen} options={{ title: "Cuenta" }} />
            <Tab.Screen name={screen.favorites.tab} component={FavoritesScreen} options={{ title: "Favoritos" }} />
            <Tab.Screen name={screen.ranking.tab} component={RankingScreen} options={{ title: "Ranking" }} />
            <Tab.Screen name={screen.restaurant.tab} component={RestaurantsScreen} options={{ title: "Restaurantes" }} />
            <Tab.Screen name={screen.search.tab} component={SearchScreen} options={{ title: "Buscar" }} />
        </Tab.Navigator>
    );
}

function screenOptions(route, color, size) {
    let iconName;

    if (route.name === screen.account.tab) {
        iconName = "home-outline";
    }

    if (route.name === screen.favorites.tab) {
        iconName = "heart-outline";
    }


    if (route.name === screen.ranking.tab) {
        iconName = "star-outline";
    }

    if (route.name === screen.restaurant.tab) {
        iconName = "compass-outline";
    }

    if (route.name === screen.search.tab) {
        iconName = "magnify";
    }

    return (
        <Icon type="material-community" name={iconName} size={size} color={color} />
    );
}