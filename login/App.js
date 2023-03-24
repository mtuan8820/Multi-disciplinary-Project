import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Checkbox from 'expo-checkbox';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login1"
            component={Login1}
            options={{ title: 'Login1' }}
          />
          <Stack.Screen
            name="Login2_1"
            component={Login2_1}
            options={{ title: 'Login2_1' }}
          />
          <Stack.Screen
            name="Login2_2"
            component={Login2_2}
            options={{ title: 'Login2_2' }}
          />
          <Stack.Screen
            name="Login2_3"
            component={Login2_3}
            options={{ title: 'Login2_3' }}
          />
          <Stack.Screen
            name="Register1"
            component={Register1}
            options={{ title: 'Register1' }}
          />
          <Stack.Screen
            name="Register2"
            component={Register2}
            options={{ title: 'Register2' }}
          />
          <Stack.Screen
            name="Register3"
            component={Register3}
            options={{ title: 'Register3' }}
          />
          <Stack.Screen
            name="RegisterSuccess"
            component={RegisterSuccess}
            options={{ title: 'RegisterSuccess' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function Login1({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <Image style={styles.navLogoBack} source={require('./assets/home.png')} />
        <Image style={styles.navLogoMenu} source={require('./assets/menu.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.roleAsk}>Bạn là:                                   </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonRoleStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Login2_1')}>
          <Image
            source={require('./assets/customer.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Khách hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRoleStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Login2_2')}>
          <Image
            source={require('./assets/manager.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Quản lý</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRoleStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Login2_3')}>
          <Image
            source={require('./assets/staff.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Nhân viên bảo dưỡng</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function Login2_1({navigation}){
  const [username, usernameChange] = React.useState('');
  const [password, passwordChange] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Login1')}>
          <Image style={styles.navLogoBack} source={require('./assets/back.png')} />
        </TouchableOpacity>
        <Image style={styles.navLogoMenu} source={require('./assets/menu.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Image style={styles.userLogo} source={require('./assets/customer.png')} />
      </View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={usernameChange}
          value={username}
          placeholder="Tên đăng nhập"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          onChangeText={passwordChange}
          value={password}
          secureTextEntry = {true}
          placeholder="Mật khẩu"
          placeholderTextColor="white"
        />
      </SafeAreaView>
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('')}>
          <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Register1')}>
          <Text style={styles.signUp}>Chưa có tài khoản? Đăng ký ngay!</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
        <TouchableOpacity
          style={styles.buttonLoginStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('')}>
          <Text
            style={{textAlignVertical:
            "center",textAlign: "center",color:'#fff', fontSize: 20, marginLeft: 100}}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function Login2_2({navigation}){
  const [username, usernameChange] = React.useState('');
  const [password, passwordChange] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Login1')}>
          <Image style={styles.navLogoBack} source={require('./assets/back.png')} />
        </TouchableOpacity>
        <Image style={styles.navLogoMenu} source={require('./assets/menu.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Image style={styles.userLogo} source={require('./assets/manager.png')} />
      </View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={usernameChange}
          value={username}
          placeholder="Tên đăng nhập"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          onChangeText={passwordChange}
          value={password}
          secureTextEntry = {true}
          placeholder="Mật khẩu"
          placeholderTextColor="white"
        />
      </SafeAreaView>
      <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
        <TouchableOpacity
          style={styles.buttonLoginStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('')}>
          <Text
            style={{textAlignVertical:
            "center",textAlign: "center",color:'#fff', fontSize: 20, marginLeft: 100}}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function Login2_3({navigation}){
  const [username, usernameChange] = React.useState('');
  const [password, passwordChange] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Login1')}>
          <Image style={styles.navLogoBack} source={require('./assets/back.png')} />
        </TouchableOpacity>
        <Image style={styles.navLogoMenu} source={require('./assets/menu.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Image style={styles.userLogo} source={require('./assets/staff.png')} />
      </View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={usernameChange}
          value={username}
          placeholder="Tên đăng nhập"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          onChangeText={passwordChange}
          value={password}
          secureTextEntry = {true}
          placeholder="Mật khẩu"
          placeholderTextColor="white"
        />
      </SafeAreaView>
      <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
        <TouchableOpacity
          style={styles.buttonLoginStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('')}>
          <Text
            style={{textAlignVertical:
            "center",textAlign: "center",color:'#fff', fontSize: 20, marginLeft: 100}}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function Register1({ navigation }) {
  const [name, nameChange] = React.useState('');
  const [email, emailChange] = React.useState('');
  const [phone, phoneChange] = React.useState('');
  const [address, addressChange] = React.useState('');
  const [idnumber, idnumberChange] = React.useState('');
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <Image style={styles.navLogoBack} source={require('./assets/back.png')} />
        <Image style={styles.navLogoMenu} source={require('./assets/menu.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng ký</Text>
        <Text style={styles.subtitle}>Thông tin cá nhân</Text>
      </View>
      <View style={styles.main}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={nameChange}
            value={name}
            placeholder="Họ và tên"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            onChangeText={emailChange}
            value={email}
            placeholder="Email"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            onChangeText={phoneChange}
            value={phone}
            placeholder="Số điện thoại"
            placeholderTextColor="white"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={addressChange}
            value={address}
            placeholder="Địa chỉ"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            onChangeText={idnumberChange}
            value={idnumber}
            placeholder="CCCD/CMND"
            placeholderTextColor="white"
            keyboardType="numeric"
          />
        </SafeAreaView>
        <View style={styles.checkbox}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#00AF66' : undefined}
          />
          <Text style={styles.checkbox}>
            Tôi đã đọc và đồng ý với điều khoản bảo mật
          </Text>
        </View>

        <Button
          title="Tiếp theo"
          onPress={() => navigation.navigate('Register2')}
          radius="30"
          color="#00AF66"
        />
      </View>

      <View style={styles.stepIndicator}>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/recentStep1.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('./assets/nextStep2.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('./assets/nextStep3.png')}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function Register2({ navigation }) {
  const [userName, userNameChange] = React.useState('');
  const [password, passwordChange] = React.useState('');
  const [repassword, repasswordChange] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <TouchableOpacity
          style={styles.navigator}
          onPress={() => navigation.navigate('Register1')}
          activeOpacity={0.5}>
          <Image
            source={require('./assets/back.png')}
            style={styles.navLogoBack}
          />
        </TouchableOpacity>
        <Image style={styles.navLogoMenu} source={require('./assets/menu.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng ký</Text>
        <Text style={styles.subtitle}>Thông tin tài khoản</Text>
      </View>
      <View style={styles.main}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={userNameChange}
            value={userName}
            placeholder="Tên đăng nhập"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            onChangeText={passwordChange}
            value={password}
            placeholder="Mật khẩu"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            onChangeText={repasswordChange}
            value={repassword}
            placeholder="Nhập lai mật khẩu"
            placeholderTextColor="white"
          />
        </SafeAreaView>
        <Button
          title="Tiếp theo"
          onPress={() => navigation.navigate('Register3')}
          radius="30"
          color="#00AF66"
        />
      </View>

      <View style={styles.stepIndicator}>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/nextStep1.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('./assets/recentStep2.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('./assets/nextStep3.png')}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

function Register3({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <TouchableOpacity
          style={styles.navigator}
          onPress={() => navigation.navigate('Register2')}
          activeOpacity={0.5}>
          <Image
            source={require('./assets/back.png')}
            style={styles.navLogoBack}
          />
        </TouchableOpacity>
        <Image style={styles.navLogoMenu} source={require('./assets/menu.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng ký</Text>
        <Text style={styles.subtitle}>Phương thức thanh toán</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.payment}>
          <TouchableOpacity style={styles.navigator} activeOpacity={0.5}>
            <Image
              style={styles.paymentLogo}
              source={require('./assets/momo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigator} activeOpacity={0.5}>
            <Image
              style={styles.paymentLogo}
              source={require('./assets/visa.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.payment}>
          <TouchableOpacity style={styles.navigator} activeOpacity={0.5}>
            <Image
              style={styles.paymentLogo}
              source={require('./assets/bank.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigator} activeOpacity={0.5}>
            <Image
              style={styles.paymentLogo}
              source={require('./assets/zalo.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Button
            title="Tiếp theo"
            onPress={() => navigation.navigate('RegisterSuccess')}
            radius="30"
            color="#00AF66"
          />
        </View>
      </View>

      <View style={styles.stepIndicator}>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/nextStep1.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('./assets/nextStep2.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('./assets/recentStep3.png')}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function RegisterSuccess({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <TouchableOpacity
          style={styles.navigator}
          onPress={() => navigation.navigate('Register3')}
          activeOpacity={0.5}>
          <Image
            source={require('./assets/back.png')}
            style={styles.navLogoBack}
          />
        </TouchableOpacity>
        <Image style={styles.navLogoMenu} source={require('./assets/menu.png')} />
      </View>
      <View style={styles.main}>
        <Image
          style={styles.paymentLogo}
          source={require('./assets/success.png')}
        />
        <Text style={styles.registSuccess}>Đăng ký thành công</Text>
      </View>

      <View style={styles.loginNow}>
        <Button
          title="Đăng nhập ngay"
          radius="30"
          color="#00AF66"
          titleStyle={{
            paddingVertical: 4,
          }}
          containerStyle={{ width: '100%' }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  navigator: {
    height: 50,
    alignItems: 'center',
    backgroundColor: '#007A5A',
    flexDirection: 'row',
    width: '100%',
  },
  header: {
    flex: 1,
    alignItems: 'center',
  },
  main: {
    flex: 5,
    flexDirection: 'col',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepIndicator: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 40,
    lineHeight: 60,
    color: '#007A5A',
  },
  subtitle: {
    fontSize: 30,
    lineHeight: 40,
    color: '#007A5A',
  },
  input: {
    fontSize: 20,
    height: 50,
    width: 300,
    margin: 25,
    padding: 10,
    borderRadius: 7,
    backgroundColor: '#00AF66',
    color: 'white',
  },
  checkbox: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#007A5A',
  },
  tinyLogo: {
    width: 65,
    height: 65,
  },
  navLogoMenu: {
    position: 'absolute',
    right: 10,
    width: 33,
    height: 33,
  },
  navLogoBack: {
    position: 'relative',
    left: 10,
    width: 33,
    height: 33,
  },
  paymentLogo: {
    width: 120,
    height: 120,
  },
  payment: {
    flexDirection: 'row',
  },
  registSuccess: {
    fontSize: 30,
    color: '#007A5A',
  },
  loginNow: {
    width: 170,
    borderRadius: 15,
    backgroundColor: '#00AF66',
  },
  logo:{
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  roleAsk: {
    fontSize: 20,
    lineHeight: 220,
    color: '#007A5A',
    marginLeft: 0,
  },
    buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: 20
  },
  buttonRoleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00AF66',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 250,
    borderRadius: 10,
    margin: 15,
  },
  userLogo: {
    height: 100,
    width: 100,
    resizeMode: 'auto',
    borderRadius: 100/2
  },
  forgotPassword: {
    fontSize: 15,
    color: '#007A5A',
    marginLeft: 195,
  },
  signUp: {
    fontSize: 15,
    color: '#007A5A',
    marginLeft: 80,
  },
  buttonLoginStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00AF66',
    borderColor: '#fff',
    height: 50,
    width: 300,
    borderRadius: 10,
  },
});

export default App;
