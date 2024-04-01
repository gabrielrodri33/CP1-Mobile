import { createDrawerNavigator } from "@react-navigation/drawer";

// import { Entypo } from '@expo/vector-icons';

import Produtos from '../screens/produtos/index';
import Contatos from '../../src/screens/contatos/index';

const { Screen, Navigator } = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name = "Produtos"
        component={Produtos}
      />

      <Screen
        name = "Contatos"
        component={Contatos}
      />
    </Navigator>
  )
}