import {
  Button,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getBikeList , getBikeID } from "./screens/Renting";
import { Register1 , Register2 , Register3 , RegisterSuccess } from "./screens/Register";
import { Login , LoginAsCustomer , LoginAsManager , LoginAsStaff} from "./screens/Login"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register1">
          <Stack.Screen
            name="Register1"
            component={Register1}
            options={{
              title: '',
              headerRight: () => (
                <TouchableOpacity
              style={styles.qrButton}
              /*onPress={() => navigation.navigate('')}*/
              activeOpacity={0.5}>
              <Image
                source={require('./assets/menu.png')}
                style={styles.navLogoMenu}
              />
            </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#007A5A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '600',
                frotSize: 20,
              },
              headerBackImageSource: require('./assets/back.png'),
            }}
          />
          <Stack.Screen
            name="Register2"
            component={Register2}
            options={{
              title: '',
              headerRight: () => (
                <TouchableOpacity
              style={styles.qrButton}
              /*onPress={() => navigation.navigate('')}*/
              activeOpacity={0.5}>
              <Image
                source={require('./assets/menu.png')}
                style={styles.navLogoMenu}
              />
            </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#007A5A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '600',
                frotSize: 20,
              },
              headerBackImageSource: require('./assets/back.png'),
            }}
          />
          <Stack.Screen
            name="Register3"
            component={Register3}
            options={{
              title: '',
              headerRight: () => (
                <TouchableOpacity
              style={styles.qrButton}
              /*onPress={() => navigation.navigate('')}*/
              activeOpacity={0.5}>
              <Image
                source={require('./assets/menu.png')}
                style={styles.navLogoMenu}
              />
            </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#007A5A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '600',
                frotSize: 20,
              },
              headerBackImageSource: require('./assets/back.png'),
            }}
          />
          <Stack.Screen
            name="RegisterSuccess"
            component={RegisterSuccess}
            options={{
              title: '',
              headerRight: () => (
                <TouchableOpacity
              style={styles.qrButton}
              /*onPress={() => navigation.navigate('')}*/
              activeOpacity={0.5}>
              <Image
                source={require('./assets/menu.png')}
                style={styles.navLogoMenu}
              />
            </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#007A5A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '600',
                frotSize: 20,
              },
              headerBackImageSource: require('./assets/back.png'),
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: '',
              headerRight: () => (
                <TouchableOpacity
                  style={styles.qrButton}
                  /*onPress={() => navigation.navigate('')}*/
                  activeOpacity={0.5}>
                  <Image
                    source={require('./assets/menu.png')}
                    style={styles.navLogoMenu}
                  />
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#007A5A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '600',
                fontSize: 20,
              },
              headerBackImageSource: require('./assets/back.png'),              
            }}
          />
          <Stack.Screen
            name="LoginAsCustomer"
            component={LoginAsCustomer}
            options={{
              title: '',
              headerRight: () => (
                <TouchableOpacity
                  style={styles.qrButton}
                  /*onPress={() => navigation.navigate('')}*/
                  activeOpacity={0.5}>
                  <Image
                    source={require('./assets/menu.png')}
                    style={styles.navLogoMenu}
                  />
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#007A5A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '600',
                fontSize: 20,
              },
              headerBackImageSource: require('./assets/back.png'),              
            }}
          />
          <Stack.Screen
            name="LoginAsManager"
            component={LoginAsManager}
            options={{
              title: '',
              headerRight: () => (
                <TouchableOpacity
                  style={styles.qrButton}
                  /*onPress={() => navigation.navigate('')}*/
                  activeOpacity={0.5}>
                  <Image
                    source={require('./assets/menu.png')}
                    style={styles.navLogoMenu}
                  />
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#007A5A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '600',
                fontSize: 20,
              },
              headerBackImageSource: require('./assets/back.png'),              
            }}
          />
          <Stack.Screen
            name="LoginAsStaff"
            component={LoginAsStaff}
            options={{
              title: '',
              headerRight: () => (
                <TouchableOpacity
                  style={styles.qrButton}
                  /*onPress={() => navigation.navigate('')}*/
                  activeOpacity={0.5}>
                  <Image
                    source={require('./assets/menu.png')}
                    style={styles.navLogoMenu}
                  />
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#007A5A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '600',
                fontSize: 20,
              },
              headerBackImageSource: require('./assets/back.png'),              
            }}
          />          
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navLogoMenu: {
    position: 'absolute',
    right: 5,
    top: -15,
    width: 33,
    height: 33,
  },
});