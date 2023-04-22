import React from 'react';
import { useState } from 'react';
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

const Stack = createNativeStackNavigator();

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>

      <View style={styles.main}>
        <Text style={styles.roleAsk}>Bạn là:</Text>
      </View>

      <View style={styles.main}>
        <TouchableOpacity
          style={styles.buttonRoleStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('LoginAsCustomer')}>
          <Image
            source={require('../assets/customer.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Khách hàng</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRoleStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('LoginAsManager')}>
          <Image
            source={require('../assets/manager.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Quản lý</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRoleStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('LoginAsStaff')}>
          <Image
            source={require('../assets/staff.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Nhân viên bảo dưỡng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function LoginAsCustomer({navigation}){
  const [username, usernameChange] = React.useState('');
  const [password, passwordChange] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Image style={styles.userLogo} source={require('../assets/customer.png')} />
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
  );
}

function LoginAsManager({navigation}){
  const [username, usernameChange] = React.useState('');
  const [password, passwordChange] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Image style={styles.userLogo} source={require('../assets/manager.png')} />
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
  );
}

function LoginAsStaff({navigation}){
  const [username, usernameChange] = React.useState('');
  const [password, passwordChange] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Image style={styles.userLogo} source={require('../assets/staff.png')} />
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
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
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
  navLogoMenu: {
    position: 'absolute',
    right: 5,
    top: -15,
    width: 33,
    height: 33,
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

export { Login , LoginAsCustomer , LoginAsManager , LoginAsStaff};
