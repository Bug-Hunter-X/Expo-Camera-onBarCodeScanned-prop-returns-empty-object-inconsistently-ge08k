# Expo Camera onBarCodeScanned Empty Object Bug

This repository demonstrates a bug in Expo's Camera component where the `onBarCodeScanned` prop sometimes returns an empty object instead of the expected barcode data. The issue is intermittent and difficult to reproduce consistently.  The solution provided attempts to mitigate this by adding more robust error handling and checking for valid barcode data.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Point the camera at a barcode.  Observe that sometimes the barcode is detected, but the callback provides an empty object.  This behavior is inconsistent. 

## Solution

The solution file (`bugSolution.js`) includes additional checks to handle the inconsistent return value of `onBarCodeScanned`.  It verifies that the returned data contains the expected properties before processing it. This solution doesn't eliminate the root cause but prevents the app from crashing or behaving unexpectedly due to empty object responses.