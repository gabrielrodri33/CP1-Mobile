import { createDrawerNavigator } from "@react-navigation/drawer";
import { useColorScheme, SafeAreaView } from "react-native";

import Produtos from "../screens/Produtos/index";
import Devs from "../screens/Devs/index";
import Login from "../screens/Login/index";
import LogOut from "../screens/Logout/index";
import SigIn from "../screens/Sigin";

import { Entypo, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import Header from "../components/Drawer/header";

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
          header: Header,
        }}
      >
        <Screen
          name="Produtos"
          component={Produtos}
          options={{
            drawerIcon: () => (
              <Entypo name="home" size={24} color={themeIcon} />
            ),
          }}
        />
        <Screen
          name="LogIn"
          component={Login}
          options={{
            drawerIcon: () => (
              <Entypo name="login" size={24} color={themeIcon} />
            ),
          }}
        />
        <Screen
          name="LogOut"
          component={LogOut}
          options={{
            drawerIcon: () => (
              <SimpleLineIcons name="logout" size={24} color={themeIcon} />
            ),
          }}
        />
        <Screen
          name="SigIn"
          component={SigIn}
          options={{
            drawerIcon: () => (
              <Entypo name="login" size={24} color={themeIcon} />
            ),
          }}
        />
        <Screen
          name="Devs"
          component={Devs}
          options={{
            drawerIcon: () => (
              <MaterialIcons name="contacts" size={24} color={themeIcon} />
            ),
          }}
        />
      </Navigator>
  );
}
