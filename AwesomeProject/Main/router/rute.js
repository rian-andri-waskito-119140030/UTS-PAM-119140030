import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../page/home/home';
import Pesanan from '../page/Pesanan/pesanan';
import Batal from '../page/Pembatalan/batal';
import Lainnya from '../page/Lainnya/lain';


const Tumpukan = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Rute = () => {
    return(
            <Tumpukan.Navigator>
                <Tumpukan.Screen name="Home" component={Home} headerShown={false}/>
                <Tumpukan.Screen name="Pesanan" component={Pesanan} headerShown={false}/>
                <Tumpukan.Screen name="Pembatalan" component={Batal} headerShown={false}/>
                <Tumpukan.Screen name="Lainnya" component={Lainnya} headerShown={false}/>
            </Tumpukan.Navigator>
    )
}

export default Rute;