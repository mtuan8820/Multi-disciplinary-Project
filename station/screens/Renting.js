
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image , TouchableOpacity , SafeAreaView , TextInput , Button } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/auth";

const Stack = createNativeStackNavigator();

const Home = ({ navigation }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
const onLogout = () => {
    dispatch(logout()).then((response) => {
      if (response.status === "success") {
        navigation.replace("LoginAsCustomer");
      }
    });
  };
return (
    <View style={styles.container}>
      <Text style={styles.boldBigBlackText}>Xin chào {state.user}</Text>
      
      <View style={styles.horizonContainer}>
        <Button
          title="Thuê xe"
          radius="30"
          color="#00AF66"
          onPress={() => navigation.navigate('GetBikeID')}
          titleStyle={{
            paddingVertical: 1,
          }}
          containerStyle={{ width: '80%'}}
        />
      </View>      

      <View style={styles.horizonContainer}>
        <Button
          title="Đăng xuất"
          radius="30"
          color="#00AF66"
          onPress={() => onLogout()}
          titleStyle={{
            paddingVertical: 1,
          }}
          containerStyle={{ width: '80%'}}
        />
      </View>
    </View>
  );
};

function getBikeList({ navigation }){
    return (
        <View style={styles.container}>
          <Text style={styles.normalBlackText}>Trạm đại học Bách Khoa cơ sở II - Đang hoạt động </Text>

          <View style={styles.bikeListNav}>
            <View style={styles.bikeListNavButtonField}>
              <TouchableOpacity
                onPress={() => navigation.navigate('GetBikeID')}
                activeOpacity={1}>
                <Image
                  source={require('../assets/leftarrow.png')}
                  style={styles.bikeListNavButton}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.bikeListNavCard}>
              <Text style={styles.boldSmallGreenText}>Xe đạp thể thao</Text>
              <Image
                source={require('../assets/bike.png')}
                style={styles.productImageSmall}
              />
              <Text style={styles.boldSmallGreenText}>10000Đ/1h</Text>
              <Text style={styles.boldSmallGreenText}>Còn xe</Text>
              <Button
                title="Thuê xe"
                radius="30"
                color="rgba(0, 122, 90, 1)"
                onPress={() => navigation.navigate('GetBikeID')}
                titleStyle={{
                  paddingVertical: 4,
                }}
                containerStyle={{ width: '50%' }}
              />                
            </View>

            <View style={styles.bikeListNavButtonField}>
              <TouchableOpacity
                onPress={() => navigation.navigate('GetBikeID')}
                activeOpacity={1}>
                <Image
                  source={require('../assets/rightarrow.png')}
                  style={styles.bikeListNavButton}
                />
              </TouchableOpacity>                
            </View>
          </View>
        </View>
    );
}

function GetBikeID({ route , navigation }){
    const { BikeID } = route.params;
    const [bikeId, bikeIdChange] = React.useState(BikeID);

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const onLogout = () => {
      dispatch(logout()).then((response) => {
        if (response.status === "success") {
          navigation.replace("LoginAsCustomer");
        }
      });
    };

    return (
        <View style={styles.container}>
          <View style={styles.bikeDetailInfo}>
            <Text style={styles.normalGreenText}>Trạm đại học Bách Khoa cơ sở II </Text>
            <Text style={styles.boldBigGreenText}>Xe đạp thể thao </Text>
            <Image
              style={styles.productImage}
              source={require('../assets/bike.png')}
            />
            <Text style={styles.boldSmallGreenText}>10000Đ/1h</Text>
          </View>

          <View style={styles.qr}>
            <Text style={styles.boldBigBlackText}>Quét mã QR trên xe</Text>
            <TouchableOpacity
              style={styles.qrButton}
              onPress={() => navigation.navigate('BarcodeData')}
              activeOpacity={0.5}>
              <Image
                source={require('../assets/qr.png')}
                style={styles.qrButton}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.typeField}>
            <Text style={styles.boldBigBlackText}>Hoặc nhập Id của xe</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={bikeIdChange}
                value={bikeId}
                placeholder="ID Xe"
                placeholderTextColor="white"
              />
            </SafeAreaView>
            <Button
              title="Xác nhận"
              radius="30"
              color="#00AF66"
              onPress={() => {
                navigation.navigate('RentingBike', {
                  BikeID: bikeId,
                });
              }}

              titleStyle={{
                paddingVertical: 1,
              }}
              containerStyle={{ width: '40%'}}
            />
          </View>          
        </View>
    );
}

