This bug occurs when using the Expo `Camera` component with the `onBarCodeScanned` prop.  The prop provides the barcode data but sometimes returns an empty object {} instead of the expected barcode data. This happens inconsistently, making debugging challenging. It's more likely to happen under high load or when the camera is frequently scanning barcodes. The barcode itself is usually readable on the screen.