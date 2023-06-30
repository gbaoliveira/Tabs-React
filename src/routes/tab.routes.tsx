import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

export function StackRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='screenA'
                component={ScreenA}
                options={{
                    title: 'Home'
                }}
            />
            <Tab.Screen
                name='screenB'
                component={ScreenB}
                options={{
                    title: 'Tela B',
                    headerTitleAlign: 'left',
                    headerStyle:{
                        backgroundColor: 'red'
                    },
                    headerTintColor: '#fff'
                }}
                
            />
        </Tab.Navigator>
    )
}