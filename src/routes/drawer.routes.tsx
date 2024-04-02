import { createDrawerNavigator } from "@react-navigation/drawer";

// import { Entypo } from '@expo/vector-icons';

import Produtos from '../screens/produtos/index';
import Contatos from '../../src/screens/contatos/index';
import Login from "../../src/screens/login/index";

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

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
        name = "Login"
        component={Login}
        options={{ 
          headerTitle: "",
          drawerIcon: ()=> <Entypo name="login" size={24} color="black" />
        }}
      />
      <Screen
        name = "Contatos"
        component={Contatos}
        options={{ 
          drawerIcon: ()=> <MaterialIcons name="contacts" size={24} color="black" />
        }}
      />
    </Navigator>
  )
}