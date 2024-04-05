import { createDrawerNavigator } from "@react-navigation/drawer";

// import { Entypo } from '@expo/vector-icons';

import produtos from '../screens/produtos/index';
import Devs from '../screens/Devs/index';
import login from "../screens/login/index";
import LogOut from "../screens/Logout/index";
import SigIn from "../screens/Sigin";

import { Entypo, AntDesign, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

const { Screen, Navigator } = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Navigator
      initialRouteName="Produtos"
    >
      <Screen
        name = "Produtos"
        component={produtos}
        options={{ 
          drawerIcon: ()=> <Entypo name="home" size={24} color="black" />
        }}
      />
      <Screen 
        
        name = "LogIn"
        component={login}
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
          drawerIcon: ()=> <SimpleLineIcons name="logout" size={24} color="black" />
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