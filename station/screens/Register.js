
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image , TouchableOpacity , SafeAreaView , TextInput , Button } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Checkbox from 'expo-checkbox';

const Stack = createNativeStackNavigator();

function Register1({ navigation }) {
  const [name, nameChange] = React.useState('');
  const [email, emailChange] = React.useState('');
  const [phone, phoneChange] = React.useState('');
  const [address, addressChange] = React.useState('');
  const [idnumber, idnumberChange] = React.useState('');
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
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
          source={require('../assets/recentStep1.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../assets/nextStep2.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../assets/nextStep3.png')}
        />
      </View>
    </View>
  );
}

function Register2({ navigation }) {
  const [userName, userNameChange] = React.useState('');
  const [password, passwordChange] = React.useState('');
  const [repassword, repasswordChange] = React.useState('');

  return (
    <View style={styles.container}>
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
          source={require('../assets/nextStep1.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../assets/recentStep2.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../assets/nextStep3.png')}
        />
      </View>
    </View>
  );
}

function Register3({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng ký</Text>
        <Text style={styles.subtitle}>Phương thức thanh toán</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.payment}>
          <TouchableOpacity style={styles.navigator} activeOpacity={0.5}>
            <Image
              style={styles.paymentLogo}
              source={require('../assets/momo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigator} activeOpacity={0.5}>
            <Image
              style={styles.paymentLogo}
              source={require('../assets/visa.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.payment}>
          <TouchableOpacity style={styles.navigator} activeOpacity={0.5}>
            <Image
              style={styles.paymentLogo}
              source={require('../assets/bank.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigator} activeOpacity={0.5}>
            <Image
              style={styles.paymentLogo}
              source={require('../assets/zalo.png')}
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
          source={require('../assets/nextStep1.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../assets/nextStep2.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../assets/recentStep3.png')}
        />
      </View>
    </View>
  );
}

function RegisterSuccess({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          style={styles.paymentLogo}
          source={require('../assets/success.png')}
        />
        <Text style={styles.registSuccess}>Đăng ký thành công</Text>
      </View>

      <View style={styles.loginNow}>
        <Button
          title="Đăng nhập ngay"
          onPress={() => navigation.navigate('Login')}
          radius="30"
          color="#00AF66"
          titleStyle={{
            paddingVertical: 4,
          }}
          containerStyle={{ width: '100%' }}
        />
      </View>
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
    flex: 6,
    flexDirection: 'column',
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
    margin: 15,
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
    right: 5,
    top: -15,
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
});

export { Register1 , Register2 , Register3 , RegisterSuccess };
