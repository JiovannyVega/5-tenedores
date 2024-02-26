import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavegation } from "./src/navegation/AppNavegation";
import { initFirebase } from "./src/utils"

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavegation />
      </NavigationContainer>
    </>
  );
}