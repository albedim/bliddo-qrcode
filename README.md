> ⚠️ **Disclaimer**
>
> This repository is no longer maintained, as **@bliddo** is no longer an active company.

# What is Bliddo?
Track the traffic and usage of your QR codes.
Unlock the power of instant analytics with our innovative QR code creation and tracking platform. 
We empower businesses and individuals to generate custom QR codes and gain real-time insights into every scan with our clean dashboard.

# How can I integrate it with my code?
If you want to create qr codes in your code that you can track, bliddo is the perfect choice.
#### 1. Go to [bliddo.com](https://bliddo.com) and create a qr code.
#### 2. Go to your dashboard and pick the qr code you want to integrate with your code.
#### 3. Copy its dev key.
#### 4. Install our package in your project.
```console
bliddo@root:~$ npm i --save bliddo-qrcode
```
#### 4. Implement the component from our library and paste the dev key inside.
```typescript
import { BliddoQRCode } from 'bliddo-qrcode';

const App = () => {
  return (
    <BliddoQRCode qrcodeDevKey='DEV_KEY'/>
  );
}
```

#### 4. Go to your dashboard at [bliddo.com](https://bliddo.com) and track your qr code.


