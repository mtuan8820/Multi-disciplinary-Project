import React from 'react';
import { useState , useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";

function LoginAsCustomer({navigation}){
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  
  const onLogin = () => {
      let user = {
        username: username,
        password: password,
      };
  dispatch(login(user))
        .then((response) => {
          if (response.status == "success") {
            navigation.replace("Home");
          }
        })
        .catch((error) => {
          navigation.replace("LoginAsCustomer");
        });
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>

      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Tên đăng nhập"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
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
        <Button
          title="Đăng nhập"
          onPress={() => onLogin()}
          radius="30"
          color="#00AF66"
        />     
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

export { LoginAsCustomer };
