import { createDrawerNavigator } from "@react-navigation/drawer";
import { useColorScheme } from "react-native";

import produtos from "../screens/Produtos/index";
import Devs from "../screens/Devs/index";
import login from "../screens/Login/index";
import LogOut from "../screens/Logout/index";
import SigIn from "../screens/Sigin";

import { Entypo, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

const { Screen, Navigator } = createDrawerNavigator();

export default function DrawerRoutes() {
  const colorScheme = useColorScheme();

  const themeIcon = colorScheme === "dark" ? "#ffffff" : "#282928";
  const themeBg = colorScheme === "dark" ? "#282928" : "#ffffff";

  return (
    <Navigator
      initialRouteName="Produtos"
      screenOptions={{
        drawerLabelStyle: {
          color: themeIcon,
        },
        drawerStyle: {
          backgroundColor: themeBg,
        },
      }}
    >
      <Screen
        name="Produtos"
        component={produtos}
        options={{
          headerShown: false,
          drawerIcon: () => <Entypo name="home" size={24} color={themeIcon} />,
        }}
      />
      <Screen
        name="LogIn"
        component={login}
        options={{
          headerShown: false,
          drawerIcon: () => <Entypo name="login" size={24} color={themeIcon} />,
        }}
      />
      <Screen
        name="LogOut"
        component={LogOut}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <SimpleLineIcons name="logout" size={24} color={themeIcon} />
          ),
        }}
      />
      <Screen
        name="SigIn"
        component={SigIn}
        options={{
          headerShown: false,
          drawerIcon: () => <Entypo name="login" size={24} color={themeIcon} />,
        }}
      />
      <Screen
        name="Devs"
        component={Devs}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <MaterialIcons name="contacts" size={24} color={themeIcon} />
          ),
        }}
      />
    </Navigator>
  );
}
