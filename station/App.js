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
import { getBikeList , GetBikeID , RentingBike , OnRentingTime , Home } from "./screens/Renting";
import { Register1 , Register2 , Register3 , RegisterSuccess } from "./screens/Register";
import { LoginAsCustomer } from "./screens/Login"
import { BarcodeData } from "./screens/Barcode"

import { Provider as StoreProvider } from "react-redux";
import store from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {  
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginAsCustomer">
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
            name="GetBikeID"
            initialParams={{ bikeID: 1 }}
            component={GetBikeID}
            options={{
              title: 'Thuê xe',
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
            name="BarcodeData"
            component={BarcodeData}
            options={{
              title: 'Quét mã',
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
            name="RentingBike"
            component={RentingBike}
            initialParams={{ bikeID: 1 }}
            options={{
              title: 'Thanh toán',
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
            name="OnRentingTime"
            component={OnRentingTime}
            initialParams={{ rentingTime: 1, total: 10000 }}
            options={{
              title: 'Xác nhận thuê xe',
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
            name="Home"
            component={Home}
            initialParams={{ rentingTime: 1, total: 10000 }}
            options={{
              title: 'Trang chủ',
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
    </StoreProvider>
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