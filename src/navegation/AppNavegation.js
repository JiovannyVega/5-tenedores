import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { AccountScreen } from "../screens/AccountScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { RestaurantsScreen } from "../screens/RestaurantsScreen";
import { SearchScreen } from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export function AppNavegation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#00a680",
            tabBarInactiveTintColor: "#646464",
            tabBarIcon: ({ color, size }) => screenOptions(route, color, size)
        })}>
            <Tab.Screen name="Account" component={AccountScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="Ranking" component={RankingScreen} />
            <Tab.Screen name="Restaurnats" component={RestaurantsScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
    );
}

function screenOptions(route, color, size) {
    let iconName;

    if (route.name === "Account") {
        iconName = "home-outline";
    }

    if (route.name === "Favorites") {
        iconName = "heart-outline";
    }


    if (route.name === "Ranking") {
        iconName = "star-outline";
    }

    if (route.name === "Restaurnats") {
        iconName = "compass-outline";
    }

    if (route.name === "Search") {
        iconName = "magnify";
    }

    return (
        <Icon type="material-community" name={iconName} size={size} color={color} />
    );
}