function RentingBike({ route , navigation }){
    const { BikeID } = route.params;
    const [rentingTime , rentingTimeChange] = React.useState(0);

    return (
        <View style={styles.container}>
          <View style={styles.bikeDetailInfo}>
            <Text style={styles.normalGreenText}>Trạm đại học Bách Khoa cơ sở II </Text>
            <Text style={styles.boldBigGreenText}>Xe đạp thể thao </Text>
            <Image
              style={styles.productImage}
              source={require('../assets/bike.png')}
            />
            <Text style={styles.boldSmallGreenText}>10000Đ/1h</Text>
            <Text style={styles.boldSmallGreenText}>ID Xe: {JSON.stringify(BikeID)} </Text>
          </View>

          <View style={styles.horizonContainer}>
            <Text style={styles.boldBigBlackText}>Số giờ thuê: </Text>
            <SafeAreaView>
              <TextInput
                style={styles.smallInput}
                onChangeText={rentingTimeChange}
                value={rentingTime}
                placeholder="ID Xe"
                placeholderTextColor="white"
                keyboardType="numeric"
              />
            </SafeAreaView>
            <Text style={styles.boldBigBlackText}>giờ</Text>
          </View>

          <View style={styles.horizonContainer}>
            <Text style={styles.boldBigBlackText}>Chọn phương thức thanh toán</Text>
          </View>

          <View style={styles.horizonContainer}>
            <TouchableOpacity
              style={styles.qrButton}
              /*onPress={() => navigation.navigate('BarcodeData')}*/
              activeOpacity={0.5}>
              <Image
                source={require('../assets/zalo.png')}
                style={styles.qrButton}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.qrButton}
              /*onPress={() => navigation.navigate('BarcodeData')}*/
              activeOpacity={0.5}>
              <Image
                source={require('../assets/bank.png')}
                style={styles.qrButton}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.qrButton}
              /*onPress={() => navigation.navigate('BarcodeData')}*/
              activeOpacity={0.5}>
              <Image
                source={require('../assets/visa.png')}
                style={styles.qrButton}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.qrButton}
              /*onPress={() => navigation.navigate('BarcodeData')}*/
              activeOpacity={0.5}>
              <Image
                source={require('../assets/momo.png')}
                style={styles.qrButton}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.horizonContainer}>
            <Text style={styles.boldBigBlackText}>Thành tiền: </Text>
            <SafeAreaView>
              <TextInput
                style={styles.smallInput}
                onChangeText={rentingTimeChange}
                value={rentingTime}
                placeholder="Total"
                placeholderTextColor="white"
              />
            </SafeAreaView>
            <Text style={styles.boldBigBlackText}>0000 VND</Text>
          </View>

          <View style={styles.horizonContainer}>
            <Button
              title="Hủy"
              radius="30"
              color="rgb(255, 99, 71)"
              onPress = {() => navigation.pop(2)}
              titleStyle={{
                paddingVertical: 1,
              }}
              containerStyle={{ width: '40%'}}
            />
            <Button
              title="Xác nhận"
              radius="30"
              color="#00AF66"
              onPress={() => {
                navigation.navigate('OnRentingTime', {
                  BikeID: BikeID,
                  rentingTime: rentingTime * 1,
                  total: rentingTime * 10000,
                });
              }}
              titleStyle={{
                paddingVertical: 1,
              }}
              containerStyle={{ width: '40%'}}
            />
          </View>          
        </View>
    );
}

