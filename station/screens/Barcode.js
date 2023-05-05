import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "@rneui/themed";
import { BarCodeScanner } from 'expo-barcode-scanner';

function BarcodeData({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(false);

  const [returnData, setReturnData] = useState(0);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const Regex = /[0-9]{4}/;
    if (Regex.test(data)) {
      setScannedData(true)
      alert(`Xe ${data} được quét thành công`);
      setReturnData(data)
      navigation.navigate({
        name: 'RentingBike',
        params: { BikeID: data  },
      })
    } else {
      setScannedData(false)
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      /*alert('Mã QR không hợp lệ. Vui lòng quét mã QR được đặt trên xe.');*/
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Quét lại mã QR'} onPress={() => setScanned(false)} />}
      {scanned && scannedData && <Button title={'Hoàn tất'} color="#00AF66" onPress={() => navigation.navigate({
            name: 'rentingBike',
            params: { BikeID: returnData * 1 },
          })} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }
});

export { BarcodeData };