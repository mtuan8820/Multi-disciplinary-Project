
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image , TouchableOpacity , SafeAreaView , TextInput , Button } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function getBikeList({ navigation }){
    return (
        <View style={styles.container}>
          <Text style={styles.normalBlackText}>Trạm đại học Bách Khoa cơ sở II - Đang hoạt động </Text>

          <View style={styles.bikeListNav}>
            <View style={styles.bikeListNavButtonField}>
              <TouchableOpacity
                onPress={() => navigation.navigate('getBikeID')}
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
                onPress={() => navigation.navigate('getBikeID')}
                titleStyle={{
                  paddingVertical: 4,
                }}
                containerStyle={{ width: '50%' }}
              />                
            </View>

            <View style={styles.bikeListNavButtonField}>
              <TouchableOpacity
                onPress={() => navigation.navigate('getBikeID')}
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

function getBikeID({ navigation }){
    const [bikeId, bikeIdChange] = React.useState('');

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
              /*onPress={() => navigation.navigate('')}*/
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

export default { getBikeList , getBikeID };