function OnRentingTime({ route , navigation }){
    const { BikeID } = route.params;
    const { rentingTime } = route.params;
    const { total } = route.params;

    const onSend = () => {
      fetch('http://192.168.1.14:3002/products', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'customer_id': '123456789056',
          'bike_id': BikeID,
          'total_time': rentingTime,
          'revenue': total,
        }),
      });
      alert('Thuê xe thành công');
      navigation.navigate({
        name: 'Home',
      })
    }

    return (
        <View style={styles.container}>
          <View style={styles.bikeDetailInfo}>
            <Text style={styles.normalGreenText}>Trạm đại học Bách Khoa cơ sở II </Text>
            <Text style={styles.boldBigGreenText}>Xe đạp thể thao </Text>
            <Image
              style={styles.productImage}
              source={require('../assets/bike.png')}
            />
            <Text style={styles.boldSmallGreenText}>10000Đ/1h</Text>
            <Text style={styles.boldSmallGreenText}>ID Xe: {JSON.stringify(BikeID)} </Text>
          </View>

          <View style={styles.horizonContainer}>
            <Text style={styles.boldBigBlackText}>Tổng số giờ thuê: {JSON.stringify(rentingTime)} giờ</Text>
          </View>

          <View style={styles.horizonContainer}>
            <Text style={styles.boldBigBlackText}>Số tiền phải trả: {JSON.stringify(total)} VND</Text>
          </View>

          <View style={styles.horizonContainer}>
            <Button
              title="Xác nhận thuê xe"
              radius="30"
              color="#00AF66"
              onPress = {() => onSend()}
              titleStyle={{
                paddingVertical: 1,
              }}
              containerStyle={{ width: '40%'}}
            />
          </View>          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    horizonContainer: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',      
    },
    bikeDetailInfo: {
      width: '100%',
      backgroundColor: 'rgba(0, 175, 102, 0.2)',
      flex: 4,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    productImage: {
      width: 280,
      height: 160,
    },
    normalGreenText: {
      fontSize: 14,
      color: 'rgba(0, 122, 90, 0.8)',
    },
    boldBigGreenText: {
      fontSize: 20,
      color: 'rgba(0, 122, 90, 0.8)',
      fontWeight: '800',
    },
    boldSmallGreenText: {
      fontSize: 14,
      color: 'rgba(0, 122, 90, 0.8)',
      fontWeight: '800',
      lineHeight: 50,
    },
    qr: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    normalBlackText: {
      fontSize: 14,
      color: '#000000',
    },
    boldBigBlackText: {
      fontSize: 20,
      color: '#000000',
      fontWeight: '600',
    },
    qrButton: {
      width: 60,
      height: 60,
    },
    typeField: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      fontSize: 20,
      height: 50,
      width: 300,
      margin: 25,
      padding: 10,
      backgroundColor: '#FFFFFF',
      color: '000000',
      borderWidth: 1,
    },
    smallInput: {
      fontSize: 20,
      height: 50,
      width: 50,
      margin: 25,
      padding: 10,
      backgroundColor: '#FFFFFF',
      color: '000000',
      borderWidth: 1,
    },
    longInput: {
      fontSize: 20,
      height: 50,
      width: 120,
      margin: 25,
      padding: 10,
      backgroundColor: '#FFFFFF',
      color: '000000',
      borderWidth: 1,
    },
    bikeListNav: {
      width: '100%',
      flex: 5,
      flexDirection: 'row',
    }, 
    bikeListNavButtonField: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    bikeListNavButton: {
      height: 25,
      width: 25,
    },
    bikeListNavCard: {
      flex: 3,
      backgroundColor: 'rgba(0, 175, 102, 0.25)',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    productImageSmall: {
      width: 140,
      height: 80,
    }
})

export { getBikeList , GetBikeID , RentingBike , OnRentingTime , Home };