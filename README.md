# usbenc
The encryptor by any USB device. 

### Warning!!!
It may be vulnerable from brute force attack and dictionary attack. I do not guarantee safety.

### Requirements
* Ubuntu 20.10
* Node.js
* libudev-dev
* build-essential

### Usage
**install**
```bash
npm install -g TakutoYoshikai/usbenc
```

**encrypt**
```bash
usbenc encrypt <FILE>
# insert a USB device.
```

**decrypt**
```bash
usbenc decrypt <ENCRYPTED FILE>
# insert a USB device.
```

### License
MIT License
