```javascript
import * as React from 'react';
import { Camera, BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);
  const [barcodeData, setBarcodeData] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (data && typeof data === 'string' && data.length > 0) {
      setScanned(true);
      setBarcodeData(data);
    } else {
      console.warn('Invalid or empty barcode data received:', data);
    }
  };

  if (hasPermission === null) {
    return <View/>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>
      )}
      {barcodeData && (
        <Text>Barcode Data: {barcodeData}</Text>
      )}
    </View>
  );
}
```