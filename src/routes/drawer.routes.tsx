import { createDrawerNavigator } from "@react-navigation/drawer";

// import { Entypo } from '@expo/vector-icons';

import Produtos from '../screens/Produtos/index';
import Devs from '../screens/Devs/index';
import LogIn from "../screens/Login/index";
import LogOut from "../screens/Logout/index";
import SigIn from "../screens/Sigin";

import { Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator } = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name = "Produtos"
        component={Produtos}
        options={{ 
          drawerIcon: ()=> <Entypo name="home" size={24} color="black" />
        }}
      />
      <Screen 
        name = "LogIn"
        component={LogIn}
        options={{ 
          headerTitle: "",
          drawerIcon: ()=> <Entypo name="login" size={24} color="black" />
        }}
      />
      <Screen
        name = "LogOut"
        component={LogOut}
        options={{
          headerTitle: "", 
          drawerIcon: ()=> <Entypo name="login" size={24} color="black" />
        }}
      />
      <Screen
        name = "SigIn"
        component={SigIn}
        options={{
          headerTitle: "", 
          drawerIcon: ()=> <Entypo name="login" size={24} color="black" />
        }}
      />
      <Screen
        name = "Devs"
        component={Devs}
        options={{ 
          drawerIcon: ()=> <MaterialIcons name="contacts" size={24} color="black" />
        }}
      />
    </Navigator>
  )
}